import SocialIcon from '@/components/social-icons'
import Image from '@/components/Image'
import { PageSEO } from '@/components/SEO'
import { ReactNode } from 'react'
import type { Authors } from 'contentlayer/generated'

interface Props {
  children: ReactNode
  content: Omit<Authors, '_id' | '_raw' | 'body'>
}

export default function AuthorLayout({ children, content }: Props) {
  const { name, avatar, occupation, company, email, twitter, linkedin, github } = content

  return (
    <>
      <PageSEO title={`About - ${name}`} description={`About me - ${name}`} />
      <div className="divide-y">
        <div className="items-start space-y-2 space-x-12 xl:grid xl:grid-cols-3 xl:gap-x-2 xl:space-y-0">
          <div className="flex flex-col pt-8">
            <img
              src={'/static/images/triangle.jpg'}
              alt="avatar"
              width="400"
              height="400"
              className="rounded-xl dark:border-gray-50 border-2 border-gray-500"
            />
            <div className="mt-8">{email}</div>
          </div>
          <div className="prose max-w-none pb-8 dark:prose-dark xl:col-span-2">
            <div>
              <img
                src={`/static/images/profile.jpg`}
                alt="avatar"
                width="100px"
                height="100px"
                className="rounded-xl dark:border-gray-50 border-2 border-gray-500"
              />
            </div>
            {children}
          </div>
        </div>
      </div>
    </>
  )
}
