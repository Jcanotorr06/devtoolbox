import create from "zustand";
import { devtools } from "zustand/middleware";
import type { Mailbox } from "../types/mailbox";

type EmailStore = {
    email: Mailbox | null;
    openEmail: (email: Mailbox) => void;
    closeEmail: () => void;
}

const useEmailStore = create<EmailStore>()(
    devtools(
        (set) => ({
            email: null,
            openEmail: (email: Mailbox) => set(() => ({ email })),
            closeEmail: () => set(() => ({ email: null })),
        })
    )
)

export default useEmailStore;