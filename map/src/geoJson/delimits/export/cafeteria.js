const HTML = `
  <div class="center content-popup-delimits">
    <h3 class="title-popup">{{ title }}</h3>
    <img class="images-popup" src="/images/delimit/cafeteria.jpg" alt="Cafeteria" />
    <p>Establecimiento ubicado al lado del parqueadero administrativo 2, dedicado a la venta de diversos alimentos (café, jugos de frutas, gaseosas, sándwiches, galletas, almuerzos, entre otros). ACTUALMENTE SE ENCUENTRA CERRADO</p>
  </div>
`

export const CAFETERIA = {
  type: 'Feature',
  geometry: {
    type: 'Polygon',
    coordinates: [
      [
        [-73.74397337436676, 7.068414235068836],
        [-73.7438714504242, 7.068281143848322],
        [-73.74379634857178, 7.068350351287782],
        [-73.74383389949799, 7.068419558716859],
        [-73.74380171298981, 7.068462147898826],
        [-73.74384462833405, 7.068510060723867],
        [-73.74397337436676, 7.068414235068836]
      ]
    ]
  },
  id: 'c755bda3-f8ee-496d-9e67-a3a43bb83b1a',
  properties: {
    name: 'Cafeteria',
    category: 'cafeteria',
    html: HTML
  }
}
