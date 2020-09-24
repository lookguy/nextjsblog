import { getPost, getPostIds } from "lib/posts"
import { NextPage } from "next"

type Props = {
  post: Post
}

const PostsDetail: NextPage<Props> = (props) => {
  const { post } = props
  return (
    <div>
      <h1>{post.title}</h1>
      <article>
        {post.content}
      </article>
    </div>
  )
}

export default PostsDetail

export const getStaticPaths = async () => {
  const idLists = await getPostIds()
  return {
    paths: idLists.map(id => ({ params: { id } })),
    fallback: false
  }
}

export const getStaticProps = async (path: any) => {
  const id = path.params.id
  const post = await getPost(id)
  return {
    props: {
      post
    }
  }
}