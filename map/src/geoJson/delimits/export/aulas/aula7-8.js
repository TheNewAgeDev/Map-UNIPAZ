import { useImage } from '@/util'

const HTML = () => `
  <div class="center content-popup-delimits">
    <h3 class="title-popup">{{ title }}</h3>

    ${useImage(AULA7_8, '8.jpg')}
  </div>
`

export const AULA7_8 = {
  type: 'Feature',
  geometry: {
    type: 'Polygon',
    coordinates: [
      [
        [
          -73.74647959, 7.06864728
        ],
        [
          -73.74635353, 7.06863929
        ],
        [
          -73.74635353, 7.06853814
        ],
        [
          -73.7464863, 7.06854613
        ],
        [
          -73.74647959, 7.06864728
        ]
      ]
    ]
  },
  id: '19796027-77a1-43ac-b72c-fa09c735103b',
  properties: {
    name: 'Aula 7 y 8',
    category: 'Aula',
    html: HTML
  }
}
