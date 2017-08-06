# Rx Flow

Visualizing Reactive Programming using rxjs.
[**DEMO**](https://fingerpich.github.io/rx-flow/)

[![dependencies-quality]( https://david-dm.org/fingerpich/rx-flow.svg)](https://david-dm.org/fingerpich/rx-flow)
[![development-dependencies-quality](https://david-dm.org/fingerpich/rx-flow/dev-status.svg)](https://david-dm.org/fingerpich/rx-flow#info=devDependencies)
[![Codacy Badge](https://api.codacy.com/project/badge/Grade/3a50eeb043584886b60f961426032030)](https://www.codacy.com/app/zarei-bs/rx-studio?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=fingerpich/rx-studio&amp;utm_campaign=Badge_Grade)

## How to learn reactive programming using rx (js, java, swift , ...) 

Reactivex is An API for asynchronous programming with observable streams and it is getting a lot of attention these days
But there’s a sizeable learning curve.
This web application tries to visualize reactivex and make it simple to understand.

## Samples

 - [Learn about Range, Last operator in reactiveX](https://fingerpich.github.io/rx-flow/load/%7B%22nodes%22:%5B%7B%22id%22:2,%22x%22:348,%22y%22:233,%22node_type%22:%22Range%22,%22properties%22:%7B%22start%22:0,%22count%22:3%7D%7D,%7B%22id%22:3,%22x%22:606,%22y%22:234,%22node_type%22:%22Last%22,%22properties%22:%7B%22filter%22:0%7D%7D,%7B%22id%22:4,%22x%22:480,%22y%22:413,%22node_type%22:%22Subscribe%22,%22properties%22:%7B%7D%7D%5D,%22edges%22:%5B%7B%22source%22:2,%22target%22:3%7D,%7B%22source%22:3,%22target%22:4%7D%5D%7D)
 - [Learn how Interval, First operator works as a cold observables in reactiveX](https://fingerpich.github.io/rx-flow/load/{"nodes":[{"id":1,"x":649.5,"y":279,"node_type":"Subscribe","properties":{}},{"id":2,"x":389,"y":332,"node_type":"Interval","properties":{"interval":500}},{"id":3,"x":570,"y":483,"node_type":"First","properties":{"filter":0}}],"edges":[{"source":2,"target":3},{"source":3,"target":1}]})
 - [learn cold observable and change Range count and see what will happen](https://fingerpich.github.io/rx-flow/load/{"nodes":[{"id":1,"x":579.5,"y":462,"node_type":"Subscribe","properties":{}},{"id":3,"x":579,"y":168,"node_type":"Filter","properties":{"filter":"3"}},{"id":4,"x":680,"y":311,"node_type":"First","properties":{"filter":0}},{"id":5,"x":399,"y":167,"node_type":"Map","properties":{"mapFunc":"1"}},{"id":7,"x":399,"y":471,"node_type":"Range","properties":{"start":1,"count":16}},{"id":8,"x":289,"y":312,"node_type":"Filter","properties":{"filter":"1"}}],"edges":[{"source":5,"target":3},{"source":3,"target":4},{"source":4,"target":1},{"source":7,"target":8},{"source":8,"target":5}]})
 - [learn how zip operator works with Interval and Range operator](https://fingerpich.github.io/rx-flow/load/{"nodes":[{"id":1,"x":470.5,"y":382,"node_type":"Subscribe","properties":{}},{"id":2,"x":771,"y":253,"node_type":"Range","properties":{"start":10,"count":9}},{"id":3,"x":801,"y":506,"node_type":"Interval","properties":{"interval":500}},{"id":4,"x":658,"y":383,"node_type":"Zip","properties":{"fi":0}}],"edges":[{"source":3,"target":4},{"source":2,"target":4},{"source":4,"target":1}]})
 - [multiple subscribe](https://fingerpich.github.io/rx-flow/load/{"nodes":[{"id":1,"x":834,"y":366,"node_type":"Subscribe","properties":{}},{"id":2,"x":530,"y":103,"node_type":"Range","properties":{"start":0,"count":3}},{"id":3,"x":619,"y":383,"node_type":"Subscribe","properties":{}},{"id":4,"x":423,"y":378,"node_type":"Subscribe","properties":{}},{"id":5,"x":306,"y":162,"node_type":"Map","properties":{"mapFunc":0}},{"id":6,"x":197,"y":343,"node_type":"Subscribe","properties":{}},{"id":7,"x":752,"y":182,"node_type":"Last","properties":{"filter":0}}],"edges":[{"source":2,"target":4},{"source":2,"target":3},{"source":2,"target":5},{"source":5,"target":6},{"source":7,"target":1},{"source":2,"target":7}]})
 
## Related Works
 - [rxmarbles](http://rxmarbles.com/) Interactive diagrams of Rx Observables.
 - [rxvision](http://jaredforsyth.com/rxvision/examples/playground/) Visualize the streams.
