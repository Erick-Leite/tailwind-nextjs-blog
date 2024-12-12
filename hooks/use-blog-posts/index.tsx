import { sortPosts, allCoreContent } from 'pliny/utils/contentlayer'
import { allBlogs } from 'contentlayer/generated'

/**
 * Use blog posts hook to paginate and sort blog posts.
 * @param {number} pageNumber - The current page number.
 * @param {number} postsPerPage - The number of posts per page.
 * @returns {Object} An object containing all posts, posts for the current page, and pagination details.
 * @returns {Array} posts - The sorted and filtered blog posts.
 * @returns {Array} initialDisplayPosts - The blog posts to be displayed on the current page.
 * @returns {Object} pagination - Pagination information.
 * @returns {number} pagination.currentPage - The current page number.
 * @returns {number} pagination.totalPages - The total number of pages.
 */

export function useBlogPosts(pageNumber: number, postsPerPage: number) {
  const sortedPosts = sortPosts(allBlogs)
  const posts = allCoreContent(sortedPosts)

  const startIndex = postsPerPage * (pageNumber - 1)
  const endIndex = postsPerPage * pageNumber

  const initialDisplayPosts = posts.slice(startIndex, endIndex)

  const pagination = {
    currentPage: pageNumber,
    totalPages: Math.ceil(posts.length / postsPerPage),
  }

  return { posts, initialDisplayPosts, pagination }
}
