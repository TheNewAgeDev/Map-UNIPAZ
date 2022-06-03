import { useImage, useSlider, useAccordeon } from '@/util'

const SLIDERS = [
  {
    title: 'Delimitación',
    content: `
     lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, facilis.
    `
  }, {
    title: 'Delimitación 2',
    content: `
      lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, facilis.
    `
  }
]

const HTML = () => `
  <div class="content-popup-delimits">
    <h3 class="title-popup">{{ title }}</h3>

    ${
      useSlider([
        useImage(BIBLIOTECA, 'biblioteca.jpg'),
        useImage(BIBLIOTECA, 'biblioteca-1.jpg'),
        useImage(BIBLIOTECA, 'biblioteca-2.jpg')
      ])
    }

    <h2>Piso 1:</h2>
    ${useAccordeon(SLIDERS)}

    <h2>Piso 2:</h2>
    ${useAccordeon(SLIDERS)}
  </div>
`

export const BIBLIOTECA = {
  type: 'Feature',
  geometry: {
    type: 'Polygon',
    coordinates: [
      [
        [
          -73.74566414, 7.06946371
        ],
        [
          -73.7454281, 7.06945705
        ],
        [
          -73.74542675, 7.06942112
        ],
        [
          -73.74537177, 7.06941846
        ],
        [
          -73.74537043, 7.06927871
        ],
        [
          -73.74540396, 7.06928004
        ],
        [
          -73.74539591, 7.0691962
        ],
        [
          -73.74567352, 7.06920285
        ],
        [
          -73.74566414, 7.06946371
        ]
      ]
    ]
  },
  id: 'f4df7b39-2337-427b-b7bd-b0135985d433',
  properties: {
    name: 'Biblioteca, Auditorio, Salas de Informatica',
    category: 'Aula',
    html: HTML
  }
}
