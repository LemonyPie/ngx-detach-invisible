import {ChangeDetectionStrategy, Component, Input} from '@angular/core';

@Component({
  selector: 'demo-emoji-counter',
  templateUrl: './emoji-counter.component.html',
  styleUrls: ['./emoji-counter.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EmojiCounterComponent {

  @Input() public readonly name: string = 'Emoji Counter Component';

  @Input() public readonly count: number = 0;

}
