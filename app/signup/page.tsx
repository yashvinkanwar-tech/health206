import AuthLayout from "@/components/auth/AuthLayout";
import AuthHeader from "@/components/auth/AuthHeader";
import SignupForm from "@/components/auth/SignupForm";

export default function SignupPage() {
  return (
    <AuthLayout>
      <AuthHeader
        title="Create Account"
        subtitle="Join Health 206 and start managing your health securely."
      />

      <SignupForm />
    </AuthLayout>
  );
}