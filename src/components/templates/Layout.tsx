'use client'

import { useAppData } from "@/data/hook/useAppData"
import Content from "./Content"
import Header from "./Header"
import Sidebar from "./Sidebar"
import clsx from "clsx"

interface LayoutProps {
  title: string
  subtitle: string
  children?: any
}

const Layout = ({ title, subtitle, children = null }: LayoutProps) => {
  const cxt = useAppData()
  return (
    <div className={clsx(
        `flex h-screen w-screen`,
        {
          'dark': cxt.theme === 'dark'
        }
      )}>
      <Sidebar/>
      <div className="flex flex-col w-full bg-gray-300 dark:bg-gray-800 p-7">
        <Header title={title} subtitle={subtitle} />
        <Content>
          {children}
        </Content>
      </div>
    </div>
  )
}

export default Layout