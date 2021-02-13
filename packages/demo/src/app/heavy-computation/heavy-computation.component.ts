import {Component, ChangeDetectionStrategy, Input} from '@angular/core';

@Component({
  selector: 'demo-heavy-computation',
  templateUrl: './heavy-computation.component.html',
  styleUrls: ['./heavy-computation.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeavyComputationComponent {
  @Input()
  public count: number = 0;

  get heavyGetter(): number {
    console.log('heavy getter is run');
    const n = this.count % 20 + 20;
    return this.fib(n);
  }

  private fib(n: number): number {
    return n <= 1 ? n : this.fib(n - 1) + this.fib(n - 2);
  }
}
