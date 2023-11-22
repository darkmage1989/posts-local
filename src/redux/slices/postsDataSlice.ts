import { createSlice } from "@reduxjs/toolkit";
import { data } from "../../interfaces/dataInterface";

const postsDataSlice = createSlice({
  name: "postsDataSlice",
  initialState: {
    postsData: [] as Array<data>,
  } ,
  reducers: {
    setPostsData: (state, actions) => {
      state.postsData = actions.payload;
    },
  deletePost: (state, actions) => {
    state.postsData = state.postsData.filter((post) => post.id !== actions.payload);
  }
  },
});
export const { setPostsData, deletePost } = postsDataSlice.actions;
export default postsDataSlice.reducer;
