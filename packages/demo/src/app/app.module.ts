import { BrowserModule } from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { EmojiCounterComponent } from './emoji-counter/emoji-counter.component';
import {DetachInvisibleService} from 'ngx-detach-invisible';

@NgModule({
  declarations: [AppComponent, EmojiCounterComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot([], { initialNavigation: 'enabled' }),
  ],
  providers: [
    DetachInvisibleService,
    // {
    //   provide: NgZone,
    //   useFactory: () => new NgZone({
    //     shouldCoalesceRunChangeDetection: true
    //   })
    // }
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}

