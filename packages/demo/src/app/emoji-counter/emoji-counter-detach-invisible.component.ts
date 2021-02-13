import {ChangeDetectionStrategy, Component, Input} from "@angular/core";
import {DetachInvisibleDirective} from "ngx-detach-invisible";

@Component({
  selector: 'demo-emoji-counter-detach-invisible',
  templateUrl: './emoji-counter.component.html',
  styleUrls: ['./emoji-counter.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EmojiCounterDetachInvisibleComponent extends DetachInvisibleDirective {

  @Input() public readonly name: string = 'Emoji Counter Detach Invisible Component';

  @Input() public readonly count: number = 0;

}
