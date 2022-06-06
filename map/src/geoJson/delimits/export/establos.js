const HTML = () => `
<div class="content-popup-delimits">
  <h3 class="title-popup">{{ title }}</h3>
</div>
`

const OPTIONS = {
  id: '25e6391c-ae65-4d43-92dd-d657e70ad47e',
  properties: {
    name: 'Establos',
    category: 'MVZ',
    html: HTML
  }
}

export const ESTABLOS_1 = {
  type: 'Feature',
  geometry: {
    type: 'Polygon',
    coordinates: [
      [
        [-73.74718666076659, 7.065539456178535],
        [-73.74723494052887, 7.065475572000103],
        [-73.74703645706177, 7.065353127300113],
        [-73.74698281288147, 7.06541168781284],
        [-73.74718666076659, 7.065539456178535]
      ]
    ]
  },
  ...OPTIONS
}

export const ESTABLOS_2 = {
  type: 'Feature',
  properties: {},
  geometry: {
    type: 'Polygon',
    coordinates: [
      [
        [-73.7471330165863, 7.065337156249891],
        [-73.74721348285675, 7.065267948359251],
        [-73.74713838100433, 7.06519341677311],
        [-73.74706327915192, 7.065257300990524],
        [-73.7471330165863, 7.065337156249891]
      ]
    ]
  },
  ...OPTIONS
}
