import { useImage } from '@/util'

const HTML = () => `
  <div class="content-popup-delimits">
    <h3 class="title-popup">{{ title }}</h3>

    ${useImage(PLAZOLETA, 'plazoleta.jpg')}

    <p>La plazoleta de la paz es un espacio público, amplio descubierto, en el que se suelen realizar gran variedad de actividades sociales, comerciales y culturales, cuenta con un gran y visible logo de nuestra institución, mesas y sillas las cuales tienen un techo agradable con paneles solares para pasar el tiempo con amigos, además queda cerca al punto de encuentro de la institución universitaria de la paz.</p>
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
    category: 'Infraestructura',
    html: HTML
  }
}
