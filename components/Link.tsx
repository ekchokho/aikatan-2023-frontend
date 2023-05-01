import NextLink, { LinkProps } from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'

const Link = ({
  href,
  activeClassName = '',
  prefetch,
  className,
  children,
  ...props
}: LinkProps & {
  className?: string
  activeClassName?: string
  prefetch?: boolean
  children: React.ReactNode
}) => {
  const router = useRouter()

  const isActive = router.route === href
  const finalClassName = className + (isActive ? `${activeClassName}` : '')

  return (
    <NextLink
      href={href}
      scroll={typeof href === 'string' && href.substring(0, 2) !== '/#'}
      prefetch={prefetch}
      className={finalClassName}
      {...props}>
      {children}
    </NextLink>
  )
}

export default Link
