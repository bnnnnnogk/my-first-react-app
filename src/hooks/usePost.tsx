import axios from 'axios'
import { useEffect, useState } from 'react'
import { PostDTO } from '../types/dto'

const usePost = (id: string) => {
  const [posts, setPosts] = useState<PostDTO | null>(null)
  const [isLoading, setIsLoading] = useState<boolean>(false)

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true)
      try {
        const res = await axios.get<PostDTO>('https://jsonplaceholder.typicode.com/posts/' + id || '1')

        setPosts(res.data)
      } catch (err) {
        console.error(err)
      } finally {
        setIsLoading(false)
      }
    }

    fetchData()
  }, [id])

  return { posts, isLoading }
}

export default usePost
