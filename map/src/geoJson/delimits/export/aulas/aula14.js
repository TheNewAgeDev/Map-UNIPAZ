import { useImage } from '@/util'

const HTML = () => `
  <div class="center content-popup-delimits">
    <h3 class="title-popup">{{ title }}</h3>

    ${useImage(AULA_14, '14.jpg')}
  </div>
`

export const AULA_14 = {
  type: 'Feature',
  geometry: {
    type: 'Polygon',
    coordinates: [
      [
        [
          -73.74595791, 7.06859537
        ],
        [
          -73.74583318, 7.06859404
        ],
        [
          -73.74584257, 7.06851419
        ],
        [
          -73.74595656, 7.06851685
        ],
        [
          -73.74595791, 7.06859537
        ]
      ]
    ]
  },
  id: 'd492aaae-a7b4-400b-8d0a-c253ee5fcd5f',
  properties: {
    name: 'Aula 14',
    category: 'Aula',
    html: HTML
  }
}
