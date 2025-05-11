type Callback = (...args: any[]) => any;
type Subscription = {
  unsubscribe: () => void;
};

class EventEmitter {
  constructor(private events: Record<string, Callback[]> = {}) {}

  subscribe(eventName: string, callback: Callback): Subscription {
    if (!this.events[eventName]) this.events[eventName] = [];

    this.events[eventName].push(callback);

    return {
      unsubscribe: () => {
        const callbacks = this.events[eventName];
        if (callbacks) {
          const idx = callbacks.indexOf(callback);
          if (idx !== -1) {
            callbacks.splice(idx, 1);
            if (callbacks.length === 0) {
              delete this.events[eventName];
            }
          }
        }
        return undefined;
      },
    };
  }

  emit(eventName: string, args: any[] = []): any[] {
    const results: any[] = [];
    const callbacks = this.events[eventName];
    if (!callbacks) return results;

    for (const cb of callbacks) {
      results.push(cb(...args));
    }

    return results;
  }
}
