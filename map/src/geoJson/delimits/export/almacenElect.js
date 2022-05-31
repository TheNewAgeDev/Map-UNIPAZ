const HTML = `
  <div class="center content-popup-delimits">
    <h3 class="title-popup">{{ title }}</h3>
    <img class="images-popup" src="/images/delimit/almacenElect.jpg" alt="Almacen de Componentes Electricos" />
    <p>La función del almacén de componentes eléctricos es mantener la mercancía limpia y en orden en un lugar seguro, además de asegurar la facilidad y la seguridad de retiro y de inventario a quienes operan.</p>
  </div>
`

export const ALM_ELECT = {
  type: 'Feature',
  geometry: {
    type: 'Polygon',
    coordinates: [
      [
        [-73.74491921, 7.06925388],
        [-73.74484317, 7.0692522],
        [-73.74484655, 7.06917842],
        [-73.74492591, 7.06918033],
        [-73.74491921, 7.06925388]
      ]
    ]
  },
  id: 'c59d84d7-6641-4084-86b9-27059abaf0de',
  properties: {
    name: 'Almacen de Componentes Electricos',
    category: 'Infraestructura',
    html: HTML
  }
}
