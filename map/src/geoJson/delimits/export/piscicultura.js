import { useImage, useSlider } from '@/util'

const HTML = () => `
  <div class="content-popup-delimits">
    <h3 class="title-popup">{{ title }}</h3>

    ${
      useSlider([
        useImage(PISCICULTURA, 'piscicultura.jpg'), useImage(PISCICULTURA, 'piscicultura-1.jpg')
      ])
    }

    <p>Al finalizar el desarrollo del módulo Medicina Veterinaria y Zootecnia en Peces se espera que los estudiantes estén capacitados para:
    “Desarrollar un sistema sostenible de explotación piscícola a partir de elementos que le permitan ser gestor de alternativas de solución a las problemáticas que generalmente se presentan en las áreas de sanidad, producción y administración, cimentado en valores éticos hacia su profesión y su entorno”.
    </p>

    ${useImage(PISCICULTURA, 'piscicultura-2.jpg')}

    <strong class="copyright">Fuente: Instituto Universitario de la Paz.</strong>
  </div>
`

export const PISCICULTURA = {
  type: 'Feature',
  geometry: {
    type: 'Polygon',
    coordinates: [
      [
        [-73.7476957, 7.06591243],
        [-73.7474713, 7.06559048],
        [-73.74775424, 7.06540652],
        [-73.74796888, 7.06578171],
        [-73.7476957, 7.06591243]
      ]
    ]
  },
  id: '7b8d8bb0-3495-4bc0-85ba-246f2056a200',
  properties: {
    name: 'Piscicolas',
    category: 'MVZ',
    html: HTML
  }
}
