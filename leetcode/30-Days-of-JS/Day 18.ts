type F = (...args: number[]) => void;

function debounce(fn: F, t: number): F {
  let timeoutId: number | NodeJS.Timeout | undefined;

  return function (...args: number[]) {
    if (timeoutId !== undefined) {
      clearTimeout(timeoutId);
    }

    timeoutId = setTimeout(() => {
      fn(...args);
    }, t);
  };
}

const log = debounce(console.log, 0);

log(20);
log(10);
log(10);
log(100);
