const HTML = `
  <div class="center content-popup-delimits">
    <h3 class="title-popup">{{ title }}</h3>
    <img class="images-popup" src="/images/delimit/6.jpg" alt="Aula 5 y 6" />
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, ea.</p>
  </div>
`

export const AULA5_6 = {
  type: 'Feature',
  geometry: {
    type: 'Polygon',
    coordinates: [
      [
        [
          -73.74647423, 7.06875508
        ],
        [
          -73.7463428, 7.06874843
        ],
        [
          -73.74634548, 7.06865393
        ],
        [
          -73.74647825, 7.06866192
        ],
        [
          -73.74647691, 7.06872048
        ],
        [
          -73.74647423, 7.06875508
        ]
      ]
    ]
  },
  id: 'f256806f-0f51-4834-8676-e8cdc07694b0',
  properties: {
    name: 'Aula 5 y 6',
    category: 'Aula',
    html: HTML
  }
}
