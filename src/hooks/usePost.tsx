import axios from 'axios'
import { useEffect, useState } from 'react'
import { PostDTO } from '../types/dto'

const usePost = (id: string) => {
  const [posts, setPosts] = useState<PostDTO | null>(null)
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [error, setError] = useState<string>('')

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true)
      try {
        const res = await axios.get<PostDTO>(`https://jsonplaceholder.typicode.com/posts/${id}`)

        setPosts(res.data)
      } catch (error) {
        setError('Data Not Found')
      } finally {
        setIsLoading(false)
      }
    }

    fetchData()
  }, [id])

  return { posts, isLoading, error }
}

export default usePost
