const HTML = `
  <div class="center content-popup-delimits">
    <h3 class="title-popup">{{ title }}</h3>
    <img class="images-popup" src="/images/delimit/puentePeatonal.jpg" alt="Puente Peatonal" />
    <p>El puente peatonal es una estructura que permite el paso de peatones sobre vías de tráfico altamente peligrosas, tristemente son pocos quienes lo utilizan adecuadamente, así que la invitación que extiende el instituto universitario de la paz es a usar el puente peatonal por el bien y la seguridad de toda la comunidad universitaria.</p>
    <img class="images-popup" src="/images/delimit/puentePeatonal-1.jpg" alt="Puente Peatonal" />
  </div>
`

export const PUENTE = {
  type: 'Feature',
  geometry: {
    type: 'LineString',
    coordinates: [
      [-73.74514507, 7.0657921],
      [-73.74515848, 7.06581606],
      [-73.74502437, 7.06595847],
      [-73.74503912, 7.06597577],
      [-73.74522822, 7.06580541],
      [-73.74524699, 7.06584134],
      [-73.74499621, 7.06607159],
      [-73.74470116, 7.06578412],
      [-73.74496268, 7.06551261],
      [-73.74498011, 7.06553923],
      [-73.74476017, 7.06576681],
      [-73.74477761, 7.06578678],
      [-73.74495597, 7.06558847],
      [-73.74498279, 7.06560976]
    ]
  },
  id: '4ff951fa-4c78-4ffa-bd53-c71528d09719',
  properties: {
    name: 'Puente Peatonal',
    category: 'Infraestructura',
    html: HTML,

    color: 'yellow',
    weight: 4,
    opacity: 0.4
  }
}
