const HTML = `
  <div class="center content-popup-delimits">
    <h3 class="title-popup">{{ title }}</h3>
    <img class="images-popup" src="/images/delimit/laboratorioCiencias.jpg" alt="Laboratorio Ciencias Basicas" />
    <p>El laboratorio de ciencias básicas cuenta con equipos para la aplicación de métodos espectro métricos que son utilizados para la implementación de prácticas académicas y tesis de grado.</p>
    <strong>Fuente: Instituto Universitario de la Paz.</strong>
  </div>
`

export const LABORATIO_CIENCIAS = {
  type: 'Feature',
  geometry: {
    type: 'Polygon',
    coordinates: [
      [
        [
          -73.74490472, 7.0689156
        ],
        [
          -73.74485778, 7.06892093
        ],
        [
          -73.74485778, 7.06897682
        ],
        [
          -73.74473708, 7.0689715
        ],
        [
          -73.74474647, 7.06891028
        ],
        [
          -73.74471428, 7.06890895
        ],
        [
          -73.74471428, 7.06887568
        ],
        [
          -73.74461772, 7.06887568
        ],
        [
          -73.74461638, 7.06878251
        ],
        [
          -73.74474915, 7.06878784
        ],
        [
          -73.74482694, 7.06879316
        ],
        [
          -73.74491545, 7.06880248
        ],
        [
          -73.74490472, 7.0689156
        ]
      ]
    ]
  },
  id: '06db2af3-d269-4ba0-b9cc-7373062519a3',
  properties: {
    name: 'Laboratorio Ciencias Basicas',
    category: 'Laboratorio',
    html: HTML
  }
}
