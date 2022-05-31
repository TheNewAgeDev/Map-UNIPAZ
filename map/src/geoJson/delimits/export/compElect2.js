import { useImage } from '@/util'

const HTML = () => `
  <div class="content-popup-delimits">
    <h3 class="title-popup">{{ title }}</h3>

    ${useImage(COMP_ELECT_2, 'compElect2.jpg')}
  </div>
`

export const COMP_ELECT_2 = {
  type: 'Feature',
  geometry: {
    type: 'Polygon',
    coordinates: [
      [
        [-73.74491004, 7.06944997],
        [-73.74482287, 7.06944731],
        [-73.74482689, 7.06938209],
        [-73.74491943, 7.06938343],
        [-73.74491004, 7.06944997]
      ]
    ]
  },
  id: '6305f6a9-8207-4681-a358-b0c2f22bee52',
  properties: {
    name: 'Componentes Electricos 2',
    category: 'Infraestructura',
    html: HTML
  }
}
