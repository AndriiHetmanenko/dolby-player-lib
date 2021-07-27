/// <reference types="react-scripts" />
declare module 'shaka-player-react';
declare module 'mux.js';
// declare module 'xhook';

declare module 'xhook' {
  type XHookRequest = {
    method: string,
    url: string,
    body: string,
    headers: object,
    timeout: number,
    type: string,
    withCredentials: string,
  };

  interface XHook {
    enable(): void,
    disable(): void,
    before(handler: (request: XHookRequest) => any): void
  }

  const xhook: XHook;

  export = xhook;
}