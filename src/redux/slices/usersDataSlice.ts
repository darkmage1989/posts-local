import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { EditName, Users } from "../../interfaces/dataInterface";


const usersDataSlice = createSlice({
  name: "usersDataSlice",
  initialState: {
    usersData: [] as Array<Users>,
  },
  reducers: {
    setUsersData: (state, actions) => {
      state.usersData = actions.payload;
    },
    editUser: (state, actions: PayloadAction <EditName>) => {
      state.usersData = state.usersData.map((item) => {
        if (item.id === actions.payload.userId) {
          item.name = actions.payload.name
          return item
        }
        return item
      })
    },
  },
});
export const { setUsersData, editUser } = usersDataSlice.actions;
export default usersDataSlice.reducer;
