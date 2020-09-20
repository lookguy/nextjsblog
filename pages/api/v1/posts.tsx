import { NextApiHandler } from "next";
import { getSortedPostsData } from "lib/posts"

const Posts: NextApiHandler = async (req, res) => {
  const posts = await getSortedPostsData()
  // console.log(posts)
  res.statusCode = 200
  res.setHeader('Content-Type', "application/json")
  res.write(JSON.stringify(posts))
  res.end()
}
export default Posts