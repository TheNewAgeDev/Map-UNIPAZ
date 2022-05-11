const HTML = `
  <div class="center content-popup-delimits">
    <h3 class="title-popup">{{ title }}</h3>
    <img class="images-popup" src="/images/delimit/biblioteca.jpg" alt="Biblioteca, Auditorio, Salas de Informatica" />
    <p>
     Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis officia ut iusto, perferendis magnam autem vitae est neque beatae facilis, nesciunt distinctio id quam sint quia minus eius. Quia eos consequuntur repudiandae nesciunt iure tempora, quas laudantium non expedita, ea esse voluptate ex amet nihil ad vero sed. Fugiat voluptates harum nostrum natus eaque consectetur quisquam porro molestias magnam vitae itaque sapiente officia, atque magni voluptatem velit totam esse, ut debitis laudantium minima omnis illum quas. Mollitia dignissimos blanditiis, sequi ipsam fuga iste quos tempora excepturi quidem laudantium odit id aut nobis quod maiores nihil doloribus itaque quam cupiditate? Omnis.
     <br /><br />
     Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis officia ut iusto, perferendis magnam autem vitae est neque beatae facilis, nesciunt distinctio id quam sint quia minus eius. Quia eos consequuntur repudiandae nesciunt iure tempora, quas laudantium non expedita, ea esse voluptate ex amet nihil ad vero sed. Fugiat voluptates harum nostrum natus eaque consectetur quisquam porro molestias magnam vitae itaque sapiente officia, atque magni voluptatem velit totam esse, ut debitis laudantium minima omnis illum quas. Mollitia dignissimos blanditiis, sequi ipsam fuga iste quos tempora excepturi quidem laudantium odit id aut nobis quod maiores nihil doloribus itaque quam cupiditate? Omnis.
    </p>
  </div>
`

export const BIBLIOTECA = {
  type: 'Feature',
  geometry: {
    type: 'Polygon',
    coordinates: [
      [
        [
          -73.74566414, 7.06946371
        ],
        [
          -73.7454281, 7.06945705
        ],
        [
          -73.74542675, 7.06942112
        ],
        [
          -73.74537177, 7.06941846
        ],
        [
          -73.74537043, 7.06927871
        ],
        [
          -73.74540396, 7.06928004
        ],
        [
          -73.74539591, 7.0691962
        ],
        [
          -73.74567352, 7.06920285
        ],
        [
          -73.74566414, 7.06946371
        ]
      ]
    ]
  },
  id: 'f4df7b39-2337-427b-b7bd-b0135985d433',
  properties: {
    name: 'Biblioteca, Auditorio, Salas de Informatica',
    category: 'default',
    html: HTML
  }
}
