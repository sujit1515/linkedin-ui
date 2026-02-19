// src/pages/ResetPassword.jsx
import { useState } from "react";
import {
  Eye,
  EyeOff,
  Lock,
  ArrowRight,
  Briefcase,
  Users,
  Building2,
  Award,
  CheckCircle,
  AlertCircle,
  Shield
} from "lucide-react";

export default function ResetPasswordPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [formData, setFormData] = useState({
    password: "",
    confirmPassword: ""
  });
  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.password) {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 8) {
      newErrors.password = "Password must be at least 8 characters";
    } else if (!/(?=.*[0-9])(?=.*[a-zA-Z])/.test(formData.password)) {
      newErrors.password = "Password must contain both letters and numbers";
    }
    
    if (!formData.confirmPassword) {
      newErrors.confirmPassword = "Please confirm your password";
    } else if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
    }
    
    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error for this field
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: "" }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validateForm();
    
    if (Object.keys(newErrors).length === 0) {
      setIsLoading(true);
      
      // Simulate API call
      setTimeout(() => {
        setIsLoading(false);
        setIsSubmitted(true);
      }, 1500);
    } else {
      setErrors(newErrors);
    }
  };

  const getPasswordStrength = (password) => {
    if (!password) return { strength: 0, label: "", color: "bg-gray-200" };
    
    let strength = 0;
    if (password.length >= 8) strength += 25;
    if (password.length >= 12) strength += 15;
    if (/[A-Z]/.test(password)) strength += 20;
    if (/[0-9]/.test(password)) strength += 20;
    if (/[^A-Za-z0-9]/.test(password)) strength += 20;
    
    if (strength <= 30) return { strength, label: "Weak", color: "bg-red-500" };
    if (strength <= 60) return { strength, label: "Fair", color: "bg-yellow-500" };
    if (strength <= 80) return { strength, label: "Good", color: "bg-blue-500" };
    return { strength, label: "Strong", color: "bg-green-500" };
  };

  const passwordStrength = getPasswordStrength(formData.password);

  return (
    <div className="min-h-screen flex flex-col lg:flex-row bg-white">
      {/* LEFT SIDE - Image with Overlay */}
      <div className="lg:w-1/2 relative overflow-hidden min-h-[400px] lg:min-h-screen">
        {/* Background Image */}
        <img
          src="https://cdn.pixabay.com/photo/2023/06/17/13/37/ai-generated-8070000_1280.jpg"
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
              <Shield className="w-4 h-4 text-white" />
              <span className="text-sm font-medium text-white">Create New Password</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-6">
              Set your
              <span className="block text-white/90">new password</span>
              <span className="block text-white/80">secure your account</span>
            </h1>

            {/* Description */}
            <p className="text-lg text-white/80 mb-8 leading-relaxed">
              Create a strong password that you haven't used before. This will ensure your account stays secure.
            </p>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="absolute bottom-6 left-8 z-10 text-white/40 text-sm hidden lg:block">
          © 2026 NexusFlow. All rights reserved.
        </div>
      </div>

      {/* RIGHT SIDE - Reset Password Form */}
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
                  Reset your password
                </h2>
                <p className="text-gray-600">
                  Choose a strong password you haven't used before
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
                  Password reset successful!
                </h2>
                <p className="text-gray-600">
                  Your password has been successfully changed. You can now sign in with your new password.
                </p>
              </>
            )}
          </div>

          {!isSubmitted ? (
            <form onSubmit={handleSubmit} className="space-y-5">
              {/* New Password */}
              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1.5">
                  New Password
                </label>
                <div className="relative group">
                  <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 group-focus-within:text-[#1565c0] transition-colors" />
                  <input
                    type={showPassword ? "text" : "password"}
                    id="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    placeholder="Create new password"
                    className={`w-full pl-10 pr-12 py-3 border ${
                      errors.password ? "border-red-300 focus:ring-red-500/20 focus:border-red-500" : "border-gray-200 focus:ring-[#1565c0]/20 focus:border-[#1565c0]"
                    } rounded-xl outline-none transition bg-gray-50/50 focus:bg-white`}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                  >
                    {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                  </button>
                </div>
                
                {/* Password Strength Indicator */}
                {formData.password && (
                  <div className="mt-2">
                    <div className="flex items-center gap-2 mb-1">
                      <div className="flex-1 h-1.5 bg-gray-200 rounded-full overflow-hidden">
                        <div 
                          className={`h-full ${passwordStrength.color} transition-all`} 
                          style={{ width: `${passwordStrength.strength}%` }}
                        ></div>
                      </div>
                      <span className="text-xs font-medium text-gray-600">
                        {passwordStrength.label}
                      </span>
                    </div>
                  </div>
                )}
                
                {errors.password && (
                  <div className="flex items-center gap-1 mt-1.5">
                    <AlertCircle className="w-4 h-4 text-red-500" />
                    <p className="text-xs text-red-600">{errors.password}</p>
                  </div>
                )}
              </div>

              {/* Confirm Password */}
              <div>
                <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-1.5">
                  Confirm Password
                </label>
                <div className="relative group">
                  <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 group-focus-within:text-[#1565c0] transition-colors" />
                  <input
                    type={showConfirmPassword ? "text" : "password"}
                    id="confirmPassword"
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    placeholder="Confirm new password"
                    className={`w-full pl-10 pr-12 py-3 border ${
                      errors.confirmPassword ? "border-red-300 focus:ring-red-500/20 focus:border-red-500" : "border-gray-200 focus:ring-[#1565c0]/20 focus:border-[#1565c0]"
                    } rounded-xl outline-none transition bg-gray-50/50 focus:bg-white`}
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                  >
                    {showConfirmPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                  </button>
                </div>
                {errors.confirmPassword && (
                  <div className="flex items-center gap-1 mt-1.5">
                    <AlertCircle className="w-4 h-4 text-red-500" />
                    <p className="text-xs text-red-600">{errors.confirmPassword}</p>
                  </div>
                )}
              </div>

              {/* Password Requirements */}
              <div className="bg-gray-50 rounded-xl p-4">
                <p className="text-xs font-medium text-gray-700 mb-2">Password requirements:</p>
                <ul className="space-y-1">
                  <li className="flex items-center gap-2 text-xs text-gray-600">
                    <CheckCircle className={`w-3 h-3 ${formData.password.length >= 8 ? "text-green-500" : "text-gray-300"}`} />
                    At least 8 characters
                  </li>
                  <li className="flex items-center gap-2 text-xs text-gray-600">
                    <CheckCircle className={`w-3 h-3 ${/(?=.*[a-zA-Z])/.test(formData.password) ? "text-green-500" : "text-gray-300"}`} />
                    Contains letters
                  </li>
                  <li className="flex items-center gap-2 text-xs text-gray-600">
                    <CheckCircle className={`w-3 h-3 ${/(?=.*[0-9])/.test(formData.password) ? "text-green-500" : "text-gray-300"}`} />
                    Contains numbers
                  </li>
                  {formData.password && formData.confirmPassword && (
                    <li className="flex items-center gap-2 text-xs text-gray-600">
                      <CheckCircle className={`w-3 h-3 ${formData.password === formData.confirmPassword ? "text-green-500" : "text-gray-300"}`} />
                      Passwords match
                    </li>
                  )}
                </ul>
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
                    <span>Resetting...</span>
                  </>
                ) : (
                  <>
                    Reset Password
                    <ArrowRight className="w-5 h-5" />
                  </>
                )}
              </button>
            </form>
          ) : (
            <div className="space-y-6">
              {/* Success Actions */}
              <a
                href="/login"
                className="w-full bg-[#1565c0] text-white py-3.5 rounded-xl font-medium hover:bg-[#0d4a9e] transition-all transform hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-2 shadow-lg shadow-[#1565c0]/25"
              >
                Sign In Now
                <ArrowRight className="w-5 h-5" />
              </a>

              <p className="text-center text-sm text-gray-600">
                Need help?{" "}
                <a href="/contact" className="text-[#1565c0] font-medium hover:underline">
                  Contact Support
                </a>
              </p>
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
              <span className="text-xs text-gray-500">Encrypted</span>
            </div>
            <div className="flex items-center gap-2">
              <Award className="w-4 h-4 text-[#1565c0]" />
              <span className="text-xs text-gray-500">Protected</span>
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