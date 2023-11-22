import { createSlice } from "@reduxjs/toolkit";


const commentsDataSlice = createSlice({
  name: "commentsDataSlice",
  initialState: {
    commentsData: [],
  },
  reducers: {
    setCommentsData: (state, actions) => {
      state.commentsData = actions.payload;
    },
  },
});
export const { setCommentsData } = commentsDataSlice.actions;
export default commentsDataSlice.reducer;
