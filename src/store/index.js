import {create} from "zustand";
// import {persist} from "zustand/middleware"
// import {useStore} from "zustand/vanilla";

const useBearStore = create((set) => ({
    isAuthenticated:false,
    Login: () => set((state) => ({ isAuthenticated : !state.isAuthenticated })),
    Logout : ()=> set((state)=>({isAuthenticated:!state.isAuthenticated}))
  }))

  const useStore = create(()=> ({
    votes: 0,
  }));

  export {useBearStore,useStore} ;