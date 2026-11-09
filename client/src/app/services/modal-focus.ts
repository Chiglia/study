import { afterNextRender, Directive, ElementRef, inject, OnDestroy } from '@angular/core';

@Directive({ selector: '[appModalFocus]', host: { '(keydown.tab)': 'trap($event)' } })
export class ModalFocus implements OnDestroy {
  private readonly element = inject<ElementRef<HTMLElement>>(ElementRef).nativeElement;
  private readonly previous = document.activeElement;
  private readonly selector = 'button:not(:disabled), input:not(:disabled), textarea, select, a[href], [tabindex="0"]';

  constructor() {
    afterNextRender(() => {
      const target = this.element.querySelector<HTMLElement>('[autofocus]')
        ?? this.element.querySelector<HTMLElement>(this.selector);
      target?.focus();
    });
  }

  trap(event: Event): void {
    if (!(event instanceof KeyboardEvent)) return;
    const items = Array.from(this.element.querySelectorAll<HTMLElement>(this.selector));
    const first = items[0];
    const last = items[items.length - 1];
    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault();
      last?.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first?.focus();
    }
  }

  ngOnDestroy(): void {
    if (this.previous instanceof HTMLElement) this.previous.focus();
  }
}
