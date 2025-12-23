import { Search, ListFilter, Eye, ChevronRight } from 'lucide-react';
import { useState } from 'react';

interface Ticket {
  id: string;
  title: string;
  category: 'Hardware' | 'Software' | 'Network' | 'Other';
  priority: 'High' | 'Medium' | 'Low';
  engineer: string;
  status: 'Open' | 'In Progress' | 'Closed';
  lastUpdated: string;
  description: string;
  customer: string;
}

const allTickets: Ticket[] = [
  {
    id: 'TCK-2401',
    title: 'Printer Not Working',
    category: 'Hardware',
    priority: 'High',
    engineer: 'Sarah Mitchell',
    status: 'In Progress',
    lastUpdated: '2 hours ago',
    description: 'Office printer on 3rd floor is not responding. Paper jam suspected.',
    customer: 'ABC Corporation',
  },
  {
    id: 'TCK-2402',
    title: 'Software Installation Issue',
    category: 'Software',
    priority: 'Medium',
    engineer: 'David Chen',
    status: 'Open',
    lastUpdated: '5 hours ago',
    description: 'Unable to install latest CRM software update on Windows 11.',
    customer: 'Tech Solutions Inc',
  },
  {
    id: 'TCK-2403',
    title: 'Network Connection Dropped',
    category: 'Network',
    priority: 'High',
    engineer: 'Emily Rodriguez',
    status: 'In Progress',
    lastUpdated: '1 day ago',
    description: 'Intermittent network connectivity issues in Building A.',
    customer: 'Global Enterprises',
  },
  {
    id: 'TCK-2404',
    title: 'Email Configuration',
    category: 'Software',
    priority: 'Low',
    engineer: 'Michael Brown',
    status: 'Closed',
    lastUpdated: '2 days ago',
    description: 'Setup new email account for employee.',
    customer: 'Metro Services',
  },
  {
    id: 'TCK-2405',
    title: 'Access Request',
    category: 'Other',
    priority: 'Medium',
    engineer: 'Lisa Anderson',
    status: 'Open',
    lastUpdated: '3 hours ago',
    description: 'New employee needs access to internal systems.',
    customer: 'Digital Dynamics',
  },
  {
    id: 'TCK-2406',
    title: 'Monitor Replacement',
    category: 'Hardware',
    priority: 'Low',
    engineer: 'James Wilson',
    status: 'Closed',
    lastUpdated: '1 week ago',
    description: 'Replace faulty monitor in conference room.',
    customer: 'Innovate Ltd',
  },
  {
    id: 'TCK-2407',
    title: 'VPN Connection Error',
    category: 'Network',
    priority: 'High',
    engineer: 'Sarah Mitchell',
    status: 'Open',
    lastUpdated: '1 hour ago',
    description: 'Remote employees unable to connect to VPN.',
    customer: 'Cloud Systems',
  },
  {
    id: 'TCK-2408',
    title: 'Database Backup Failure',
    category: 'Software',
    priority: 'High',
    engineer: 'David Chen',
    status: 'In Progress',
    lastUpdated: '4 hours ago',
    description: 'Automated backup script failed overnight.',
    customer: 'DataCore Inc',
  },
];

export function TicketsView() {
  const [selectedTicket, setSelectedTicket] = useState<Ticket | null>(allTickets[0]);
  const [statusFilter, setStatusFilter] = useState<string>('all');
  const [priorityFilter, setPriorityFilter] = useState<string>('all');
  const [showStatusModal, setShowStatusModal] = useState(false);
  const [showSCRView, setShowSCRView] = useState(false);
  const [showFullDetails, setShowFullDetails] = useState(false);
  const [viewMode, setViewMode] = useState<'list' | 'detail'>('list');

  const handleViewTicketDetail = (ticket: Ticket) => {
    setSelectedTicket(ticket);
    setViewMode('detail');
  };

  const handleBackToList = () => {
    setViewMode('list');
  };

  const handleUpdateStatus = () => {
    setShowStatusModal(true);
    setTimeout(() => setShowStatusModal(false), 2000);
  };

  const handleGenerateSCR = () => {
    setShowSCRView(true);
    setTimeout(() => setShowSCRView(false), 2000);
  };

  const getStatusColor = (status: Ticket['status']) => {
    switch (status) {
      case 'Open':
        return 'bg-gray-100 text-gray-700';
      case 'In Progress':
        return 'bg-[#007AFF]/10 text-[#007AFF]';
      case 'Closed':
        return 'bg-green-50 text-green-600';
    }
  };

  const getPriorityColor = (priority: Ticket['priority']) => {
    switch (priority) {
      case 'High':
        return 'text-orange-600';
      case 'Medium':
        return 'text-[#007AFF]';
      case 'Low':
        return 'text-gray-600';
    }
  };

  return (
    <div>
      {/* Page Header */}
      <div className="mb-8">
        <h1 className="text-black mb-1">Tickets</h1>
        <p className="text-gray-600">View and manage all support tickets</p>
      </div>

      {/* Search and Filters */}
      <div className="bg-white rounded-xl border border-gray-200 p-4 mb-6">
        <div className="flex gap-4">
          {/* Search Bar */}
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" strokeWidth={1.5} />
            <input
              type="text"
              placeholder="Search tickets by ID, title, or customer..."
              className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#007AFF]/20 focus:border-[#007AFF]"
            />
          </div>

          {/* Status Filter */}
          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#007AFF]/20 focus:border-[#007AFF] text-gray-700"
          >
            <option value="all">All Status</option>
            <option value="open">Open</option>
            <option value="in-progress">In Progress</option>
            <option value="closed">Closed</option>
          </select>

          {/* Priority Filter */}
          <select
            value={priorityFilter}
            onChange={(e) => setPriorityFilter(e.target.value)}
            className="px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#007AFF]/20 focus:border-[#007AFF] text-gray-700"
          >
            <option value="all">All Priority</option>
            <option value="high">High</option>
            <option value="medium">Medium</option>
            <option value="low">Low</option>
          </select>
        </div>
      </div>

      {/* Main Content - Split View */}
      <div className="grid grid-cols-2 gap-6">
        {/* Tickets List */}
        <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
          <div className="border-b border-gray-200 px-6 py-4">
            <h3 className="text-black">All Tickets ({allTickets.length})</h3>
          </div>
          <div className="overflow-y-auto" style={{ maxHeight: '600px' }}>
            {allTickets.map((ticket) => (
              <div
                key={ticket.id}
                onClick={() => handleViewTicketDetail(ticket)}
                className={`px-6 py-4 border-b border-gray-100 cursor-pointer transition-colors ${
                  selectedTicket?.id === ticket.id
                    ? 'bg-[#007AFF]/5 border-l-4 border-l-[#007AFF]'
                    : 'hover:bg-gray-50'
                }`}
              >
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <div className="text-gray-900 mb-1">{ticket.id}</div>
                    <div className="text-black">{ticket.title}</div>
                  </div>
                  <span
                    className={`inline-flex px-2 py-1 rounded-md text-sm ${getStatusColor(
                      ticket.status
                    )}`}
                  >
                    {ticket.status}
                  </span>
                </div>
                <div className="flex items-center gap-4 text-gray-600">
                  <span className={getPriorityColor(ticket.priority)}>{ticket.priority}</span>
                  <span>•</span>
                  <span>{ticket.category}</span>
                  <span>•</span>
                  <span>{ticket.lastUpdated}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Ticket Details Panel */}
        {viewMode === 'detail' && selectedTicket && (
          <div className="bg-white rounded-xl border border-gray-200 p-6">
            <div className="flex items-start justify-between mb-6">
              <div>
                <div className="text-gray-600 mb-1">{selectedTicket.id}</div>
                <h2 className="text-black mb-3">{selectedTicket.title}</h2>
                <div className="flex gap-2">
                  <span
                    className={`inline-flex px-3 py-1 rounded-full ${getStatusColor(
                      selectedTicket.status
                    )}`}
                  >
                    {selectedTicket.status}
                  </span>
                  <span className={`px-3 py-1 ${getPriorityColor(selectedTicket.priority)}`}>
                    {selectedTicket.priority} Priority
                  </span>
                </div>
              </div>
              <button
                className="text-gray-500 hover:text-gray-700"
                onClick={handleBackToList}
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-6">
              {/* Customer Info */}
              <div>
                <div className="text-gray-600 mb-2">Customer</div>
                <div className="text-black">{selectedTicket.customer}</div>
              </div>

              {/* Category */}
              <div>
                <div className="text-gray-600 mb-2">Category</div>
                <div className="text-black">{selectedTicket.category}</div>
              </div>

              {/* Assigned Engineer */}
              <div>
                <div className="text-gray-600 mb-2">Assigned Engineer</div>
                <div className="text-black">{selectedTicket.engineer}</div>
              </div>

              {/* Description */}
              <div>
                <div className="text-gray-600 mb-2">Description</div>
                <div className="text-black leading-relaxed">{selectedTicket.description}</div>
              </div>

              {/* Last Updated */}
              <div>
                <div className="text-gray-600 mb-2">Last Updated</div>
                <div className="text-black">{selectedTicket.lastUpdated}</div>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 border-t border-gray-200 space-y-3">
                <button
                  className="w-full px-4 py-2 bg-[#007AFF] text-white rounded-lg hover:bg-[#0051D5] transition-colors"
                  onClick={handleUpdateStatus}
                >
                  Update Status
                </button>
                <button
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors"
                  onClick={handleGenerateSCR}
                >
                  Generate SCR
                </button>
                <button
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors"
                  onClick={() => setShowFullDetails(true)}
                >
                  View Full Details
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}