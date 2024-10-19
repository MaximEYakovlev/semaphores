// binary semaphore
class Semaphore {
    constructor() {
        this.value = 0;

        /* queue contains all Process Control Blocks (PCBs)
        corresponding to prwakeupocesses got blocked
        while performing down operation */
        this.queue = [];
    }

    P() {
        if (this.value == 1) {
            this.value = 0;
        } else {
            // add the process to the waiting queue
            this.queue.push(P);
            sleep();
        }
    }

    V() {
        if (this.queue.length == 0) {
            this.value = 1;
        } else {
            // select a process from waiting queue
            let p = this.queue.shift();

            /* remove the process from waiting as it has been
            sent for Critical Section (CS) */
            wakeup(p);
        }
    }
}

// counting semaphore
// counting semaphore object definition
function Semaphore() {
    this.value = 0;

    // initialize an array to act as a queue
    this.queue = [];
}

// implement the P operation
Semaphore.prototype.P = function (p) {
    this.value = this.value - 1;
    if (this.value < 0) {
        // add process to queue
        this.queue.push(p);
        block();
    }
};

// implement the V operation
Semaphore.prototype.V = function () {
    this.value = this.value + 1;
    if (this.value <= 0) {
        // remove process from queue
        const p = this.queue.shift();
        wakeup(p);
    }
};

