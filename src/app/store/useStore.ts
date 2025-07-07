// src/store/useStore.ts
import { create, StateCreator } from "zustand";
import { Project } from '../common/types';

type SetState<T> = Parameters<StateCreator<T>>[0];

type DataItem = Project;

interface AppState {
    data: DataItem[];
    setData: (newData: DataItem[]) => void;
}

const useStore = create<AppState>((set: SetState<AppState>) => ({
    data: [],
    setData: (newData: DataItem[]) => set({ data: newData }),
}));

export default useStore;
