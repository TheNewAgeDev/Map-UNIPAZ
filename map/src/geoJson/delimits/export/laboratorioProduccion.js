const HTML = `
  <div class="center content-popup-delimits">
    <h3 class="title-popup">{{ title }}</h3>
    <img class="images-popup" src="/images/delimit/laboratorioProdu.jpg" alt="Laboratorio De Producción" />
    <p>En el laboratorio de producción se podrán desarrollar prácticas integrando diseño, operación y optimización de productos y procesos, que le permitirán al estudiante desarrollar nuevas competencias y adquirir experiencia en un ambiente industrial.</p>
  </div>
`

export const LABORATORIO_PRODUCCION = {
  type: 'Feature',
  geometry: {
    type: 'Polygon',
    coordinates: [
      [
        [
          -73.74451135, 7.06899133
        ],
        [
          -73.74432896, 7.06897935
        ],
        [
          -73.74434237, 7.06872249
        ],
        [
          -73.74444429, 7.06872382
        ],
        [
          -73.74452208, 7.06872648
        ],
        [
          -73.74456902, 7.06873979
        ],
        [
          -73.74456768, 7.06884493
        ],
        [
          -73.74451269, 7.06884759
        ],
        [
          -73.74451135, 7.06899133
        ]
      ]
    ]
  },
  id: '24518d9c-5b39-48c6-8414-238bc4ea3067',
  properties: {
    name: 'Laboratorio De Producción',
    category: 'Laboratorio',
    html: HTML
  }
}
