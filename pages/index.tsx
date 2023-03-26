import { PageSEO } from '@/components/SEO'
import siteMetadata from '@/data/siteMetadata'
import { sortedBlogPost, allCoreContent } from '@/lib/utils/contentlayer'
import { InferGetStaticPropsType } from 'next'
import { allBlogs } from 'contentlayer/generated'
import Image from '@/components/Image'

export const getStaticProps = async () => {
  // TODO: move computation to get only the essential frontmatter to contentlayer.config
  const sortedPosts = sortedBlogPost(allBlogs)
  const posts = allCoreContent(sortedPosts)

  return { props: { posts } }
}

export default function Home({ posts }: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <PageSEO title={siteMetadata.title} description={siteMetadata.description} />
      <div className="grid lg:grid-cols-2 md:grid-cols-1 gap-4">
        <div>
          <iframe
            className="rounded-3xl dark:border-gray-50 border-8 border-gray-500"
            title="playlist"
            src="https://open.spotify.com/embed/playlist/0pQkIIs4VXdJkQg6kdlvfw?utm_source=generator&theme=0"
            width="300px"
            height="550px"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
          ></iframe>
        </div>
        <div>
          <img
            src={'/static/images/pro.jpg'}
            alt="avatar"
            className="h-full rounded-3xl dark:border-gray-50 border-8 border-gray-500"
          />
        </div>
      </div>
    </>
  )
}
