import {InjectionToken, isDevMode} from '@angular/core';
import {IDetachInvisibleConfig} from "./detach-invisible.types";

export const PROD_MODE = !isDevMode();

export const DETACH_INVISIBLE_CONFIG = new InjectionToken<IDetachInvisibleConfig>('DetachInvisibleConfig');

export const DEFAULT_DETACH_INVISIBLE_CONFIG: IDetachInvisibleConfig = {
  threshold: 0.2
}

export const UnobserveSymbol = Symbol('unobserve');
