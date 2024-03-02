import { createSlice } from "@reduxjs/toolkit";
import { userApi } from "../api/userApi";

const initialState = {
  isLoggedIn: false,
  user: [],
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  // extraReducers: (builder) => {
  //   builder
  //     .addCase(userApi.endpoints.login.fulfilled, (state, action) => {
  //       state.isLoggedIn = true;
  //       state.user = action.payload;
  //     })
  //     .addCase(userApi.endpoints.login.rejected, (state) => {
  //       state.isLoggedIn = false;
  //       state.user = null;
  //     })
  //     .addCase(userApi.endpoints.me.fulfilled, (state, action) => {
  //       state.user = action.payload;
  //     });
  // },
});

export default userSlice.reducer;
