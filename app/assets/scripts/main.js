'use strict';
import mapboxgl from 'mapbox-gl';
import config from './config';

mapboxgl.accessToken = config.accessToken;
export const map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/nbumbarg/cj4yols3j3yhb2rs63mixw5sw',
  center: [-76.96, 38.88],
  zoom: 15
});
