import { useImage } from '@/util'

const HTML = () => `
  <div class="content-popup-delimits">
    <h3 class="title-popup">{{ title }}</h3>

    ${useImage(CAFETERIA_LATIA, 'cafeteriaTia.jpg')}

    <p>Establecimiento ubicado cerca a la Plazoleta de la Paz dedicado a la venta de diversos alimentos (café, jugos de frutas, gaseosas, sándwiches, galletas, almuerzos, entre otros).</p>

    ${useImage(CAFETERIA_LATIA, 'cafeteriaTia-1.jpg')}
  </div>
`

export const CAFETERIA_LATIA = {
  type: 'Feature',
  geometry: {
    type: 'Polygon',
    coordinates: [
      [
        [
          -73.74623283, 7.06892278
        ],
        [
          -73.7462382, 7.06880965
        ],
        [
          -73.74615102, 7.06880699
        ],
        [
          -73.74615102, 7.06878835
        ],
        [
          -73.74607592, 7.06878702
        ],
        [
          -73.74608263, 7.06880299
        ],
        [
          -73.74599277, 7.06879368
        ],
        [
          -73.74599143, 7.06890414
        ],
        [
          -73.74607995, 7.0689108
        ],
        [
          -73.74607324, 7.06898799
        ],
        [
          -73.7461403, 7.06899065
        ],
        [
          -73.74614164, 7.06891612
        ],
        [
          -73.74623283, 7.06892278
        ]
      ]
    ]
  },
  id: 'a037b8dc-fb5d-472c-9cd7-f62877680356',
  properties: {
    name: 'Cafeteria La Tia',
    category: 'cafeteria',
    html: HTML
  }
}
