import { useImage } from '@/util'

const HTML = () => `
  <div class="center content-popup-delimits">
    <h3 class="title-popup">{{ title }}</h3>

    ${useImage(PARQUEADERO_ESTUDIANTIL, 'parqEstud.jpg')}

    <p>Lugar destinado a estacionar vehículos (carros y motos) de la comunidad estudiantil y algunos docentes, conformado por las plazas de estacionamiento, franja de circulación y franja de circulación peatonal, se encuentra ubicado en la entrada principal de la universidad.</p>
  </div>
`

export const PARQUEADERO_ESTUDIANTIL = {
  type: 'Feature',
  geometry: {
    type: 'Polygon',
    coordinates: [
      [
        [-73.74599575996399, 7.066960876864774],
        [-73.74573290348053, 7.066630809529549],
        [-73.74557733535767, 7.066763901225339],
        [-73.74582946300507, 7.067077997475457],
        [-73.74599575996399, 7.066960876864774]
      ]
    ]
  },
  id: 'eceb6281-b1e0-4b54-a5cd-e9f521cbee76',
  properties: {
    name: 'Parqueadero Estudiantil',
    category: 'Parqueadero',
    html: HTML
  }
}
