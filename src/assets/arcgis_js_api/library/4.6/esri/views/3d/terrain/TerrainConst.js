// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.6/esri/copyright.txt for details.
//>>built
define(["require","exports","./TilingScheme","../support/aaBoundingRect"],function(d,a,c,b){Object.defineProperty(a,"__esModule",{value:!0});(function(a){a[a.MAP=0]="MAP";a[a.ELEVATION=1]="ELEVATION";a[a.LAYER_CLASS_COUNT=2]="LAYER_CLASS_COUNT"})(a.LayerClass||(a.LayerClass={}));(function(a){a[a.NONE=0]="NONE";a[a.SPLIT=1]="SPLIT";a[a.VSPLITMERGE=2]="VSPLITMERGE";a[a.MERGE=4]="MERGE";a[a.DECODE_ELEVATION=8]="DECODE_ELEVATION";a[a.UPDATE_GEOMETRY=16]="UPDATE_GEOMETRY";a[a.UPDATE_TEXTURE=32]="UPDATE_TEXTURE"})(a.TileUpdateTypes||
(a.TileUpdateTypes={}));a.TILE_LOADING_DEBUGLOG=!1;a.MAX_ROOT_TILES=64;a.MAX_TILE_TESSELATION=512;a.ELEVATION_NODATA_VALUE=3.40282347E38/10;a.noDataValueOpt={noDataValue:a.ELEVATION_NODATA_VALUE};a.ELEVATION_DESIRED_RESOLUTION_LEVEL=4;a.TILEMAP_SIZE_EXP=5;a.TILEMAP_SIZE=1<<a.TILEMAP_SIZE_EXP;a.WEBMERCATOR_WORLD_EXTENT=b.create([0,0,0,0]);c.WebMercatorAuxiliarySphere.getExtent(0,0,0,a.WEBMERCATOR_WORLD_EXTENT);a.GEOGRAPHIC_WORLD_EXTENT=b.create([-180,-90,180,90]);a.TOO_MANY_ROOT_TILES_AFTER_CHANGE_ERROR=
"Cannot extend surface to encompass all layers because it would result in too many root tiles.";a.TOO_MANY_ROOT_TILES_FOR_LAYER_ERROR="Surface extent is too large for tile resolution at level 0.";a.DEFAULT_TILE_BACKGROUND="data:image/png;base64,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"});