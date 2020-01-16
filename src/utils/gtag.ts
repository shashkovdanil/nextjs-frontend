import { GA_TRACKING_ID } from 'constants/env'

interface GtagEvent {
  action: string
  category: string
  label: string
  value: string
}

const w: any = process.browser ? window : {}

export const pageview = (url: string) => {
  w.gtag('config', GA_TRACKING_ID, {
    page_path: url,
  })
}

export const event = ({ action, category, label, value }: GtagEvent) => {
  w.gtag('event', action, {
    event_category: category,
    event_label: label,
    value: value,
  })
}
