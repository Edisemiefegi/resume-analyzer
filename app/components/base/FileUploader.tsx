import { useCallback} from "react";
import { useDropzone } from "react-dropzone";
import { formatSize } from "~/lib/utils";
import Button from "./Button";

interface FileUploaderProps {
  onFileSelect?: (file: File | null) => void;
}

function FileUploader({ onFileSelect }: FileUploaderProps) {
  const onDrop = useCallback(
    (acceptedFiles: File[]) => {
      const file = acceptedFiles[0] || null;
      onFileSelect?.(file);
    },
    [onFileSelect]
  );

  const maxFileSize = 20 * 1024 * 1024;

  const { getRootProps, getInputProps, isDragActive, acceptedFiles } =
    useDropzone({
      onDrop,
      multiple: false,
      accept: { "/application/pdf": [".pdf"] },
      maxSize: maxFileSize,
    });

  const file = acceptedFiles[0] || null;

  return (
    <div className="rounded-2xl bg-gray-200 px-3 py-2">
      <div {...getRootProps()}>
        <input {...getInputProps()} />
        <div className="space-y-3 text-center cursor-pointer ">
          {file ? (
            <div
              className="bg-white flex justify-between items-center px-4 py-2 rounded-lg"
              onClick={(e) => e.stopPropagation()}
            >
              <img src="/pdf.png" alt="" className="w-6 h-6" />

              <div>
                <p className="text-sm text-gray-500 font-medium truncate max-w-xs">
                  {file.name}
                </p>

                <p className="text-sm text-gray-500">{formatSize(file.size)}</p>
              </div>
<Button onClick={(e) => {onFileSelect?.(null)}} variant="text">
                  <i className="pi pi-times text-sm " ></i>
</Button>            </div>
          ) : (
            <div>
              <div className="mx-auto  w-full justify-center items-center flex">
                <i className="pi pi-exclamation-circle text-xl "></i>
              </div>{" "}
              <p className="text-lg text-gray-500">
                <span className="font-semibold ">Click to upload</span> or drag
                and drop
              </p>
              <p className="text-lg text-gray-500">
                PDF (max {formatSize(maxFileSize)} MB)
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default FileUploader;
