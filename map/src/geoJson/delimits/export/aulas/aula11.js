import { useImage } from '@/util'

const HTML = () => `
  <div class="center content-popup-delimits">
    <h3 class="title-popup">{{ title }}</h3>

    ${useImage(AULA_11, '11.jpg')}
  </div>
`

export const AULA_11 = {
  type: 'Feature',
  geometry: {
    type: 'Polygon',
    coordinates: [
      [
        [
          -73.74612554, 7.0686353
        ],
        [
          -73.74601289, 7.06863663
        ],
        [
          -73.74601289, 7.06855411
        ],
        [
          -73.74613493, 7.06855811
        ],
        [
          -73.74612554, 7.0686353
        ]
      ]
    ]
  },
  id: 'd8868b4f-50a1-4560-9399-c13e22e15a5c',
  properties: {
    name: 'Aula 11',
    category: 'Aula',
    html: HTML
  }
}
