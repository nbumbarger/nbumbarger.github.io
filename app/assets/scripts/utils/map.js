'use strict'

import turfBearing from '@turf/bearing'

// Calculate bearing from one point to another
export const getBearing = (coord1, coord2) => {
  const [ point1, point2 ] = [coord1, coord2].map((coord) => {
    return {
      'type': 'Feature',
      'geometry': {
        'type': 'Point',
        'coordinates': [coord[0], coord[1]]
      }
    }
  })
  return turfBearing(point1, point2)
}
