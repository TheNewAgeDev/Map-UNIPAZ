import { useImage } from '@/util'

const HTML = () => `
  <div class="center content-popup-delimits">
    <h3 class="title-popup">{{ title }}</h3>

    ${useImage(GIMNASIO, 'gimnasio.jpg')}

    <p>El gimnasio es un lugar que permite practicar deportes o hacer ejercicio en un recinto cerrado con varias máquinas y artículos deportivos para el uso de toda la comunidad del instituto universitario de la paz en general, con un ambiente ameno, música al gusto y un entrenador que estará a disposición de todos y todas.</p>
  </div>
`

export const GIMNASIO = {
  type: 'Feature',
  geometry: {
    type: 'Polygon',
    coordinates: [
      [
        [-73.74553978443146, 7.06833970399007],
        [-73.74553978443146, 7.068238554649664],
        [-73.74540567398071, 7.068227907349395],
        [-73.74540030956268, 7.068329056692116],
        [-73.74553978443146, 7.06833970399007]
      ]
    ]
  },
  id: 'a47bae9a-cfb6-4f45-8901-10545345c82d',
  properties: {
    name: 'Gimnasio',
    category: 'Recreacion',
    html: HTML
  }
}
