const HTML = `
  <div class="center content-popup-delimits">
    <h3 class="title-popup">{{ title }}</h3>
    <img class="images-popup" src="/images/delimit/vivero.jpg" alt="Vivero" />
    <p>Centro de producción de material vegetal también constituye un espacio de investigación formativa y especializada. Se ha utilizado para el desarrollo de procesos de investigación de estudiantes y docentes adscritos a semilleros y grupos de investigación y tesistas de la institución. Entre sus objetivos están el recuperar especies vegetales propias del bosque húmedo tropical y establecer espacios de aprendizaje académico y científico del programa y la institución. </p>
    <strong>Fuente: Instituto Universitario de la Paz.</strong>
    <img class="images-popup" src="/images/delimit/vivero-1.jpg" alt="Vivero" />
    <img class="images-popup" src="/images/delimit/vivero-2.jpg" alt="Vivero" />
  </div>
`

export const VIVERO = {
  type: 'Feature',
  geometry: {
    type: 'Polygon',
    coordinates: [
      [
        [-73.74679433, 7.06687739],
        [-73.7465692, 7.06673678],
        [-73.74666366, 7.06658992],
        [-73.74688092, 7.06673522],
        [-73.74679433, 7.06687739]
      ]
    ]
  },
  id: 'cc673d0d-9162-45b0-82ed-c240fd30bf49',
  properties: {
    name: 'Vivero',
    category: 'MVZ',
    html: HTML
  }
}
