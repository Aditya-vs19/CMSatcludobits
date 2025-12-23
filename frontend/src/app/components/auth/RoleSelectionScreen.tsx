import { Shield, UserCog, CircleUser } from 'lucide-react';

interface RoleSelectionScreenProps {
  onSelectRole: (role: 'admin' | 'engineer' | 'customer') => void;
}

export function RoleSelectionScreen({ onSelectRole }: RoleSelectionScreenProps) {
  const roles = [
    {
      id: 'admin' as const,
      title: 'Admin Login',
      description: 'System Administration',
      icon: Shield,
    },
    {
      id: 'engineer' as const,
      title: 'Engineer Login',
      description: 'Support Engineer',
      icon: UserCog,
    },
    {
      id: 'customer' as const,
      title: 'Customer Login',
      description: 'Customer Access',
      icon: CircleUser,
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-6">
      <div className="w-full max-w-4xl">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-black mb-3">Sign in to CludoBits IT Solutions</h1>
          <p className="text-gray-600">Choose your role to continue</p>
        </div>

        {/* Role Cards */}
        <div className="grid grid-cols-3 gap-6">
          {roles.map((role) => {
            const Icon = role.icon;
            return (
              <button
                key={role.id}
                onClick={() => onSelectRole(role.id)}
                className="bg-white rounded-xl border border-gray-200 p-8 hover:border-[#007AFF] hover:shadow-lg transition-all group"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 bg-gray-50 rounded-full flex items-center justify-center mb-4 group-hover:bg-[#007AFF]/10 transition-colors">
                    <Icon className="w-8 h-8 text-gray-600 group-hover:text-[#007AFF] transition-colors" strokeWidth={1.5} />
                  </div>
                  <h3 className="text-black mb-2">{role.title}</h3>
                  <p className="text-gray-600">{role.description}</p>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}