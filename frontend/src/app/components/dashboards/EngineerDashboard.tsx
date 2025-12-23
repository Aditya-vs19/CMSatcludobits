import { useState } from 'react';
import { Search, Eye, CheckCircle, Clock } from 'lucide-react';

interface Ticket {
  id: string;
  title: string;
  category: string;
  priority: 'High' | 'Medium' | 'Low';
  status: 'Assigned' | 'In Progress' | 'Resolved';
  customer: string;
  assignedDate: string;
  description: string;
}

const assignedTickets: Ticket[] = [
  {
    id: 'TCK-2401',
    title: 'Printer Not Working',
    category: 'Hardware',
    priority: 'High',
    status: 'In Progress',
    customer: 'ABC Corporation',
    assignedDate: '2 hours ago',
    description: 'Office printer on 3rd floor is not responding. Paper jam suspected.',
  },
  {
    id: 'TCK-2407',
    title: 'VPN Connection Error',
    category: 'Network',
    priority: 'High',
    status: 'Assigned',
    customer: 'Cloud Systems',
    assignedDate: '1 hour ago',
    description: 'Remote employees unable to connect to VPN.',
  },
  {
    id: 'TCK-2395',
    title: 'Network Configuration',
    category: 'Network',
    priority: 'Medium',
    status: 'Resolved',
    customer: 'Digital Dynamics',
    assignedDate: '3 days ago',
    description: 'Setup network configuration for new office location.',
  },
];

export function EngineerDashboard() {
  const [selectedTicket, setSelectedTicket] = useState<Ticket | null>(assignedTickets[0]);

  const getStatusColor = (status: Ticket['status']) => {
    switch (status) {
      case 'Assigned':
        return 'bg-gray-100 text-gray-700';
      case 'In Progress':
        return 'bg-[#007AFF]/10 text-[#007AFF]';
      case 'Resolved':
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

  const assignedCount = assignedTickets.filter((t) => t.status === 'Assigned').length;
  const inProgressCount = assignedTickets.filter((t) => t.status === 'In Progress').length;
  const resolvedCount = assignedTickets.filter((t) => t.status === 'Resolved').length;

  return (
    <div>
      {/* Page Header */}
      <div className="mb-8">
        <h1 className="text-black mb-1">My Assigned Tickets</h1>
        <p className="text-gray-600">View and update your ticket assignments</p>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-3 gap-6 mb-8">
        <div className="bg-white rounded-xl border border-gray-200 p-6">
          <div className="flex items-center gap-3 mb-2">
            <Clock className="w-5 h-5 text-gray-600" strokeWidth={1.5} />
            <div className="text-gray-600">Assigned</div>
          </div>
          <div className="text-3xl text-black">{assignedCount}</div>
        </div>
        <div className="bg-white rounded-xl border border-gray-200 p-6">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-5 h-5 bg-[#007AFF]/10 rounded-full flex items-center justify-center">
              <div className="w-2 h-2 bg-[#007AFF] rounded-full"></div>
            </div>
            <div className="text-gray-600">In Progress</div>
          </div>
          <div className="text-3xl text-[#007AFF]">{inProgressCount}</div>
        </div>
        <div className="bg-white rounded-xl border border-gray-200 p-6">
          <div className="flex items-center gap-3 mb-2">
            <CheckCircle className="w-5 h-5 text-green-600" strokeWidth={1.5} />
            <div className="text-gray-600">Resolved</div>
          </div>
          <div className="text-3xl text-green-600">{resolvedCount}</div>
        </div>
      </div>

      {/* Search Bar */}
      <div className="bg-white rounded-xl border border-gray-200 p-4 mb-6">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" strokeWidth={1.5} />
          <input
            type="text"
            placeholder="Search your tickets..."
            className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#007AFF]/20 focus:border-[#007AFF]"
          />
        </div>
      </div>

      {/* Main Content - Split View */}
      <div className="grid grid-cols-2 gap-6">
        {/* Tickets List */}
        <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
          <div className="border-b border-gray-200 px-6 py-4">
            <h3 className="text-black">Your Tickets ({assignedTickets.length})</h3>
          </div>
          <div className="overflow-y-auto" style={{ maxHeight: '600px' }}>
            {assignedTickets.map((ticket) => (
              <div
                key={ticket.id}
                onClick={() => setSelectedTicket(ticket)}
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
                  <span>{ticket.assignedDate}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Ticket Details & Actions */}
        {selectedTicket && (
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

              {/* Assigned Date */}
              <div>
                <div className="text-gray-600 mb-2">Assigned</div>
                <div className="text-black">{selectedTicket.assignedDate}</div>
              </div>

              {/* Description */}
              <div>
                <div className="text-gray-600 mb-2">Description</div>
                <div className="text-black leading-relaxed">{selectedTicket.description}</div>
              </div>

              {/* Status Update Actions */}
              <div className="pt-4 border-t border-gray-200">
                <div className="text-gray-700 mb-3">Update Status</div>
                <div className="space-y-2">
                  {selectedTicket.status === 'Assigned' && (
                    <button className="w-full px-4 py-2 bg-[#007AFF] text-white rounded-lg hover:bg-[#0051D5] transition-colors">
                      Start Working (Mark In Progress)
                    </button>
                  )}
                  {selectedTicket.status === 'In Progress' && (
                    <>
                      <button className="w-full px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors">
                        Mark as Resolved
                      </button>
                      <button className="w-full px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors">
                        Add Work Notes
                      </button>
                    </>
                  )}
                  {selectedTicket.status === 'Resolved' && (
                    <button className="w-full px-4 py-2 bg-[#007AFF] text-white rounded-lg hover:bg-[#0051D5] transition-colors">
                      Generate Service Call Report (SCR)
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
