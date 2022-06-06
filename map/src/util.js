import circleToGeoJson from 'circle-to-polygon'

const getRandomId = () => Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)

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

export const useVideo = (delimit, video) => {
  const alt = delimit?.properties?.name || delimit || 'Delimitación'
  const DEFAULT_VIDEO = 'https://i.imgur.com/0w8PZnW.jpg'

  return `<video
    class="videos-popup"
    src="/images/delimit/${video}"
    controls
    muted
    autoplay
    onerror="this.onerror=null;this.src='${DEFAULT_VIDEO}';"
    alt="${alt}"><strong>Recurso no Disponible en tu navegador :(</strong></video>`
}

/* use Accordeon Functions */

export const useAccordeon = (sliders) => {
  const name = getRandomId()
  const idButtonClose = getRandomId()

  return `
    <div class="accordion">
      <div class="col">
        <div class="tabs">

          ${sliders.map(slider => {
            const id = getRandomId()

            return `
              <div class="tab">
                <input type="radio" id="${id}" name="${name}">
                <label class="tab-label" for="${id}">${slider.title}</label>
                <div class="tab-content">
                  ${slider.content}
                </div>
              </div>
            `
          }).join('')}

          <div class="tab">
            <input type="radio" id="${idButtonClose}" name="${name}">
            <label for="${idButtonClose}" class="tab-close">Cerrar &times;</label>
          </div>
        </div>
      </div>
    </div>
  `
}

/* use Slider Functions */

const TIME_SLIDER = 3000

export const interval = {
  intervals: new Set(),

  add (func, ms) {
    const newInterval = setInterval(func, ms)
    this.intervals.add(newInterval)
    return newInterval
  },

  clear (id) {
    this.intervals.delete(id)
    return clearInterval(id)
  },

  clearAll () {
    for (const id of this.intervals) {
      this.clear(id)
    }
  }
}

const setStyleSlider = (sliders) => {
  let styles = '<style>'
  let radio = 0
  let i = 1

  sliders.forEach(slider => {
    styles += `
      .${slider[0]}:nth-of-type(${i}):checked ~ label {
        transform: translate3d(${radio === 0 ? radio : `-${radio}%`}, 0, 0);
      }
    `
    radio += 100
    i++
  })
  styles += '</style>'

  return styles
}

export const useSlider = (images) => {
  if (!images || typeof images !== 'object') return ''

  const sliders = images.map(image => {
    const id = getRandomId()
    const inputSlide = `<input class="${id}" type="radio" name="slide" id="${id}" />`
    const label = `<label for="${id}">${image}</label>`

    return [
      id,
      inputSlide,
      label
    ]
  })

  let check = sliders.length > 1 ? 1 : 0
  interval.add(() => {
    const input = document.getElementById(sliders[check][0])
    if (input) input.checked = true

    check++
    if (check > sliders.length - 1) check = 0
  }, TIME_SLIDER)

  const styles = setStyleSlider(sliders)

  return `
  <div class="slider">

    <form class="content-slider">

      ${sliders.map(inputs => inputs[1]).join('')}

      ${sliders.map(labels => labels[2]).join('')}
    </form>

    ${styles}
  </div>
  `
}
