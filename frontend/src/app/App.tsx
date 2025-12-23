import { useState } from 'react';
import { TopNavBar } from './components/TopNavBar';
import { Sidebar } from './components/Sidebar';

// Auth Screens
import { RoleSelectionScreen } from './components/auth/RoleSelectionScreen';
import { AdminLoginScreen } from './components/auth/AdminLoginScreen';
import { EngineerLoginScreen } from './components/auth/EngineerLoginScreen';
import { CustomerLoginScreen } from './components/auth/CustomerLoginScreen';

// Admin Views
import { DashboardView } from './components/DashboardView';
import { TicketsView } from './components/TicketsView';
import { ReportsView } from './components/ReportsView';
import { FeedbackView } from './components/FeedbackView';
import { SettingsView } from './components/SettingsView';

// Role-Specific Dashboards
import { EngineerDashboard } from './components/dashboards/EngineerDashboard';
import { EngineerReportsView } from './components/dashboards/EngineerReportsView';
import { CustomerPortal } from './components/dashboards/CustomerPortal';

type AuthScreen = 'role-selection' | 'admin-login' | 'engineer-login' | 'customer-login';
type UserRole = 'admin' | 'engineer' | 'customer' | null;

interface AuthState {
  isAuthenticated: boolean;
  role: UserRole;
  userName: string;
  trackingId?: string;
}

export default function App() {
  const [authScreen, setAuthScreen] = useState<AuthScreen>('role-selection');
  const [authState, setAuthState] = useState<AuthState>({
    isAuthenticated: false,
    role: null,
    userName: '',
  });
  const [activeTab, setActiveTab] = useState('dashboard');

  // Handle role selection
  const handleRoleSelection = (role: 'admin' | 'engineer' | 'customer') => {
    if (role === 'admin') {
      setAuthScreen('admin-login');
    } else if (role === 'engineer') {
      setAuthScreen('engineer-login');
    } else {
      setAuthScreen('customer-login');
    }
  };

  // Handle admin login
  const handleAdminLogin = (email: string, password: string) => {
    setAuthState({
      isAuthenticated: true,
      role: 'admin',
      userName: 'Mr. Vijay Jagtap',
    });
    setActiveTab('dashboard');
  };

  // Handle engineer login
  const handleEngineerLogin = (engineerId: string, password: string) => {
    // Extract name from engineer ID or email for display
    const userName = engineerId.includes('@') 
      ? engineerId.split('@')[0].replace('.', ' ').split(' ').map(s => s.charAt(0).toUpperCase() + s.slice(1)).join(' ')
      : 'Sarah Mitchell'; // Default engineer name
    
    setAuthState({
      isAuthenticated: true,
      role: 'engineer',
      userName,
    });
    setActiveTab('my-tickets');
  };

  // Handle customer login
  const handleCustomerLogin = (identifier: string) => {
    setAuthState({
      isAuthenticated: true,
      role: 'customer',
      userName: 'Customer',
      trackingId: identifier,
    });
  };

  // Handle logout
  const handleLogout = () => {
    setAuthState({
      isAuthenticated: false,
      role: null,
      userName: '',
    });
    setAuthScreen('role-selection');
    setActiveTab('dashboard');
  };

  // Handle back to role selection
  const handleBackToRoleSelection = () => {
    setAuthScreen('role-selection');
  };

  // Render authentication screens
  if (!authState.isAuthenticated) {
    switch (authScreen) {
      case 'role-selection':
        return <RoleSelectionScreen onSelectRole={handleRoleSelection} />;
      case 'admin-login':
        return (
          <AdminLoginScreen
            onLogin={handleAdminLogin}
            onBack={handleBackToRoleSelection}
          />
        );
      case 'engineer-login':
        return (
          <EngineerLoginScreen
            onLogin={handleEngineerLogin}
            onBack={handleBackToRoleSelection}
          />
        );
      case 'customer-login':
        return (
          <CustomerLoginScreen
            onLogin={handleCustomerLogin}
            onBack={handleBackToRoleSelection}
          />
        );
    }
  }

  // Customer Portal (different layout)
  if (authState.role === 'customer') {
    return <CustomerPortal trackingId={authState.trackingId || ''} onLogout={handleLogout} />;
  }

  // Admin and Engineer views
  const renderContent = () => {
    if (authState.role === 'admin') {
      switch (activeTab) {
        case 'dashboard':
          return <DashboardView />;
        case 'tickets':
          return <TicketsView />;
        case 'reports':
          return <ReportsView />;
        case 'feedback':
          return <FeedbackView />;
        case 'settings':
          return <SettingsView />;
        default:
          return <DashboardView />;
      }
    } else if (authState.role === 'engineer') {
      switch (activeTab) {
        case 'my-tickets':
          return <EngineerDashboard />;
        case 'my-reports':
          return <EngineerReportsView />;
        case 'settings':
          return <SettingsView />;
        default:
          return <EngineerDashboard />;
      }
    }
  };

  const getRoleLabel = (role: UserRole) => {
    switch (role) {
      case 'admin':
        return 'Admin';
      case 'engineer':
        return 'Support Engineer';
      default:
        return '';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Top Navigation */}
      <TopNavBar 
        userName={authState.userName} 
        role={getRoleLabel(authState.role)}
      />

      {/* Sidebar */}
      <Sidebar 
        activeTab={activeTab} 
        onTabChange={setActiveTab}
        role={authState.role as 'admin' | 'engineer'}
        onLogout={handleLogout}
      />

      {/* Main Content */}
      <main className="ml-64 mt-16 p-8">
        <div className="max-w-[1440px] mx-auto">
          {renderContent()}
        </div>
      </main>
    </div>
  );
}