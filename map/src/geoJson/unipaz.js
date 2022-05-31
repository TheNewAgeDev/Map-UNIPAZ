import * as DELIMITS from './delimits'
import { CATEGORIES } from '@/categories'

import '@/styles/sidebar.css'

export const DELIMITS_ARRAY = []

for (const i of Object.entries(DELIMITS)) {
  DELIMITS_ARRAY.push(i[1])
}

export const UNIPAZ_CATEGORIES = {}

DELIMITS_ARRAY.forEach(delimit => {
  let category = delimit.properties.category.toUpperCase()
  if (!CATEGORIES[category]) category = 'DEFAULT'

  UNIPAZ_CATEGORIES[category]
    ? UNIPAZ_CATEGORIES[category].push(delimit)
    : UNIPAZ_CATEGORIES[category] = [delimit]
})
