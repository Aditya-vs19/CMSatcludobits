import { LayoutDashboard, Ticket, FileText, MessageSquare, Settings, LogOut } from 'lucide-react';

const adminNavItems = [
  { icon: LayoutDashboard, label: 'Dashboard', id: 'dashboard' },
  { icon: Ticket, label: 'Tickets', id: 'tickets' },
  { icon: FileText, label: 'Reports (SCR)', id: 'reports' },
  { icon: MessageSquare, label: 'Feedback', id: 'feedback' },
  { icon: Settings, label: 'Settings', id: 'settings' },
];

const engineerNavItems = [
  { icon: Ticket, label: 'My Tickets', id: 'my-tickets' },
  { icon: FileText, label: 'My Reports', id: 'my-reports' },
  { icon: Settings, label: 'Settings', id: 'settings' },
];

interface SidebarProps {
  activeTab: string;
  onTabChange: (tabId: string) => void;
  role: 'admin' | 'engineer';
  onLogout: () => void;
}

export function Sidebar({ activeTab, onTabChange, role, onLogout }: SidebarProps) {
  const navItems = role === 'admin' ? adminNavItems : engineerNavItems;

  return (
    <div className="fixed left-0 top-16 bottom-0 w-64 bg-white border-r border-gray-200 flex flex-col">
      <nav className="p-4 space-y-1 flex-1">
        {navItems.map((item) => {
          const Icon = item.icon;
          return (
            <button
              key={item.id}
              onClick={() => onTabChange(item.id)}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${
                activeTab === item.id
                  ? 'bg-[#007AFF]/10 text-[#007AFF]'
                  : 'text-gray-700 hover:bg-gray-50'
              }`}
            >
              <Icon className="w-5 h-5" strokeWidth={1.5} />
              <span>{item.label}</span>
            </button>
          );
        })}
      </nav>

      {/* Logout Button at bottom */}
      <div className="p-4 border-t border-gray-200">
        <button
          onClick={onLogout}
          className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-gray-700 hover:bg-red-50 hover:text-red-600 transition-all"
        >
          <LogOut className="w-5 h-5" strokeWidth={1.5} />
          <span>Logout</span>
        </button>
      </div>
    </div>
  );
}