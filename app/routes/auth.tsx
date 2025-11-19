import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router";
import Button from "~/components/base/Button";
import Card from "~/components/base/Card";
import { usePuterStore } from "~/lib/puter";

export const meta = () => [
  { title: "ResumeIQ | Auth" },
  { name: "description", content: "Log into your account" },
];

const Auth = () => {
  const { isLoading, auth } = usePuterStore();
  const location = useLocation();
  const next = location.search.split("next=")[1];
  const navigate = useNavigate();
  useEffect(() => {
    if (auth.isAuthenticated) navigate(next);
  }, [auth.isAuthenticated, next]);

  

  return (
    <main className="bg-[url('/images/bg.jpg')] bg-cover h-screen">
      <div className="mx-auto container flex flex-col justify-center items-center h-full   w-11/12 space-y-16 md:w-8/12 py-10">
        {/* auth section */}
        <Card className="text-center space-y-8 py-8">
          <div>
            <h1 className="text-gradient">Welcome</h1>
            <h2>Log in to Continue Your Job Journey</h2>
          </div>
          <div>
            {isLoading ? (
              <Button className="animate-pulse">Signing you in...</Button>
            ) : (
              <div>
                {auth.isAuthenticated ? (
                  <Button onClick={auth.signOut}>Log Out</Button>
                ) : (
                  <Button onClick={auth.signIn}>Login</Button>
                )}
              </div>
            )}
          </div>
        </Card>
      </div>
    </main>
  );
};
export default Auth;
