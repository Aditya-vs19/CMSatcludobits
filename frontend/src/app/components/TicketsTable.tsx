import { ChevronRight } from 'lucide-react';

interface Ticket {
  id: string;
  category: 'Hardware' | 'Software' | 'Network' | 'Other';
  priority: 'High' | 'Medium' | 'Low';
  engineer: string;
  status: 'Open' | 'In Progress' | 'Closed';
  lastUpdated: string;
}

const tickets: Ticket[] = [
  {
    id: 'TCK-2401',
    category: 'Hardware',
    priority: 'High',
    engineer: 'Sarah Mitchell',
    status: 'In Progress',
    lastUpdated: '2 hours ago',
  },
  {
    id: 'TCK-2402',
    category: 'Software',
    priority: 'Medium',
    engineer: 'David Chen',
    status: 'Open',
    lastUpdated: '5 hours ago',
  },
  {
    id: 'TCK-2403',
    category: 'Network',
    priority: 'High',
    engineer: 'Emily Rodriguez',
    status: 'In Progress',
    lastUpdated: '1 day ago',
  },
  {
    id: 'TCK-2404',
    category: 'Software',
    priority: 'Low',
    engineer: 'Michael Brown',
    status: 'Closed',
    lastUpdated: '2 days ago',
  },
  {
    id: 'TCK-2405',
    category: 'Other',
    priority: 'Medium',
    engineer: 'Lisa Anderson',
    status: 'Open',
    lastUpdated: '3 hours ago',
  },
  {
    id: 'TCK-2406',
    category: 'Hardware',
    priority: 'Low',
    engineer: 'James Wilson',
    status: 'Closed',
    lastUpdated: '1 week ago',
  },
];

export function TicketsTable() {
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
    <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-gray-200 bg-gray-50">
              <th className="px-6 py-4 text-left text-gray-700">Ticket ID</th>
              <th className="px-6 py-4 text-left text-gray-700">Category</th>
              <th className="px-6 py-4 text-left text-gray-700">Priority</th>
              <th className="px-6 py-4 text-left text-gray-700">Assigned Engineer</th>
              <th className="px-6 py-4 text-left text-gray-700">Status</th>
              <th className="px-6 py-4 text-left text-gray-700">Last Updated</th>
              <th className="px-6 py-4 text-left text-gray-700">Action</th>
            </tr>
          </thead>
          <tbody>
            {tickets.map((ticket) => (
              <tr
                key={ticket.id}
                className="border-b border-gray-100 hover:bg-gray-50 transition-colors"
              >
                <td className="px-6 py-4 text-gray-900">{ticket.id}</td>
                <td className="px-6 py-4 text-gray-700">{ticket.category}</td>
                <td className={`px-6 py-4 ${getPriorityColor(ticket.priority)}`}>
                  {ticket.priority}
                </td>
                <td className="px-6 py-4 text-gray-700">{ticket.engineer}</td>
                <td className="px-6 py-4">
                  <span
                    className={`inline-flex px-3 py-1 rounded-full ${getStatusColor(
                      ticket.status
                    )}`}
                  >
                    {ticket.status}
                  </span>
                </td>
                <td className="px-6 py-4 text-gray-600">{ticket.lastUpdated}</td>
                <td className="px-6 py-4">
                  <button className="text-[#007AFF] hover:text-[#0051D5] flex items-center gap-1 transition-colors">
                    View
                    <ChevronRight className="w-4 h-4" strokeWidth={2} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
