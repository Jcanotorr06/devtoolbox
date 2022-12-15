import create from 'zustand';
import { devtools } from 'zustand/middleware';

type Alert = "info" | "success" | "warning" | "error"

type AlertStore = {
    isAlertOpen: boolean;
    alertText: string;
    alertType: Alert
    openAlert: (text: string, type: Alert) => void;
    closeAlert: () => void;
}

const useAlertStore = create<AlertStore>()(
    devtools(
        (set) => ({
            isAlertOpen: false,
            alertText: '',
            alertType: "info",
            openAlert: (text: string, type: Alert) => set(() => ({ isAlertOpen: true, alertText: text, alertType: type })),
            closeAlert: () => set(() => ({ isAlertOpen: false, alertText: '', alertType: "info" })),
        })
    )
)

export default useAlertStore;