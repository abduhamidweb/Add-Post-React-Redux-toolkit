import { createSlice } from '@reduxjs/toolkit'
const initialState = [
  { id: '1', title: 'learning Redux Toolkit', content: "I've bla bla" },
  { id: '2', title: 'Slice', content: "I've bla bla bla bla" },
]
const postSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    postAdded:  (state, action) => {
      state.push(action.payload)
    },
  },
})
export const selectAllPosts = (state) => state.posts
export const { postAdded } = postSlice.actions
export default postSlice.reducer
