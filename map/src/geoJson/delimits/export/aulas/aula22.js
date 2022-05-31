import { useImage } from '@/util'

const HTML = () => `
  <div class="center content-popup-delimits">
    <h3 class="title-popup">{{ title }}</h3>

    ${useImage(AULA_22, '22.jpg')}
  </div>
`

export const AULA_22 = {
  type: 'Feature',
  geometry: {
    type: 'Polygon',
    coordinates: [
      [
        [
          -73.74559044, 7.06845429
        ],
        [
          -73.74546036, 7.06845429
        ],
        [
          -73.74546572, 7.06835315
        ],
        [
          -73.74559178, 7.06835714
        ],
        [
          -73.74559044, 7.06845429
        ]
      ]
    ]
  },
  id: 'ad5016b0-1c9b-48a0-8e98-54328a7c894f',
  properties: {
    name: 'Aula 22',
    category: 'Aula',
    html: HTML
  }
}
