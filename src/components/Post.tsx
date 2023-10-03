import { useState } from 'react'
import { PostDTO } from '../types/dto'
import classes from './Post.module.css'

interface IPostProps {
  post: PostDTO
}

const Post = ({ post }: IPostProps) => {
  const [showMore, setShowMore] = useState<boolean>(false)

  return (
    <>
      <div className={classes.post}>
        <p>id: {post.id}</p>
        <p>postedBy: {post.userId}</p>
        <p>title: {post.title}</p>
        <p>body: {post.body}</p>
        {showMore && <p>more infomation...</p>}
        <button onClick={() => setShowMore(!showMore)}>{showMore ? 'Show less' : 'Show More'}</button>
      </div>
    </>
  )
}
export default Post
