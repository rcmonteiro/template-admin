import { title } from "process"

interface TitleProps {
  title: string
  subtitle: string
}

const Title = ({ title, subtitle }: TitleProps) => {
  return (
    <div className="">
      <h1 className="font-black text-3xl text-gray-900 dark:text-gray-100">{title}</h1>
      <h2 className="font-light text-sm text-gray-600 dark:text-gray-200">{subtitle}</h2>
    </div>
  )
}

export default Title