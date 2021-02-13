# ngx-detach-invisible

Allows to detach components not visible in viewport from change detection (do not rerender templates) by placing `detach-invisible` directive on component in template

Check out [stackblitz demo](https://stackblitz.com/edit/ngx-detach-invisible-demo?embed=1&file=src/app/app.component.html)!

## Usage

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
