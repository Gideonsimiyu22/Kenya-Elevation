var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Elevation_1 = new ol.format.GeoJSON();
var features_Elevation_1 = format_Elevation_1.readFeatures(json_Elevation_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Elevation_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Elevation_1.addFeatures(features_Elevation_1);
var lyr_Elevation_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Elevation_1, 
                style: style_Elevation_1,
                popuplayertitle: "Elevation",
                interactive: true,
    title: 'Elevation<br />\
    <img src="styles/legend/Elevation_1_0.png" /> 256 - 2998<br />\
    <img src="styles/legend/Elevation_1_1.png" /> 2998 - 4140<br />\
    <img src="styles/legend/Elevation_1_2.png" /> 4140 - 17369<br />\
    <img src="styles/legend/Elevation_1_3.png" /> 17369 - 89004<br />'
        });

lyr_OpenStreetMap_0.setVisible(true);lyr_Elevation_1.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_Elevation_1];
lyr_Elevation_1.set('fieldAliases', {'fid': 'fid', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'ADM1_EN': 'ADM1_EN', 'ADM1_PCODE': 'ADM1_PCODE', 'ADM1_REF': 'ADM1_REF', 'ADM1ALT1EN': 'ADM1ALT1EN', 'ADM1ALT2EN': 'ADM1ALT2EN', 'ADM0_EN': 'ADM0_EN', 'ADM0_PCODE': 'ADM0_PCODE', 'date': 'date', 'validOn': 'validOn', 'validTo': 'validTo', 'Elevation_count': 'Elevation_count', });
lyr_Elevation_1.set('fieldImages', {'fid': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'ADM1_EN': 'TextEdit', 'ADM1_PCODE': 'TextEdit', 'ADM1_REF': 'TextEdit', 'ADM1ALT1EN': 'TextEdit', 'ADM1ALT2EN': 'TextEdit', 'ADM0_EN': 'TextEdit', 'ADM0_PCODE': 'TextEdit', 'date': 'DateTime', 'validOn': 'DateTime', 'validTo': 'DateTime', 'Elevation_count': 'TextEdit', });
lyr_Elevation_1.set('fieldLabels', {'fid': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', 'ADM1_EN': 'no label', 'ADM1_PCODE': 'no label', 'ADM1_REF': 'no label', 'ADM1ALT1EN': 'no label', 'ADM1ALT2EN': 'no label', 'ADM0_EN': 'no label', 'ADM0_PCODE': 'no label', 'date': 'no label', 'validOn': 'no label', 'validTo': 'no label', 'Elevation_count': 'inline label - visible with data', });
lyr_Elevation_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});