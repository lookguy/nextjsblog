import { NextPage } from "next"
import axios from "axios"
import { useEffect, useState } from "react"

type Post = {
  id: string;
  date: string;
  title: string;
}

const PostsIndex: NextPage = () => {
  const [posts, setPosts] = useState<Post[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const [isEmpty, setIsEmpty] = useState(false)
  useEffect(() => {
    setIsLoading(true)
    axios.get("/api/v1/posts").then(responese => {
      console.log(responese.data)
      setPosts(responese.data)
      setIsEmpty(responese.data.length === 0)
      setIsLoading(false)
    }, () => {
      setIsLoading(false)
    })
  }, [])
  return (
    <div>
      <h1>文章列表</h1>
      {isLoading ? <div>加载中...</div> :
        isEmpty ? <div>没有文章</div> :
          posts.map(p => (<div key={p.id}>
            {p.title}
          </div>))
      }

    </div>
  )
}

export default PostsIndex