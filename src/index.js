const StopWatch = function () {
  // Private
  let initialValue = 0;
  let isStopped = true;
  let internalDuration = 0;

  const computeTime = function () {
    const latestValue = Date.now();
    const timePassed = (latestValue - initialValue) / 1000;
    return Math.round(timePassed * 100) / 100;
  };

  // Public
  this.start = function () {
    if (isStopped) {
      isStopped = false;
      initialValue = Date.now();
    } else {
      throw new Error('The Stopwatch already started');
    }
  };

  this.stop = function () {
    if (!isStopped) {
      isStopped = true;
      internalDuration = internalDuration + computeTime();
    } else {
      throw new Error('The Stopwatch already stopped');
    }
  };

  this.reset = function () {
    internalDuration = 0;
    initialValue = 0;
  };

  Object.defineProperty(this, 'duration', {
    get: function () {
      return internalDuration;
    },
  });
};

module.exports = StopWatch;
