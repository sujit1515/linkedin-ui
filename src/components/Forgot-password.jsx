// src/pages/ForgotPassword.jsx
import { useState } from "react";
import {
  Mail,
  ArrowRight,
  Briefcase,
  Users,
  Building2,
  Award,
  CheckCircle,
  AlertCircle
} from "lucide-react";

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");
    
    if (!email) {
      setError("Email is required");
      return;
    }
    
    if (!/\S+@\S+\.\S+/.test(email)) {
      setError("Please enter a valid email address");
      return;
    }
    
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      setIsSubmitted(true);
    }, 1500);
  };

  return (
    <div className="min-h-screen flex flex-col lg:flex-row bg-white">
      {/* LEFT SIDE - Image with Overlay */}
      <div className="lg:w-1/2 relative overflow-hidden min-h-[400px] lg:min-h-screen">
        {/* Background Image */}
        <img
          src="https://th.bing.com/th/id/R.d653e1e04c2652e43cec2fa95ac3e524?rik=SK6r4iWFKNoluQ&riu=http%3a%2f%2flabyrinth-cyber.com%2fwp-content%2fuploads%2f2023%2f06%2fsystem_hardening.jpg&ehk=l%2b70lvuNe38fyB1Zh0Cbh4l7eRVwTRHA86zHTClbeCY%3d&risl=&pid=ImgRaw&r=0"
          alt="Professional workspace"
          className="absolute inset-0 w-full h-full object-cover"
        />
        
        {/* Overlay with #1565c0 */}
        <div className="absolute inset-0 bg-[#1565c0] bg-opacity-70"></div>
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#1565c0] via-transparent to-black/20"></div>
        
        {/* Content */}
        <div className="absolute inset-0 flex items-center">
          <div className="relative z-10 text-white px-8 md:px-12 lg:px-16 max-w-xl">
            {/* Security Badge */}
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-lg rounded-full px-4 py-2 mb-6">
              <span className="text-sm font-medium text-white">Account Security</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-6">
              <span className="block text-white/80">We've got you covered</span>
            </h1>

            {/* Description */}
            <p className="text-lg text-white/80 mb-8 leading-relaxed">
              Don't worry, it happens to the best of us. We'll help you reset your password and get back to your professional network in no time.
            </p>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="absolute bottom-6 left-8 z-10 text-white/40 text-sm hidden lg:block">
          © 2026 NexusFlow. All rights reserved.
        </div>
      </div>

      {/* RIGHT SIDE - Forgot Password Form */}
      <div className="lg:w-1/2 flex items-center justify-center p-6 md:p-8 lg:p-12 bg-white">
        <div className="w-full max-w-md">
          {/* Mobile Logo */}
          <div className="flex items-center gap-2 mb-6 lg:hidden">
            <div className="w-10 h-10 bg-[#1565c0] rounded-lg flex items-center justify-center">
              <Briefcase className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold text-gray-900">NexusFlow</span>
          </div>

          {/* Header */}
          <div className="text-center lg:text-left mb-8">
            {!isSubmitted ? (
              <>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                  Forgot password?
                </h2>
                <p className="text-gray-600">
                  Enter your email address and we'll send you a link to reset your password
                </p>
              </>
            ) : (
              <>
                <div className="flex justify-center lg:justify-start mb-4">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                    <CheckCircle className="w-6 h-6 text-green-600" />
                  </div>
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                  Check your email
                </h2>
                <p className="text-gray-600">
                  We've sent a password reset link to <span className="font-medium text-[#1565c0]">{email}</span>
                </p>
              </>
            )}
          </div>

          {!isSubmitted ? (
            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1.5">
                  Email Address
                </label>
                <div className="relative group">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 group-focus-within:text-[#1565c0] transition-colors" />
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="name@company.com"
                    className={`w-full pl-10 pr-4 py-3 border ${
                      error ? "border-red-300 focus:ring-red-500/20 focus:border-red-500" : "border-gray-200 focus:ring-[#1565c0]/20 focus:border-[#1565c0]"
                    } rounded-xl outline-none transition bg-gray-50/50 focus:bg-white`}
                  />
                </div>
                {error && (
                  <div className="flex items-center gap-1 mt-1.5">
                    <AlertCircle className="w-4 h-4 text-red-500" />
                    <p className="text-xs text-red-600">{error}</p>
                  </div>
                )}
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isLoading}
                className="w-full bg-[#1565c0] text-white py-3.5 rounded-xl font-medium hover:bg-[#0d4a9e] transition-all transform hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-2 shadow-lg shadow-[#1565c0]/25 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 mt-6"
              >
                {isLoading ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    Send Reset Link
                    <ArrowRight className="w-5 h-5" />
                  </>
                )}
              </button>

              {/* Back to Login */}
              <p className="text-center text-sm text-gray-600 mt-4">
                Remember your password?{" "}
                <a href="/login" className="text-[#1565c0] font-medium hover:underline">
                  Sign in
                </a>
              </p>
            </form>
          ) : (
            <div className="space-y-6">
              {/* Email Sent Info */}
              <div className="bg-blue-50 rounded-xl p-4 border border-blue-100">
                <p className="text-sm text-blue-800">
                  The link will expire in 30 minutes. If you don't see the email, check your spam folder.
                </p>
              </div>

              {/* Resend Options */}
              <div className="text-center">
                <p className="text-sm text-gray-600 mb-2">
                  Didn't receive the email?
                </p>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="text-[#1565c0] font-medium hover:underline text-sm"
                >
                  Try another email address
                </button>
              </div>

              {/* Back to Login */}
              <div className="pt-4">
                <a
                  href="/login"
                  className="w-full flex items-center justify-center gap-2 border border-gray-200 text-gray-700 py-3 rounded-xl font-medium hover:bg-gray-50 transition-all"
                >
                  Back to Sign In
                </a>
              </div>
            </div>
          )}

          {/* Trust Badges */}
          <div className="flex items-center justify-center gap-6 mt-8 pt-6 border-t border-gray-100">
            <div className="flex items-center gap-2">
              <Users className="w-4 h-4 text-[#1565c0]" />
              <span className="text-xs text-gray-500">Secure reset</span>
            </div>
            <div className="flex items-center gap-2">
              <Building2 className="w-4 h-4 text-[#1565c0]" />
              <span className="text-xs text-gray-500">24/7 support</span>
            </div>
            <div className="flex items-center gap-2">
              <Award className="w-4 h-4 text-[#1565c0]" />
              <span className="text-xs text-gray-500">Encrypted</span>
            </div>
          </div>

          {/* Mobile Footer Links */}
          <div className="flex flex-wrap justify-center gap-4 text-xs text-gray-400 mt-6 lg:hidden">
            <a href="#" className="hover:text-[#1565c0]">Privacy</a>
            <a href="#" className="hover:text-[#1565c0]">Terms</a>
            <a href="#" className="hover:text-[#1565c0]">Contact</a>
            <span>© 2026</span>
          </div>
        </div>
      </div>
    </div>
  );
}