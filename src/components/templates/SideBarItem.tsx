import Link from "next/link"
import { twMerge } from "tailwind-merge"

interface SidebarItemProps {
  label: string
  url?: string
  icon?: any
  className?: string
  onClick?: (e: any) => void
}

const SideBarItem = ({ url, label, icon, className, onClick }: SidebarItemProps) => {
  const render = () => (
    <div className="flex flex-col justify-center items-center h-20 w-20 dark:text-gray-200">
      {icon}
      <span className="text-xs font-light ">
        {label}
      </span>
    </div>
  )
  
  return (
    <li 
      className={twMerge(`hover:bg-gray-100 dark:hover:bg-gray-800 cursor-pointer ${className}`)}
      onClick={onClick}
    >
      {
        url ? 
          <Link href={url}>{render()}</Link>
        : render() 
      }
    </li>
  )
}

export default SideBarItem