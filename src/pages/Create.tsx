import { FormEvent, useState } from 'react'
import classes from './Create.module.css'
import usePosts from '../hooks/usePosts'
import { useNavigate } from 'react-router-dom'

const Create = () => {
  const { isSubmitting, createPost } = usePosts()
  const [newTitle, setNewTitle] = useState<string>('')
  const navigate = useNavigate()
  const [newBody, setNewBody] = useState<string>('')

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()

    try {
      await createPost(newTitle, newBody)

      setNewTitle('')
      setNewBody('')

      navigate('/')
    } catch (err) {
      console.error(err)
    }
  }

  return (
    <form className={classes.postForm} onSubmit={handleSubmit}>
      <label>Title</label>
      <input type="text" value={newTitle} onChange={(e) => setNewTitle(e.target.value)} required />
      <label>Body</label>
      <input type="text" value={newBody} onChange={(e) => setNewBody(e.target.value)} required />

      <button type="submit" disabled={isSubmitting}>
        {isSubmitting ? 'Submitting...' : 'Submit'}
      </button>
    </form>
  )
}

export default Create
