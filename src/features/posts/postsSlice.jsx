import { createSlice } from '@reduxjs/toolkit'
const initialState = [
  {
    id: 1,
    title: 'Hello world!',
    descrbtion: "this is the first time you're doing something... ",
    imgURL: "https://picsum.com/images/defa"
  },
]
const postSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    postAdded: (state, action) => {
      state.push(action.payload)
    },
  },
})
export const selectAllPosts = (state) => state.posts
export const { postAdded } = postSlice.actions
export default postSlice.reducer
