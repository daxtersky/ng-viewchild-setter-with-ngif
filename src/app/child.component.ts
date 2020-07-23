import { Component, Input } from '@angular/core';

@Component({
  selector: 'hello',
  template: `<div>Child component!</div>`,
})
export class ChildComponent  {
  message = 'Hello!!';
}
