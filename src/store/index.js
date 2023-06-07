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

  
// const useAppState = create((set) => ({
//   activeMenu: true,
//   isClicked: {
//     chat: false,
//     cart: false,
//     userProfile: false,
//     notification: false,
//   },
//   screenSize: undefined,
//   currentColor: localStorage.getItem('colorMode') || '#03C9D7',
//   currentMode: localStorage.getItem('themeMode') || 'Light',
//   themeSettings: false,
//   setActiveMenu: (activeMenu) => set({ activeMenu }),
//   setIsClicked: (isClicked) => set({ isClicked }),
//   setScreenSize: (screenSize) => set({ screenSize }),
//   setColor: (color) => {
//     localStorage.setItem('colorMode', color);
//     set({ currentColor: color, themeSettings: false });
//   },
//   setMode: (mode) => {
//     localStorage.setItem('themeMode', mode);
//     set({ currentMode: mode, themeSettings: false });
//   },
//   setThemeSettings: (themeSettings) => set({ themeSettings }),
// }));

  export {useBearStore,useStore} ;


  