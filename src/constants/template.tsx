import { BellIcon, HomeIcon, SettingsIcon } from "@/components/icons";

const sidebarItems = [
  { label: 'Home', url: '/', icon: <HomeIcon/> },
  { label: 'Settings', url: '/settings', icon: <SettingsIcon/> },
  { label: 'Alerts', url: '/alerts', icon: <BellIcon/> },
]

export {
  sidebarItems
}