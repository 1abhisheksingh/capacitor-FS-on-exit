import { registerPlugin } from '@capacitor/core';

import type { FSOnExitPlugin } from './definitions';

const FSOnExit = registerPlugin<FSOnExitPlugin>('FSOnExit', {
  web: () => import('./web').then(m => new m.FSOnExitWeb()),
});

export * from './definitions';
export { FSOnExit };
