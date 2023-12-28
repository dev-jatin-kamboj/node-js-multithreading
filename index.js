const { Worker, parentPort } = require('worker_threads');
const { performance } = require('perf_hooks');

function chunkify(jobs, chunkNo) {
    const chunkedJobs = []
    const chunkSize = (jobs.length / chunkNo)

    for (let i = 0; i < chunkNo; i++) {
        chunkedJobs.push(jobs.slice(0, chunkSize))
    }

    return chunkedJobs
}


const jobsList = Array.from({ length: 100 }, () => 1e9)
const jobsChunckes = chunkify(jobsList, 1)

const start = performance.now()

let counter = 0
let completedWorkers = 0
for (const job of jobsChunckes) {
    const worker = new Worker("./worker.js")

    worker.postMessage({ jobs: job, id: counter })
    counter++
    worker.on('message', ({ message, id }) => {

        console.log(message);

        completedWorkers++
        if (completedWorkers === counter) {
            const end = performance.now()
            console.log('Performance :>> ', (end - start) / 1000);
            process.exit()
        }

    })


}
// runWorkers(jobsList, 5)