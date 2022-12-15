import create from 'zustand';
import { devtools } from 'zustand/middleware';

type SidebarStore = {
    isSidebarOpen: boolean;
    toggleSidebar: () => void;
}

const useSidebarStore = create<SidebarStore>()(
    devtools(
        (set) => ({
            isSidebarOpen: true,
            toggleSidebar: () => set((state) => ({ isSidebarOpen: !state.isSidebarOpen })),
        }),
        {
            name: "sidebarStore"
        }
    )
)

export default useSidebarStore;