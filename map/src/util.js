import circleToGeoJson from 'circle-to-polygon'

function isMobile () {
  return (
    (navigator.userAgent.match(/Android/i)) ||
      (navigator.userAgent.match(/webOS/i)) ||
      (navigator.userAgent.match(/iPhone/i)) ||
      (navigator.userAgent.match(/iPod/i)) ||
      (navigator.userAgent.match(/iPad/i)) ||
      (navigator.userAgent.match(/BlackBerry/i))
  )
}

export const isMobileNow = isMobile()

export function getGeoJsonFromCircle (coordinates, radius, numberOfPoints = 32) {
  return circleToGeoJson(coordinates, radius, numberOfPoints)
}

export const waitFor = (ms) => new Promise(resolve => setTimeout(resolve, ms))

export const capitalizeString = (str) => {
  return str.toLowerCase().replace(/\b(\w)/g, s => s.toUpperCase())
}

export const useImage = (delimit, image) => {
  const alt = delimit?.properties?.name || delimit || 'Delimitación'
  const DEFAULT_IMG = 'https://i.imgur.com/vDNCHXg.jpg'

  return `<img
    class="images-popup"
    src="/images/delimit/${image}"
    onerror="this.onerror=null;this.src='${DEFAULT_IMG}';"
    alt="${alt}"
  />`
}
