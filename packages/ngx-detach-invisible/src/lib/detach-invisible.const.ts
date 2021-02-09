import {InjectionToken} from '@angular/core';

export const DETACH_INVISIBLE_CONFIG = new InjectionToken<IDetachInvisibleConfig>('DetachInvisibleConfig');

export interface IDetachInvisibleConfig {
  threshold: number
}

export const DEFAULT_DETACH_INVISIBLE_CONFIG: IDetachInvisibleConfig = {
  threshold: 0.2
}
