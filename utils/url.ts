import type { UrlObject } from 'url'

export const isInternalUrl = (url?: string | UrlObject): boolean => {
  if (url === undefined) {
    return false
  }

  try {
    const { origin } = new URL(url.toString())

    return origin === process.env.NEXT_PUBLIC_ORIGIN
  } catch (_) {
    return true
  }
}
