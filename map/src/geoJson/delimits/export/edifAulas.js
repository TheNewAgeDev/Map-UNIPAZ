import { useImage, useSlider } from '@/util'

const HTML = () => `
  <div class="content-popup-delimits">
    <h3 class="title-popup">{{ title }}</h3>

    ${useImage(EDIF_AULAS, 'edifAulas.jpg')}

    <p>La inversión en la construcción del edificio fue del orden de los 14 mil millones de pesos y eso permitió una estructura de 4 pisos con 51 aulas con capacidad para 2500 personas, 2 baterías de baños para hombres y 2 para mujeres por piso para un total de 16 baños, 1 cafetería, 2 laboratorios, área cultural, 2 auditorios tipo audiovisual, 2 salas sistematizadas, un aula múltiple, la planta de tratamiento de aguas residuales, el subterráneo de agua potable y la subestación eléctrica.</p>

    ${
      useSlider([
        useImage(EDIF_AULAS, 'edifAulas-1.jpg'),
        useImage(EDIF_AULAS, 'edifAulas-2.jpg'),
        useImage(EDIF_AULAS, 'edifAulas-3.jpg')
      ])
    }

    <strong class="copyright">Fuente: Instituto Universitario de la Paz.</strong>
  </div>
`

export const EDIF_AULAS = {
  type: 'Feature',
  geometry: {
    type: 'Polygon',
    coordinates: [
      [
        [
          -73.74563746, 7.06980349
        ],
        [
          -73.74564148, 7.06972763
        ],
        [
          -73.74565489, 7.06972896
        ],
        [
          -73.74565758, 7.06961184
        ],
        [
          -73.74563746, 7.06961184
        ],
        [
          -73.74565489, 7.06953199
        ],
        [
          -73.74558381, 7.06952933
        ],
        [
          -73.74557845, 7.06951069
        ],
        [
          -73.74542288, 7.0695067
        ],
        [
          -73.74542422, 7.06952267
        ],
        [
          -73.74534912, 7.06952533
        ],
        [
          -73.74533705, 7.06955994
        ],
        [
          -73.74531023, 7.06955861
        ],
        [
          -73.74530755, 7.06952001
        ],
        [
          -73.74523513, 7.06951602
        ],
        [
          -73.74523379, 7.06949073
        ],
        [
          -73.74506883, 7.06948141
        ],
        [
          -73.74507554, 7.0695067
        ],
        [
          -73.74500982, 7.06950005
        ],
        [
          -73.74500312, 7.06958789
        ],
        [
          -73.744983, 7.06958522
        ],
        [
          -73.74498568, 7.0696877
        ],
        [
          -73.74500446, 7.06968903
        ],
        [
          -73.74499105, 7.06977022
        ],
        [
          -73.74506213, 7.06977421
        ],
        [
          -73.74506749, 7.06979817
        ],
        [
          -73.74520026, 7.0697995
        ],
        [
          -73.74520026, 7.0697822
        ],
        [
          -73.7452928, 7.06979018
        ],
        [
          -73.74530755, 7.06974227
        ],
        [
          -73.74533839, 7.06974493
        ],
        [
          -73.74533303, 7.06980083
        ],
        [
          -73.74541081, 7.06980482
        ],
        [
          -73.74541081, 7.06982212
        ],
        [
          -73.74556638, 7.06982878
        ],
        [
          -73.74556638, 7.06980615
        ],
        [
          -73.74563746, 7.06980349
        ]
      ]
    ]
  },
  id: 'a9e3804d-07cb-4e2d-86a2-2cd402386e5b',
  properties: {
    name: 'Edificio de Aulas',
    category: 'Aula',
    html: HTML
  }
}
