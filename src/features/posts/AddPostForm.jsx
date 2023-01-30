import { useState } from 'react'
import React from 'react'
import { useDispatch } from 'react-redux'
import { nanoid } from '@reduxjs/toolkit'
import { postAdded } from './postsSlice'
const AddPostForm = () => {
  const dispatch = useDispatch()
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const onTitleChanged = (e) => setTitle(e.target.value)
  const onContentChanged = (e) => setContent(e.target.value)
  const onSavePostClicked = () => {
    if (title && content) {
      dispatch(postAdded({ title, content, id: nanoid() }))
      setTitle('')
      setContent('')
    }
  }
  return (
    <>
      <section>
        <h2 className='fs-2 text-center my-3'>Add a New Post</h2>
        <form className='form-control p-5'>
          <label htmlFor='postTitle'>Post Title:</label>
          <input
            type='text'
            id='postTitle'
            name='postTitle'
            className='form-control'
            value={title}
            onChange={onTitleChanged}
          />
          <label htmlFor='postContent'>Content:</label>
          <textarea
            id='postContent'
            name='postContent'
            className='form-control'
            value={content}
            onChange={onContentChanged}
          />
          <button
            type='button'
            className='btn btn-primary w-100 mt-4'
            onClick={onSavePostClicked}
          >
            Save Post
          </button>
        </form>
      </section>
    </>
  )
}

export default AddPostForm
