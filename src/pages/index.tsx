import React from 'react'
import { NextPage, NextPageContext } from 'next'
import { HelloWorld } from 'components/pages/Index'

const Home: NextPage<{ userAgent: string | undefined }> = ({ userAgent }) => (
  <HelloWorld userAgent={userAgent} />
)

Home.getInitialProps = async ({
  req,
}: NextPageContext): Promise<{ userAgent: string | undefined }> => {
  const userAgent = req ? req.headers['user-agent'] : navigator.userAgent
  return { userAgent }
}

export default Home
