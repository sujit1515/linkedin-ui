// src/pages/Login.jsx
import { useState } from "react";
import {
  Eye,
  EyeOff,
  Lock,
  Mail,
  ArrowRight,
  Briefcase,
  Users,
  Building2,
  Award
} from "lucide-react";

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    rememberMe: false
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Login submitted:", formData);
  };

  return (
    <div className="min-h-screen flex flex-col lg:flex-row bg-white">
      {/* LEFT SIDE - Image with Overlay (Same as Signup) */}
      <div className="lg:w-1/2 relative overflow-hidden min-h-[400px] lg:min-h-screen">
        {/* Background Image */}
        <img
          src="https://img.freepik.com/premium-photo/handsome-latin-businessman-working-with-computer-male-manager-works-modern-office_90099-10375.jpg"
          alt="Professional workspace"
          className="absolute inset-0 w-full h-full object-cover"
        />
        
        {/* Overlay with #1565c0 */}
        <div className="absolute inset-0 bg-[#1565c0] bg-opacity-70"></div>
        
        {/* Gradient Overlay for depth */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#1565c0] via-transparent to-black/20"></div>
        
        {/* Content */}
        <div className="absolute inset-0 flex items-center">
          <div className="relative z-10 text-white px-8 md:px-12 lg:px-16 max-w-xl">
            {/* Welcome Back Message - Different from Signup */}
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-lg rounded-full px-4 py-2 mb-6">
              <span className="text-sm font-medium text-white">Welcome Back!</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-6">
              Ready to continue
              <span className="block text-white/90">your professional</span>
              <span className="block text-white/80">journey?</span>
            </h1>

            {/* Description */}
            <p className="text-lg text-white/80 mb-8 leading-relaxed">
              Access your network, explore new opportunities, and connect with industry leaders who can help shape your career.
            </p>

            {/* Stats Grid - Same as Signup */}
            <div className="grid grid-cols-3 gap-4 md:gap-6 mb-8 md:mb-12">
              <div className="text-center lg:text-left">
                <div className="text-2xl md:text-3xl font-bold text-white mb-1">1M+</div>
                <div className="text-sm text-white/70">Active Users</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-2xl md:text-3xl font-bold text-white mb-1">500+</div>
                <div className="text-sm text-white/70">Companies</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-2xl md:text-3xl font-bold text-white mb-1">50k+</div>
                <div className="text-sm text-white/70">Job Listings</div>
              </div>
            </div>

            {/* Motivational Quote - Different from Signup */}
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
              <p className="text-white/90 italic mb-3">
                "Your next big opportunity could be one login away."
              </p>
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                  <Briefcase className="w-4 h-4 text-white" />
                </div>
                <p className="text-sm text-white/60">NexusFlow Community</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="absolute bottom-6 left-8 z-10 text-white/40 text-sm hidden lg:block">
          © 2026 NexusFlow. All rights reserved.
        </div>
      </div>

      {/* RIGHT SIDE - Login Form */}
      <div className="lg:w-1/2 flex items-center justify-center p-6 md:p-8 lg:p-12 bg-white">
        <div className="w-full max-w-md">
          {/* Mobile Logo (visible only on mobile) */}
          <div className="flex items-center gap-2 mb-6 lg:hidden">
            <div className="w-10 h-10 bg-[#1565c0] rounded-lg flex items-center justify-center">
              <Briefcase className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold text-gray-900">NexusFlow</span>
          </div>

          {/* Header */}
          <div className="text-center lg:text-left mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
              Welcome back
            </h2>
            <p className="text-gray-600">
              Sign in to continue your professional journey
            </p>
          </div>

          {/* Social Login Options */}
          <div className="space-y-3 mb-6">
            <button className="w-full flex items-center justify-center gap-3 border border-gray-200 rounded-xl py-3 px-4 text-gray-700 hover:bg-gray-50 transition-all hover:border-[#1565c0] group">
              <svg className="w-5 h-5" viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.51h5.84c-.25 1.31-.98 2.42-2.07 3.16v2.63h3.35c1.96-1.81 3.09-4.47 3.09-7.25z"
                />
                <path
                  fill="#34A853"
                  d="M12 23c2.97 0 5.46-1.01 7.28-2.73l-3.35-2.63c-1.01.68-2.29 1.08-3.93 1.08-3.02 0-5.58-2.04-6.49-4.79H.96v2.67C2.75 20.99 6.88 23 12 23z"
                />
                <path
                  fill="#FBBC05"
                  d="M5.51 14.21c-.23-.68-.36-1.41-.36-2.21s.13-1.53.36-2.21V7.34H.96C.35 8.85 0 10.39 0 12s.35 3.15.96 4.66l4.55-2.45z"
                />
                <path
                  fill="#EA4335"
                  d="M12 4.98c1.64 0 3.11.56 4.27 1.66l3.19-3.19C17.46 1.01 14.97 0 12 0 6.88 0 2.75 2.01.96 4.96l4.55 2.45C6.42 5.02 8.98 4.98 12 4.98z"
                />
              </svg>
              <span className="text-sm font-medium">Continue with Google</span>
            </button>

            <button className="w-full flex items-center justify-center gap-3 border border-gray-200 rounded-xl py-3 px-4 text-gray-700 hover:bg-gray-50 transition-all hover:border-[#1565c0] group">
              <svg className="w-5 h-5" fill="#0A66C2" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
              <span className="text-sm font-medium">Continue with LinkedIn</span>
            </button>
          </div>

          {/* Divider */}
          <div className="relative mb-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-200"></div>
            </div>
            <div className="relative flex justify-center">
              <span className="px-4 bg-white text-xs text-gray-500 uppercase tracking-wider">
                Or sign in with email
              </span>
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1.5">
                Work Email
              </label>
              <div className="relative group">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 group-focus-within:text-[#1565c0] transition-colors" />
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="name@company.com"
                  className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#1565c0]/20 focus:border-[#1565c0] outline-none transition bg-gray-50/50 focus:bg-white"
                  required
                />
              </div>
            </div>

            {/* Password */}
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1.5">
                Password
              </label>
              <div className="relative group">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 group-focus-within:text-[#1565c0] transition-colors" />
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Enter your password"
                  className="w-full pl-10 pr-12 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#1565c0]/20 focus:border-[#1565c0] outline-none transition bg-gray-50/50 focus:bg-white"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
            </div>

            {/* Remember Me & Forgot Password */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  id="rememberMe"
                  name="rememberMe"
                  checked={formData.rememberMe}
                  onChange={handleChange}
                  className="w-4 h-4 text-[#1565c0] border-gray-300 rounded focus:ring-[#1565c0]"
                />
                <label htmlFor="rememberMe" className="text-sm text-gray-600">
                  Remember me
                </label>
              </div>
              <a href="/forgot-password" className="text-sm text-[#1565c0] hover:underline font-medium">
                Forgot password?
              </a>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-[#1565c0] text-white py-3.5 rounded-xl font-medium hover:bg-[#0d4a9e] transition-all transform hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-2 shadow-lg shadow-[#1565c0]/25 mt-6"
            >
              Sign In
              <ArrowRight className="w-5 h-5" />
            </button>
          </form>

          {/* Sign Up Link */}
          <p className="text-center text-sm text-gray-600 mt-6">
            Don't have an account?{" "}
            <a href="/signup" className="text-[#1565c0] font-medium hover:underline">
              create new account
            </a>
          </p>

          {/* Trust Badges - Same as Signup */}
          <div className="flex items-center justify-center gap-6 mt-8 pt-6 border-t border-gray-100">
            <div className="flex items-center gap-2">
              <Users className="w-4 h-4 text-[#1565c0]" />
              <span className="text-xs text-gray-500">10k+ active today</span>
            </div>
            <div className="flex items-center gap-2">
              <Building2 className="w-4 h-4 text-[#1565c0]" />
              <span className="text-xs text-gray-500">500+ companies</span>
            </div>
            <div className="flex items-center gap-2">
              <Award className="w-4 h-4 text-[#1565c0]" />
              <span className="text-xs text-gray-500">Secure login</span>
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