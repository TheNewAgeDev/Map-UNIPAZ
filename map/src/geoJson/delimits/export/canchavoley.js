import { useImage } from '@/util'

const HTML = () => `
  <div class="center content-popup-delimits">
    <h3 class="title-popup">{{ title }}</h3>

    ${useImage(CANCHA_VOLEY_1, 'canchaVoley1.jpg')}

    <p>El instituto universitario de la paz cuenta con dos (2) canchas de voleibol compuestas de arena fina, las cuales están muy bien niveladas y uniformes, abiertas siempre al público, en donde los estudiantes podrán sacar sus habilidades para jugar entre amigos y lo mejor de todo, enfrentarse a campeonatos que realiza la universidad con estudiantes y docentes ¡Que divertido!</p>

    ${useImage(CANCHA_VOLEY_1, 'canchaVoley1-1.jpg')}
  </div>
`

export const CANCHA_VOLEY_1 = {
  type: 'Feature',
  geometry: {
    type: 'Polygon',
    coordinates: [
      [
        [-73.74554116, 7.06819686],
        [-73.74544058, 7.06818488],
        [-73.74545399, 7.06798923],
        [-73.7455586, 7.06800121],
        [-73.74554116, 7.06819686]
      ]
    ]
  },
  id: 'e43222ed-b1c4-40dd-8e10-2834b2779d78',
  properties: {
    name: 'Cancha Voleibol 1',
    category: 'Recreacion',
    html: HTML
  }
}
