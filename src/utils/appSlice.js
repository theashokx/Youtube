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

    hideMenuBar: (state) => {
      state.isMenuBarHidden = false;
    },
  },
});

export const { toggleMenu, hideMenuBar } = appSlice.actions;
export default appSlice.reducer;
