// src/utils/tracker.ts

export interface DetailedUserTelemetry {
  ip: string
  browser: string
  os: string
  deviceType: string
  country: string
  city: string
  region: string
  latitude: string
  longitude: string
  postalCode: string
  timezone: string
  asn: string
  isp: string
  language: string
  screenResolution?: string
  userAgentRaw: string
}

/**
 * Parses raw User-Agent string to extract simple Browser, OS, and Device profiles.
 */
function parseUserAgent(ua: string) {
  let browser = 'Unknown Browser'
  let os = 'Unknown OS'
  let deviceType = 'Desktop'

  // Browser Detection
  if (
    /chrome|crios/i.test(ua) &&
    !/edge|edg/i.test(ua) &&
    !/opr|opera/i.test(ua)
  )
    browser = 'Google Chrome'
  else if (
    /safari/i.test(ua) &&
    !/chrome|crios/i.test(ua) &&
    !/edge|edg/i.test(ua)
  )
    browser = 'Apple Safari'
  else if (/firefox|fxios/i.test(ua)) browser = 'Mozilla Firefox'
  else if (/edge|edg/i.test(ua)) browser = 'Microsoft Edge'
  else if (/opr|opera/i.test(ua)) browser = 'Opera'

  // OS Detection
  if (/windows/i.test(ua)) os = 'Windows'
  else if (/macintosh|mac os x/i.test(ua) && !/iphone|ipad|ipod/i.test(ua))
    os = 'macOS'
  else if (/iphone|ipad|ipod/i.test(ua)) os = 'iOS'
  else if (/android/i.test(ua)) os = 'Android'
  else if (/linux/i.test(ua)) os = 'Linux'

  // Basic Device Classification
  if (/mobile|iphone|android/i.test(ua)) {
    deviceType = 'Mobile'
  } else if (/ipad|tablet/i.test(ua)) {
    deviceType = 'Tablet'
  }

  return { browser, os, deviceType }
}

/**
 * Extracts comprehensive metadata exposed natively by Cloudflare's Edge headers
 */
export function getTrackingPayload(
  req: Request,
  clientData?: { screenResolution?: string },
): DetailedUserTelemetry {
  const headers = req.headers
  const ua = headers.get('user-agent') || ''
  const { browser, os, deviceType } = parseUserAgent(ua)

  // Cloudflare injects geolocation & networking parameters directly into incoming requests
  return {
    // 1. IP Address tracking (Falls back along proxies if missing)
    ip:
      headers.get('cf-connecting-ip') ||
      headers.get('x-forwarded-for') ||
      '0.0.0.0',

    // 2. Hardware / User-Agent fingerprints
    browser,
    os,
    deviceType,
    userAgentRaw: ua,
    language: headers.get('accept-language')?.split(',')[0] || 'Unknown',
    screenResolution: clientData?.screenResolution || 'N/A',

    // 3. Complete Cloudflare-provided Location Telemetry
    country: headers.get('cf-ipcountry') || 'Unknown',
    city: headers.get('cf-ipcity') || 'Unknown',
    region: headers.get('cf-region') || 'Unknown',
    latitude: headers.get('cf-latitude') || 'Unknown',
    longitude: headers.get('cf-longitude') || 'Unknown',
    postalCode: headers.get('cf-postal-code') || 'Unknown',
    timezone: headers.get('cf-timezone') || 'Unknown',

    // 4. Network Layer Meta (Autonomous System Number & Organization)
    asn: headers.get('cf-asn') || 'Unknown',
    isp: headers.get('cf-as-org') || 'Unknown',
  }
}
