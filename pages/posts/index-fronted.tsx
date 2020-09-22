// 客户端渲染实例
import { NextPage } from "next"
import { usePosts } from "hooks/usePosts"

const PostsIndex: NextPage = () => {
  const { isLoading, isEmpty, posts } = usePosts()
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