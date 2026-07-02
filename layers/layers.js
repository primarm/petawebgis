var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '<a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });

        var lyr_GoogleSatellite_1 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '<a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_UTM_batas_kotamadya_fixed_2 = new ol.format.GeoJSON();
var features_UTM_batas_kotamadya_fixed_2 = format_UTM_batas_kotamadya_fixed_2.readFeatures(json_UTM_batas_kotamadya_fixed_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_UTM_batas_kotamadya_fixed_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_UTM_batas_kotamadya_fixed_2.addFeatures(features_UTM_batas_kotamadya_fixed_2);
var lyr_UTM_batas_kotamadya_fixed_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_UTM_batas_kotamadya_fixed_2, 
                style: style_UTM_batas_kotamadya_fixed_2,
                popuplayertitle: 'UTM_batas_kotamadya_fixed',
                interactive: false,
                title: '<img src="styles/legend/UTM_batas_kotamadya_fixed_2.png" /> UTM_batas_kotamadya_fixed'
            });
var format_JAKARTAPUSAT_3 = new ol.format.GeoJSON();
var features_JAKARTAPUSAT_3 = format_JAKARTAPUSAT_3.readFeatures(json_JAKARTAPUSAT_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_JAKARTAPUSAT_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JAKARTAPUSAT_3.addFeatures(features_JAKARTAPUSAT_3);
var lyr_JAKARTAPUSAT_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_JAKARTAPUSAT_3, 
                style: style_JAKARTAPUSAT_3,
                popuplayertitle: 'JAKARTA PUSAT',
                interactive: false,
                title: '<img src="styles/legend/JAKARTAPUSAT_3.png" /> JAKARTA PUSAT'
            });
var format_target_area_perumahan_4 = new ol.format.GeoJSON();
var features_target_area_perumahan_4 = format_target_area_perumahan_4.readFeatures(json_target_area_perumahan_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_target_area_perumahan_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_target_area_perumahan_4.addFeatures(features_target_area_perumahan_4);
var lyr_target_area_perumahan_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_target_area_perumahan_4, 
                style: style_target_area_perumahan_4,
                popuplayertitle: 'target_area_perumahan',
                interactive: false,
                title: '<img src="styles/legend/target_area_perumahan_4.png" /> target_area_perumahan'
            });
var format_area_sekolah_5 = new ol.format.GeoJSON();
var features_area_sekolah_5 = format_area_sekolah_5.readFeatures(json_area_sekolah_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_area_sekolah_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_area_sekolah_5.addFeatures(features_area_sekolah_5);
var lyr_area_sekolah_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_area_sekolah_5, 
                style: style_area_sekolah_5,
                popuplayertitle: 'area_sekolah',
                interactive: false,
                title: '<img src="styles/legend/area_sekolah_5.png" /> area_sekolah'
            });
var format_perumahan_sesuai_syarat_6 = new ol.format.GeoJSON();
var features_perumahan_sesuai_syarat_6 = format_perumahan_sesuai_syarat_6.readFeatures(json_perumahan_sesuai_syarat_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_perumahan_sesuai_syarat_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_perumahan_sesuai_syarat_6.addFeatures(features_perumahan_sesuai_syarat_6);
var lyr_perumahan_sesuai_syarat_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_perumahan_sesuai_syarat_6, 
                style: style_perumahan_sesuai_syarat_6,
                popuplayertitle: 'perumahan_sesuai_syarat',
                interactive: false,
                title: '<img src="styles/legend/perumahan_sesuai_syarat_6.png" /> perumahan_sesuai_syarat'
            });
var format_Titiksekolah_7 = new ol.format.GeoJSON();
var features_Titiksekolah_7 = format_Titiksekolah_7.readFeatures(json_Titiksekolah_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Titiksekolah_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Titiksekolah_7.addFeatures(features_Titiksekolah_7);
var lyr_Titiksekolah_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Titiksekolah_7, 
                style: style_Titiksekolah_7,
                popuplayertitle: 'Titik sekolah',
                interactive: false,
                title: '<img src="styles/legend/Titiksekolah_7.png" /> Titik sekolah'
            });

lyr_OSMStandard_0.setVisible(true);lyr_GoogleSatellite_1.setVisible(true);lyr_UTM_batas_kotamadya_fixed_2.setVisible(true);lyr_JAKARTAPUSAT_3.setVisible(true);lyr_target_area_perumahan_4.setVisible(true);lyr_area_sekolah_5.setVisible(true);lyr_perumahan_sesuai_syarat_6.setVisible(true);lyr_Titiksekolah_7.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_GoogleSatellite_1,lyr_UTM_batas_kotamadya_fixed_2,lyr_JAKARTAPUSAT_3,lyr_target_area_perumahan_4,lyr_area_sekolah_5,lyr_perumahan_sesuai_syarat_6,lyr_Titiksekolah_7];
lyr_UTM_batas_kotamadya_fixed_2.set('fieldAliases', {'KAB_NAME': 'KAB_NAME', });
lyr_JAKARTAPUSAT_3.set('fieldAliases', {'KAB_NAME': 'KAB_NAME', });
lyr_target_area_perumahan_4.set('fieldAliases', {'osm_id': 'osm_id', 'bridge': 'bridge', 'highway': 'highway', 'layer': 'layer', 'name': 'name', 'oneway': 'oneway', 'smoothness': 'smoothness', 'surface': 'surface', 'tunnel': 'tunnel', 'width': 'width', 'z_index': 'z_index', });
lyr_area_sekolah_5.set('fieldAliases', {'addr_full': 'addr_full', 'name': 'name', 'type': 'type', 'type_id': 'type_id', 'name_id': 'name_id', 'operator': 'operator', 'SDT': 'SDT', 'SDN': 'SDN', 'Alamat': 'Alamat', 'KAB_NAME': 'KAB_NAME', 'addr_full_': 'addr_full_', 'name_2': 'name_2', 'type_2': 'type_2', 'type_id_2': 'type_id_2', 'name_id_2': 'name_id_2', 'operator_2': 'operator_2', 'SDT_2': 'SDT_2', 'SDN_2': 'SDN_2', 'Alamat_2': 'Alamat_2', 'KAB_NAME_2': 'KAB_NAME_2', });
lyr_perumahan_sesuai_syarat_6.set('fieldAliases', {'osm_id': 'osm_id', 'osm_way_id': 'osm_way_id', 'access_roo': 'access_roo', 'addr_house': 'addr_house', 'addr_stree': 'addr_stree', 'building': 'building', 'building_m': 'building_m', 'name': 'name', 'roof_mater': 'roof_mater', });
lyr_Titiksekolah_7.set('fieldAliases', {'addr_full': 'addr_full', 'name': 'name', 'type': 'type', 'type_id': 'type_id', 'name_id': 'name_id', 'operator': 'operator', 'SDT': 'SDT', 'SDN': 'SDN', 'Alamat': 'Alamat', 'KAB_NAME': 'KAB_NAME', 'addr_full_2': 'addr_full_2', 'name_3': 'name_3', 'type_3': 'type_3', 'type_id_3': 'type_id_3', 'name_id_3': 'name_id_3', 'operator_3': 'operator_3', 'SDT_3': 'SDT_3', 'SDN_3': 'SDN_3', 'Alamat_3': 'Alamat_3', 'KAB_NAME_3': 'KAB_NAME_3', 'addr_full_': 'addr_full_', 'name_2': 'name_2', 'type_2': 'type_2', 'type_id_2': 'type_id_2', 'name_id_2': 'name_id_2', 'operator_2': 'operator_2', 'SDT_2': 'SDT_2', 'SDN_2': 'SDN_2', 'Alamat_2': 'Alamat_2', 'KAB_NAME_2': 'KAB_NAME_2', });
lyr_UTM_batas_kotamadya_fixed_2.set('fieldImages', {'KAB_NAME': 'TextEdit', });
lyr_JAKARTAPUSAT_3.set('fieldImages', {'KAB_NAME': 'TextEdit', });
lyr_target_area_perumahan_4.set('fieldImages', {'osm_id': '', 'bridge': '', 'highway': '', 'layer': '', 'name': '', 'oneway': '', 'smoothness': '', 'surface': '', 'tunnel': '', 'width': '', 'z_index': '', });
lyr_area_sekolah_5.set('fieldImages', {'addr_full': '', 'name': '', 'type': '', 'type_id': '', 'name_id': '', 'operator': '', 'SDT': '', 'SDN': '', 'Alamat': '', 'KAB_NAME': '', 'addr_full_': '', 'name_2': '', 'type_2': '', 'type_id_2': '', 'name_id_2': '', 'operator_2': '', 'SDT_2': '', 'SDN_2': '', 'Alamat_2': '', 'KAB_NAME_2': '', });
lyr_perumahan_sesuai_syarat_6.set('fieldImages', {'osm_id': '', 'osm_way_id': '', 'access_roo': '', 'addr_house': '', 'addr_stree': '', 'building': '', 'building_m': '', 'name': '', 'roof_mater': '', });
lyr_Titiksekolah_7.set('fieldImages', {'addr_full': '', 'name': '', 'type': '', 'type_id': '', 'name_id': '', 'operator': '', 'SDT': '', 'SDN': '', 'Alamat': '', 'KAB_NAME': '', 'addr_full_2': '', 'name_3': '', 'type_3': '', 'type_id_3': '', 'name_id_3': '', 'operator_3': '', 'SDT_3': '', 'SDN_3': '', 'Alamat_3': '', 'KAB_NAME_3': '', 'addr_full_': '', 'name_2': '', 'type_2': '', 'type_id_2': '', 'name_id_2': '', 'operator_2': '', 'SDT_2': '', 'SDN_2': '', 'Alamat_2': '', 'KAB_NAME_2': '', });
lyr_UTM_batas_kotamadya_fixed_2.set('fieldLabels', {'KAB_NAME': 'no label', });
lyr_JAKARTAPUSAT_3.set('fieldLabels', {'KAB_NAME': 'inline label - visible with data', });
lyr_target_area_perumahan_4.set('fieldLabels', {'osm_id': 'header label - visible with data', 'bridge': 'no label', 'highway': 'no label', 'layer': 'no label', 'name': 'no label', 'oneway': 'no label', 'smoothness': 'no label', 'surface': 'no label', 'tunnel': 'no label', 'width': 'no label', 'z_index': 'no label', });
lyr_area_sekolah_5.set('fieldLabels', {'addr_full': 'no label', 'name': 'no label', 'type': 'no label', 'type_id': 'no label', 'name_id': 'no label', 'operator': 'no label', 'SDT': 'no label', 'SDN': 'no label', 'Alamat': 'no label', 'KAB_NAME': 'no label', 'addr_full_': 'no label', 'name_2': 'no label', 'type_2': 'no label', 'type_id_2': 'no label', 'name_id_2': 'no label', 'operator_2': 'no label', 'SDT_2': 'no label', 'SDN_2': 'no label', 'Alamat_2': 'no label', 'KAB_NAME_2': 'no label', });
lyr_perumahan_sesuai_syarat_6.set('fieldLabels', {'osm_id': 'no label', 'osm_way_id': 'no label', 'access_roo': 'no label', 'addr_house': 'no label', 'addr_stree': 'no label', 'building': 'no label', 'building_m': 'no label', 'name': 'no label', 'roof_mater': 'no label', });
lyr_Titiksekolah_7.set('fieldLabels', {'addr_full': 'no label', 'name': 'no label', 'type': 'no label', 'type_id': 'no label', 'name_id': 'no label', 'operator': 'no label', 'SDT': 'no label', 'SDN': 'no label', 'Alamat': 'no label', 'KAB_NAME': 'no label', 'addr_full_2': 'no label', 'name_3': 'no label', 'type_3': 'no label', 'type_id_3': 'no label', 'name_id_3': 'no label', 'operator_3': 'no label', 'SDT_3': 'no label', 'SDN_3': 'no label', 'Alamat_3': 'no label', 'KAB_NAME_3': 'no label', 'addr_full_': 'no label', 'name_2': 'no label', 'type_2': 'no label', 'type_id_2': 'no label', 'name_id_2': 'no label', 'operator_2': 'no label', 'SDT_2': 'no label', 'SDN_2': 'no label', 'Alamat_2': 'no label', 'KAB_NAME_2': 'no label', });
lyr_Titiksekolah_7.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});