import { useState } from 'react';
import { UserCog, ArrowLeft } from 'lucide-react';

interface EngineerLoginScreenProps {
  onLogin: (engineerId: string, password: string) => void;
  onBack: () => void;
}

export function EngineerLoginScreen({ onLogin, onBack }: EngineerLoginScreenProps) {
  const [engineerId, setEngineerId] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Accept any input and proceed
    setIsLoading(true);
    
    // Simulate loading state
    setTimeout(() => {
      onLogin(engineerId, password);
    }, 800);
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
            <p className="text-gray-600">Support Engineer Access</p>
          </div>

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
                onChange={(e) => setEngineerId(e.target.value)}
                className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#007AFF]/20 focus:border-[#007AFF] transition-colors"
                placeholder="ENG-001 or engineer@cludobits.com"
                required
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
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#007AFF]/20 focus:border-[#007AFF] transition-colors"
                placeholder="Enter your password"
                required
              />
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full px-4 py-3 bg-[#007AFF] text-white rounded-lg hover:bg-[#0051D5] active:bg-[#004EC2] transition-colors disabled:bg-[#007AFF]/60 disabled:cursor-not-allowed"
            >
              {isLoading ? 'Signing in...' : 'Sign In'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}