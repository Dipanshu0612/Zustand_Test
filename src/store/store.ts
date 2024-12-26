import { create } from "zustand";

interface CounterState {
  count: number;
  increment: () => void;
  decrement: () => void;
}

export const CounterStore = create<CounterState>((set) => ({
  count: 0,
  increment: () => {
    set((state: CounterState) => ({ count: state.count + 1 }));
  },
  decrement: () => {
    set((state: CounterState) => ({ count: state.count - 1 }));
  },
}));