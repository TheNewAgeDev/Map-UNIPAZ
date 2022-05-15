const HTML = `
  <div class="center content-popup-delimits">
    <h3 class="title-popup">{{ title }}</h3>
    <img class="images-popup" src="/images/delimit/canchaVoley1.jpg" alt="Cancha Voleibol 1" />
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, ea.</p>
  </div>
`

export const CANCHA_VOLEY_1 = {
  type: 'Feature',
  geometry: {
    type: 'Polygon',
    coordinates: [
      [
        [-73.74554116, 7.06819686],
        [-73.74544058, 7.06818488],
        [-73.74545399, 7.06798923],
        [-73.7455586, 7.06800121],
        [-73.74554116, 7.06819686]
      ]
    ]
  },
  id: 'e43222ed-b1c4-40dd-8e10-2834b2779d78',
  properties: {
    name: 'Cancha Voleibol 1',
    category: 'Recreacion',
    html: HTML
  }
}
