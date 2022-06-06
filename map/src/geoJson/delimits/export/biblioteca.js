import { useImage, useSlider, useAccordeon } from '@/util'

const SLIDERS_1 = [
  {
    title: 'Horario de atención',
    content: `
    <strong>Lunes a jueves:</strong> 7:00 am - 4:30 pm <br>
    <strong>Viernes a sábado:</strong> 7:00 am - 3:30 pm
    `
  }, {
    title: 'Contacto',
    content: `
    <strong>Johnny Javier Meza Jaraba</strong> <br>
    Director Centro de Información (e) <br>
    dir.centrodeinformación@unipaz.edu.co <br>
    biblioteca@unipaz.edu.co <br>
    Teléfono: 6 11 82 10 Ext. 226
    `
  }
]

const HTML = () => `
  <div class="content-popup-delimits">
    <h3 class="title-popup">{{ title }}</h3>

    ${useImage(BIBLIOTECA, 'biblioteca.jpg')}

    <h4 style="margin-top:15px;">Piso 1</h4>
    ${
      useSlider([
        useImage(BIBLIOTECA, 'biblioteca-3.jpg'), useImage(BIBLIOTECA, 'biblioteca-1.jpg')
      ])
    }
    <p style="margin-bottom: 0;">Sitio donde se puede recurrir para leer, buscar información y estudiar. Cuenta con papelería, fotocopiadora, sala de fotointerpretación, sala de lectura y música.</p>
    ${useAccordeon(SLIDERS_1)}

    <h4>Piso 2</h4>
    ${
      useSlider([
        useImage(BIBLIOTECA, 'biblioteca-4.jpg'),
        useImage(BIBLIOTECA, 'biblioteca-2.jpg'),
        useImage(BIBLIOTECA, 'biblioteca-5.jpg'),
        useImage(BIBLIOTECA, 'biblioteca-6.jpg')
      ])
    }
    <ul class="info-ul">
      <li>Auditorios principales, 1 y 2 </li>
      <li>Salas de informática</li>
      <li>Coordinación salas TIC</li>
    </ul>
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
