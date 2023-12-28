// Create a worker script and object over this file
const { performance } = require('perf_hooks');
const { Worker, parentPort } = require('worker_threads');

parentPort.on("message", ({ jobs, id }) => {
    console.log(`Worker ${id} is executing`);
    let count = 0


    for (const job of jobs) {
        for (let i = 0; i < job; i++) {
            count++
        }
    }



    parentPort.postMessage({ message: `Worker ${id} completed ${count}`, id })
})
