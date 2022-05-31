import { useImage } from '@/util'

const HTML = () => `
  <div class="center content-popup-delimits">
    <h3 class="title-popup">{{ title }}</h3>

    ${useImage(COMP_ELECT_1, 'compElect1.jpg')}
  </div>
`

export const COMP_ELECT_1 = {
  type: 'Feature',
  geometry: {
    type: 'Polygon',
    coordinates: [
      [
        [-73.74489663, 7.06953914],
        [-73.74483762, 7.0695418],
        [-73.74484701, 7.06949788],
        [-73.74490065, 7.06950321],
        [-73.74489663, 7.06953914]
      ]
    ]
  },
  id: '985a6f17-e771-4510-a56d-905fc788eb20',
  properties: {
    name: 'Componentes Electricos 1',
    category: 'Infraestructura',
    html: HTML
  }
}
