import { ViewChild, ElementRef, Input, Output, EventEmitter, Component, OnInit } from '@angular/core';
import { loadModules } from 'esri-loader';
import { environment } from '../../environments/environment';
import { EsriMapService } from './esri-map.service';
@Component({
    selector: 'app-esri-map',
    templateUrl: './esri-map.component.html',
    styleUrls: ['./esri-map.component.scss'],
    providers: [EsriMapService]
})
export class EsriMapComponent implements OnInit {
    @ViewChild('mapViewNode') mapViewNode: ElementRef;
    view: any;
    pointLists = [];
    constructor(
        private el: ElementRef,
        private esriMapService: EsriMapService
    ) { }
    ngOnInit() {
        const options = {
            url: 'http://localhost:4200/assets/arcgis_js_api/library/4.6/dojo/dojo.js'
        };
        loadModules([
            "esri/Basemap",
            "esri/layers/OpenStreetMapLayer",
            "esri/Map",
            "esri/views/SceneView",
            "esri/geometry/Extent",
            "esri/geometry/Point",
            "esri/widgets/Search",
            "esri/Graphic",
            "esri/PopupTemplate",
            "esri/layers/FeatureLayer",
            "esri/layers/support/Field",
            "dojo/domReady!"
        ],options)
            .then(([Basemap, OpenStreetMapLayer, Map, SceneView, Extent, Point, Search, Graphic, PopupTemplate, FeatureLayer, Field]) => {
                // --------------------------------------------------------------------
                // 实例化新的OpenStreetMapLayer视图层
                // url可设置为自己服务器地址,若没有则用https://server.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Light_Gray_Base/MapServer
                // --------------------------------------------------------------------
                var layer = new OpenStreetMapLayer({
                    subDomain: 'a',
                    urlTemplate: "https://{subDomain}.tile.openstreetmap.org/{level}/{col}/{row}.png"
                });
                //  --------------------------------------------------------------------
                //  实例化新的Basemap,在下面的Map类中使用
                //  --------------------------------------------------------------------
                var customBasemap = new Basemap({
                    baseLayers: [layer],
                    title: "Custom Basemap",
                    id: "myBasemap"
                });

                //  --------------------------------------------------------------------
                //  若要设置为显示立体图，则加入ground: "world-elevation"
                //  --------------------------------------------------------------------
                let myMap = new Map({
                    basemap: customBasemap                    
                });
                //  --------------------------------------------------------------------
                //  center，设置为杭州的经纬度
                //  container 加载地图的dom id
                //  map 上面实例的Map类
                //  zoom 初始化的视图大小
                //  --------------------------------------------------------------------
                this.view = new SceneView({
                    center: [120.23227913526993, 30.214125039055258], // long, lat
                    container: this.mapViewNode.nativeElement,
                    map: myMap,
                    zoom: 18,
                    highlightOptions: {
                        color: [255, 241, 58],
                        fillOpacity: 0.4
                    }
                });
                //  --------------------------------------------------------------------
                //  分别为最大视图比例和最小视图比例
                //  minZoom 最远可滑至的地图比例
                //  --------------------------------------------------------------------
                this.view.constraints = {
                    minZoom: 1,
                    maxZoom: 20
                };
                //  --------------------------------------------------------------------
                //  地图上的点击事件
                //  event上可获取经纬度坐标event.mapPoint.latitude,event.mapPoint.longitude
                //  --------------------------------------------------------------------
                this.view.on("click", function (event) {
                    // the hitTest() checks to see if any graphics in the view
                    // intersect the given screen x, y coordinates
                    console.log(event.mapPoint.latitude, event.mapPoint.longitude)
                });

                (async () => {
                    let res = await this.esriMapService.getPositionList()
                    this.pointLists = res.data 
                    let features = []
                    //  --------------------------------------------------------------------
                    //  初始化 FeatureLayer的source属性值,类似graphic类
                    //  --------------------------------------------------------------------
                    this.pointLists.forEach((point) => {
                        features.push({
                            geometry: {
                                type: "point",
                                longitude: point.longitude,
                                latitude: point.latitude
                            },
                            attributes: point
                        })
                    })
                    //  --------------------------------------------------------------------
                    //  初始化render渲染方法，这里使用的是simple模式，所有标记点都现实同样样式
                    //  应多多种不通类型，使用unique-value模式，详见
                    //  https://developers.arcgis.com/javascript/latest/api-reference/esri-renderers-UniqueValueRenderer.html
                    //  --------------------------------------------------------------------
                    var pointsRenderer = {
                        type: "simple",
                        symbol: {
                            type: "point-3d", // autocasts as new PointSymbol3D()
                            symbolLayers: [{
                                type: "icon", // autocasts as new IconSymbol3DLayer()
                                resource: {
                                    href: 'assets/images/f__32.gif'
                                },
                                size: 10,
                                outline: {
                                    color: "white",
                                    size: 2
                                }
                            }],
                            callout: {
                                type: "line", // autocasts as new LineCallout3D()
                                color: "white",
                                size: 2,
                                border: {
                                    color: '#D13470'
                                }
                            }
                        }
                    }
                    //  --------------------------------------------------------------------
                    //  具体我也不知道是干嘛的，反正要初始化这个东西,否则不能初始化FeatureLayer类
                    //  myMap.add(pointsLayer) 将自定义的标记图层添加到地图中
                    //  --------------------------------------------------------------------
                    const fields = [
                        new Field({
                            name: "ObjectID",
                            alias: "ObjectID",
                            type: "oid"
                        }), new Field({
                            name: "type",
                            alias: "type",
                            type: "string"
                        }), new Field({
                            name: "name",
                            alias: "name",
                            type: "string"
                        })
                    ];
                    var pointsLayer = new FeatureLayer({
                        title: "Touristic attractions",
                        outFields: ["*"],
                        // feature reduction is set to selection because our scene contains too many points and they overlap
                        featureReduction: {
                            type: "selection"
                        },
                        fields: fields,
                        objectIdField: "ObjectID",  // field name of the Object IDs
                        geometryType: "point",
                        source: features,
                        renderer: pointsRenderer,
                        popupTemplate: {
                            title: "档案信息",
                            content:
                                "<ul>" +
                                "<li>名称 : {name} </li>" +
                                "<li>年度 : {year} </li>" +
                                "<li>项目编号 : {projectNo} </li>" +
                                "<li>案卷题名 : {recordTitle} </li>" +
                                "<li>建设单位 : {ownerUnit} </li>" +
                                "<ul>" +
                                "<a href='" +
                                environment.webUrl + 'record' + "'>详细信息</a>"
                        },
                        labelingInfo: [
                            {
                                labelExpressionInfo: {
                                    value: "{name}"
                                },
                                symbol: {
                                    type: "label-3d", // autocasts as new LabelSymbol3D()
                                    symbolLayers: [{
                                        type: "text", // autocasts as new TextSymbol3DLayer()
                                        material: {
                                            color: "red"
                                        },
                                        size: 8
                                    }]
                                }
                            }],
                        labelsVisible: true
                    })
                    myMap.add(pointsLayer)
                    //  --------------------------------------------------------------------
                    //  添加点击搜索结果方法
                    //  highlightSelect用来保存已高亮的feature实例
                    //  根据点击项的内容和所有标记点的name属性做比较得出结果
                    //  --------------------------------------------------------------------
                    this.view.whenLayerView(pointsLayer).then((lyrView) => {
                        let view = this.view
                        let highlightSelect
                        lyrView.watch("updating", (val) => {
                            if (!val) {
                                var searchPoints = this.el.nativeElement.querySelectorAll(".searchPoint");
                                for (var i = 0, button = null; button = searchPoints[i]; i++) {
                                    button.addEventListener("click", clickSearchPoints);
                                }
                            }
                        })
                        /**
                         * 点击搜索结果事件
                         * @param event 
                         * view.popup.open 打开弹出窗
                         * yrView.highlight 高亮目标点，并赋值给highlightSelect，这样才有remove方法
                         * goTo，将屏幕移动至目标点
                         */
                        function clickSearchPoints(event) {
                            lyrView.queryFeatures().then((results) => {
                                let point;
                                if (highlightSelect) highlightSelect.remove()
                                results.forEach((result) => {
                                    if (result.attributes.name == event.target.innerText) {
                                        point = result
                                    }
                                })
                                view.popup.open({
                                    features: [point],
                                    location: point.geometry
                                });
                                highlightSelect = lyrView.highlight(point);
                                view.goTo({
                                    target: point.geometry,
                                    tilt: 0,
                                    zoom: 15
                                });
                            })
                        }
                    });
                })()
                //  --------------------------------------------------------------------
                //  添加搜索框
                //  sources属性，如果添加则会从本地获取搜索信息
                //  没有则在服务器上获取
                //  --------------------------------------------------------------------
                var searchWidget = new Search({
                    view: this.view,
                });
                // Add the search widget to the top right corner of the view
                this.view.ui.add(searchWidget, {
                    position: "top-right"
                });


            })

    }
}

