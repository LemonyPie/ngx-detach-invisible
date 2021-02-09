import {ChangeDetectorRef, Inject, Injectable, OnDestroy, Optional} from '@angular/core';
import {
  DEFAULT_DETACH_INVISIBLE_CONFIG,
  DETACH_INVISIBLE_CONFIG,
  IDetachInvisibleConfig
} from './detach-invisible.const';

@Injectable({
  providedIn: 'root'
})
export class DetachInvisibleService implements OnDestroy {

  private observer: IntersectionObserver;
  private observables: WeakMap<Element, ChangeDetectorRef> = new WeakMap();

  constructor(
    @Optional() @Inject(DETACH_INVISIBLE_CONFIG) private readonly config: IDetachInvisibleConfig
  ) {
    if (config == null) {
      this.config = DEFAULT_DETACH_INVISIBLE_CONFIG;
    }

    this.observer = new IntersectionObserver(
      this.processEntries.bind(this), {
        root: null, // watch the entire viewport
        ...this.config
      }
    );
  }

  public ngOnDestroy(): void {
    this.observer.disconnect();
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore allow IntersectionObserver to be garbage collected
    this.observer = null;
  }

  private processEntries(entries: IntersectionObserverEntry[]): void {
    entries.forEach(({target, isIntersecting}: IntersectionObserverEntry) => {
      console.log(target, isIntersecting);
    })
  }
}
