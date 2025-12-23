import { useState } from 'react';
import { CircleUser, ArrowLeft } from 'lucide-react';

interface CustomerLoginScreenProps {
  onLogin: (identifier: string) => void;
  onBack: () => void;
}

export function CustomerLoginScreen({ onLogin, onBack }: CustomerLoginScreenProps) {
  const [identifier, setIdentifier] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Accept any input and proceed
    setIsLoading(true);
    
    // Simulate loading state
    setTimeout(() => {
      onLogin(identifier);
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
              <CircleUser className="w-8 h-8 text-[#007AFF]" strokeWidth={1.5} />
            </div>
            <h2 className="text-black mb-2">Customer Access</h2>
            <p className="text-gray-600">Track your tickets and submit feedback</p>
          </div>

          {/* Login Form */}
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label htmlFor="identifier" className="block text-gray-700 mb-2">
                Email or Ticket Tracking ID
              </label>
              <input
                type="text"
                id="identifier"
                value={identifier}
                onChange={(e) => setIdentifier(e.target.value)}
                className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#007AFF]/20 focus:border-[#007AFF] transition-colors"
                placeholder="customer@email.com or TCK-2401"
                required
              />
              <p className="mt-2 text-gray-600">
                Enter your email address or the tracking ID from your ticket confirmation
              </p>
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full px-4 py-3 bg-[#007AFF] text-white rounded-lg hover:bg-[#0051D5] active:bg-[#004EC2] transition-colors disabled:bg-[#007AFF]/60 disabled:cursor-not-allowed"
            >
              {isLoading ? 'Continuing...' : 'Continue'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}