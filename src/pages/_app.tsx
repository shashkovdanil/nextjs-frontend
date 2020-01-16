import 'components/common/Page/style.css'

import React from 'react'
import App from 'next/app'
import Router from 'next/router'
import { Page } from 'components/common'
import * as gtag from 'utils/gtag'
import { GA_TRACKING_ID } from 'constants/env'

if (!!GA_TRACKING_ID) {
  Router.events.on('routeChangeComplete', url => gtag.pageview(url))
}

class CustomApp extends App {
  render() {
    const { Component, pageProps } = this.props

    return (
      <Page>
        <Component {...pageProps} />
      </Page>
    )
  }
}

export default CustomApp
