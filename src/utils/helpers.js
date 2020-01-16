import fetch from 'isomorphic-unfetch'

export async function fetchJSON(url: string, options?: RequestInit) {
  const response = await fetch(url, {
    ...options,
  })

  if (response.status === 204 && response.statusText === 'No Content') {
    return
  }

  const text = await response.text()
  let data

  try {
    data = JSON.parse(text)
  } catch (error) {
    throw { response, error: data } // eslint-disable-line
  }

  if (response.ok) {
    return data
  }

  throw { response, error: data } // eslint-disable-line
}

export function getHost(ctx: NextPageContext): string {
  const hostFromServer = ctx.req ? ctx.req.headers.host : ''
  const hostFromBrowser = process.browser ? window.location.host : ''
  const host = hostFromServer || hostFromBrowser

  return `http${process.env.NODE_ENV === 'development' ? '' : 's'}://${host}`
}
