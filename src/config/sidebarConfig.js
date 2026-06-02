import {
  LayoutDashboard,
  Users,
  Briefcase,
  Database,
  Settings,
} from "lucide-react";

export const sidebarConfig = [
  {
    label: "Dashboard",
    path: "/",
    icon: LayoutDashboard,
  },

  {
    label: "User Operations",
    path: "/users",
    icon: Users,
  },

  {
    label: "Manage Leads",
    path: "/leads",
    icon: Briefcase,
  },

  {
    label: "CRM Data",
    path: "/crm-data",
    icon: Database,
  },

  {
    label: "Settings",
    path: "/settings",
    icon: Settings,
  },
];