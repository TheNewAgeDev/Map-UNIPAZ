import { useImage } from '@/util'

const HTML = () => `
  <div class="content-popup-delimits">
    <h3 class="title-popup">{{ title }}</h3>

    ${useImage(AULA_10, '10.jpg')}
  </div>
`

export const AULA_10 = {
  type: 'Feature',
  geometry: {
    type: 'Polygon',
    coordinates: [
      [
        [
          -73.74616444, 7.06848491
        ],
        [
          -73.74616309, 7.06837843
        ],
        [
          -73.74604642, 7.06837045
        ],
        [
          -73.74604374, 7.06848091
        ],
        [
          -73.74616444, 7.06848491
        ]
      ]
    ]
  },
  id: '6780e33e-1bb2-4045-be92-8e9f8e65e2dd',
  properties: {
    name: 'Aula 10',
    category: 'Aula',
    html: HTML
  }
}
