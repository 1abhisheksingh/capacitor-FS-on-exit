import { WebPlugin } from '@capacitor/core';

import type { FSOnExitPlugin } from './definitions';

export class FSOnExitWeb extends WebPlugin implements FSOnExitPlugin {
  async echo(options: { value: string }): Promise<{ value: string }> {
    console.log('ECHO', options);
    return options;
  }
}
