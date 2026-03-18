import { SignIn } from "@clerk/clerk-react";
import Layout from "@/components/Layout";

const SignInPage = () => {
  return (
    <Layout>
      <div className="min-h-screen flex items-center justify-center bg-background py-12 px-4">
        <SignIn
          routing="path"
          path="/sign-in"
          signUpUrl="/sign-up"
          afterSignInUrl="/dashboard"
        />
      </div>
    </Layout>
  );
};

export default SignInPage;
