import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  token: null,
  user: null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    // Logging in the user
    setLogin: (state, action) => {
      state.token = action.payload.token;
      state.user = action.payload.user;
    },
    // Logging out the user
    setLogout: (state) => {
      state.user = null;
      state.token = null;
    },
  },
});

// Exporting action from auth slice
export const { setLogin, setLogout } = authSlice.actions;

// Exporting auth slice reducer function
export default authSlice.reducer;
