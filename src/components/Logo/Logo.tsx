import clsx from 'clsx'
import React from 'react'

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
    <img
      alt="Mandy Tremelling Logo"
      width={200}
      height={200}
      loading={loading}
      fetchPriority={priority}
      decoding="async"
      className={clsx('max-w-[9.375rem] w-full', className)}
      src='http://localhost:3000/_next/image?url=http%3A%2F%2Flocalhost%3A3000%2Fapi%2Fmedia%2Ffile%2Flogo.webp&w=64&q=100'
    />
  )
}
