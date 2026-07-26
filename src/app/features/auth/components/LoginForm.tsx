"use client";

import React, { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema } from "../schemas/login.schema";
import { LoginCredentials } from "../types/auth.types";
import { Input } from "../../../../components/ui/input";
import { Button } from "../../../../components/ui/button";

export default function LoginForm() {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [isSubmittingLocal, setIsSubmittingLocal] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginCredentials>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "test@gmail.com",
      password: "12345678",
      rememberMe: false,
    },
    mode: "onChange", // Validates on input change to clear errors instantly
  });

  const onSubmit = async (data: LoginCredentials) => {
    setIsSubmittingLocal(true);
    // Simulate successful authentication locally
    await new Promise((resolve) => setTimeout(resolve, 1000));

    // Store mock session state
    if (typeof window !== "undefined") {
      localStorage.setItem("shipnow_user_email", data.email);
    }

    setIsSubmittingLocal(false);
    // Navigate client-side to dashboard
    router.push("/dashboard");
  };

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  return (
    <div className="w-full max-w-[420px] mx-auto flex flex-col justify-center min-h-[500px] md:min-h-screen p-6 md:p-8">
      {/* Centered Brand Icon */}
      <div className="flex justify-center mb-6">
        <div className="relative w-[48px] h-[48px]">
          <Image
            src="/icons/image.png"
            alt="ShipNow Purple Logo Symbol"
            fill
            sizes="48px"
            className="object-contain"
            priority
          />
        </div>
      </div>

      {/* Heading Block */}
      <div className="text-center mb-8">
        <h2 className="text-[30px] font-bold text-dark font-heading tracking-tight mb-2 leading-none">
          Welcome Back
        </h2>
        <p className="text-sm text-gray-medium font-sans font-normal">
          Log in to continue managing your logistics with ShipNow
        </p>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5" noValidate>
        {/* Email Field */}
        <Input
          label="Email Address"
          type="email"
          placeholder="Enter a valid email address"
          error={errors.email?.message}
          {...register("email")}
          autoComplete="email"
        />

        {/* Password Field */}
        <Input
          label="Password"
          type={showPassword ? "text" : "password"}
          placeholder="Create a strong password"
          error={errors.password?.message}
          {...register("password")}
          autoComplete="current-password"
          rightElement={
            <button
              type="button"
              onClick={togglePasswordVisibility}
              className="p-1.5 text-gray-medium hover:text-dark focus:outline-none focus:ring-2 focus:ring-brand/40 rounded-md transition-colors cursor-pointer flex items-center justify-center"
              aria-label={showPassword ? "Hide password" : "Show password"}
            >
              {showPassword ? (
                <svg
                  className="w-[20px] h-[20px]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.542-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l18 18"
                  />
                </svg>
              ) : (
                <svg
                  className="w-[20px] h-[20px]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                  />
                </svg>
              )}
            </button>
          }
        />

        {/* Remember Me and Forgot Password */}
        <div className="flex items-center justify-between text-xs font-medium font-sans">
          <label className="flex items-center gap-2 text-dark cursor-pointer select-none">
            <input
              type="checkbox"
              {...register("rememberMe")}
              className="w-4 h-4 rounded text-brand border-gray-medium/30 focus:ring-brand focus:ring-offset-0 focus:ring-1 cursor-pointer accent-brand"
            />
            Remember Me
          </label>
          <a
            href="#forgot"
            className="text-brand hover:text-brand-hover font-semibold transition-colors"
            onClick={(e) => e.preventDefault()}
          >
            Forgot Password?
          </a>
        </div>

        {/* Submit Button */}
        <div className="pt-2">
          <Button type="submit" isLoading={isSubmittingLocal}>
            Login
          </Button>
        </div>
      </form>

      {/* Footer Text */}
      <div className="text-center text-xs font-sans text-gray-medium mt-8">
        Don&apos;t have an account?{" "}
        <a
          href="#register"
          className="text-brand hover:text-brand-hover font-semibold transition-colors"
          onClick={(e) => e.preventDefault()}
        >
          Register
        </a>
      </div>
    </div>
  );
}
