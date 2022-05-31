const HTML = `
  <div class="center content-popup-delimits">
    <h3 class="title-popup">{{ title }}</h3>
    <img class="images-popup" src="/images/delimit/areaAdmin.jpg" alt="Area Administrativa, Departamentos y Escuelas" />
    <img class="images-popup" src="/images/delimit/areaAdmin-1.jpg" alt="Area Administrativa, Departamentos y Escuelas" />
  </div>
`

export const EDIF_ADMIN = {
  type: 'Feature',
  geometry: {
    type: 'Polygon',
    coordinates: [
      [
        [
          -73.74528904, 7.06944305
        ],
        [
          -73.7450168, 7.06943108
        ],
        [
          -73.74501546, 7.0693805
        ],
        [
          -73.74497522, 7.06937917
        ],
        [
          -73.74497388, 7.06923144
        ],
        [
          -73.74502485, 7.06923277
        ],
        [
          -73.74502485, 7.06917554
        ],
        [
          -73.7453038, 7.06919551
        ],
        [
          -73.74528904, 7.06944305
        ]
      ]
    ]
  },
  id: '2059baf0-b2d5-49f2-b9b3-cf22e312b4d9',
  properties: {
    name: 'Area Administrativa, Departamentos y Escuelas',
    category: 'default',
    html: HTML
  }
}
