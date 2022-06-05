import { useImage, useAccordeon } from '@/util'

const SLIDERS_FLOOR1 = [
  {
    title: 'Registro y Control',
    content: `
    <strong>José Granados</strong> <br />
    secretaria.registro@unipaz.edu.co <br />
    <strong>Teléfono:</strong> 6118210 Ext. 152
    `
  },
  {
    title: 'Dirección de Registro y Control Académico',
    content: `
    <strong>Jhon Jairo Jiménez Álvarez</strong> <br />
    registro@unipaz.edu.co <br />
    <strong>Teléfono:</strong> 3222680406 - 6118210 Ext. 104
    `
  },
  {
    title: 'Tesorería General',
    content: `
    <strong>Mildred Flórez Alvarado</strong> <br />
    tesoreria@unipaz.edu.co <br />
    <strong>Teléfono:</strong> 3002801506 - 6118210 Ext. 134
    `
  },
  {
    title: 'Dirección Administrativa',
    content: `
    <strong>Sergio Alexander Manosalva Camargo</strong> <br />
    direccion.administrativa@unipaz.edu.co <br />
    <strong>Teléfono:</strong> 6118210 Ext. 121
    `
  },
  {
    title: 'Presupuesto y Contabilidad',
    content: `
    <strong>Juan Bautista Rodriguez Oviedo</strong> <br />
    contabilidad@unipaz.edu.co <br />
    <strong>Teléfono:</strong> 6118210 Ext. 150
    `
  },
  {
    title: 'Gestión Humana',
    content: `
    <strong>Oscar de Jesús Serna Quiñonez</strong> <br />
    gestion.humana@unipaz.edu.co <br />
    <strong>Teléfono:</strong> 6118210 Ext. 114
    `
  },
  {
    title: 'Servicios Generales',
    content: `
    <strong>Pablo Rojas Carrero</strong> <br />
    servicios.generales@unipaz.edu.co <br />
    <strong>Teléfono:</strong> 3133937216 - 6118210 Ext. 130
    `
  },
  {
    title: 'Dirección Escuela de Producción',
    content: `
    <strong>Angélica Cervantes Ordoñez</strong> <br />
    dir.produccion@unipaz.edu.co <br />
    <strong>Teléfono:</strong> 6118210 Ext. 109
    `
  },
  {
    title: 'Dirección Escuela de Ciencias',
    content: `
    <strong>Kelly Johana Gómez Jiménez</strong> <br />
    dir.ciencias@unipaz.edu.co <br />
    <strong>Teléfono:</strong> 315 864 95 64 - 6118210 Ext. 108
    `
  },
  {
    title: 'Dirección de Escuela Ingeniería Ambiental y Saneamiento',
    content: `
    <strong>Ever James Ortiz Orozco</strong> <br />
    dir.ambiental@unipaz.edu.co <br />
    <strong>Teléfono:</strong> 6118210 Ext. 144
    `
  },
  {
    title: 'Dirección Ingeniería Agronómica',
    content: `
    <strong>Oswlado Ríos Carrascal</strong> <br />
    dir.agronomica@unipaz.edu.co <br />
    <strong>Teléfono:</strong> 6118210 Ext. 124
    `
  },
  {
    title: 'Dirección Escuela Ingeniería Agroindustrial',
    content: `
    <strong>Leidy Andrea Carreño</strong> <br />
    academico.agroindustria@unipaz.edu.co <br />
    <strong>Teléfono:</strong> 6118210 Ext. 145
    `
  },
  {
    title: 'Dirección de Escuela Medicina Veterinaria y Zootecnia',
    content: `
    <strong>Jorge Eliecer Franco Rodriguez</strong> <br />
    dir.mvz@unipaz.edu.co <br />
    <strong>Teléfono:</strong> 3158415593 - 6118210 Ext. 133
    `
  }
]

const SLIDERS_FLOOR2 = [
  {
    title: 'Dirección de Investigación y Proyección Social',
    content: `
    <strong>Rodolfo Ruíz Posada</strong> <br />
    dir.investigaciones@unipaz.edu.co <br />
    <strong>Teléfono:</strong> 6118210 Ext. 136
    `
  },
  {
    title: 'Secretaria General',
    content: `
    <strong>Jemnys Beltrán Bacca</strong> <br />
    secretaria.general@unipaz.edu.co <br />
    <strong>Teléfono:</strong> 6118210 Ext. 149 - 123
    `
  },
  {
    title: 'Asesor Tecnologías de la Información y la Comunicación',
    content: `
    <strong>Uriel Antonio Ferrer González</strong> <br />
    sistemas@unipaz.edu.co <br />
    <strong>Teléfono:</strong> 6118210 Ext. 226-218
    `
  },
  {
    title: 'Vicerrectoría',
    content: `
    <strong>Kelly Cristina Torres Angulo</strong> <br />
    vicerrectoria@unipaz.edu.co <br />
    <strong>Teléfono:</strong> 3115997869 - 6118210 Ext. 135
    `
  },
  {
    title: 'Secretaria de Escuelas',
    content: `
    <strong>Correo:</strong> secretaria.escuelas@unipaz.edu.co <br />
    <strong>Teléfono:</strong> 6118210 Ext. 186
    `
  },
  {
    title: 'Rectoría',
    content: `
    <strong>Oscar Orlando Porras Atencia</strong> <br />
    rectoria@unipaz.edu.co <br />
    <strong>Teléfono:</strong> 3006814314 - 6118210 Ext. 102
    `
  },
  {
    title: 'Oficina de Planeación',
    content: `
    <strong>Leandro Badillo Severiche</strong> <br />
    planeacion@unipaz.edu.co <br />
    <strong>Teléfono:</strong> 6118210 Ext. 126
    `
  },
  {
    title: 'Evaluación y Control de la Gestión',
    content: `
    <strong>Daniel Duarte Pabón</strong> <br />
    control.interno@unipaz.edu.co <br />
    <strong>Teléfono:</strong> 6118210 Ext. 139
    `
  },
  {
    title: 'Internalización',
    content: `
    <strong>Correo:</strong> internacionalizacion@unipaz.edu.co <br />
    <strong>Teléfono:</strong> 6118210 Ext. 139
    `
  },
  {
    title: 'Bienestar Universitario',
    content: `
    <strong>Jannye Baños Sierra</strong> <br />
    bienestar.universitario@unipaz.edu.co <br />
    <strong>Teléfono:</strong> 3045762211 - 6118210 Ext. 131-142
    `
  }
]

const HTML = () => `
  <div class="content-popup-delimits">
    <h3 class="title-popup">{{ title }}</h3>

    ${useImage(EDIF_ADMIN, 'areaAdmin.jpg')}

    <h4 style="margin-top:15px;">Piso 1</h4>
    ${useImage(EDIF_ADMIN, 'areaAdmin-1.jpg')}
    ${useAccordeon(SLIDERS_FLOOR1)}

    <h4>Piso 2</h4>
    ${useAccordeon(SLIDERS_FLOOR2)}
  </div>
`

export const EDIF_ADMIN = {
  type: 'Feature',
  geometry: {
    type: 'Polygon',
    coordinates: [
      [
        [
          -73.74528904, 7.06944305
        ],
        [
          -73.7450168, 7.06943108
        ],
        [
          -73.74501546, 7.0693805
        ],
        [
          -73.74497522, 7.06937917
        ],
        [
          -73.74497388, 7.06923144
        ],
        [
          -73.74502485, 7.06923277
        ],
        [
          -73.74502485, 7.06917554
        ],
        [
          -73.7453038, 7.06919551
        ],
        [
          -73.74528904, 7.06944305
        ]
      ]
    ]
  },
  id: '2059baf0-b2d5-49f2-b9b3-cf22e312b4d9',
  properties: {
    name: 'Area Administrativa, Departamentos y Escuelas',
    category: 'Admin',
    html: HTML
  }
}
