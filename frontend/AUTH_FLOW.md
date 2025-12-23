# Authentication & Role-Based Access Flow

## Complete Authentication System

### Screen Flow

1. **Role Selection Screen** (Entry Point)
   - Three role options: Admin, Engineer, Customer
   - Clean card-based selection interface
   - Each role redirects to appropriate login

2. **Admin Login**
   - Email + Password
   - Demo credentials: any email + "admin123"
   - Access: Full system (Dashboard, Tickets, Reports, Feedback, Settings)

3. **Engineer Login**
   - Engineer ID/Email + Password
   - Demo credentials: any ID + "engineer123"
   - Access: My Tickets, My Reports, Settings

4. **Customer Login**
   - Email or Tracking ID only
   - Demo: any email or tracking ID (e.g., TCK-2401)
   - Access: Ticket tracking and feedback submission

---

## Role-Based Access Control

### ADMIN (Mr. Vijay Jagtap)
**Full System Access:**
- Dashboard - System overview with all tickets
- Tickets - View and manage all tickets, assign engineers
- Reports (SCR) - View all service call reports
- Feedback - View all customer feedback
- Settings - System and profile settings

**Capabilities:**
- View all tickets across the system
- Assign tickets to engineers
- Generate and manage SCR documents
- Access all customer feedback
- Full administrative controls

---

### ENGINEER (Sarah Mitchell, etc.)
**Limited Access:**
- My Tickets - Only assigned tickets
- My Reports - Only generated reports
- Settings - Personal settings

**Capabilities:**
- View only tickets assigned to them
- Update ticket status (Assigned → In Progress → Resolved)
- Generate Service Call Reports for completed work
- Add work notes and documentation
- Cannot view other engineers' tickets
- Cannot assign tickets

---

### CUSTOMER (Public Access)
**Minimal Interface:**
- Simplified portal without sidebar navigation
- Clean, single-purpose interface

**Capabilities:**
- Track ticket status using Tracking ID
- View ticket timeline and resolution details
- View and sign Service Call Reports
- Submit feedback with rating (1-5 stars)
- Download SCR documents
- No administrative access

---

## Security Features

1. **Role-based navigation** - Sidebar shows only allowed sections
2. **Separate dashboards** - Each role sees different content
3. **Data isolation** - Engineers only see assigned tickets
4. **Clean logout** - Returns to role selection screen
5. **Professional error handling** - Validation with clear messages

---

## Demo Access

### Admin:
- Email: any valid email
- Password: `admin123`

### Engineer:
- ID/Email: any identifier
- Password: `engineer123`

### Customer:
- Identifier: any email or tracking ID (e.g., `TCK-2401`)
- No password required

---

## Design Consistency

All screens maintain:
- Apple-inspired minimal design
- White backgrounds with light blue (#007AFF) accents
- Clean typography (Inter font)
- Subtle shadows and rounded corners
- Professional, executive-ready presentation
- No emojis, bright colors, or dark mode
