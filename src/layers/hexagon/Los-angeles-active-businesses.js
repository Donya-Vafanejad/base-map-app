
import {HexagonLayer} from '@deck.gl/aggregation-layers';

const initialViewState = {
    longitude:  -118.6919267,
    latitude: 34.760306,
    zoom: 12,
    pitch: 0,
    bearing: 0
};

const layerOptions = {
    id: 'hexagon-la-business-layer',

    data: 'https://data.lacity.org/resource/6rrh-rzua.json?$limit=1500&$WHERE=location_1 IS NOT NULL',
    getPosition: data => [parseFloat(data.location_1.longitude), parseFloat(data.location_1.latitude)]
  
};

export const LosAngelesActiveBusinessLayer = {
    layerOptions,
    initialViewState,
    LayerClass: HexagonLayer
};

