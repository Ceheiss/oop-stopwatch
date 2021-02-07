const StopWatch = require('./index');

it('duration returns 0 on initiation', () => {
  const sw = new StopWatch();
  const result = sw.duration;
  expect(result).toBe(0);
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

/*
Members should be:
duration, reset, start, stop
Initially duration is 0.
You can't call start twice in a row
You can't call stop twice in a row
Duration should return the value
Reset should take stopwatch to initial state
*/
