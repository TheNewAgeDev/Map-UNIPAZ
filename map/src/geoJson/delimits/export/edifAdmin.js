import { useImage } from '@/util'

const HTML = () => `
  <div class="content-popup-delimits">
    <h3 class="title-popup">{{ title }}</h3>

    ${useImage(EDIF_ADMIN, 'areaAdmin.jpg')}

    <div class="accordion">
      <div class="col">
        <div class="tabs">
          <div class="tab">
            <input type="radio" id="rd1" name="rd">
            <label class="tab-label" for="rd1">Item 1</label>
            <div class="tab-content">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos, facilis.
            </div>
          </div>
          <div class="tab">
            <input type="radio" id="rd2" name="rd">
            <label class="tab-label" for="rd2">Item 2</label>
            <div class="tab-content">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil, aut.
            </div>
          </div>
          <div class="tab">
            <input type="radio" id="rd3" name="rd">
            <label for="rd3" class="tab-close">Cerrar &times;</label>
          </div>
        </div>
      </div>
    </div>

    ${useImage(EDIF_ADMIN, 'areaAdmin-1.jpg')}
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
