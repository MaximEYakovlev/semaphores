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