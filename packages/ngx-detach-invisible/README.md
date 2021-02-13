# ngx-detach-invisible

Allows to detach components not visible in viewport from change detection (do not rerender templates) by placing `detach-invisible` directive on component in template

Check out [stackblitz demo](https://stackblitz.com/edit/ngx-detach-invisible-demo?embed=1&file=src/app/app.component.html)!

## How do I benefit from using this library?

`DetachInvisibleDirective` makes your visible components to render faster by detaching components not visible in viewport. This allows to reduce the amount of cpu usage for rendering and updating templates as long as computations on page especially if you have components which take time to render. For example, they have not memoized hard to calculate getters or complex RxJS pipelines

## Usage

To use this library add in template `detach-invisible` directive on your component in template

```angular2html
<demo-heavy-computation
  detach-invisible
  [count]="count"
></demo-heavy-computation>
```

Or if you want all component instances to be detached when they are invisible then simply inherit `DetachInvisibleDirective`
```ts
@Component({
  /* ... */
})
export class DemoComponent extends DetachInvisibleDirective {
}

```
And put `DetachInvisibleService` to your `AppModule` providers:

```ts
@NgModule({
  /* ... */
  providers: [
    DetachInvisibleService
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }

```

### Experimental features

You can use `@DetachInvisible()` decorator on your components which already inherit from some classes. This decorator adds class with the same logic that the `DetachInvisibleDirective` has and puts itself between component's class and component's superclass in prototype chain.

It's not recommended using this method (especially in production) that's why it is currently marked as deprecated.

If you want to try this out: 
* add `@DetachInvisible()` decorator to your component
* implement `DetachIvisibleProviders` interface to provide required dependencies which will be used implicitly
* add `ElementRef`, `ChangeDetectorRef` and `DetachInvisibleService` providers

As this class stands in between on component and component's base class and we don't know which providers component's superclass uses. We can't specify constructor, therefore it is required for component to inject their dependencies
r

```ts
@DetachInvisible()
@Component({
})
export class DemoComponent extends BaseComponent implements DetachInvisibleProviders {

  constructor(
    public elementRef: ElementRef,
    public changeDetectorRef: ChangeDetectorRef,
    public detachInvisibleService: DetachInvisibleService
  ) {
    super();
  }
}
```
