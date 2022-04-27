const HTML = `
  <div class="center content-popup-delimits">
    <h3 class="title-popup">{{ title }}</h3>
    <img class="images-popup" src="/images/delimit/salaJuegos.jpg" alt="Salón de Juegos" />
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, ea.</p>
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
    category: 'default',
    html: HTML
  }
}
