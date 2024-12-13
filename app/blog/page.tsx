import ListLayout from '@/layouts/ListLayoutWithTags'
import { useBlogPosts } from 'hooks/use-blog-posts'
import { genPageMetadata } from 'app/seo'

const PAGE_NUMBER = 1
const POSTS_PER_PAGE = 5

export const metadata = genPageMetadata({ title: 'Blog' })

export default function BlogPage() {
  const { posts, initialDisplayPosts, pagination } = useBlogPosts(PAGE_NUMBER, POSTS_PER_PAGE)

  return (
    <ListLayout
      posts={posts}
      initialDisplayPosts={initialDisplayPosts}
      pagination={pagination}
      title="All Posts"
    />
  )
}
