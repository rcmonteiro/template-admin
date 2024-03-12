import { BellIcon, HomeIcon, SettingsIcon } from "@/components/icons";

const sidebarItems = [
  { label: 'Home', url: '/', icon: HomeIcon(8) },
  { label: 'Settings', url: '/settings', icon: SettingsIcon(8) },
  { label: 'Alerts', url: '/alerts', icon: BellIcon(8) },
]

export {
  sidebarItems
}