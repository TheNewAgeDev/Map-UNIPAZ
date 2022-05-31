import { useImage } from '@/util'

const HTML = () => `
  <div class="center content-popup-delimits">
    <h3 class="title-popup">{{ title }}</h3>

    ${useImage(JUEGOS, 'salaJuegos.jpg')}

    <p>El salón de juegos es un establecimiento que ofrece exclusivamente entretenimiento al público, es el espacio perfecto para la comunidad universitaria en donde pueden jugar y divertirse después de un gran día de estudio. (Contiene: Mesa de pin pon, entre otros).</p>
  </div>
`

export const JUEGOS = {
  type: 'Feature',
  geometry: {
    type: 'Polygon',
    coordinates: [
      [
        [
          -73.74576613, 7.06842635
        ],
        [
          -73.74564275, 7.06842635
        ],
        [
          -73.74564677, 7.0683252
        ],
        [
          -73.74577015, 7.06832919
        ],
        [
          -73.74576613, 7.06842635
        ]
      ]
    ]
  },
  id: '5f2609d1-5236-49b5-b2ec-7492380483d2',
  properties: {
    name: 'Salón de Juegos',
    category: 'Recreacion',
    html: HTML
  }
}
