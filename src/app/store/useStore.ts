// src/store/useStore.ts
import { create, StateCreator } from "zustand";

type SetState<T> = Parameters<StateCreator<T>>[0];

interface DataItem {
    id: number;
    image: string;
    date: string;
    title: string;
    description: string;
    techstack: string[];
    links: {
        github: string;
        demo: string;
        download: string;
    };
}

interface AppState {
    data: DataItem[];
    setData: (newData: DataItem[]) => void;
}

const useStore = create<AppState>((set: SetState<AppState>) => ({
    data: [],
    setData: (newData: DataItem[]) => set({ data: newData }),
}));

export default useStore;
