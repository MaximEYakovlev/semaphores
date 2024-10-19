class Mutex {
    constructor() {
        this.isLocked = false;
        this.queue = [];
    }

    lock() {
        return new Promise(resolve => {

            if (!this.isLocked) {
                this.isLocked = true;

                resolve();
            } else {
                this.queue.push(resolve);
            }
        });
    }

    unlock() {
        if (this.queue.length > 0) {
            const nextResolve = this.queue.shift();

            nextResolve();
        } else {
            this.isLocked = false;
        }
    }
}
