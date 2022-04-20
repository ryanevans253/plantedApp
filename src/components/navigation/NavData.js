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
  { text: "Dashboard", icon: <DashboardIcon /> },
  { text: "My Plants", icon: <GrassIcon /> },
  { text: "Automation", icon: <AutorenewIcon /> },
  { text: "Tasks", icon: <TaskAltIcon /> },
  { text: "Schedule", icon: <EventNoteIcon /> },
  { text: "Integrations", icon: <IntegrationInstructionsIcon /> },
  { text: "Guides", icon: <SummarizeIcon /> },
];

export const helpNavData = [
  { text: "Settings", icon: <SettingsIcon /> },
  { text: "Help Center", icon: <HelpCenterIcon /> },
];
