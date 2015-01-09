/**
 * @author liuqle
 */
require(["esri/layers/TiledMapServiceLayer", "esri/SpatialReference", "esri/geometry/Extent", "esri/layers/TileInfo", "dojo/domReady!"], function(TiledMapServiceLayer, SpatialReference, Extent, TileInfo) {
	dojo.declare("TianDiTuLayer", esri.layers.TiledMapServiceLayer, {
		constructor : function(type) {
			this.style = 'default';
			this.format = 'tiles';
			this.url = "http://t0.tianditu.com/" + type + "/wmts";
			this.layer = type.substring(0, type.indexOf("_"));
			this.tileMatrixSet = type.substring(type.indexOf("_") + 1, type.length);
			var _tileInfo = {
				"dpi" : 90.71428571428571,
				"rows" : 256,
				"cols" : 256,
				"compressionQuality" : 0,
				"origin" : {
					"x" : -20037508.342787,
					"y" : 20037508.342787
				},
				"spatialReference" : {
					"wkid" : 102100
				},
				"lods" : []
			};
			
			_tileInfo.format = this.format;

			if (this.tileMatrixSet == "c") {
				this.fullExtent = new Extent(-180, -90, 180, 90, new SpatialReference(4326));
				this.spatialReference = new SpatialReference(4326);
				_tileInfo.spatialReference = {
					"wkid" : 4326
				};
				_tileInfo.origin = {
					"x" : -180,
					"y" : 90.0
				};
				_tileInfo.lods = [{
					"level" : 1,
					"resolution" : 0.703125,
					"scale" : 295497593.05875003
				}, {
					"level" : 2,
					"resolution" : 0.3515625,
					"scale" : 147748796.52937502
				}, {
					"level" : 3,
					"resolution" : 0.17578125,
					"scale" : 73874398.264687508
				}, {
					"level" : 4,
					"resolution" : 0.087890625,
					"scale" : 36937199.132343754
				}, {
					"level" : 5,
					"resolution" : 0.0439453125,
					"scale" : 18468599.566171877
				}, {
					"level" : 6,
					"resolution" : 0.02197265625,
					"scale" : 9234299.7830859385
				}, {
					"level" : 7,
					"resolution" : 0.010986328125,
					"scale" : 4617149.8915429693
				}, {
					"level" : 8,
					"resolution" : 0.0054931640625,
					"scale" : 2308574.9457714846
				}, {
					"level" : 9,
					"resolution" : 0.00274658203125,
					"scale" : 1154287.4728857423
				}, {
					"level" : 10,
					"resolution" : 0.001373291015625,
					"scale" : 577143.73644287116
				}, {
					"level" : 11,
					"resolution" : 0.0006866455078125,
					"scale" : 288571.86822143558
				}, {
					"level" : 12,
					"resolution" : 0.00034332275390625,
					"scale" : 144285.93411071779
				}, {
					"level" : 13,
					"resolution" : 0.000171661376953125,
					"scale" : 72142.967055358895
				}, {
					"level" : 14,
					"resolution" : 8.58306884765625e-005,
					"scale" : 36071.483527679447
				}, {
					"level" : 15,
					"resolution" : 4.291534423828125e-005,
					"scale" : 18035.741763839724
				}, {
					"level" : 16,
					"resolution" : 2.1457672119140625e-005,
					"scale" : 9017.8708819198619
				}, {
					"level" : 17,
					"resolution" : 1.0728836059570313e-005,
					"scale" : 4508.9354409599309
				}, {
					"level" : 18,
					"resolution" : 5.3644180297851563e-006,
					"scale" : 2254.4677204799655
				}, {
					"level" : 19,
					"resolution" : 0.000002682209014892578,
					"scale" : 1127.2338602399827
				}, {
					"level" : 20,
					"resolution" : 0.000001341104507446289,
					"scale" : 563.6169301199914
				}];
			} else if (this.tileMatrixSet == "w") {
				this.fullExtent = new Extent(-20037508.342787, -20037508.342787, 20037508.342787, 20037508.342787, new SpatialReference(102100));
				this.spatialReference = new SpatialReference(102100);
				_tileInfo.spatialReference = {
					"wkid" : 102100
				};
				_tileInfo.origin = {
					"x" : -20037508.342787,
					"y" : 20037508.342787
				};
				_tileInfo.lods = [{
					"level" : 1,
					"resolution" : 78271.67350880534,
					"scale" : 295829355.46
				}, {
					"level" : 2,
					"resolution" : 39135.83675440267,
					"scale" : 147914677.73
				}, {
					"level" : 3,
					"resolution" : 19567.918377201335,
					"scale" : 73957338.865
				}, {
					"level" : 4,
					"resolution" : 9783.959188600667,
					"scale" : 36978669.4325
				}, {
					"level" : 5,
					"resolution" : 4891.979594300334,
					"scale" : 18489334.71625
				}, {
					"level" : 6,
					"resolution" : 2445.989797150167,
					"scale" : 9244667.358125
				}, {
					"level" : 7,
					"resolution" : 1222.9948985750834,
					"scale" : 4622333.6790625
				}, {
					"level" : 8,
					"resolution" : 611.4974492875417,
					"scale" : 2311166.83953125
				}, {
					"level" : 9,
					"resolution" : 305.7487246437696,
					"scale" : 1155583.41976562
				}, {
					"level" : 10,
					"resolution" : 152.87436232188531,
					"scale" : 577791.709882812
				}, {
					"level" : 11,
					"resolution" : 76.43718116094266,
					"scale" : 288895.854941406
				}, {
					"level" : 12,
					"resolution" : 38.21859058047133,
					"scale" : 144447.927470703
				}, {
					"level" : 13,
					"resolution" : 19.109295290235693,
					"scale" : 72223.9637353516
				}, {
					"level" : 14,
					"resolution" : 9.554647645117846,
					"scale" : 36111.9818676758
				}, {
					"level" : 15,
					"resolution" : 4.777323822558923,
					"scale" : 18055.9909338379
				}, {
					"level" : 16,
					"resolution" : 2.3886619112794585,
					"scale" : 9027.99546691894
				}, {
					"level" : 17,
					"resolution" : 1.1943309556397292,
					"scale" : 4513.99773345947
				}, {
					"level" : 18,
					"resolution" : 0.597165477819866,
					"scale" : 2256.99886672974
				}, {
					"level" : 19,
					"resolution" : 0.298582738909933,
					"scale" : 1128.49943336487
				}, {
					"level" : 20,
					"resolution" : 0.1492913694549665,
					"scale" : 564.249716682435
				}];
			}

			this.initialExtent = this.fullExtent;
			this.tileInfo = new esri.layers.TileInfo(_tileInfo);
			this.loaded = true;
			this.onLoad(this);
		},
		getTileUrl : function(level, row, col) {
			var url = this.url + "?SERVICE=WMTS&VERSION=1.0.0&REQUEST=GetTile" + "&FORMAT=" + this.format + "&TILEMATRIXSET=" + this.tileMatrixSet + "&STYLE=" + this.style + "&LAYER=" + this.layer + "&TILEMATRIX=" + level + "&TILEROW=" + row + "&TILECOL=" + col;
			return url;
		}
	});

	dojo.mixin(TianDiTuLayer, {
		//矢量图(4490)
		VEC_BASE_GCS : "vec_c",
		VEC_ANNO_GCS : "cva_c",
		VEC_ANNO_GCS_EN : "eva_c",
		//矢量图(102100)
		VEC_BASE_WEBMERCATOR : "vec_w",
		VEC_ANNO_WEBMERCATOR : "cva_w",
		VEC_ANNO_WEBMERCATOR_EN : "eva_w",
		//影像图(4490)
		IMG_BASE_GCS : "img_c",
		IMG_ANNO_GCS : "cia_c",
		IMG_ANNO_GCS_EN : "eia_c",
		//影像图(102100)
		IMG_BASE_WEBMERCATOR : "img_w",
		IMG_ANNO_WEBMERCATOR : "cia_w",
		IMG_ANNO_WEBMERCATOR_EN : "eia_w",
		//地形图(4490)
		TER_BASE_GCS : "ter_c",
		TER_ANNO_GCS : "cta_c",
		//地形图(102100)
		TER_BASE_WEBMERCATOR : "ter_w",
		TER_ANNO_WEBMERCATOR : "cta_w"
	});
});

