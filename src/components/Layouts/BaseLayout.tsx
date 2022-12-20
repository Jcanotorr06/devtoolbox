import { motion } from "framer-motion"
import { type FC } from "react"
import { useSidebarStore } from "../../state"
import AlertManager from "../Alerts/AlertManager"
import ModalManager from "../Modals/ModalManager"
import Sidebar from "../Navigation/Sidebar"

type Props = {
    children: React.ReactNode
}
const BaseLayout:FC<Props> = ({children}:Props) => {

  const { isSidebarOpen } = useSidebarStore()

  const variants = {
    open: { marginLeft: "16rem" },
    closed: { marginLeft: "8rem" }
  }

  return (
    <div className="flex w-screen h-screen relative bg-base-200">
        <Sidebar />
        <motion.section
          animate={
            isSidebarOpen ? "open" : "closed"
          }
          variants={variants}
          initial={false} 
          className={"flex flex-grow bg-base-200 z-10 h-full p-4"}
        >
            {children}
        </motion.section>
        <AlertManager/>
        <ModalManager/>
    </div>
  )
}

export default BaseLayout