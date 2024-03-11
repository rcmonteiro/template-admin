import { useAppData } from "@/data/hook/useAppData"
import Title from "./Title"
import ToggleTheme from "./ToggleTheme"

interface HeaderProps {
  title: string
  subtitle: string
}

const Header = ({ title, subtitle }: HeaderProps) => {
  const cxt = useAppData()
  return (
    <div className="flex">
      <Title title={title} subtitle={subtitle} />
      <div className="sm:flex flex-grow justify-end hidden">
        <ToggleTheme theme={cxt.theme} toggleTheme={cxt.toggleTheme} />
      </div>
    </div>
  )
}

export default Header