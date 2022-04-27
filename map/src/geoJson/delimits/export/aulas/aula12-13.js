const HTML = `
  <div class="center content-popup-delimits">
    <h3 class="title-popup">{{ title }}</h3>
    <img class="images-popup" src="/images/delimit/12.jpg" alt="Aula 12 y 13" />
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, ea.</p>
  </div>
`

export const AULA12_13 = {
  type: 'Feature',
  geometry: {
    type: 'Polygon',
    coordinates: [
      [
        [
          -73.74602094, 7.06846228
        ],
        [
          -73.74590292, 7.06845829
        ],
        [
          -73.74590426, 7.0683598
        ],
        [
          -73.74602496, 7.06836512
        ],
        [
          -73.74602094, 7.06846228
        ]
      ]
    ]
  },
  id: '7f3cb49c-bd75-4dbe-9051-20ef56275e40',
  properties: {
    name: 'Aula 12 y 13',
    category: 'Aulas',
    html: HTML
  }
}
