# Simple Web worker

* [Using Web Workers - Web API Interfaces | MDN](https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API/Using_web_workers#Examples)

```
if (!!window.Worker) {
    var myWorker = new Worker("worker.js");
    // do something...
}
/*
 * <-- postMessage(data) 
 * --> onmessage(e)            // (code needed on both side)
 * data --> e.data
 */
```
