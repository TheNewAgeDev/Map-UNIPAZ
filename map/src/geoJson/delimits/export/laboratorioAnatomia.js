const HTML = `
  <div class="center content-popup-delimits">
    <h3 class="title-popup">{{ title }}</h3>
    <img class="images-popup" src="/images/delimit/laboratorioAnatomia.jpg" alt="Laboratorio De Anatomía" />
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, ea.</p>
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
