var x1 = -87.53492
var y1 = 21.48808
var point1=ee.Geometry.Point(x1,y1)
Map.centerObject(point1, 15)
Map.addLayer(point1, {color:'red'},'point1')

var x2 = -87.53317
var y2 = 20.9997
var point2=ee.Geometry.Point(x2,y2)
Map.centerObject(point2, 15)
Map.addLayer(point2, {color:'red'},'point2')

var x3 = -87.74429
var y3 = 20.6539
var point3=ee.Geometry.Point(x3,y3)
Map.centerObject(point3, 15)
Map.addLayer(point3, {color:'red'},'point3')

var x4 = -87.96279
var y4 = 20.44674
var point4=ee.Geometry.Point(x4,y4)
Map.centerObject(point4, 15)
Map.addLayer(point4, {color:'red'},'point4')


var x5 = -87.99508
var y5 = 20.44733
var point5=ee.Geometry.Point(x5,y5)
Map.centerObject(point5, 15)
Map.addLayer(point5, {color:'red'},'point5')

var x6 = -87.99315
var y6 = 20.41804
var point6 = ee.Geometry.Point(x6,y6)
Map.centerObject(point6, 15)
Map.addLayer(point6, {color:'red'},'point6')

var x7 = -88.03438
var y7 = 20.37878
var point7 = ee.Geometry.Point(x7,y7)
Map.centerObject(point7, 15)
Map.addLayer(point7, {color:'red'},'point7')

var x8 = -88.047538
var y8 = 20.37882
var point8 = ee.Geometry.Point(x8,y8)
Map.centerObject(point8, 15)
Map.addLayer(point8, {color:'red'},'point8')

var x9 = -88.047538
var y9 = 20.37882
var point9 = ee.Geometry.Point(x9,y9)
Map.centerObject(point9, 15)
Map.addLayer(point9, {color:'red'},'point9')

var polygon = ee.Geometry.Polygon([[x1,y1],[x2,y2],[x3,y3],[x4,y4],[x5,y5],[x6,y6],[x7,y7],[x8,y8],[x9,y9]])
Map.addLayer(polygon,{color:'blue'},'polygon')
