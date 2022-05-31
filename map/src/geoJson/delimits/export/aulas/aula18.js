import { useImage } from '@/util'

const HTML = () => `
  <div class="center content-popup-delimits">
    <h3 class="title-popup">{{ title }}</h3>

    ${useImage(AULA_18, '18.jpg')}
  </div>
`

export const AULA_18 = {
  type: 'Feature',
  geometry: {
    type: 'Polygon',
    coordinates: [
      [
        [
          -73.74580636, 7.06858872
        ],
        [
          -73.74568432, 7.06858739
        ],
        [
          -73.74568834, 7.06849821
        ],
        [
          -73.74580904, 7.06849821
        ],
        [
          -73.74580636, 7.06858872
        ]
      ]
    ]
  },
  id: '22b7d9a9-0b72-4522-a714-9350043cc3fb',
  properties: {
    name: 'Aula 18',
    category: 'Aula',
    html: HTML
  }
}
