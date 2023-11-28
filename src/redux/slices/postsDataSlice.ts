import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { EditPost, Post } from "../../interfaces/dataInterface";

const postsDataSlice = createSlice({
  name: "postsDataSlice",
  initialState: {
    postsData: [] as Array<Post>,
    filteredData: [] as Array<Post>,
    dataSort: {
      name: "",
      value: "",
    },
  },
  reducers: {
    setPostsData: (state, actions) => {
      state.postsData = actions.payload;
    },
    addAuthor: (state, actions) => {
      state.postsData = state.postsData?.map((item) => {
        if (item.userId === actions.payload.id) {
          item.name = actions.payload.name;
          return item;
        }
        return item;
      });
    },
    deletePost: (state, actions) => {
      state.postsData = state.postsData.filter(
        (post) => post.id !== actions.payload
      );
    },
    editPost: (state, actions: PayloadAction<EditPost>) => {
      state.postsData = state.postsData.map((item) => {
        if (item.id === actions.payload.id) {
          item.title = actions.payload.title;
          item.body = actions.payload.body;
          item.name = actions.payload.name;
          return item;
        }
        return item;
      });
    },
    setFavorite: (state, actions) => {
      state.postsData = state.postsData.map((item) => {
        if (item.id === actions.payload.id) {
          item.favorite = actions.payload.favorite;
          return item;
        }
        return item;
      });
    },
    setFilteredData: (state, actions) => {
      state.filteredData = state.postsData.filter(
        (item) => item.name === actions.payload
      );
    },
    setSort: (state, actions) => {
      state.dataSort = actions.payload;
      const sortData = state.filteredData.length? state.filteredData : state.postsData
      const actionKey: string = actions.payload.name;
      if (state.dataSort.value === "max") {
        sortData.sort((a: Post, b: Post) => {
          if (a[actionKey as keyof Post] > b[actionKey as keyof Post]) {
            return -1;
          } else if (a[actionKey as keyof Post] < b[actionKey as keyof Post]) {
            return 1;
          } else {
            return 0;
          }
        });
      }
      if (state.dataSort.value === "min") {
        sortData.sort((a: Post, b: Post) => {
          if (a[actionKey as keyof Post] > b[actionKey as keyof Post]) {
            return 1;
          } else if (a[actionKey as keyof Post] < b[actionKey as keyof Post]) {
            return -1;
          } else {
            return 0;
          }
        });
      }
      if (state.dataSort.value === "true") {
        sortData.sort((a: Post, b: Post) => {
          if (a[actionKey as keyof Post] === b[actionKey as keyof Post]) {
            return 0;
          } else if (a[actionKey as keyof Post]) {
            return -1;
          } else {
            return 1;
          }
        });
      }
      if (state.dataSort.value === "false") {
        sortData.sort((a: Post, b: Post) => {
          if (a[actionKey as keyof Post] === b[actionKey as keyof Post]) {
            return 0;
          } else if (a[actionKey as keyof Post]) {
            return 1;
          } else {
            return -1;
          }
        });
      }
    },
  },
});
export const {
  setPostsData,
  deletePost,
  editPost,
  addAuthor,
  setFavorite,
  setFilteredData,
  setSort,
} = postsDataSlice.actions;
export default postsDataSlice.reducer;
