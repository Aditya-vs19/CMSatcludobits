import { Bell, CircleUser } from 'lucide-react';

interface TopNavBarProps {
  userName: string;
  role?: string;
}

export function TopNavBar({ userName, role }: TopNavBarProps) {
  return (
    <div className="fixed top-0 left-0 right-0 h-16 bg-white border-b border-gray-200 z-50">
      <div className="h-full flex items-center justify-between px-6">
        {/* Logo/Brand */}
        <div className="flex items-center">
          <h1 className="text-black tracking-tight">CludoBits IT Solutions</h1>
        </div>

        {/* Right side actions */}
        <div className="flex items-center gap-4">
          {/* Notifications */}
          <button className="relative p-2 hover:bg-gray-50 rounded-lg transition-colors">
            <Bell className="w-5 h-5 text-gray-600" strokeWidth={1.5} />
            <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-[#007AFF] rounded-full"></span>
          </button>

          {/* User Profile */}
          <button className="flex items-center gap-2 p-1.5 pr-3 hover:bg-gray-50 rounded-lg transition-colors">
            <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center">
              <CircleUser className="w-5 h-5 text-gray-600" strokeWidth={1.5} />
            </div>
            <div className="text-left">
              <div className="text-gray-700">{userName}</div>
              {role && <div className="text-xs text-gray-500">{role}</div>}
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}