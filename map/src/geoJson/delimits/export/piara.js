import { useImage } from '@/util'

const HTML = () => `
  <div class="content-popup-delimits">
    <h3 class="title-popup">{{ title }}</h3>

    ${useImage(PIARA, 'piara-1.jpg')}

    <p>El establo de porcinos es un lugar donde se cría al cerdo doméstico, el estudiante de la asignatura de MVZ en Porcinos recibe a lo largo de su formación áreas para desarrollar el sistema de producción como; aspectos generales de la porcicultura nacional y mundial, termorregulación, instalaciones y equipos, programación, genética, alimentación, sanidad, biotecnología reproductiva y las administrativas y económicas.</p>

    <strong>Fuente: Instituto Universitario de la Paz.</strong>

    ${useImage(PIARA, 'piara.jpg')}
  </div>
`

export const PIARA = {
  type: 'Feature',
  geometry: {
    type: 'Polygon',
    coordinates: [
      [
        [-73.74740992, 7.0678227],
        [-73.74734822, 7.06770291],
        [-73.7476312, 7.06752856],
        [-73.74767948, 7.06766565],
        [-73.74740992, 7.0678227]
      ]
    ]
  },
  id: '20bf89be-08ba-41f2-9575-eb9172f4c3a3',
  properties: {
    name: 'Piara',
    category: 'MVZ',
    html: HTML
  }
}
