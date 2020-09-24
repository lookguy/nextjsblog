import { useState, useEffect } from "react"
import axios from "axios"

type Post = {
  id: string;
  date: string;
  title: string;
}

export const usePosts = () => {
  const [posts, setPosts] = useState<Post[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const [isEmpty, setIsEmpty] = useState(false)
  useEffect(() => {
    setIsLoading(true)
    axios.get("/api/v1/posts").then(responese => {
      // console.log(responese.data)
      setPosts(responese.data)
      setIsEmpty(responese.data.length === 0)
      setIsLoading(false)
    }, () => {
      setIsLoading(false)
    })
  }, [])
  return { isLoading, isEmpty, posts,setPosts,setIsLoading,setIsEmpty }
}
