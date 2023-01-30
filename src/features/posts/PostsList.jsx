import { useSelector } from 'react-redux'
import { selectAllPosts } from './postsSlice'
const PostsList = () => {
  const posts = useSelector(selectAllPosts)
  const renderPosts = posts.map((post) => (
    <article key={post.id} className='col-lg-4 col-md-6 col-sm-12 border p-5'>
      <h3>{post.title}</h3>
      <p>{post.content.substring(0, 20)}</p>
    </article>
  ))
  return (
    <>
      <section className='mb-5'>
        <h2 className='text-center my-3'>Posts</h2>
        <div className='row'>{renderPosts}</div>
      </section>
    </>
  )
}

export default PostsList
