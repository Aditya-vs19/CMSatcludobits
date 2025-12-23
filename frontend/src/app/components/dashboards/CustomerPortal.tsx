import { useState } from 'react';
import { Star, Download, FileText, CheckCircle, ArrowLeft, Plus, Ticket as TicketIcon, Clock, AlertCircle } from 'lucide-react';

interface CustomerPortalProps {
  trackingId: string;
  onLogout: () => void;
}

type ViewMode = 'list' | 'detail' | 'create';

interface Ticket {
  id: string;
  title: string;
  status: 'Open' | 'In Progress' | 'Resolved' | 'Closed';
  category: 'Hardware' | 'Software' | 'Network' | 'Other';
  assignedEngineer: string;
  createdDate: string;
  resolvedDate?: string;
  lastUpdated: string;
  description: string;
  resolution?: string;
  scrAvailable: boolean;
  scrStatus?: string;
}

// Mock customer tickets
const customerTickets: Ticket[] = [
  {
    id: 'TCK-2401',
    title: 'Printer Not Working',
    status: 'Resolved',
    category: 'Hardware',
    assignedEngineer: 'Sarah Mitchell',
    createdDate: 'Dec 20, 2024',
    resolvedDate: 'Dec 22, 2024',
    lastUpdated: '2 days ago',
    description: 'Office printer on 3rd floor is not responding. Paper jam suspected.',
    resolution: 'Cleared paper jam and performed maintenance on office printer. Printer restored to full functionality.',
    scrAvailable: true,
    scrStatus: 'Pending Signature',
  },
  {
    id: 'TCK-2398',
    title: 'Email Configuration Issue',
    status: 'In Progress',
    category: 'Software',
    assignedEngineer: 'David Chen',
    createdDate: 'Dec 18, 2024',
    lastUpdated: '1 day ago',
    description: 'Unable to receive emails from external domain. Emails are being blocked or delayed.',
    scrAvailable: false,
  },
  {
    id: 'TCK-2390',
    title: 'Network Connection Drops',
    status: 'Closed',
    category: 'Network',
    assignedEngineer: 'Emily Rodriguez',
    createdDate: 'Dec 12, 2024',
    resolvedDate: 'Dec 15, 2024',
    lastUpdated: '1 week ago',
    description: 'Intermittent WiFi disconnections in conference room 3B.',
    resolution: 'Replaced faulty network access point and reconfigured network settings.',
    scrAvailable: true,
    scrStatus: 'Signed',
  },
  {
    id: 'TCK-2385',
    title: 'Monitor Replacement Request',
    status: 'Open',
    category: 'Hardware',
    assignedEngineer: 'James Wilson',
    createdDate: 'Dec 10, 2024',
    lastUpdated: '5 hours ago',
    description: 'Second monitor in workstation WS-205 has dead pixels and color distortion.',
    scrAvailable: false,
  },
];

export function CustomerPortal({ trackingId, onLogout }: CustomerPortalProps) {
  const [viewMode, setViewMode] = useState<ViewMode>('list');
  const [selectedTicket, setSelectedTicket] = useState<Ticket | null>(null);
  const [rating, setRating] = useState(0);
  const [feedback, setFeedback] = useState('');
  const [feedbackSubmitted, setFeedbackSubmitted] = useState(false);
  const [viewingSCR, setViewingSCR] = useState(false);
  
  // Create ticket form state
  const [newTicketTitle, setNewTicketTitle] = useState('');
  const [newTicketDescription, setNewTicketDescription] = useState('');
  const [newTicketCategory, setNewTicketCategory] = useState<'Hardware' | 'Software' | 'Network' | 'Other'>('Hardware');
  const [isCreating, setIsCreating] = useState(false);

  const handleViewTicketDetails = (ticket: Ticket) => {
    setSelectedTicket(ticket);
    setViewMode('detail');
    setFeedbackSubmitted(false);
    setRating(0);
    setFeedback('');
  };

  const handleCreateTicket = () => {
    setViewMode('create');
    setNewTicketTitle('');
    setNewTicketDescription('');
    setNewTicketCategory('Hardware');
  };

  const handleSubmitNewTicket = (e: React.FormEvent) => {
    e.preventDefault();
    setIsCreating(true);
    
    // Simulate ticket creation
    setTimeout(() => {
      const newTicket: Ticket = {
        id: `TCK-${2400 + customerTickets.length + 1}`,
        title: newTicketTitle,
        status: 'Open',
        category: newTicketCategory,
        assignedEngineer: 'Pending Assignment',
        createdDate: 'Just now',
        lastUpdated: 'Just now',
        description: newTicketDescription,
        scrAvailable: false,
      };
      
      customerTickets.unshift(newTicket);
      setSelectedTicket(newTicket);
      setViewMode('detail');
      setIsCreating(false);
    }, 800);
  };

  const handleBackToList = () => {
    setViewMode('list');
    setSelectedTicket(null);
  };

  const handleFeedbackSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFeedbackSubmitted(true);
  };

  const handleDownload = () => {
    // Simulate download
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Open':
        return 'bg-gray-100 text-gray-700';
      case 'In Progress':
        return 'bg-[#007AFF]/10 text-[#007AFF]';
      case 'Resolved':
        return 'bg-green-50 text-green-600';
      case 'Closed':
        return 'bg-gray-100 text-gray-600';
      default:
        return 'bg-gray-100 text-gray-700';
    }
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Hardware':
        return '🖥️';
      case 'Software':
        return '💻';
      case 'Network':
        return '🌐';
      default:
        return '📋';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-5xl mx-auto px-6 py-6">
          <div className="flex items-center justify-between mb-4">
            <button
              onClick={onLogout}
              className="flex items-center gap-2 text-gray-600 hover:text-[#007AFF] transition-colors"
            >
              <ArrowLeft className="w-4 h-4" strokeWidth={1.5} />
              Back
            </button>
          </div>
          <h1 className="text-black mb-1">CludoBits IT Solutions</h1>
          <p className="text-gray-600">Customer Support Portal</p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-5xl mx-auto px-6 py-8">
        {viewMode === 'list' && (
          <div>
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-black mb-1">Open Tickets</h2>
              <button
                className="flex items-center gap-2 px-4 py-2 bg-[#007AFF] text-white rounded-lg hover:bg-[#0051D5] transition-colors"
                onClick={handleCreateTicket}
              >
                <Plus className="w-4 h-4" strokeWidth={1.5} />
                Create New Ticket
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {customerTickets.map((ticket) => (
                <div
                  key={ticket.id}
                  className="bg-white rounded-xl border border-gray-200 p-8"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <div className="text-gray-600 mb-2">Tracking ID</div>
                      <h2 className="text-black mb-4">{ticket.id}</h2>
                      <h3 className="text-black mb-3">{ticket.title}</h3>
                      <div className="flex gap-3">
                        <span className={`inline-flex px-3 py-1 rounded-full ${getStatusColor(ticket.status)}`}>
                          {ticket.status}
                        </span>
                        <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full">
                          {ticket.category}
                        </span>
                      </div>
                    </div>
                    {ticket.status === 'Resolved' && (
                      <CheckCircle className="w-12 h-12 text-green-600" strokeWidth={1.5} />
                    )}
                  </div>

                  <div className="border-t border-gray-200 pt-6">
                    <h4 className="text-black mb-4">Ticket Timeline</h4>
                    <div className="space-y-4">
                      <div className="flex gap-4">
                        <div className="w-2 h-2 bg-gray-400 rounded-full mt-2"></div>
                        <div className="flex-1">
                          <div className="text-gray-900 mb-1">Ticket Created</div>
                          <div className="text-gray-600">{ticket.createdDate}</div>
                        </div>
                      </div>
                      <div className="flex gap-4">
                        <div className="w-2 h-2 bg-[#007AFF] rounded-full mt-2"></div>
                        <div className="flex-1">
                          <div className="text-gray-900 mb-1">Assigned to Engineer</div>
                          <div className="text-gray-600">{ticket.assignedEngineer}</div>
                        </div>
                      </div>
                      {ticket.resolvedDate && (
                        <div className="flex gap-4">
                          <div className="w-2 h-2 bg-green-600 rounded-full mt-2"></div>
                          <div className="flex-1">
                            <div className="text-gray-900 mb-1">Ticket Resolved</div>
                            <div className="text-gray-600">{ticket.resolvedDate}</div>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="border-t border-gray-200 pt-6 mt-6">
                    <h4 className="text-black mb-3">Issue Description</h4>
                    <p className="text-gray-700 leading-relaxed mb-6">{ticket.description}</p>

                    {ticket.status === 'Resolved' && (
                      <>
                        <h4 className="text-black mb-3">Resolution</h4>
                        <p className="text-gray-700 leading-relaxed">{ticket.resolution}</p>
                      </>
                    )}
                  </div>

                  <button
                    className="mt-6 px-4 py-2 bg-[#007AFF] text-white rounded-lg hover:bg-[#0051D5] transition-colors"
                    onClick={() => handleViewTicketDetails(ticket)}
                  >
                    View Details
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

        {viewMode === 'detail' && selectedTicket && (
          <div>
            <div className="flex items-center justify-between mb-6">
              <button
                className="flex items-center gap-2 text-gray-600 hover:text-[#007AFF] transition-colors"
                onClick={handleBackToList}
              >
                <ArrowLeft className="w-4 h-4" strokeWidth={1.5} />
                Back to List
              </button>
            </div>

            {/* Ticket Status Card */}
            <div className="bg-white rounded-xl border border-gray-200 p-8 mb-6">
              <div className="flex items-start justify-between mb-6">
                <div>
                  <div className="text-gray-600 mb-2">Tracking ID</div>
                  <h2 className="text-black mb-4">{selectedTicket.id}</h2>
                  <h3 className="text-black mb-3">{selectedTicket.title}</h3>
                  <div className="flex gap-3">
                    <span className={`inline-flex px-3 py-1 rounded-full ${getStatusColor(selectedTicket.status)}`}>
                      {selectedTicket.status}
                    </span>
                    <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full">
                      {selectedTicket.category}
                    </span>
                  </div>
                </div>
                {selectedTicket.status === 'Resolved' && (
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
                      <div className="text-gray-600">{selectedTicket.createdDate}</div>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-2 h-2 bg-[#007AFF] rounded-full mt-2"></div>
                    <div className="flex-1">
                      <div className="text-gray-900 mb-1">Assigned to Engineer</div>
                      <div className="text-gray-600">{selectedTicket.assignedEngineer}</div>
                    </div>
                  </div>
                  {selectedTicket.resolvedDate && (
                    <div className="flex gap-4">
                      <div className="w-2 h-2 bg-green-600 rounded-full mt-2"></div>
                      <div className="flex-1">
                        <div className="text-gray-900 mb-1">Ticket Resolved</div>
                        <div className="text-gray-600">{selectedTicket.resolvedDate}</div>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Issue Details */}
              <div className="border-t border-gray-200 pt-6 mt-6">
                <h4 className="text-black mb-3">Issue Description</h4>
                <p className="text-gray-700 leading-relaxed mb-6">{selectedTicket.description}</p>

                {selectedTicket.status === 'Resolved' && (
                  <>
                    <h4 className="text-black mb-3">Resolution</h4>
                    <p className="text-gray-700 leading-relaxed">{selectedTicket.resolution}</p>
                  </>
                )}
              </div>
            </div>

            {/* Service Call Report */}
            {selectedTicket.scrAvailable && (
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
                    {selectedTicket.scrStatus}
                  </span>
                </div>

                <p className="text-gray-700 mb-6">
                  A detailed service call report has been generated for this ticket. Please review and sign the report.
                </p>

                <div className="flex gap-3">
                  <button
                    className="flex-1 px-4 py-2 bg-[#007AFF] text-white rounded-lg hover:bg-[#0051D5] transition-colors flex items-center justify-center gap-2"
                    onClick={() => setViewingSCR(true)}
                  >
                    <FileText className="w-4 h-4" strokeWidth={1.5} />
                    View & Sign Report
                  </button>
                  <button
                    className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors flex items-center gap-2"
                    onClick={handleDownload}
                  >
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
        )}

        {viewMode === 'create' && (
          <div>
            <div className="flex items-center justify-between mb-6">
              <button
                className="flex items-center gap-2 text-gray-600 hover:text-[#007AFF] transition-colors"
                onClick={handleBackToList}
              >
                <ArrowLeft className="w-4 h-4" strokeWidth={1.5} />
                Back to List
              </button>
            </div>

            {/* Create New Ticket Form */}
            <div className="bg-white rounded-xl border border-gray-200 p-8">
              <h3 className="text-black mb-4">Create New Ticket</h3>
              <form onSubmit={handleSubmitNewTicket}>
                {/* Title */}
                <div className="mb-6">
                  <label className="block text-gray-700 mb-2">Title</label>
                  <input
                    type="text"
                    value={newTicketTitle}
                    onChange={(e) => setNewTicketTitle(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#007AFF]/20 focus:border-[#007AFF]"
                    placeholder="Enter ticket title..."
                    required
                  />
                </div>

                {/* Category */}
                <div className="mb-6">
                  <label className="block text-gray-700 mb-2">Category</label>
                  <select
                    value={newTicketCategory}
                    onChange={(e) => setNewTicketCategory(e.target.value as 'Hardware' | 'Software' | 'Network' | 'Other')}
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#007AFF]/20 focus:border-[#007AFF]"
                    required
                  >
                    <option value="Hardware">Hardware</option>
                    <option value="Software">Software</option>
                    <option value="Network">Network</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                {/* Description */}
                <div className="mb-6">
                  <label className="block text-gray-700 mb-2">Description</label>
                  <textarea
                    value={newTicketDescription}
                    onChange={(e) => setNewTicketDescription(e.target.value)}
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#007AFF]/20 focus:border-[#007AFF] resize-none"
                    placeholder="Enter ticket description..."
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="px-6 py-3 bg-[#007AFF] text-white rounded-lg hover:bg-[#0051D5] transition-colors"
                >
                  {isCreating ? 'Creating...' : 'Create Ticket'}
                </button>
              </form>
            </div>
          </div>
        )}
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