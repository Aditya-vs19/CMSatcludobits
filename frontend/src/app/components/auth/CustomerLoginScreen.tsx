import { useState } from 'react';
import { CircleUser, ArrowLeft, AlertCircle, Info } from 'lucide-react';

interface CustomerLoginScreenProps {
  onLogin: (identifier: string) => void;
  onBack: () => void;
}

export function CustomerLoginScreen({ onLogin, onBack }: CustomerLoginScreenProps) {
  const [identifier, setIdentifier] = useState('');
  const [error, setError] = useState('');
  const [identifierError, setIdentifierError] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setIdentifierError(false);

    // Basic validation
    if (!identifier) {
      setIdentifierError(true);
      setError('Please enter your email or tracking ID');
      return;
    }

    // Accept any non-empty identifier for demo
    onLogin(identifier);
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

          {/* Info Notice */}
          <div className="mb-6 p-4 bg-blue-50 border border-blue-200 rounded-lg flex items-start gap-3">
            <Info className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" strokeWidth={1.5} />
            <div className="text-blue-700">
              Customers can track tickets and submit feedback without full account login
            </div>
          </div>

          {/* Error Message */}
          {error && (
            <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg flex items-start gap-3">
              <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" strokeWidth={1.5} />
              <div>
                <div className="text-red-900 mb-1">Validation Error</div>
                <div className="text-red-700">{error}</div>
              </div>
            </div>
          )}

          {/* Login Form */}
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label htmlFor="identifier" className="block text-gray-700 mb-2">
                Email or Tracking ID
              </label>
              <input
                type="text"
                id="identifier"
                value={identifier}
                onChange={(e) => {
                  setIdentifier(e.target.value);
                  setIdentifierError(false);
                  setError('');
                }}
                className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 transition-colors ${
                  identifierError
                    ? 'border-red-300 focus:ring-red-200 focus:border-red-400'
                    : 'border-gray-200 focus:ring-[#007AFF]/20 focus:border-[#007AFF]'
                }`}
                placeholder="customer@email.com or TCK-2401"
              />
              <p className="mt-2 text-gray-600">
                Enter your email address or the tracking ID provided in your ticket confirmation
              </p>
            </div>

            <button
              type="submit"
              className="w-full px-4 py-3 bg-[#007AFF] text-white rounded-lg hover:bg-[#0051D5] transition-colors"
            >
              Continue
            </button>
          </form>
        </div>

        {/* Demo Info */}
        <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
          <div className="text-blue-900 mb-1">Demo Access</div>
          <div className="text-blue-700 text-sm">
            Enter any email or tracking ID (e.g., TCK-2401) to continue
          </div>
        </div>
      </div>
    </div>
  );
}
