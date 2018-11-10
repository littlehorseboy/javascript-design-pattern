const googleMap = {
  show: () => {
    console.log('啟動 Google 地圖');
  },
};

const LeafletMap = {
  show: () => {
    console.log('啟動 LeafletMap 地圖');
  },
};

const renderMap = (map) => {
  if (map.show instanceof Function) {
    map.show();
  }
};

renderMap(googleMap);
renderMap(LeafletMap);
