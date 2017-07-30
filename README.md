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

## Related Works
 - [rxmarbles](http://rxmarbles.com/) Interactive diagrams of Rx Observables.
 - [rxvision](http://jaredforsyth.com/rxvision/examples/playground/) Visualize the streams.
