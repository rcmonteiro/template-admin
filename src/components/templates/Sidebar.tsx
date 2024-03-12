import { useAuthData } from "@/data/hook/useAuthData"
import { sidebarItems } from "@/constants/template"
import SideBarItem from "./SideBarItem"
import Logo from "./Logo"
import { ExitIcon } from "../icons"

const Sidebar = () => {
  const { logout } = useAuthData()
  return (
    <aside className={`
      flex flex-col select-none
      bg-gray-200 dark:bg-gray-900
    `}>
      <Logo/>
      <ul className="flex-grow">
        {sidebarItems.map(item => (
          <SideBarItem 
            key={item.label}
            label={item.label} 
            url={item.url}
            icon={item.icon}
          />
        ))}
      </ul>
      <ul>
        <SideBarItem 
          label="Logout"
          icon={ExitIcon(8)}
          className="hover:bg-red-600 hover:text-white text-red-600 hover:dark:bg-red-600 hover:dark:text-white dark:text-red-400"
          onClick={logout}
        />
      </ul>
    </aside>
  )
}

export default Sidebar