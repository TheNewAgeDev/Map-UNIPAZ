import { useImage } from '@/util'

const HTML = () => `
  <div class="content-popup-delimits">
    <h3 class="title-popup">{{ title }}</h3>

    ${useImage(GALPON, 'galpon-1.jpg')}

    <p>Los galpones de la granja avícola pueden llegar a medir entre 12 metros de ancho y hasta 150 metros de largo. Suelen construirse con los costados abiertos y un sistema de cortinas que se pueden bajar y subir para aprovechar la ventilación. Al finalizar el desarrollo del módulo Medicina Veterinaria y Zootecnia en aves se espera que los estudiantes estén capacitados para crear empresas avícolas, partiendo de la fundamentación adquirida durante la formación académica, que tengan definidas su visión y su misión hacia la optimización de una producción competitiva de aves, teniendo en cuenta el respeto hacia el medio ambiente.</p>

    <strong>Fuente: Instituto Universitario de la Paz.</strong>

    ${useImage(GALPON, 'galpon.jpg')}
  </div>
`

export const GALPON = {
  type: 'Feature',
  geometry: {
    type: 'Polygon',
    coordinates: [
      [
        [-73.74764534, 7.06629936],
        [-73.74734055, 7.06635607],
        [-73.74731284, 7.06624264],
        [-73.74761936, 7.06617905],
        [-73.74764534, 7.06629936]
      ]
    ]
  },
  id: '78191213-62ab-480a-901b-705ed1bfa954',
  properties: {
    name: 'Galpon',
    category: 'MVZ',
    html: HTML
  }
}
