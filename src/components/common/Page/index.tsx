import React from 'react'
import Meta from '../Meta'

interface Props {
  children: React.ReactNode
}

function Page({ children }: Props) {
  return (
    <>
      <Meta />
      {children}
    </>
  )
}

export default Page
