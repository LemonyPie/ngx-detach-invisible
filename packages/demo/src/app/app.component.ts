import {ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit} from '@angular/core';

@Component({
  selector: 'ngx-detach-invisible-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnInit, OnDestroy {
  public isChildVisible = true;
  public names: string[] = [];
  public count = 0;

  private intervalId: number | undefined;

  constructor(
    private cdr: ChangeDetectorRef
  ) { }

  public ngOnInit() {
    for (let i = 0; i < 75; i++) {
      this.names.push(String.fromCodePoint(i + 128054));
    }

    this.intervalId = setInterval(() => {
      this.count++;
      this.cdr.markForCheck();
    }, 500);
  }

  public ngOnDestroy() {
    clearInterval(this.intervalId);
  }

  public trackBy(index: number, name: string): string {
    return name;
  }
}
