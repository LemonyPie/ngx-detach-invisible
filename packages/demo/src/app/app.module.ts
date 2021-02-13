import { BrowserModule } from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { EmojiCounterComponent } from './emoji-counter/emoji-counter.component';
import { HeavyComputationComponent } from './heavy-computation/heavy-computation.component';
import { WrapperComponent } from './wrapper/wrapper.component';
import {DetachInvisibleModule, DetachInvisibleService} from "ngx-detach-invisible";

@NgModule({
  declarations: [AppComponent, EmojiCounterComponent, HeavyComputationComponent, WrapperComponent],
    imports: [
        BrowserModule,
        RouterModule.forRoot([], { initialNavigation: 'enabled' }),
        DetachInvisibleModule,
    ],
  providers: [
    DetachInvisibleService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}

