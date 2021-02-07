const StopWatch = require('./index');

it('start, stop, and reset are public members of sw object', () => {
  const sw = new StopWatch();
  expect(sw.start).toBeDefined();
  expect(sw.stop).toBeDefined();
  expect(sw.reset).toBeDefined();
});

it('initialValue, isStopped, and computeTime are not accesible', () => {
  const sw = new StopWatch();
  expect(sw.initialValue).toBeUndefined();
  expect(sw.isStopped).toBeUndefined();
  expect(sw.computeTime).toBeUndefined();
});

it('duration returns 0 on initiation', () => {
  const sw = new StopWatch();
  const result = sw.duration;
  expect(result).toBe(0);
});

it("duration is a getter, it can't be modified", () => {
  const sw = new StopWatch();
  sw.duration = 5;
  expect(sw.duration).not.toBe(5);
});

it("you can't call start twice in a row", () => {
  const sw = new StopWatch();
  sw.start();
  expect(() => {
    sw.start();
  }).toThrow('The Stopwatch already started');
});

it("you can't call stop twice in a row", () => {
  const sw = new StopWatch();
  expect(() => {
    sw.stop();
  }).toThrow('The Stopwatch already stopped');
});

it('Duration should return the time passed after stop()', (done) => {
  const sw = new StopWatch();
  sw.start();
  setTimeout(() => {
    sw.stop();
    expect(sw.duration > 0).toBe(true);
    done();
  }, 100);
});

it('Reset should take stopwatch to initial state', (done) => {
  const sw = new StopWatch();
  sw.start();
  setTimeout(() => {
    sw.stop();
    sw.reset();
    expect(sw.duration === 0).toBe(true);
    done();
  }, 100);
});
