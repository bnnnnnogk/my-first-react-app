import { FormEvent, useState } from 'react'
import usePosts from '../hooks/usePosts'
import Post from '../components/Post'

const Home = () => {
  const { posts, isLoading, isSubmitting, createPost } = usePosts()
  const [newTitle, setNewTitle] = useState<string>('')
  const [newBody, setNewBody] = useState<string>('')

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()

    try {
      await createPost(newTitle, newBody)

      setNewTitle('')
      setNewBody('')
    } catch (err) {
      console.error(err)
    }
  }

  if (isLoading) return <h1>Loading...</h1>

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Title</label>
        <input type="text" value={newTitle} onChange={(e) => setNewTitle(e.target.value)} required />
        <label>Body</label>
        <input type="text" value={newBody} onChange={(e) => setNewBody(e.target.value)} required />

        <button type="submit" disabled={isSubmitting}>
          {isSubmitting ? 'Submitting...' : 'Submit'}
        </button>
      </form>

      <div className="feed-container">
        {posts &&
          posts.map((post) => {
            return <Post key={post.id} post={post} />
          })}
      </div>
    </div>
  )
}

export default Home
