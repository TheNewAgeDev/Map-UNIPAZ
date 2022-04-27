const HTML = `
  <div class="center content-popup-delimits">
    <h3 class="title-popup">{{ title }}</h3>
    <img class="images-popup" src="/images/delimit/plazoleta.jpg" alt="Plazoleta de la Paz" />
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, ea.</p>
  </div>
`

export const PLAZOLETA = {
  type: 'Feature',
  geometry: {
    type: 'Polygon',
    coordinates: [
      [
        [
          -73.74562553, 7.06918845
        ],
        [
          -73.74500594, 7.06915118
        ],
        [
          -73.74502605, 7.06883309
        ],
        [
          -73.74558798, 7.06887834
        ],
        [
          -73.74557725, 7.06892759
        ],
        [
          -73.74564296, 7.06893158
        ],
        [
          -73.74562553, 7.06918845
        ]
      ]
    ]
  },
  id: '9671f54c-a98c-4dc9-9322-f87e9bf9bdac',
  properties: {
    name: 'Plazoleta de la Paz',
    category: 'default',
    html: HTML
  }
}
