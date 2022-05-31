import { useImage } from '@/util'

const HTML = () => `
  <div class="center content-popup-delimits">
    <h3 class="title-popup">{{ title }}</h3>

    ${useImage(PIARA, 'piara.jpg')}
  </div>
`

export const PIARA = {
  type: 'Feature',
  geometry: {
    type: 'Polygon',
    coordinates: [
      [
        [-73.74740992, 7.0678227],
        [-73.74734822, 7.06770291],
        [-73.7476312, 7.06752856],
        [-73.74767948, 7.06766565],
        [-73.74740992, 7.0678227]
      ]
    ]
  },
  id: '20bf89be-08ba-41f2-9575-eb9172f4c3a3',
  properties: {
    name: 'Piara',
    category: 'MVZ',
    html: HTML
  }
}
