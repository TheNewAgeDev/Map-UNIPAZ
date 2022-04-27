const HTML = `
  <div class="center content-popup-delimits">
    <h3 class="title-popup">{{ title }}</h3>
    <img class="images-popup" src="/images/delimit/9.jpg" alt="Aula 9" />
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, ea.</p>
  </div>
`

export const AULA_9 = {
  type: 'Feature',
  geometry: {
    type: 'Polygon',
    coordinates: [
      [
        [
          -73.74626502, 7.06866458
        ],
        [
          -73.74615773, 7.06866857
        ],
        [
          -73.74615907, 7.06855811
        ],
        [
          -73.74627172, 7.06856609
        ],
        [
          -73.74626502, 7.06866458
        ]
      ]
    ]
  },
  id: '67b5c549-408e-4eab-b19b-d2a15392f132',
  properties: {
    name: 'Aula 9',
    category: 'Aulas',
    html: HTML
  }
}
