import LoginHero from "../../features/auth/components/LoginHero";
import LoginForm from "../../features/auth/components/LoginForm";

export default function LoginPage() {
  return (
    <main className="mobile-wrapper w-full min-h-screen flex flex-col md:grid md:grid-cols-2 bg-white">
      {/* Left panel (Hero section, purple background) */}
      <LoginHero />
      
      {/* Right panel (LoginForm, white background) */}
      <div className="mobile-page w-full flex items-center justify-center bg-white">
        <LoginForm />
      </div>
    </main>
  );
}
