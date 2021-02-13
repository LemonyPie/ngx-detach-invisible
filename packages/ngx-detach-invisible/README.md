# ngx-detach-invisible

To use this library simply add `detach-invisible` directive on your component in template

```angular2
<demo-heavy-computation
  detach-invisible
  [count]="count"
></demo-heavy-computation>
```
And put `DetachInvisibleService` to your `AppModule` providers:

```angular2
@NgModule({
  /* ... */
  providers: [
    DetachInvisibleService
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }

```


## TODO

- [ ] Provide example app on Stackblitz
