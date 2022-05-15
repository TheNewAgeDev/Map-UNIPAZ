const HTML = `
  <div class="center content-popup-delimits">
    <h3 class="title-popup">{{ title }}</h3>
    <img class="images-popup" src="/images/delimit/gimnasio.jpg" alt="Gimnasio" />
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, ea.</p>
  </div>
`

export const GIMNASIO = {
  type: 'Feature',
  geometry: {
    type: 'Polygon',
    coordinates: [
      [
        [-73.74553978443146, 7.06833970399007],
        [-73.74553978443146, 7.068238554649664],
        [-73.74540567398071, 7.068227907349395],
        [-73.74540030956268, 7.068329056692116],
        [-73.74553978443146, 7.06833970399007]
      ]
    ]
  },
  id: 'a47bae9a-cfb6-4f45-8901-10545345c82d',
  properties: {
    name: 'Gimnasio',
    category: 'Recreacion',
    html: HTML
  }
}
