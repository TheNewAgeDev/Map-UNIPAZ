const HTML = `
  <div class="center content-popup-delimits">
    <h3 class="title-popup">{{ title }}</h3>
    <img class="images-popup" src="/images/delimit/vivero.jpg" alt="Gimnasio" />
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, ea.</p>
  </div>
`

export const VIVERO = {
  type: 'Feature',
  geometry: {
    type: 'Polygon',
    coordinates: [
      [
        [-73.74679433, 7.06687739],
        [-73.7465692, 7.06673678],
        [-73.74666366, 7.06658992],
        [-73.74688092, 7.06673522],
        [-73.74679433, 7.06687739]
      ]
    ]
  },
  id: 'cc673d0d-9162-45b0-82ed-c240fd30bf49',
  properties: {
    name: 'Vivero',
    category: 'MVZ',
    html: HTML
  }
}
