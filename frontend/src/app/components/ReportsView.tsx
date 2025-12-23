import { Download, Eye, FileText } from 'lucide-react';

interface ServiceCallReport {
  id: string;
  ticketId: string;
  title: string;
  engineer: string;
  customer: string;
  completedDate: string;
  status: 'Pending Signature' | 'Signed';
  workDescription: string;
}

const reports: ServiceCallReport[] = [
  {
    id: 'SCR-1024',
    ticketId: 'TCK-2404',
    title: 'Email Configuration Service',
    engineer: 'Michael Brown',
    customer: 'Metro Services',
    completedDate: 'Dec 20, 2024',
    status: 'Signed',
    workDescription: 'Configured new email account and set up email client on workstation.',
  },
  {
    id: 'SCR-1025',
    ticketId: 'TCK-2406',
    title: 'Monitor Replacement Service',
    engineer: 'James Wilson',
    customer: 'Innovate Ltd',
    completedDate: 'Dec 15, 2024',
    status: 'Signed',
    workDescription: 'Replaced faulty 27-inch monitor in conference room with new unit.',
  },
  {
    id: 'SCR-1026',
    ticketId: 'TCK-2401',
    title: 'Printer Repair Service',
    engineer: 'Sarah Mitchell',
    customer: 'ABC Corporation',
    completedDate: 'Dec 22, 2024',
    status: 'Pending Signature',
    workDescription: 'Cleared paper jam and performed maintenance on office printer.',
  },
  {
    id: 'SCR-1027',
    ticketId: 'TCK-2403',
    title: 'Network Troubleshooting',
    engineer: 'Emily Rodriguez',
    customer: 'Global Enterprises',
    completedDate: 'Dec 21, 2024',
    status: 'Pending Signature',
    workDescription: 'Diagnosed and resolved network connectivity issues in Building A.',
  },
  {
    id: 'SCR-1028',
    ticketId: 'TCK-2398',
    title: 'Server Maintenance',
    engineer: 'David Chen',
    customer: 'Tech Solutions Inc',
    completedDate: 'Dec 18, 2024',
    status: 'Signed',
    workDescription: 'Performed routine server maintenance and security updates.',
  },
];

export function ReportsView() {
  const getStatusColor = (status: ServiceCallReport['status']) => {
    return status === 'Signed'
      ? 'bg-green-50 text-green-600'
      : 'bg-orange-50 text-orange-600';
  };

  return (
    <div>
      {/* Page Header */}
      <div className="mb-8">
        <h1 className="text-black mb-1">Service Call Reports (SCR)</h1>
        <p className="text-gray-600">
          View and manage generated service call reports
        </p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-3 gap-6 mb-8">
        <div className="bg-white rounded-xl border border-gray-200 p-6">
          <div className="text-gray-600 mb-2">Total Reports</div>
          <div className="text-3xl text-black">187</div>
        </div>
        <div className="bg-white rounded-xl border border-gray-200 p-6">
          <div className="text-gray-600 mb-2">Pending Signature</div>
          <div className="text-3xl text-orange-600">12</div>
        </div>
        <div className="bg-white rounded-xl border border-gray-200 p-6">
          <div className="text-gray-600 mb-2">Signed & Completed</div>
          <div className="text-3xl text-green-600">175</div>
        </div>
      </div>

      {/* Reports Table */}
      <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
        <div className="border-b border-gray-200 px-6 py-4 flex items-center justify-between">
          <h3 className="text-black">Recent Service Call Reports</h3>
          <button className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors">
            Filter by Status
          </button>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-200 bg-gray-50">
                <th className="px-6 py-4 text-left text-gray-700">SCR ID</th>
                <th className="px-6 py-4 text-left text-gray-700">Ticket ID</th>
                <th className="px-6 py-4 text-left text-gray-700">Title</th>
                <th className="px-6 py-4 text-left text-gray-700">Engineer</th>
                <th className="px-6 py-4 text-left text-gray-700">Customer</th>
                <th className="px-6 py-4 text-left text-gray-700">Completed Date</th>
                <th className="px-6 py-4 text-left text-gray-700">Status</th>
                <th className="px-6 py-4 text-left text-gray-700">Actions</th>
              </tr>
            </thead>
            <tbody>
              {reports.map((report) => (
                <tr
                  key={report.id}
                  className="border-b border-gray-100 hover:bg-gray-50 transition-colors"
                >
                  <td className="px-6 py-4 text-gray-900">{report.id}</td>
                  <td className="px-6 py-4 text-[#007AFF]">{report.ticketId}</td>
                  <td className="px-6 py-4 text-black">{report.title}</td>
                  <td className="px-6 py-4 text-gray-700">{report.engineer}</td>
                  <td className="px-6 py-4 text-gray-700">{report.customer}</td>
                  <td className="px-6 py-4 text-gray-600">{report.completedDate}</td>
                  <td className="px-6 py-4">
                    <span
                      className={`inline-flex px-3 py-1 rounded-full ${getStatusColor(
                        report.status
                      )}`}
                    >
                      {report.status}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex gap-2">
                      <button className="p-2 text-[#007AFF] hover:bg-[#007AFF]/10 rounded-lg transition-colors">
                        <Eye className="w-4 h-4" strokeWidth={1.5} />
                      </button>
                      <button className="p-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors">
                        <Download className="w-4 h-4" strokeWidth={1.5} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Sample SCR Document Preview */}
      <div className="mt-8 bg-white rounded-xl border border-gray-200 p-8">
        <div className="flex items-start justify-between mb-6">
          <div>
            <h3 className="text-black mb-2">Document Preview: SCR-1026</h3>
            <p className="text-gray-600">Printer Repair Service</p>
          </div>
          <div className="flex gap-2">
            <button className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors">
              <Download className="w-4 h-4 inline mr-2" strokeWidth={1.5} />
              Download PDF
            </button>
            <button className="px-4 py-2 bg-[#007AFF] text-white rounded-lg hover:bg-[#0051D5] transition-colors">
              Request Signature
            </button>
          </div>
        </div>

        {/* Document Content */}
        <div className="border border-gray-200 rounded-lg p-6 space-y-6">
          {/* Header */}
          <div className="border-b border-gray-200 pb-4">
            <h2 className="text-black mb-2">Service Call Report</h2>
            <div className="grid grid-cols-2 gap-4 text-gray-700">
              <div>
                <span className="text-gray-600">SCR ID:</span> SCR-1026
              </div>
              <div>
                <span className="text-gray-600">Ticket ID:</span> TCK-2401
              </div>
              <div>
                <span className="text-gray-600">Date:</span> Dec 22, 2024
              </div>
              <div>
                <span className="text-gray-600">Engineer:</span> Sarah Mitchell
              </div>
            </div>
          </div>

          {/* Customer Information */}
          <div>
            <h4 className="text-black mb-3">Customer Information</h4>
            <div className="text-gray-700 space-y-1">
              <div>ABC Corporation</div>
              <div>123 Business Park, Floor 3</div>
              <div>Contact: John Smith</div>
            </div>
          </div>

          {/* Work Performed */}
          <div>
            <h4 className="text-black mb-3">Work Performed</h4>
            <p className="text-gray-700 leading-relaxed">
              Responded to service call regarding non-functional office printer on 3rd floor.
              Upon inspection, identified paper jam in main feeder tray. Cleared obstruction,
              cleaned rollers, and performed test print. Printer restored to full functionality.
              Provided user with best practices to prevent future paper jams.
            </p>
          </div>

          {/* Parts & Materials */}
          <div>
            <h4 className="text-black mb-3">Parts & Materials Used</h4>
            <div className="text-gray-700">
              <div>- Cleaning supplies</div>
              <div>- Test paper</div>
            </div>
          </div>

          {/* Time Spent */}
          <div>
            <h4 className="text-black mb-3">Time Spent</h4>
            <div className="text-gray-700">1.5 hours</div>
          </div>

          {/* Signature Section */}
          <div className="border-t border-gray-200 pt-6">
            <div className="grid grid-cols-2 gap-8">
              <div>
                <div className="text-gray-600 mb-2">Engineer Signature</div>
                <div className="border-b border-gray-400 pb-1 mb-1">
                  <span className="italic text-gray-500">Sarah Mitchell</span>
                </div>
                <div className="text-gray-600">Dec 22, 2024</div>
              </div>
              <div>
                <div className="text-gray-600 mb-2">Customer Signature</div>
                <div className="border-b border-gray-400 pb-1 mb-1 h-6"></div>
                <div className="text-orange-600">Pending Signature</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
