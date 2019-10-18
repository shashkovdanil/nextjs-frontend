import React from 'react'
import { NextPage, NextPageContext } from 'next'
import styled from 'styled-components'

const Title = styled.h1`
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
    Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  font-size: 18px;
  line-height: 1.5;
  color: #011;
`

const Home: NextPage<{ userAgent: string | undefined }> = ({ userAgent }) => (
  <Title>Hello world! - user agent: {userAgent}.</Title>
)

Home.getInitialProps = async ({
  req,
}: NextPageContext): Promise<{ userAgent: string | undefined }> => {
  const userAgent = req ? req.headers['user-agent'] : navigator.userAgent
  return { userAgent }
}

export default Home
