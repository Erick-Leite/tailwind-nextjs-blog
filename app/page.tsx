import { useBlogPosts } from 'hooks/use-blog-posts'
import Main from './Main'

const PAGE_NUMBER = 1
const POSTS_PER_PAGE = 5

export default async function Page() {
  const { posts, initialDisplayPosts, pagination } = useBlogPosts(PAGE_NUMBER, POSTS_PER_PAGE)
  return <Main posts={posts} pagination={pagination} initialDisplayPosts={initialDisplayPosts} />
}
