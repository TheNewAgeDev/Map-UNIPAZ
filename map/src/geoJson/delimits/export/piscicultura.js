import { useImage, useSlider } from '@/util'

const HTML = () => `
  <div class="content-popup-delimits">
    <h3 class="title-popup">{{ title }}</h3>

    ${
      useSlider([
        useImage(PISCICULTURA_1, 'piscicultura.jpg'), useImage(PISCICULTURA_1, 'piscicultura-1.jpg')
      ])
    }

    <p>Al finalizar el desarrollo del módulo Medicina Veterinaria y Zootecnia en Peces se espera que los estudiantes estén capacitados para:
    “Desarrollar un sistema sostenible de explotación piscícola a partir de elementos que le permitan ser gestor de alternativas de solución a las problemáticas que generalmente se presentan en las áreas de sanidad, producción y administración, cimentado en valores éticos hacia su profesión y su entorno”.
    </p>

    ${useImage(PISCICULTURA_1, 'piscicultura-2.jpg')}

    <strong class="copyright">Fuente: Instituto Universitario de la Paz.</strong>
  </div>
`

const OPTIONS = {
  id: '7b8d8bb0-3495-4bc0-85ba-246f2056a200',
  properties: {
    name: 'Piscicolas',
    category: 'MVZ',
    html: HTML
  }
}

export const PISCICULTURA_1 = {
  type: 'Feature',
  geometry: {
    type: 'Polygon',
    coordinates: [
      [
        [-73.74772310256958, 7.066013263559619],
        [-73.7481039762497, 7.0657790217689955],
        [-73.74803423881531, 7.065683195547699],
        [-73.74765336513519, 7.065912113710057],
        [-73.74772310256958, 7.066013263559619]
      ]
    ]
  },
  ...OPTIONS
}

export const PISCICULTURA_2 = {
  type: 'Feature',
  geometry: {
    type: 'Polygon',
    coordinates: [
      [
        [-73.74762654304504, 7.065832258550013],
        [-73.74800205230713, 7.065608664028527],
        [-73.74792695045471, 7.0655128377719265],
        [-73.74756217002869, 7.065736432339772],
        [-73.74762654304504, 7.065832258550013]
      ]
    ]
  },
  ...OPTIONS
}

export const PISCICULTURA_3 = {
  type: 'Feature',
  geometry: {
    type: 'Polygon',
    coordinates: [
      [
        [-73.7475299835205, 7.065651253469519],
        [-73.7478893995285, 7.0654329825429025],
        [-73.74782502651215, 7.06533183256636],
        [-73.74744951725005, 7.065560750902708],
        [-73.7475299835205, 7.065651253469519]
      ]
    ]
  },
  ...OPTIONS
}
