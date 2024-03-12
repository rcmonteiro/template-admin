import { useAppData } from "@/data/hook/useAppData"
import Title from "./Title"
import ToggleTheme from "./ToggleTheme"
import Avatar from "./Avatar"

interface HeaderProps {
  title: string
  subtitle: string
}

const Header = ({ title, subtitle }: HeaderProps) => {
  const cxt = useAppData()
  return (
    <div className="flex">
      <Title title={title} subtitle={subtitle} />
      <div className="flex flex-grow justify-end items-center">
        <div className="sm:flex hidden">
          <ToggleTheme theme={cxt.theme} toggleTheme={cxt.toggleTheme} />
        </div>
        <Avatar/>
      </div>      
    </div>
  )
}

export default Header