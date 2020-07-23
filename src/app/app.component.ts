import { Component, ViewChild, AfterViewInit, ChangeDetectorRef, ElementRef } from '@angular/core';
import { ChildComponent } from './child.component';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements AfterViewInit  {
  @ViewChild(ChildComponent) child: ChildComponent;
  message: string;

  inputR: ElementRef;
  @ViewChild('myName') set inputContent(inputContent: ElementRef) {
    if (inputContent) {
      this.inputR = inputContent;
      this.inputR.nativeElement.value = 'Input created with ViewChild setter';
      console.log(this.inputR);
    }
  }

  constructor(private changeDetectorRef: ChangeDetectorRef) { }

  ngAfterViewInit() {
    // this.message = this.hello && this.hello.message; // this.hello?.message
    // this.changeDetectorRef.detectChanges();
  }

}

// https://stackoverflow.com/questions/39366981/viewchild-in-ngif