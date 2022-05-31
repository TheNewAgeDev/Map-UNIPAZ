import { useImage } from '@/util'

const HTML = () => `
  <div class="content-popup-delimits">
    <h3 class="title-popup">{{ title }}</h3>

    ${useImage(AULA_20, '20.jpg')}
  </div>
`

export const AULA_20 = {
  type: 'Feature',
  geometry: {
    type: 'Polygon',
    coordinates: [
      [
        [
          -73.74555423, 7.06885623
        ],
        [
          -73.74542549, 7.06885091
        ],
        [
          -73.7454228, 7.06874976
        ],
        [
          -73.74555155, 7.06874976
        ],
        [
          -73.74555423, 7.06885623
        ]
      ]
    ]
  },
  id: 'eadd3fdb-368a-40f9-8357-59185316c3be',
  properties: {
    name: 'Aula 20',
    category: 'Aula',
    html: HTML
  }
}
