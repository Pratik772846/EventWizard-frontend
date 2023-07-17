import { create } from 'zustand';

const useBearStore = create((set) => ({
  isAuthenticated: false,
  userProfile: {
    name: "",
    email: "",
  },
  invitationsCount: 0, 
  Login: () => set((state) => ({ isAuthenticated: !state.isAuthenticated })),
  Logout: () => set((state) => ({ isAuthenticated: !state.isAuthenticated })),
  setUserProfile: (profile) => set(() => ({ userProfile: profile })),
  setInvitationsCount: (count) => set(() => ({ invitationsCount: count })), 
}));

export { useBearStore };
