import { GetStaticProps, NextPage } from "next"
import { getSortedPostsData } from "lib/posts"


type Props = {
  posts: Post[]
}
const PostsIndex: NextPage<Props> = (props) => {
  console.log(props.posts);
  const {posts} = props
  return (
    <div>
      <h1>文章列表</h1>
      {
        posts.map(p=><div key={p.id}>
          {p.title}
        </div>)
      }
    </div>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const posts = await getSortedPostsData()
  return {
    props: {
      posts
    }
  }
}

export default PostsIndex