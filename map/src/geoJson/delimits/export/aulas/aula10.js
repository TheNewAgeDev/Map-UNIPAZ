const HTML = `
  <div class="center content-popup-delimits">
    <h3 class="title-popup">{{ title }}</h3>
    <img class="images-popup" src="/images/delimit/10.jpg" alt="Aula 10" />
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, ea.</p>
  </div>
`

export const AULA_10 = {
  type: 'Feature',
  geometry: {
    type: 'Polygon',
    coordinates: [
      [
        [
          -73.74616444, 7.06848491
        ],
        [
          -73.74616309, 7.06837843
        ],
        [
          -73.74604642, 7.06837045
        ],
        [
          -73.74604374, 7.06848091
        ],
        [
          -73.74616444, 7.06848491
        ]
      ]
    ]
  },
  id: '6780e33e-1bb2-4045-be92-8e9f8e65e2dd',
  properties: {
    name: 'Aula 10',
    category: 'Aula',
    html: HTML
  }
}
