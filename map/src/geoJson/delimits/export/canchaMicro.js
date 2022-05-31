const HTML = `
  <div class="center content-popup-delimits">
    <h3 class="title-popup">{{ title }}</h3>
    <img class="images-popup" src="/images/delimit/canchaMicro.jpg" alt="Almacen de Componentes Electricos" />
    <p>El microfútbol es un deporte similar al fútbol, con reglas diferenciadas, que se juega en piso liso, entre dos equipos de cinco jugadores. El partido se realizará en dos tiempos de 20 minutos cada uno, separados por un descanso de menos de 15 minutos. Que esperas para ir con tus amigos y pasar un rato agradable en la cancha abierta de microfútbol ubicada cerca de las canchas de voleibol del instituto universitario de la paz.</p>
  </div>
`

export const CANCHA_MICRO = {
  type: 'Feature',
  geometry: {
    type: 'Polygon',
    coordinates: [
      [
        [-73.74605078, 7.06795064],
        [-73.74588583, 7.06788809],
        [-73.7459958, 7.06762057],
        [-73.74616344, 7.06769111],
        [-73.74605078, 7.06795064]
      ]
    ]
  },
  id: 'b03cbbb4-96a4-4acf-9458-97bb74fd7dfa',
  properties: {
    name: 'Cancha de Microfutbol',
    category: 'Recreacion',
    html: HTML
  }
}
