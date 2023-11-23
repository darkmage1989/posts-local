import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { EditPost, Post } from "../../interfaces/dataInterface";


const postsDataSlice = createSlice({
  name: "postsDataSlice",
  initialState: {
    postsData: [] as Array<Post>,
  },
  reducers: {
    setPostsData: (state, actions) => {
      state.postsData = actions.payload;
    },
    deletePost: (state, actions) => {
      state.postsData = state.postsData.filter(
        (post) => post.id !== actions.payload
      );
    },
    editPost: (state, actions: PayloadAction <EditPost>) => {
      state.postsData = state.postsData.map((item) => {
        if (item.id === actions.payload.id) {
          item.title = actions.payload.title
          item.body = actions.payload.body
          return item
        }
        return item
      })
    },
  },
});
export const { setPostsData, deletePost, editPost } = postsDataSlice.actions;
export default postsDataSlice.reducer;
