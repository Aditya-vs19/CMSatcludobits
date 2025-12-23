import { SummaryCard } from './SummaryCard';
import { TicketsTable } from './TicketsTable';

export function DashboardView() {
  return (
    <div>
      {/* Page Header */}
      <div className="mb-8">
        <h1 className="text-black mb-1">Dashboard</h1>
        <p className="text-gray-600">
          Monitor and manage all support tickets in real-time
        </p>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-4 gap-6 mb-8">
        <SummaryCard title="Total Tickets" value={247} color="gray" />
        <SummaryCard title="Open Tickets" value={42} color="orange" />
        <SummaryCard title="In Progress" value={18} color="blue" />
        <SummaryCard title="Closed" value={187} color="green" />
      </div>

      {/* Recent Tickets Section */}
      <div className="mb-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-black">Recent Tickets</h2>
          <div className="flex gap-3">
            <button className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors">
              Filter
            </button>
            <button className="px-4 py-2 bg-[#007AFF] text-white rounded-lg hover:bg-[#0051D5] transition-colors">
              Create Ticket
            </button>
          </div>
        </div>
      </div>

      {/* Tickets Table */}
      <TicketsTable />

      {/* Info Section - Visual hints about features */}
      <div className="mt-8 grid grid-cols-3 gap-6">
        <div className="bg-white rounded-xl border border-gray-200 p-6">
          <div className="w-10 h-10 bg-[#007AFF]/10 rounded-lg flex items-center justify-center mb-4">
            <svg
              className="w-5 h-5 text-[#007AFF]"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
              />
            </svg>
          </div>
          <h3 className="text-black mb-2">Email Integration</h3>
          <p className="text-gray-600">
            Automatically creates tickets from customer emails
          </p>
        </div>

        <div className="bg-white rounded-xl border border-gray-200 p-6">
          <div className="w-10 h-10 bg-[#007AFF]/10 rounded-lg flex items-center justify-center mb-4">
            <svg
              className="w-5 h-5 text-[#007AFF]"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z"
              />
            </svg>
          </div>
          <h3 className="text-black mb-2">AI Classification</h3>
          <p className="text-gray-600">
            Smart categorization and priority assignment
          </p>
        </div>

        <div className="bg-white rounded-xl border border-gray-200 p-6">
          <div className="w-10 h-10 bg-[#007AFF]/10 rounded-lg flex items-center justify-center mb-4">
            <svg
              className="w-5 h-5 text-[#007AFF]"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
              />
            </svg>
          </div>
          <h3 className="text-black mb-2">Service Call Reports</h3>
          <p className="text-gray-600">
            Generate detailed SCR documentation automatically
          </p>
        </div>
      </div>
    </div>
  );
}
