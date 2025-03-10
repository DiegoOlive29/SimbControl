let timeoutId: ReturnType<typeof setTimeout> | null = null;

export const clearCurrentTimeOut = (): void => {
  if (timeoutId) {
    clearTimeout(timeoutId);
  }
};

export const nullifyTimeOut = (): void => {
  timeoutId = null;
};

export const setCurrentTimeout = (timeout: NodeJS.Timeout): void => {
  timeoutId = timeout;
};

let intervalId: NodeJS.Timeout | null = null;

export const clearCurrentInterval = (): void => {
  if (intervalId) {
    clearInterval(intervalId);
  }
};

export const nullifyInterval = (): void => {
  intervalId = null;
};

export const setCurrentInterval = (interval: NodeJS.Timeout): void => {
  intervalId = interval;
};
