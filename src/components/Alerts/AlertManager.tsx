import { AnimatePresence, motion } from "framer-motion";
import { FaTimes } from "react-icons/fa";
import useAlertStore from "./../../state/alertStore";

const AlertManager = () => {
    const { isAlertOpen, closeAlert, alertText, alertType } = useAlertStore()
    if (!isAlertOpen || !alertText || !alertType) return null

    const variants = {
        open: { opacity: 1, y: 0 },
        closed: { opacity: 0, y: 20 }
    }

    if(isAlertOpen){
        setTimeout(() => {
            closeAlert()
            console.log("TESTING TIMEOUT")
        }, 3000)
    }

    return (
        <AnimatePresence>
            <div className="fixed inset-0 z-10">
                <motion.div variants={variants} initial="closed" animate="open" exit="closed" className={`alert ${alertType === "success" ? "alert-success" : alertType === "info" ? "alert-info" : alertType === "warning" ? "alert-warning" : "alert-error" } shadow-md absolute bottom-0 right-0 w-1/2 mb-4 mr-4`}>
                    <div className="flex-1">
                        <label className="cursor-pointer select-none">{alertText}</label>
                    </div>
                    <button className="btn btn-ghost" onClick={closeAlert}>
                        <FaTimes/>
                    </button>
                </motion.div>
            </div>
        </AnimatePresence>
    )
}

export default AlertManager