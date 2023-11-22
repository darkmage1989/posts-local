import { createSlice } from "@reduxjs/toolkit";


const postsDataSlice = createSlice({
  name: "postsDataSlice",
  initialState: {
    postsData: [],
  },
  reducers: {
    setPostsData: (state, actions) => {
      state.postsData = actions.payload;
    },
  },
});
export const { setPostsData } = postsDataSlice.actions;
export default postsDataSlice.reducer;
