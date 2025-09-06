import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
  name: "app",
  initialState: {
    isMenuOpen: false,
    isMenuBarHidden: false,
  },
  reducers: {
    toggleMenu: (state) => {
      state.isMenuOpen = !state.isMenuOpen;
    },

    closeMenu: (state) => {
      state.isMenuOpen = false;
    },
    openMenu: (state) => {
      state.isMenuOpen = true;
    },
    hideMenuBar: (state) => {
      state.isMenuBarHidden = true;
    },
    showMenuBar: (state) => {
      state.isMenuBarHidden = false;
    },
  },
});

export const { toggleMenu, closeMenu, openMenu, hideMenuBar, showMenuBar } =
  appSlice.actions;
export default appSlice.reducer;
