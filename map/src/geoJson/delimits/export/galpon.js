import { useImage } from '@/util'

const HTML = () => `
  <div class="center content-popup-delimits">
    <h3 class="title-popup">{{ title }}</h3>

    ${useImage(GALPON, 'galpon.jpg')}
  </div>
`

export const GALPON = {
  type: 'Feature',
  geometry: {
    type: 'Polygon',
    coordinates: [
      [
        [-73.74764534, 7.06629936],
        [-73.74734055, 7.06635607],
        [-73.74731284, 7.06624264],
        [-73.74761936, 7.06617905],
        [-73.74764534, 7.06629936]
      ]
    ]
  },
  id: '78191213-62ab-480a-901b-705ed1bfa954',
  properties: {
    name: 'Galpon',
    category: 'MVZ',
    html: HTML
  }
}
