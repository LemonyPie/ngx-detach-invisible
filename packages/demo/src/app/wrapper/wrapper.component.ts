import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'demo-wrapper',
  templateUrl: './wrapper.component.html',
  styleUrls: ['./wrapper.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WrapperComponent {
}
