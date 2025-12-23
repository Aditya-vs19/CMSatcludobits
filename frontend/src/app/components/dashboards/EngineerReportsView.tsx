import { Download, Eye } from 'lucide-react';

interface ServiceCallReport {
  id: string;
  ticketId: string;
  title: string;
  customer: string;
  completedDate: string;
  status: 'Draft' | 'Submitted';
}

const myReports: ServiceCallReport[] = [
  {
    id: 'SCR-1026',
    ticketId: 'TCK-2401',
    title: 'Printer Repair Service',
    customer: 'ABC Corporation',
    completedDate: 'Dec 22, 2024',
    status: 'Submitted',
  },
  {
    id: 'SCR-1027',
    ticketId: 'TCK-2395',
    title: 'Network Configuration Service',
    customer: 'Digital Dynamics',
    completedDate: 'Dec 17, 2024',
    status: 'Submitted',
  },
];

export function EngineerReportsView() {
  const getStatusColor = (status: ServiceCallReport['status']) => {
    return status === 'Submitted'
      ? 'bg-green-50 text-green-600'
      : 'bg-gray-100 text-gray-700';
  };

  return (
    <div>
      {/* Page Header */}
      <div className="mb-8">
        <h1 className="text-black mb-1">My Service Call Reports</h1>
        <p className="text-gray-600">
          View service call reports you have generated
        </p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 gap-6 mb-8">
        <div className="bg-white rounded-xl border border-gray-200 p-6">
          <div className="text-gray-600 mb-2">Total Reports</div>
          <div className="text-3xl text-black">{myReports.length}</div>
        </div>
        <div className="bg-white rounded-xl border border-gray-200 p-6">
          <div className="text-gray-600 mb-2">Submitted</div>
          <div className="text-3xl text-green-600">
            {myReports.filter((r) => r.status === 'Submitted').length}
          </div>
        </div>
      </div>

      {/* Reports Table */}
      <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
        <div className="border-b border-gray-200 px-6 py-4">
          <h3 className="text-black">Recent Reports</h3>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-200 bg-gray-50">
                <th className="px-6 py-4 text-left text-gray-700">SCR ID</th>
                <th className="px-6 py-4 text-left text-gray-700">Ticket ID</th>
                <th className="px-6 py-4 text-left text-gray-700">Title</th>
                <th className="px-6 py-4 text-left text-gray-700">Customer</th>
                <th className="px-6 py-4 text-left text-gray-700">Completed Date</th>
                <th className="px-6 py-4 text-left text-gray-700">Status</th>
                <th className="px-6 py-4 text-left text-gray-700">Actions</th>
              </tr>
            </thead>
            <tbody>
              {myReports.map((report) => (
                <tr
                  key={report.id}
                  className="border-b border-gray-100 hover:bg-gray-50 transition-colors"
                >
                  <td className="px-6 py-4 text-gray-900">{report.id}</td>
                  <td className="px-6 py-4 text-[#007AFF]">{report.ticketId}</td>
                  <td className="px-6 py-4 text-black">{report.title}</td>
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
    </div>
  );
}
