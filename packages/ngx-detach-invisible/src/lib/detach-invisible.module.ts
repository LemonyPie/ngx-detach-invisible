import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {DetachInvisibleDirective} from "./detach-invisible.directive";

@NgModule({
  declarations: [DetachInvisibleDirective],
  imports: [CommonModule],
  exports: [DetachInvisibleDirective]
})
export class DetachInvisibleModule {}
