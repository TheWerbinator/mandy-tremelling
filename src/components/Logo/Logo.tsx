import clsx from 'clsx'
import Image from 'next/image'
import React from 'react'

import mandy from '../../../public/logo-300x300.webp'

interface Props {
  className?: string
  loading?: 'lazy' | 'eager'
  priority?: 'auto' | 'high' | 'low'
}

export const Logo = (props: Props) => {
  const { loading: loadingFromProps, priority: priorityFromProps, className } = props

  const loading = loadingFromProps || 'lazy'
  const priority = priorityFromProps || 'low'

  return (
    /* eslint-disable @next/next/no-img-element */
    <Image
      alt="Mandy Tremelling logo - fantasy stylized 'MT' in the center, a fountain pen with a sword hilt next to the 'T' and a dragon on top of it, and swirling fern leaves in gold and blue steel all around. Stars dot the small empty spaces at the top and flowers pop from the corners of the letters."
      width={200}
      height={200}
      loading={loading}
      fetchPriority={priority}
      decoding="async"
      className={clsx('max-w-[6rem] w-full', className)}
      src={mandy}
    />
  )
}
