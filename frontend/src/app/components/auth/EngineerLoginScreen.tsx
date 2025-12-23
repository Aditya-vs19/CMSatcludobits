import { useState } from 'react';
import { UserCog, ArrowLeft, AlertCircle } from 'lucide-react';

interface EngineerLoginScreenProps {
  onLogin: (engineerId: string, password: string) => void;
  onBack: () => void;
}

export function EngineerLoginScreen({ onLogin, onBack }: EngineerLoginScreenProps) {
  const [engineerId, setEngineerId] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [engineerIdError, setEngineerIdError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setEngineerIdError(false);
    setPasswordError(false);

    // Basic validation
    if (!engineerId) {
      setEngineerIdError(true);
      setError('Please enter your Engineer ID or email');
      return;
    }

    if (!password) {
      setPasswordError(true);
      setError('Please enter your password');
      return;
    }

    // Demo validation - accept any engineer ID with password "engineer123"
    if (password === 'engineer123') {
      onLogin(engineerId, password);
    } else {
      setError('Invalid Engineer ID or password');
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
              <UserCog className="w-8 h-8 text-[#007AFF]" strokeWidth={1.5} />
            </div>
            <h2 className="text-black mb-2">Engineer Login</h2>
            <p className="text-gray-600">Access your assigned tickets</p>
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
              <label htmlFor="engineerId" className="block text-gray-700 mb-2">
                Engineer ID / Email
              </label>
              <input
                type="text"
                id="engineerId"
                value={engineerId}
                onChange={(e) => {
                  setEngineerId(e.target.value);
                  setEngineerIdError(false);
                  setError('');
                }}
                className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 transition-colors ${
                  engineerIdError
                    ? 'border-red-300 focus:ring-red-200 focus:border-red-400'
                    : 'border-gray-200 focus:ring-[#007AFF]/20 focus:border-[#007AFF]'
                }`}
                placeholder="ENG-001 or engineer@cludobits.com"
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
        </div>

        {/* Demo Credentials */}
        <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
          <div className="text-blue-900 mb-1">Demo Credentials</div>
          <div className="text-blue-700 text-sm">
            Engineer ID: Any ID or email<br />
            Password: engineer123
          </div>
        </div>
      </div>
    </div>
  );
}
