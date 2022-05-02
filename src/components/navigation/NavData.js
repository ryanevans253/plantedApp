// get icon info from @mui-icons

import DashboardIcon from "@mui/icons-material/Dashboard";
import GrassIcon from "@mui/icons-material/Grass";
import AutorenewIcon from "@mui/icons-material/Autorenew";
import TaskAltIcon from "@mui/icons-material/TaskAlt";
import EventNoteIcon from "@mui/icons-material/EventNote";
import IntegrationInstructionsIcon from "@mui/icons-material/IntegrationInstructions";
import SummarizeIcon from "@mui/icons-material/Summarize";
import SettingsIcon from "@mui/icons-material/Settings";
import HelpCenterIcon from "@mui/icons-material/HelpCenter";

export const navData = [
  { text: "Dashboard", route: "", icon: <DashboardIcon /> },
  { text: "My Plants", route: "plants", icon: <GrassIcon /> },
  { text: "Automation", route: "automation", icon: <AutorenewIcon /> },
  { text: "Tasks", route: "tasks", icon: <TaskAltIcon /> },
  { text: "Schedule", route: "schedule", icon: <EventNoteIcon /> },
  {
    text: "Integrations",
    route: "integrations",
    icon: <IntegrationInstructionsIcon />,
  },
  { text: "Guides", route: "guides", icon: <SummarizeIcon /> },
];

export const helpNavData = [
  { text: "Settings", icon: <SettingsIcon /> },
  { text: "Help Center", icon: <HelpCenterIcon /> },
];
