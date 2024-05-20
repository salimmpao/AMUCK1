ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:3857").setExtent([4083507.729227, -152759.026250, 4115888.405809, -136478.741635]);
var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });

        var lyr_OpenStreetMap_1 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Members_2 = new ol.format.GeoJSON();
var features_Members_2 = format_Members_2.readFeatures(json_Members_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Members_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Members_2.addFeatures(features_Members_2);
var lyr_Members_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Members_2, 
                style: style_Members_2,
                popuplayertitle: "Members",
                interactive: true,
                    title: '<img src="styles/legend/Members_2.png" /> Members'
                });

lyr_GoogleSatellite_0.setVisible(true);lyr_OpenStreetMap_1.setVisible(true);lyr_Members_2.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_OpenStreetMap_1,lyr_Members_2];
lyr_Members_2.set('fieldAliases', {'Name': 'Institution', 'photos': 'Logo', });
lyr_Members_2.set('fieldImages', {'Name': 'UuidGenerator', 'photos': 'ExternalResource', });
lyr_Members_2.set('fieldLabels', {'Name': 'inline label - visible with data', 'photos': 'inline label - visible with data', });
lyr_Members_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});