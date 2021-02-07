const StopWatch = function () {
  // Private
  let initialValue = 0;
  let isStopped = true;
  let internalDuration = 0;

  const computeTime = () => {
    const latestValue = Date.now();
    const timePassed = (latestValue - initialValue) / 1000;
    return Math.round(timePassed * 100) / 100;
  };

  // Public
  this.start = () => {
    if (isStopped) {
      isStopped = false;
      initialValue = Date.now();
    } else {
      throw new Error('The Stopwatch already started');
    }
  };

  this.stop = () => {
    if (!isStopped) {
      isStopped = true;
      internalDuration = internalDuration + computeTime();
    } else {
      throw new Error('The Stopwatch already stopped');
    }
  };

  this.reset = () => {
    internalDuration = 0;
    initialValue = 0;
    isStopped = true;
  };

  Object.defineProperty(this, 'duration', {
    get: () => internalDuration,
  });
};

module.exports = StopWatch;
