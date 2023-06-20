import { create } from 'zustand';

const useBearStore = create((set) => ({
  isAuthenticated: false,
  userProfile: {
    name: "",
    email: "",
    
  },
  Login: () => set((state) => ({ isAuthenticated: !state.isAuthenticated })),
  Logout: () => set((state) => ({ isAuthenticated: !state.isAuthenticated })),
  setUserProfile: (profile) => set(() => ({ userProfile: profile })),
}));

export { useBearStore };
