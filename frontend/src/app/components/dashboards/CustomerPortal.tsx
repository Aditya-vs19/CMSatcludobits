import { useState } from 'react';
import { Star, Download, FileText, CheckCircle } from 'lucide-react';

interface CustomerPortalProps {
  trackingId: string;
}

export function CustomerPortal({ trackingId }: CustomerPortalProps) {
  const [rating, setRating] = useState(0);
  const [feedback, setFeedback] = useState('');
  const [feedbackSubmitted, setFeedbackSubmitted] = useState(false);

  // Mock ticket data based on tracking ID
  const ticketData = {
    id: trackingId.startsWith('TCK-') ? trackingId : 'TCK-2401',
    title: 'Printer Not Working',
    status: 'Resolved',
    category: 'Hardware',
    assignedEngineer: 'Sarah Mitchell',
    createdDate: 'Dec 20, 2024',
    resolvedDate: 'Dec 22, 2024',
    description: 'Office printer on 3rd floor is not responding. Paper jam suspected.',
    resolution: 'Cleared paper jam and performed maintenance on office printer. Printer restored to full functionality.',
    scrAvailable: true,
    scrStatus: 'Pending Signature',
  };

  const handleFeedbackSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFeedbackSubmitted(true);
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Open':
        return 'bg-gray-100 text-gray-700';
      case 'In Progress':
        return 'bg-[#007AFF]/10 text-[#007AFF]';
      case 'Resolved':
        return 'bg-green-50 text-green-600';
      default:
        return 'bg-gray-100 text-gray-700';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-5xl mx-auto px-6 py-6">
          <h1 className="text-black mb-1">CludoBits IT Solutions</h1>
          <p className="text-gray-600">Customer Support Portal</p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-5xl mx-auto px-6 py-8">
        {/* Ticket Status Card */}
        <div className="bg-white rounded-xl border border-gray-200 p-8 mb-6">
          <div className="flex items-start justify-between mb-6">
            <div>
              <div className="text-gray-600 mb-2">Tracking ID</div>
              <h2 className="text-black mb-4">{ticketData.id}</h2>
              <h3 className="text-black mb-3">{ticketData.title}</h3>
              <div className="flex gap-3">
                <span className={`inline-flex px-3 py-1 rounded-full ${getStatusColor(ticketData.status)}`}>
                  {ticketData.status}
                </span>
                <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full">
                  {ticketData.category}
                </span>
              </div>
            </div>
            {ticketData.status === 'Resolved' && (
              <CheckCircle className="w-12 h-12 text-green-600" strokeWidth={1.5} />
            )}
          </div>

          {/* Ticket Timeline */}
          <div className="border-t border-gray-200 pt-6">
            <h4 className="text-black mb-4">Ticket Timeline</h4>
            <div className="space-y-4">
              <div className="flex gap-4">
                <div className="w-2 h-2 bg-gray-400 rounded-full mt-2"></div>
                <div className="flex-1">
                  <div className="text-gray-900 mb-1">Ticket Created</div>
                  <div className="text-gray-600">{ticketData.createdDate}</div>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-2 h-2 bg-[#007AFF] rounded-full mt-2"></div>
                <div className="flex-1">
                  <div className="text-gray-900 mb-1">Assigned to Engineer</div>
                  <div className="text-gray-600">{ticketData.assignedEngineer}</div>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-2 h-2 bg-green-600 rounded-full mt-2"></div>
                <div className="flex-1">
                  <div className="text-gray-900 mb-1">Ticket Resolved</div>
                  <div className="text-gray-600">{ticketData.resolvedDate}</div>
                </div>
              </div>
            </div>
          </div>

          {/* Issue Details */}
          <div className="border-t border-gray-200 pt-6 mt-6">
            <h4 className="text-black mb-3">Issue Description</h4>
            <p className="text-gray-700 leading-relaxed mb-6">{ticketData.description}</p>

            {ticketData.status === 'Resolved' && (
              <>
                <h4 className="text-black mb-3">Resolution</h4>
                <p className="text-gray-700 leading-relaxed">{ticketData.resolution}</p>
              </>
            )}
          </div>
        </div>

        {/* Service Call Report */}
        {ticketData.scrAvailable && (
          <div className="bg-white rounded-xl border border-gray-200 p-8 mb-6">
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-[#007AFF]/10 rounded-lg flex items-center justify-center">
                  <FileText className="w-6 h-6 text-[#007AFF]" strokeWidth={1.5} />
                </div>
                <div>
                  <h3 className="text-black mb-1">Service Call Report</h3>
                  <p className="text-gray-600">SCR-1026</p>
                </div>
              </div>
              <span className="px-3 py-1 bg-orange-50 text-orange-600 rounded-full">
                {ticketData.scrStatus}
              </span>
            </div>

            <p className="text-gray-700 mb-6">
              A detailed service call report has been generated for this ticket. Please review and sign the report.
            </p>

            <div className="flex gap-3">
              <button className="flex-1 px-4 py-2 bg-[#007AFF] text-white rounded-lg hover:bg-[#0051D5] transition-colors flex items-center justify-center gap-2">
                <FileText className="w-4 h-4" strokeWidth={1.5} />
                View & Sign Report
              </button>
              <button className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors flex items-center gap-2">
                <Download className="w-4 h-4" strokeWidth={1.5} />
                Download PDF
              </button>
            </div>
          </div>
        )}

        {/* Feedback Section */}
        <div className="bg-white rounded-xl border border-gray-200 p-8">
          <h3 className="text-black mb-2">Share Your Feedback</h3>
          <p className="text-gray-600 mb-6">
            How was your experience with our service?
          </p>

          {feedbackSubmitted ? (
            <div className="p-6 bg-green-50 border border-green-200 rounded-lg text-center">
              <CheckCircle className="w-12 h-12 text-green-600 mx-auto mb-3" strokeWidth={1.5} />
              <div className="text-green-900 mb-1">Thank You!</div>
              <div className="text-green-700">
                Your feedback has been submitted successfully.
              </div>
            </div>
          ) : (
            <form onSubmit={handleFeedbackSubmit}>
              {/* Rating */}
              <div className="mb-6">
                <label className="block text-gray-700 mb-3">Rating</label>
                <div className="flex gap-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      type="button"
                      onClick={() => setRating(star)}
                      className="p-1 hover:scale-110 transition-transform"
                    >
                      <Star
                        className={`w-8 h-8 ${
                          star <= rating
                            ? 'fill-[#007AFF] text-[#007AFF]'
                            : 'text-gray-300'
                        }`}
                        strokeWidth={1.5}
                      />
                    </button>
                  ))}
                </div>
              </div>

              {/* Comments */}
              <div className="mb-6">
                <label className="block text-gray-700 mb-2">Comments (Optional)</label>
                <textarea
                  value={feedback}
                  onChange={(e) => setFeedback(e.target.value)}
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#007AFF]/20 focus:border-[#007AFF] resize-none"
                  placeholder="Share your experience with our service..."
                />
              </div>

              <button
                type="submit"
                disabled={rating === 0}
                className="px-6 py-3 bg-[#007AFF] text-white rounded-lg hover:bg-[#0051D5] transition-colors disabled:bg-gray-300 disabled:cursor-not-allowed"
              >
                Submit Feedback
              </button>
            </form>
          )}
        </div>
      </div>

      {/* Footer */}
      <div className="bg-white border-t border-gray-200 mt-12">
        <div className="max-w-5xl mx-auto px-6 py-6 text-center text-gray-600">
          <p>Need help? Contact us at support@cludobits.com</p>
        </div>
      </div>
    </div>
  );
}
