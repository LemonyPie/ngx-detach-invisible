# ngx-detach-invisible

To use this library simply add `@DetachInvisible()` decorator on you component's class

```angular2
@DetachInvisible()
@Component({
  selector: 'ngx-detach-invisible-demo-component',
  templateUrl: './ngx-detach-invisible-demo-component.component.html',
  styleUrls: ['./ngx-detach-invisible-demo-component.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DemoComponent { }
```
