const HTML = `
  <div class="center content-popup-delimits">
    <h3 class="title-popup">{{ title }}</h3>
    <img class="images-popup" src="/images/delimit/rotonda.jpg" alt="Rotonda" />
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, ea.</p>
  </div>
`

export const ROTONDA = {
  type: 'Feature',
  geometry: {
    type: 'Polygon',
    coordinates: [
      [
        [-73.7456202507019, 7.0668490798905355],
        [-73.74547004699707, 7.0668490798905355],
        [-73.74547004699707, 7.0669874951879885],
        [-73.7456202507019, 7.0669874951879885],
        [-73.7456202507019, 7.0668490798905355]
      ]
    ]
  },
  id: '956ba5b6-6180-4d8c-971e-1eb04bbb9c3a',
  properties: {
    name: 'Rotonda',
    category: 'default',
    html: HTML
  }
}
