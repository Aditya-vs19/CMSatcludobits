import { CircleUser, Mail, Bell, Lock, Globe } from 'lucide-react';

export function SettingsView() {
  return (
    <div>
      {/* Page Header */}
      <div className="mb-8">
        <h1 className="text-black mb-1">Settings</h1>
        <p className="text-gray-600">
          Manage your profile and system preferences
        </p>
      </div>

      <div className="grid grid-cols-3 gap-6">
        {/* Profile Settings */}
        <div className="col-span-2 space-y-6">
          {/* Personal Information */}
          <div className="bg-white rounded-xl border border-gray-200 p-6">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-[#007AFF]/10 rounded-lg flex items-center justify-center">
                <CircleUser className="w-5 h-5 text-[#007AFF]" strokeWidth={1.5} />
              </div>
              <h3 className="text-black">Personal Information</h3>
            </div>

            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-gray-700 mb-2">Full Name</label>
                  <input
                    type="text"
                    value="Mr. Vijay Jagtap"
                    className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#007AFF]/20 focus:border-[#007AFF]"
                    readOnly
                  />
                </div>
                <div>
                  <label className="block text-gray-700 mb-2">Role</label>
                  <input
                    type="text"
                    value="Admin"
                    className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#007AFF]/20 focus:border-[#007AFF]"
                    readOnly
                  />
                </div>
              </div>

              <div>
                <label className="block text-gray-700 mb-2">Email Address</label>
                <input
                  type="email"
                  value="vijay.jagtap@cludobits.com"
                  className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#007AFF]/20 focus:border-[#007AFF]"
                  readOnly
                />
              </div>

              <div>
                <label className="block text-gray-700 mb-2">Phone Number</label>
                <input
                  type="tel"
                  value="+91 98765 43210"
                  className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#007AFF]/20 focus:border-[#007AFF]"
                />
              </div>

              <div className="pt-4">
                <button className="px-6 py-2 bg-[#007AFF] text-white rounded-lg hover:bg-[#0051D5] transition-colors">
                  Update Profile
                </button>
              </div>
            </div>
          </div>

          {/* Email Notifications */}
          <div className="bg-white rounded-xl border border-gray-200 p-6">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-[#007AFF]/10 rounded-lg flex items-center justify-center">
                <Mail className="w-5 h-5 text-[#007AFF]" strokeWidth={1.5} />
              </div>
              <h3 className="text-black">Email Notifications</h3>
            </div>

            <div className="space-y-4">
              <div className="flex items-center justify-between py-3 border-b border-gray-100">
                <div>
                  <div className="text-black mb-1">New Ticket Assignments</div>
                  <div className="text-gray-600">Receive email when a ticket is assigned to you</div>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" className="sr-only peer" defaultChecked />
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-[#007AFF]/20 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#007AFF]"></div>
                </label>
              </div>

              <div className="flex items-center justify-between py-3 border-b border-gray-100">
                <div>
                  <div className="text-black mb-1">Ticket Status Updates</div>
                  <div className="text-gray-600">Get notified when ticket status changes</div>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" className="sr-only peer" defaultChecked />
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-[#007AFF]/20 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#007AFF]"></div>
                </label>
              </div>

              <div className="flex items-center justify-between py-3 border-b border-gray-100">
                <div>
                  <div className="text-black mb-1">Customer Feedback</div>
                  <div className="text-gray-600">Receive notification when customers submit feedback</div>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" className="sr-only peer" defaultChecked />
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-[#007AFF]/20 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#007AFF]"></div>
                </label>
              </div>

              <div className="flex items-center justify-between py-3">
                <div>
                  <div className="text-black mb-1">Weekly Summary Report</div>
                  <div className="text-gray-600">Get weekly summary of all activities</div>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" className="sr-only peer" />
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-[#007AFF]/20 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#007AFF]"></div>
                </label>
              </div>
            </div>
          </div>

          {/* Security Settings */}
          <div className="bg-white rounded-xl border border-gray-200 p-6">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-[#007AFF]/10 rounded-lg flex items-center justify-center">
                <Lock className="w-5 h-5 text-[#007AFF]" strokeWidth={1.5} />
              </div>
              <h3 className="text-black">Security</h3>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-gray-700 mb-2">Current Password</label>
                <input
                  type="password"
                  placeholder="Enter current password"
                  className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#007AFF]/20 focus:border-[#007AFF]"
                />
              </div>

              <div>
                <label className="block text-gray-700 mb-2">New Password</label>
                <input
                  type="password"
                  placeholder="Enter new password"
                  className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#007AFF]/20 focus:border-[#007AFF]"
                />
              </div>

              <div>
                <label className="block text-gray-700 mb-2">Confirm New Password</label>
                <input
                  type="password"
                  placeholder="Confirm new password"
                  className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#007AFF]/20 focus:border-[#007AFF]"
                />
              </div>

              <div className="pt-4">
                <button className="px-6 py-2 bg-[#007AFF] text-white rounded-lg hover:bg-[#0051D5] transition-colors">
                  Change Password
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Settings Sidebar */}
        <div className="space-y-6">
          {/* System Preferences */}
          <div className="bg-white rounded-xl border border-gray-200 p-6">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-[#007AFF]/10 rounded-lg flex items-center justify-center">
                <Globe className="w-5 h-5 text-[#007AFF]" strokeWidth={1.5} />
              </div>
              <h3 className="text-black">System Preferences</h3>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-gray-700 mb-2">Language</label>
                <select className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#007AFF]/20 focus:border-[#007AFF] text-gray-700">
                  <option>English (US)</option>
                  <option>Hindi</option>
                  <option>Marathi</option>
                </select>
              </div>

              <div>
                <label className="block text-gray-700 mb-2">Time Zone</label>
                <select className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#007AFF]/20 focus:border-[#007AFF] text-gray-700">
                  <option>IST (GMT+5:30)</option>
                  <option>UTC (GMT+0:00)</option>
                  <option>EST (GMT-5:00)</option>
                </select>
              </div>

              <div>
                <label className="block text-gray-700 mb-2">Date Format</label>
                <select className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#007AFF]/20 focus:border-[#007AFF] text-gray-700">
                  <option>DD/MM/YYYY</option>
                  <option>MM/DD/YYYY</option>
                  <option>YYYY-MM-DD</option>
                </select>
              </div>
            </div>
          </div>

          {/* Push Notifications */}
          <div className="bg-white rounded-xl border border-gray-200 p-6">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-[#007AFF]/10 rounded-lg flex items-center justify-center">
                <Bell className="w-5 h-5 text-[#007AFF]" strokeWidth={1.5} />
              </div>
              <h3 className="text-black">Push Notifications</h3>
            </div>

            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div className="text-gray-700">Desktop Notifications</div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" className="sr-only peer" defaultChecked />
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-[#007AFF]/20 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#007AFF]"></div>
                </label>
              </div>

              <div className="flex items-center justify-between">
                <div className="text-gray-700">Sound Alerts</div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" className="sr-only peer" />
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-[#007AFF]/20 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#007AFF]"></div>
                </label>
              </div>
            </div>
          </div>

          {/* Account Status */}
          <div className="bg-white rounded-xl border border-gray-200 p-6">
            <h3 className="text-black mb-4">Account Status</h3>
            <div className="space-y-3 text-gray-700">
              <div className="flex justify-between">
                <span>Account Type:</span>
                <span className="text-[#007AFF]">Admin</span>
              </div>
              <div className="flex justify-between">
                <span>Member Since:</span>
                <span className="text-black">Jan 2024</span>
              </div>
              <div className="flex justify-between">
                <span>Last Login:</span>
                <span className="text-black">Today, 9:30 AM</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
