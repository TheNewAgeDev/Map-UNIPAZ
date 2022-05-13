const HTML = `
  <div class="center content-popup-delimits">
    <h3 class="title-popup">{{ title }}</h3>
    <img class="images-popup" src="/images/delimit/15.jpg" alt="Aula 15" />
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, ea.</p>
  </div>
`

export const AULA_15 = {
  type: 'Feature',
  geometry: {
    type: 'Polygon',
    coordinates: [
      [
        [
          -73.74588951, 7.06888817
        ],
        [
          -73.74576613, 7.06888285
        ],
        [
          -73.74576613, 7.0687817
        ],
        [
          -73.74589487, 7.06878968
        ],
        [
          -73.74588951, 7.06888817
        ]
      ]
    ]
  },
  id: 'c6721605-2de6-4af8-8db1-62efabfc8a68',
  properties: {
    name: 'Aula 15',
    category: 'Aula',
    html: HTML
  }
}
