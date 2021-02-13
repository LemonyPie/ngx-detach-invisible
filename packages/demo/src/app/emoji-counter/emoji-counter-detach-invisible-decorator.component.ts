import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  Directive,
  ElementRef,
  Input,
} from "@angular/core";
import {DetachInvisible, DetachInvisibleProviders, DetachInvisibleService} from "ngx-detach-invisible";

@Directive()
class FooBar {
  foo = "bar";
}

@DetachInvisible()
@Component({
  selector: 'demo-emoji-counter-detach-invisible-decorator',
  templateUrl: './emoji-counter.component.html',
  styleUrls: ['./emoji-counter.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EmojiCounterDetachInvisibleDecoratorComponent extends FooBar implements DetachInvisibleProviders {

  constructor(
    public elementRef: ElementRef,
    public changeDetectorRef: ChangeDetectorRef,
    public detachInvisibleService: DetachInvisibleService
  ) {
    super();
  }

  @Input() public readonly name: string = 'Emoji Counter Detach Invisible Component';

  @Input() public readonly count: number = 0;

}
