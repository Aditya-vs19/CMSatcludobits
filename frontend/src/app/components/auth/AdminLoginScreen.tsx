import { useState } from 'react';
import { Shield, ArrowLeft, AlertCircle } from 'lucide-react';

interface AdminLoginScreenProps {
  onLogin: (email: string, password: string) => void;
  onBack: () => void;
}

export function AdminLoginScreen({ onLogin, onBack }: AdminLoginScreenProps) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setEmailError(false);
    setPasswordError(false);

    // Basic validation
    if (!email) {
      setEmailError(true);
      setError('Please enter your email address');
      return;
    }

    if (!password) {
      setPasswordError(true);
      setError('Please enter your password');
      return;
    }

    // Demo validation - accept any email with password "admin123"
    if (password === 'admin123') {
      onLogin(email, password);
    } else {
      setError('Invalid email or password');
      setPasswordError(true);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-6">
      <div className="w-full max-w-md">
        {/* Back Button */}
        <button
          onClick={onBack}
          className="flex items-center gap-2 text-gray-600 hover:text-[#007AFF] mb-8 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" strokeWidth={1.5} />
          Back to role selection
        </button>

        {/* Login Card */}
        <div className="bg-white rounded-xl border border-gray-200 p-8 shadow-sm">
          {/* Header */}
          <div className="flex flex-col items-center mb-8">
            <div className="w-16 h-16 bg-[#007AFF]/10 rounded-full flex items-center justify-center mb-4">
              <Shield className="w-8 h-8 text-[#007AFF]" strokeWidth={1.5} />
            </div>
            <h2 className="text-black mb-2">Admin Login</h2>
            <p className="text-gray-600">Enter your credentials to continue</p>
          </div>

          {/* Error Message */}
          {error && (
            <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg flex items-start gap-3">
              <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" strokeWidth={1.5} />
              <div>
                <div className="text-red-900 mb-1">Authentication Error</div>
                <div className="text-red-700">{error}</div>
              </div>
            </div>
          )}

          {/* Login Form */}
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label htmlFor="email" className="block text-gray-700 mb-2">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  setEmailError(false);
                  setError('');
                }}
                className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 transition-colors ${
                  emailError
                    ? 'border-red-300 focus:ring-red-200 focus:border-red-400'
                    : 'border-gray-200 focus:ring-[#007AFF]/20 focus:border-[#007AFF]'
                }`}
                placeholder="admin@cludobits.com"
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-gray-700 mb-2">
                Password
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                  setPasswordError(false);
                  setError('');
                }}
                className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 transition-colors ${
                  passwordError
                    ? 'border-red-300 focus:ring-red-200 focus:border-red-400'
                    : 'border-gray-200 focus:ring-[#007AFF]/20 focus:border-[#007AFF]'
                }`}
                placeholder="Enter your password"
              />
            </div>

            <button
              type="submit"
              className="w-full px-4 py-3 bg-[#007AFF] text-white rounded-lg hover:bg-[#0051D5] transition-colors"
            >
              Sign In
            </button>
          </form>

          {/* Forgot Password Link */}
          <div className="mt-6 text-center">
            <button className="text-[#007AFF] hover:underline">
              Forgot password?
            </button>
          </div>
        </div>

        {/* Demo Credentials */}
        <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
          <div className="text-blue-900 mb-1">Demo Credentials</div>
          <div className="text-blue-700 text-sm">
            Email: Any valid email<br />
            Password: admin123
          </div>
        </div>
      </div>
    </div>
  );
}
