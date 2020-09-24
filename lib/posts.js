import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const postsDirectory = path.join(process.cwd(), 'posts')

export function getSortedPostsData() {
  // Get file names under /posts
  const fileNames = fs.readdirSync(postsDirectory)
  const allPostsData = fileNames.map(fileName => {
    // Remove ".md" from file name to get id
    const id = fileName.replace(/\.md$/, '')

    // Read markdown file as string
    const fullPath = path.join(postsDirectory, fileName)
    const fileContents = fs.readFileSync(fullPath, 'utf8')

    // Use gray-matter to parse the post metadata section
    const { data: { title, date }, content } = matter(fileContents)

    // Combine the data with the id
    return {
      id,
      title,
      date,
      content
    }
  })
  // Sort posts by date
  return allPostsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1
    } else {
      return -1
    }
  })
}

export const getPost = async (id) => {
  // Read markdown file as string
  const fullPath = path.join(postsDirectory, id + ".md")
  const fileContents = fs.readFileSync(fullPath, 'utf8')

  // Use gray-matter to parse the post metadata section
  const { data: { title, date }, content } = matter(fileContents)

  // Combine the data with the id
  return {
    id,
    title,
    date,
    content
  }
}

export const getPostIds = async () => {
  const fileNames = fs.readdirSync(postsDirectory)
  return fileNames.map(filename => filename.replace(/\.md$/g, ""))
}