'use strict'

export const mapSettings = {
  container: 'map',
  style: 'mapbox://styles/mapbox/satellite-v9',
  zoom: 19,
  pitch: 60,
  speed: 0.15,
  curve: 0.75
}

export const staticSettings = {
  staticOverlay: 'static-overlay',
  scaleFactor: 3,
  scanOffsetY: 50,
  scanSize: 0,
  FPS: 23,
  scanSpeed: 6,
  SAMPLE_COUNT: 7
}

export const mapPOIs = [
  {name: 'Dupont Circle', coords: [-77.04227, 38.910337]},
  {name: 'National Geographic Museum', coords: [-77.037978, 38.905194]},
  {name: 'Foggy Bottom', coords: [-77.053342, 38.900218]},
  {name: 'Georgetown', coords: [-77.066045, 38.91027]},
  {name: 'United States Naval Observatory', coords: [-77.066174, 38.922324]},
  {name: 'Smithsonian National Zoological Park', coords: [-77.049394, 38.931038]},
  {name: 'Columbia Heights', coords: [-77.03021, 38.928968]},
  {name: 'Brookland', coords: [-76.982574, 38.929102]},
  {name: 'Navy Yard', coords: [-76.997852, 38.877136]},
  {name: 'American University Park', coords: [-77.089691, 38.942588]},
  {name: 'Chevy Chase', coords: [-77.066689, 38.964948]},
  {name: 'Rock Creek Golf Course', coords: [-77.038794, 38.965682]},
  {name: 'Sherman Circle Northwest', coords: [-77.021542, 38.947328]},
  {name: 'Tacoma', coords: [-77.019997, 38.972756]},
  {name: 'National Mall', coords: [-77.023001, 38.88963]},
  {name: 'Lincoln Memorial', coords: [-77.050209, 38.889296]},
  {name: 'Hill East', coords: [-76.979871, 38.884853]}
]

export const navLinks = [
  {name: 'LinkedIn', iconClass: 'collecticon-linkedin', url: 'https://www.linkedin.com/in/nbumbarger/'},
  {name: 'Github', iconClass: 'collecticon-github', url: 'https://github.com/nbumbarger/'},
  {name: 'Twitter', iconClass: 'collecticon-twitter', url: 'https://twitter.com/Sir_Mapsalot'},
  {name: 'Email', iconClass: 'collecticon-envelope', url: 'mailto:nick@nickbumbarger.com'}
]
