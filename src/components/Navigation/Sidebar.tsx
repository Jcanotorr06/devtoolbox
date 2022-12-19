import { type FC , useEffect } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { useSidebarStore } from "../../state"
import { HiMoon, HiSun, HiHome, HiEnvelope, HiMagnifyingGlass, HiChevronLeft, HiChevronRight } from 'react-icons/hi2';
import { BsFileTextFill } from "react-icons/bs"
import { themeChange } from "theme-change";
import Link from "next/link";
import { useRouter } from "next/router";
import useModalStore from "./../../state/modalStore";

const Sidebar:FC = () => {

    useEffect(() => {
        themeChange(false)
    }, [])
    const router = useRouter()
    const { isSidebarOpen, toggleSidebar } = useSidebarStore()
    const { openModal } = useModalStore()

    const variants = {
        open: { width: "16rem" },
        closed: { width: "8rem" }
    }

    const routes = [
        {
            path: "/",
            icon: <HiHome />,
            label: "Home"
        },
        {
            path: "/generators/email",
            icon: <HiEnvelope />,
            label: "Email"
        },
        {
            path: "/generators/random-string",
            icon: <BsFileTextFill />,
            label: "Random String"
        }
    ]

    return (
        <motion.aside
            className="top-0 left-0 fixed flex flex-col items-center gap-2 bg-base-100 shadow-sm h-full p-4 overflow-x-hidden"
            initial={false}
            animate={isSidebarOpen ? "open" : "closed"}
            variants={variants}
        >
            <button className="btn text-2xl btn-link btn-square rounded w-full" onClick={toggleSidebar}>
                {isSidebarOpen ? <HiChevronLeft /> : <HiChevronRight />}
            </button>
            <button className="btn text-2xl btn-link btn-square rounded w-full" onClick={() => openModal("search")}>
                <HiMagnifyingGlass />
            </button>
            <label className="swap swap-rotate btn btn-primary btn-link btn-circle">
                <input type="checkbox" data-toggle-theme="business,corporate" data-act-class="ACTIVECLASSS" />
                <HiSun className="swap-off text-xl" />
                <HiMoon className="swap-on text-xl" />
            </label>
            {routes.map((route, index) => (
                <Link href={route.path} key={index} className="w-full">
                    <div className={`btn btn-primary ${router.pathname !== route.path && "btn-outline"} rounded w-full`}>
                        {route.icon}
                        &nbsp;
                        <AnimatePresence>
                            {isSidebarOpen && (
                                <motion.span
                                    initial={{ opacity: 1, scale: 1, position: "relative" }}
                                    animate={{ opacity: 1, scale: 1, position: "relative" }}
                                    exit={{ opacity: 0, scale: 0, position: "absolute" }}
                                    className="text-base capitalize"
                                    transition={{ duration: 0.1 }}
                                >
                                    {route.label}
                                </motion.span>
                            )}
                        </AnimatePresence>
                    </div>
                </Link>
            ))}
        </motion.aside>
    )
}

export default Sidebar