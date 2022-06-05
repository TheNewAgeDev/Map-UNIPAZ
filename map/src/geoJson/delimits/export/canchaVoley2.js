import { useImage } from '@/util'

const HTML = () => `
  <div class="content-popup-delimits">
    <h3 class="title-popup">{{ title }}</h3>

    ${useImage(CANCHA_VOLEY_2, 'canchaVoley2.jpg')}

    <p>El instituto universitario de la paz cuenta con dos (2) canchas de voleibol compuestas de arena fina, las cuales están muy bien niveladas y uniformes, abiertas siempre al público, en donde los estudiantes podrán sacar sus habilidades para jugar entre amigos y lo mejor de todo, enfrentarse a campeonatos que realiza la universidad con estudiantes y docentes ¡Que divertido!</p>
  </div>
`

export const CANCHA_VOLEY_2 = {
  type: 'Feature',
  geometry: {
    type: 'Polygon',
    coordinates: [
      [
        [-73.74578865, 7.06821214],
        [-73.74560471, 7.06818964],
        [-73.74562487, 7.06806711],
        [-73.74580629, 7.06808461],
        [-73.74578865, 7.06821214]
      ]
    ]
  },
  id: '7c88d2de-fabc-487b-be83-97e2a19e6718',
  properties: {
    name: 'Cancha Voleibol 2',
    category: 'Recreacion',
    html: HTML
  }
}
