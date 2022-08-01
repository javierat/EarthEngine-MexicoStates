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

var x10 = -88.047323
var y10 = 20.36633
var point10 = ee.Geometry.Point(x10,y10)
Map.centerObject(point10, 15)
Map.addLayer(point10, {color:'red'},'point10')

var x11 = -88.136495
var y11 = 20.281374
var point11 = ee.Geometry.Point(x11,y11)
Map.centerObject(point11, 15)
Map.addLayer(point11, {color:'red'},'point11')

var x12 = -88.1671596
var y12 = 20.2854211
var point12 = ee.Geometry.Point(x12,y12)
Map.centerObject(point12, 15)
Map.addLayer(point12, {color:'red'},'point12')

var x13 = -88.2327072
var y13 = 20.2870006
var point13 = ee.Geometry.Point(x13,y13)
Map.centerObject(point13, 15)
Map.addLayer(point13, {color:'red'},'point13')

var x14 = -88.2326737
var y14 = 20.2901785
var point14 = ee.Geometry.Point(x14,y14)
Map.centerObject(point14, 15)
Map.addLayer(point14, {color:'red'},'point14')

var x15 = -88.2646351
var y15 = 20.290342
var point15 = ee.Geometry.Point(x15,y15)
Map.centerObject(point15, 15)
Map.addLayer(point15, {color:'red'},'point15')

var x16 = -88.266822
var y16 = 20.269127
var point16 = ee.Geometry.Point(x16,y16)
Map.centerObject(point16, 15)
Map.addLayer(point16, {color:'red'},'point16')

var x17 = -88.2729624
var y17 = 20.2699311
var point17 = ee.Geometry.Point(x17,y17)
Map.centerObject(point17, 15)
Map.addLayer(point17, {color:'red'},'point17')

var x18 = -88.3087884
var y18 = 20.2535104
var point18 = ee.Geometry.Point(x18,y18)
Map.centerObject(point18, 15)
Map.addLayer(point18, {color:'red'},'point18')

var x19 = -88.3519044
var y19 = 20.2590227
var point19 = ee.Geometry.Point(x19,y19)
Map.centerObject(point19, 15)
Map.addLayer(point19, {color:'red'},'point19')

var x19 = -88.3519044
var y19 = 20.2590227
var point19 = ee.Geometry.Point(x19,y19)
Map.centerObject(point19, 15)
Map.addLayer(point19, {color:'red'},'point19')

var x20 = -88.3566003
var y20 = 20.258314
var point20 = ee.Geometry.Point(x20,y20)
Map.centerObject(point20, 15)
Map.addLayer(point20, {color:'red'},'point20')

var x21 = -88.370812
var y21 = 20.257792
var point21 = ee.Geometry.Point(x21,y21)
Map.centerObject(point21, 15)
Map.addLayer(point21, {color:'red'},'point21')

var x22 = -88.376397
var y22 = 20.257022
var point22 = ee.Geometry.Point(x22,y22)
Map.centerObject(point22, 15)
Map.addLayer(point22, {color:'red'},'point22')


var polygon = ee.Geometry.Polygon([[x1,y1],[x2,y2],[x3,y3],[x4,y4],[x5,y5],[x6,y6],[x7,y7],[x8,y8],[x9,y9],[x10,y10],
                                   [x11,y11],[x12,y12],[x13,y13],[x14,y14],[x15,y15],[x16,y16],[x17,y17],[x18,y18],[x19,y19],[x20,y20],
                                   [x21,y21],[x22,y22]])

Map.addLayer(polygon,{color:'blue'},'polygon')
