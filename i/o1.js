var _0x4d3382=_0x2ead;(function(_0x425240,_0x121db8){var _0x6da09f=_0x2ead,_0x490ab0=_0x425240();while(!![]){try{var _0x3f00fb=parseInt(_0x6da09f(0xc2))/0x1+-parseInt(_0x6da09f(0xf7))/0x2+-parseInt(_0x6da09f(0xdc))/0x3+parseInt(_0x6da09f(0xe9))/0x4*(-parseInt(_0x6da09f(0xe1))/0x5)+parseInt(_0x6da09f(0xf4))/0x6+parseInt(_0x6da09f(0xec))/0x7*(-parseInt(_0x6da09f(0x100))/0x8)+-parseInt(_0x6da09f(0xe0))/0x9*(-parseInt(_0x6da09f(0xce))/0xa);if(_0x3f00fb===_0x121db8)break;else _0x490ab0['push'](_0x490ab0['shift']());}catch(_0x279093){_0x490ab0['push'](_0x490ab0['shift']());}}}(_0x38ea,0xa0aa4));var map=L[_0x4d3382(0xc9)](_0x4d3382(0xc9),{'zoomSnap':0x0,'zoomDelta':0.25})[_0x4d3382(0xff)]([12.9912,77.5999],0xb),scale=L['control'][_0x4d3382(0xd9)]();scale[_0x4d3382(0xeb)](map),map[_0x4d3382(0xf9)]['setPrefix']('');var legend=L[_0x4d3382(0xef)]();legend[_0x4d3382(0xbe)]=function(_0x1636c3){var _0x3f017f=_0x4d3382;return div=L[_0x3f017f(0xf8)]['create']('div',_0x3f017f(0xc6)),div[_0x3f017f(0xee)]=_0x3f017f(0xfe),div;},legend['addTo'](map);var north=L[_0x4d3382(0xef)]({'position':_0x4d3382(0xe3)});north[_0x4d3382(0xbe)]=function(_0x2feb2f){var _0x439610=_0x4d3382,_0x3ba394=L[_0x439610(0xf8)]['create'](_0x439610(0x101),_0x439610(0xc6));return _0x3ba394['innerHTML']='<img\x20src=\x22https://townplannerin.github.io/visit/css/images/NORTH.jpg\x22>',_0x3ba394;},north[_0x4d3382(0xeb)](map);var measureControl=new L[(_0x4d3382(0xfa))][(_0x4d3382(0xde))]({'position':_0x4d3382(0xfc),'primaryLengthUnit':_0x4d3382(0xcf),'secondaryLengthUnit':_0x4d3382(0xf3),'primaryAreaUnit':_0x4d3382(0xc1),'secondaryAreaUnit':'acres'});function popUp(_0x2ea76d,_0x2071cf){var _0x39d6d8=_0x4d3382,_0x2816af=[];if(_0x2ea76d['properties']){for(key in _0x2ea76d[_0x39d6d8(0xe6)])_0x2816af[_0x39d6d8(0xbf)](_0x39d6d8(0xdd)+key+_0x39d6d8(0xc4)+_0x2ea76d[_0x39d6d8(0xe6)][key]);_0x2071cf[_0x39d6d8(0xe4)](_0x2816af[_0x39d6d8(0xfb)]('<br\x20/>'));}}measureControl[_0x4d3382(0xeb)](map),document[_0x4d3382(0xd8)]('leaflet-control-measure-toggle')[0x0][_0x4d3382(0xee)]='',document[_0x4d3382(0xd8)](_0x4d3382(0xbd))[0x0][_0x4d3382(0xc5)]+='\x20fas\x20fa-ruler';var featuresLayer1=new L[(_0x4d3382(0xe7))](Villages,{'style':function(_0xcfe42c){var _0xba1647=_0x4d3382;return{'opacity':0x1,'color':_0xba1647(0xdf),'weight':0x1,'fillColor':_0xba1647(0xda),'fillOpacity':0x0,'interactive':!0x0};},'onEachFeature':popUp});map[_0x4d3382(0xe8)](featuresLayer1);var featuresLayer2=new L['GeoJSON'](road,{'style':function(_0x871b08){var _0xbb1ae5=_0x4d3382;return{'opacity':0x1,'color':_0xbb1ae5(0xc7),'lineCap':_0xbb1ae5(0xed),'lineJoin':_0xbb1ae5(0xed),'weight':0x6,'fillOpacity':0x0,'interactive':!0x0};}});map[_0x4d3382(0xe8)](featuresLayer2);var featuresLayer3=new L['GeoJSON'](pd,{'style':function(_0x26b4fc){var _0x573d1b=_0x4d3382;return{'opacity':0x1,'color':_0x573d1b(0xf2),'weight':0x1,'fillColor':_0x573d1b(0xda),'fillOpacity':0x0,'interactive':!0x0};},'onEachFeature':popUp}),featuresLayer4=new L[(_0x4d3382(0xe7))](bbmp,{'style':function(_0x12469f){var _0x115d93=_0x4d3382;return{'opacity':0x1,'color':_0x115d93(0xd5),'weight':0x1,'fillColor':'#FFFFFF00','fillOpacity':0x0,'interactive':!0x0};},'onEachFeature':popUp}),GoogleStreet=L[_0x4d3382(0xf5)](_0x4d3382(0xea),{'attribution':'Map\x20data\x20&copy;2024\x20<a\x20href=\x22http://maps.google.com\x22>Google</a>\x20|\x20Terms\x20of\x20Use','maxZoom':0x15}),GoogleSatellite=L[_0x4d3382(0xf5)](_0x4d3382(0xcb),{'attribution':_0x4d3382(0xd7),'maxZoom':0x15}),GoogleHybrid=L['tileLayer'](_0x4d3382(0xf6),{'attribution':_0x4d3382(0xd7),'maxZoom':0x15}),OpenStreetMap=L[_0x4d3382(0xf5)](_0x4d3382(0xbb),{'attribution':_0x4d3382(0xf0),'maxZoom':0x15});map[_0x4d3382(0xe8)](GoogleStreet);var sslr=L['esri']['tiledMapLayer']({'url':_0x4d3382(0xfd),'maxZoom':0x15}),RMP2015=L[_0x4d3382(0xf5)](_0x4d3382(0xd4),{'transparent':!0x0,'opacity':0.5,'minZoom':0xf,'maxZoom':0x14,'tms':!0x1,'attribution':'SaiKPrajwal'})[_0x4d3382(0xeb)](map),baseMaps={'GoogleStreet':GoogleStreet,'GoogleSatellite':GoogleSatellite,'GoogleHybrid':GoogleHybrid,'OpenStreetMap':OpenStreetMap},overlayMaps={'RMP2015':RMP2015,'Cadastral':sslr,'Villages':featuresLayer1,'Road':featuresLayer2,'PlanningDistricts':featuresLayer3,'BbmpWardMap':featuresLayer4},layerControl=L[_0x4d3382(0xef)][_0x4d3382(0xdb)](baseMaps,overlayMaps)[_0x4d3382(0xeb)](map),searchControl=new L[(_0x4d3382(0xfa))][(_0x4d3382(0xd2))]({'layer':featuresLayer1,'propertyName':_0x4d3382(0xd3),'marker':!0x1,'moveToLocation':function(_0x1399bb,_0xc196bd,_0xc5c022){var _0x170ecf=_0x4d3382,_0x5867ef=_0xc5c022[_0x170ecf(0xc0)](_0x1399bb[_0x170ecf(0xd1)]['getBounds']());_0xc5c022['setView'](_0x1399bb,_0x5867ef);}});searchControl['on'](_0x4d3382(0xf1),function(_0x3796e8){var _0x4da4a0=_0x4d3382;_0x3796e8['layer'][_0x4da4a0(0xbc)]({'color':_0x4da4a0(0xe2),'weight':0x6}),_0x3796e8[_0x4da4a0(0xd1)][_0x4da4a0(0xc3)]&&_0x3796e8[_0x4da4a0(0xd1)][_0x4da4a0(0xcc)]();}),map[_0x4d3382(0xca)](searchControl);var sidepanelRight=L['control']['sidepanel']('mySidepanelRight',{'panelPosition':_0x4d3382(0xcd),'tabsPosition':_0x4d3382(0xd0),'pushControls':!0x0})[_0x4d3382(0xeb)](map);L['control']['opacity'](overlayMaps,{'label':'Layer\x20Opacity','collapsed':!0x0})[_0x4d3382(0xeb)](map);var dialog=L[_0x4d3382(0xef)][_0x4d3382(0xd6)]()[_0x4d3382(0xe5)](_0x4d3382(0xc8))['addTo'](map);function _0x2ead(_0x327433,_0x22acd1){var _0x38ead3=_0x38ea();return _0x2ead=function(_0x2ead01,_0x543894){_0x2ead01=_0x2ead01-0xbb;var _0x3a5146=_0x38ead3[_0x2ead01];return _0x3a5146;},_0x2ead(_0x327433,_0x22acd1);}function _0x38ea(){var _0x55492b=['leaflet-control-measure-toggle','onAdd','push','getBoundsZoom','sqmeters','32738PUHuIC','_popup','</b>\x20:\x20','className','info\x20legend','rgba(255,96,17,1.0)','<h3>Namaste!<ul><li>This\x20is\x20Revised\x20Master\x20Plan\x202015\x20Proposed\x20Land\x20Use\x20Map</li><li>Google\x20Street,\x20Google\x20Satellite,\x20Google\x20Hybrid,\x20Open\x20Street\x20Map\x20as\x20Base\x20Maps</li><li>Villages,\x20Planning\x20Districts,\x20BBMP\x20Wards\x20Boundarys\x20as\x20overlay\x20Maps</li><li>Cadastral\x20Data\x20(only\x20if\x20server\x20is\x20fine)</li><li>Search\x20Locations\x20based\x20on\x20Village\x20Names\x20(as\x20in\x20RMP-2015)</li></ul>-\x20Sai\x20K\x20Prajwal</h3>','map','addControl','https://www.google.com/maps/vt?lyrs=s@189&gl=com&x={x}&y={y}&z={z}','openPopup','right','5018830tKUwLW','meters','top','layer','Search','V_Nm','data/geo/{z}/{x}/{y}.png','rgba(255,0,255,1.0)','dialog','Map\x20data\x20&copy;2024\x20<a\x20href=\x22http://maps.google.com\x22>Google</a>\x20|\x20Terms\x20of\x20Use','getElementsByClassName','scale','#FFFFFF00','layers','211050fRRGlb','<b>','Measure','rgba(255,234,1,1.0)','36RKCLmI','5FhAzNE','rgba(255,0,204,1.0)','bottomleft','bindPopup','setContent','properties','GeoJSON','addLayer','1427572GyPvun','https://www.google.com/maps/vt?lyrs=m@189&gl=com&x={x}&y={y}&z={z}','addTo','14RxHSDi','round','innerHTML','control','Map\x20data\x20&copy;2024\x20OpenStreetMap\x20|\x20Terms\x20of\x20Use','search:locationfound','rgba(0,0,255,1.0)','kilometers','3215220plQxEq','tileLayer','https://www.google.com/maps/vt?lyrs=s,h@189&gl=com&x={x}&y={y}&z={z}','1838846rRzqcG','DomUtil','attributionControl','Control','join','topleft','https://kgis.ksrsac.in/kgismaps/rest/services/CadastralData_Admin/Cached_CadastralData_Admin/MapServer','<h4><b>BANGALORE</b></h4>Revised\x20Master\x20Plan\x202015<br>Proposed\x20Land\x20Use\x20Map','setView','2285560VhAiwD','div','https://tile.openstreetmap.org/{z}/{x}/{y}.png','setStyle'];_0x38ea=function(){return _0x55492b;};return _0x38ea();}