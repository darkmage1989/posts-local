import { createSlice } from "@reduxjs/toolkit";


const usersDataSlice = createSlice({
  name: "usersDataSlice",
  initialState: {
    usersData: [],
  },
  reducers: {
    setUsersData: (state, actions) => {
      state.usersData = actions.payload;
    },
  },
});
export const { setUsersData } = usersDataSlice.actions;
export default usersDataSlice.reducer;
