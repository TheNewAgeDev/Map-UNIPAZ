import { useImage } from '@/util'

const HTML = () => `
  <div class="content-popup-delimits">
    <h3 class="title-popup">{{ title }}</h3>

    ${useImage(LABORATORIO_ANATOMIA, 'laboratorioAnatomia.jpg')}

    <p>El Laboratorio de anatomía se encarga del trabajo con técnicas anatómicas, conservación y disección, con la finalidad de obtener un preparado con fines docentes (pregrado y posgrado) y entrenamiento quirúrgico.</p>
  </div>
`

export const LABORATORIO_ANATOMIA = {
  type: 'Feature',
  geometry: {
    type: 'Polygon',
    coordinates: [
      [
        [
          -73.74400193, 7.06811474
        ],
        [
          -73.7438705, 7.06805884
        ],
        [
          -73.74396572, 7.06785387
        ],
        [
          -73.74408509, 7.06791244
        ],
        [
          -73.74400193, 7.06811474
        ]
      ]
    ]
  },
  id: '20c94bcb-c063-4be7-bd98-bd4cf210c7e4',
  properties: {
    name: 'Laboratorio De Anatomía',
    category: 'Laboratorio',
    html: HTML
  }
}
