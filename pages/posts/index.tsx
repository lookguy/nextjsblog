import { GetStaticProps, NextPage } from "next"
import { getSortedPostsData } from "lib/posts"
import React from "react";
import Link from "next/link";


type Props = {
  posts: Post[]
}
const PostsIndex: NextPage<Props> = (props) => {
  const { posts } = props
  return (
    <div>
      <h1>文章列表</h1>
      {
        posts.map(p => <div key={p.id}>
          <Link href={`/posts/${p.id}`}><a>{p.title}</a></Link>
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