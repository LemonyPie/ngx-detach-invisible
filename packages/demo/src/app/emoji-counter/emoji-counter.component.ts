import {ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnDestroy, OnInit} from '@angular/core';
import {DetachInvisible} from '../../../../ngx-detach-invisible/src/lib/detach-invisible.decorator';

@DetachInvisible()
@Component({
  selector: 'ngx-detach-invisible-emoji-counter',
  templateUrl: './emoji-counter.component.html',
  styleUrls: ['./emoji-counter.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EmojiCounterComponent {
  @Input() public readonly name: string = 'Hello World Component';

  @Input() public readonly count: number = 0;
}
