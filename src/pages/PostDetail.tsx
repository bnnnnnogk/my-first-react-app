import { useParams } from 'react-router-dom'
import usePost from '../hooks/usePost'
import classes from './PostDetail.module.css'

const PostDetail = () => {
  const { id } = useParams()
  const { posts, isLoading } = usePost(id || '1')

  console.log(posts)

  if (isLoading) return <h1>Loading...</h1>

  return (
    <div className={classes.feed}>
      <h1>Title : {posts?.title}</h1>
      <h1>Post ID: {posts?.id}</h1>
      <p>{posts?.body}</p>
    </div>
  )
}

export default PostDetail
