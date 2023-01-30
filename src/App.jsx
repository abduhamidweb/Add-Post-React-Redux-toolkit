import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import PostsList from './features/posts/PostsList'
import AddPostForm from './features/posts/AddPostForm'

function App() {
  return (
    <>
      <div className='container'>
        <AddPostForm />
        <PostsList />
      </div>
    </>
  )
}

export default App
