import {AIResponseFormat, prepareInstructions}  from "constants/index";
import { useState, type FormEvent } from "react";
import { useNavigate } from "react-router";
import Button from "~/components/base/Button";
import FileUploader from "~/components/base/FileUploader";
import Navbar from "~/components/Navbar";
import { convertPdfToImage } from "~/lib/pdf2img";
import { usePuterStore } from "~/lib/puter";
import { generateUUID } from "~/lib/utils";

function upload() {
  const { auth, isLoading, fs, ai, kv } = usePuterStore();
  const navigate = useNavigate();
  const [isProcessing, setIsProcessing] = useState(false);
  const [statusText, setStatusText] = useState("");
  const [file, setFile] = useState<File | null>(null);

  const handleFileSelect = (file: File | null) => {
    setFile(file);
  };

  const handleAnalyse = async ({
    companyName,
    jobTitle,
    jobDescription,
  }: {
    companyName: string;
    jobTitle: string;
    jobDescription: string;
  }) => {
    setIsProcessing(true);
    setStatusText("uploading the file...");
    const uploadFile = await fs.upload([file!]);
    if (!uploadFile) return setStatusText("Error: failed to upload file");
    setStatusText("Converting to image ....");
    const imageFile = await convertPdfToImage(file!);
    if (!imageFile.file)
      return setStatusText("Error: failed to convert PDF to image");
    setStatusText("Uploading the image...");
    const uploadImage = await fs.upload([imageFile.file]);
    if (!uploadImage) return setStatusText("Error: failed to upload file");

    setStatusText("Preparing data...");
    const uuid = generateUUID();

    const data = {
      id: uuid,
      resumePath: uploadFile.path,
      imagePath: uploadImage.path,
      companyName,
      jobTitle,
      jobDescription,
      feedback: "",
    };

    await kv.set(`resume:${uuid}`, JSON.stringify(data));
    setStatusText("Analyzing....");
    console.log( 'feedback test 1');

    const feedback = await ai.feedback(
      uploadFile.path,
      prepareInstructions({ jobTitle, jobDescription, AIResponseFormat})
    );

    console.log(feedback, 'feedback test 2');
    
    if (!feedback) return setStatusText("Error: failed to analyze resume");
    const feedbackText = typeof feedback.message.content === "string" ? feedback.message.content : feedback.message.content[0].text;
    console.log(feedback, feedbackText, 'feedback test 3');

    data.feedback = JSON.parse(feedbackText)
    await kv.set(`resume:${uuid}`, JSON.stringify(data))
    setStatusText('Analysis complete, redirecting ....')
    console.log(data, 'data');
    navigate(`/resume/${uuid}`)
    
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget.closest("form");
    if (!form) return;
    const formData = new FormData(form);
    const companyName = formData.get("company-name") as string;
    const jobTitle = formData.get("job-title") as string;
    const jobDescription = formData.get("job-description") as string;
    if (!file) return;
    handleAnalyse({ companyName, jobTitle, jobDescription });
  };

  const form = [
    {
      label: "Company Name",
      htmlfor: "company-name",
      name: "company-name",
      type: "input",
    },
    {
      label: "Job Title",
      htmlfor: "job-title",
      name: "job-title",
      type: "input",
    },
    {
      label: "Job Description",
      htmlfor: "job-description",
      name: "job-description",
      type: "textarea",
    },
  ];

  return (
    <main className="bg-[url('/images/bg.jpg')] bg-cover min-h-full h-full">
      <div className="mx-auto container  w-11/12 space-y-16 md:w-6/12 py-10">
        {/* navbar */}
        <Navbar />

        {/* hero section */}
        <section className="text-center space-y-4">
          <h1 className="text-gradient">Smart feedback for your dream job</h1>
          {isProcessing ? (
            <>
              <h2>{statusText}</h2>
              <img src="/resume-scanner.gif" alt="" className="mx-auto h-96 " />
            </>
          ) : (
            <h2>Drop your resume for an ATS score and improvement tips</h2>
          )}
          {!isProcessing && (
            <form
              id="upload-form"
              onSubmit={handleSubmit}
              className="flex  flex-col gap-4 mt-8"
            >
              {form.map((item) => (
                <div>
                  {item.type == "input" ? (
                    <div className="flex flex-col gap-2 text-start">
                      <label
                        htmlFor={item.htmlfor}
                        className="text-sm text-gray-600"
                      >
                        {item.label}
                      </label>
                      <input
                        className="rounded-md outline-none p-2 bg-white shadow-md border border-gray-200 text-sm"
                        type="text"
                        name={item.name}
                        placeholder={item.label}
                        id={item.name}
                      />
                    </div>
                  ) : (
                    <div className="flex flex-col gap-2 text-start">
                      <label
                        htmlFor={item.htmlfor}
                        className="text-sm text-gray-600"
                      >
                        {item.label}
                      </label>
                      <textarea
                        className="rounded-md h-33 outline-none p-2 bg-white shadow-md border border-gray-200 text-sm"
                        name={item.name}
                        placeholder={item.label}
                        id={item.name}
                      />
                    </div>
                  )}
                </div>
              ))}

              <div className="flex flex-col text-start gap-1">
                <label htmlFor="uploader" className="text-sm text-gray-600">
                  Upload Resume
                </label>
                <FileUploader onFileSelect={handleFileSelect} />{" "}
              </div>
              <Button type="submit">Analyse Resume</Button>
            </form>
          )}
        </section>
      </div>
    </main>
  );
}

export default upload;
