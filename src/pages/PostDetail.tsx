import { useParams } from 'react-router-dom'
import usePost from '../hooks/usePost'

const PostDetail = () => {
  const { id } = useParams()
  const { posts, isLoading } = usePost(id || '1')

  console.log(posts)

  if (isLoading) return <h1>Loading...</h1>

  return (
    <div>
      <h1>{posts?.id}</h1>
      <h1>{posts?.title}</h1>
      <p>{posts?.body}</p>
    </div>
  )
}

export default PostDetail
