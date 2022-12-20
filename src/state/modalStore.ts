import create from "zustand";
import { devtools } from "zustand/middleware";
import type { ModalTypes } from "../components/Modals/ModalManager";

type ModalStore = {
    isModalOpen: boolean;
    modalId: ModalTypes;
    openModal: (id: ModalTypes) => void;
    closeModal: () => void;
}

const useModalStore = create<ModalStore>()(
    devtools(
        (set) => ({
            isModalOpen: false,
            modalId: "",
            openModal: (id: ModalTypes) => set(() => ({ isModalOpen: true, modalId: id })),
            closeModal: () => set(() => ({ isModalOpen: false, modalId: "" })),
        })
    )
)

export default useModalStore;