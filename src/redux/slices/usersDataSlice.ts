import { createSlice } from "@reduxjs/toolkit";
import { Users } from "../../interfaces/dataInterface";


const usersDataSlice = createSlice({
  name: "usersDataSlice",
  initialState: {
    usersData: [] as Array<Users>,
  },
  reducers: {
    setUsersData: (state, actions) => {
      state.usersData = actions.payload;
    },
  },
});
export const { setUsersData } = usersDataSlice.actions;
export default usersDataSlice.reducer;
