import { useImage } from '@/util'

const HTML = () => `
  <div class="center content-popup-delimits">
    <h3 class="title-popup">{{ title }}</h3>

    ${useImage(AULA_23, '23.jpg')}
  </div>
`

export const AULA_23 = {
  type: 'Feature',
  geometry: {
    type: 'Polygon',
    coordinates: [
      [
        [
          -73.74547377, 7.06867922
        ],
        [
          -73.74535709, 7.0686739
        ],
        [
          -73.7453638, 7.06856875
        ],
        [
          -73.74548315, 7.06857807
        ],
        [
          -73.74547377, 7.06867922
        ]
      ]
    ]
  },
  id: '986a8acb-211a-4079-98a6-056d4d6e110b',
  properties: {
    name: 'Aula 23',
    category: 'Aula',
    html: HTML
  }
}
