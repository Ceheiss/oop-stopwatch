const StopWatch = function () {
  let initialValue = 0;
  this.duration = 0;
  this.isStopped = true;

  const computeTime = function () {
    const latestValue = Date.now();
    const timePassed = (latestValue - initialValue) / 1000;
    return Math.round(timePassed * 100) / 100;
  };

  this.start = function () {
    if (this.isStopped) {
      this.isStopped = false;
      initialValue = Date.now();
    } else {
      throw new Error('The Stopwatch already started');
    }
  };

  this.stop = function () {
    if (!this.isStopped) {
      this.isStopped = true;
      this.duration = this.duration + computeTime();
    } else {
      throw new Error('The Stopwatch already stopped');
    }
  };

  this.reset = function () {
    this.duration = 0;
    initialValue = 0;
  };
};

module.exports = StopWatch;
