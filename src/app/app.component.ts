import { Component, ViewChild, OnInit, ElementRef } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit  {
  inputRef: ElementRef;
  showInput: boolean;
  @ViewChild('myName') set inputContent(inputContent: ElementRef) {
    if (inputContent) {
      this.inputRef = inputContent;
      this.inputRef.nativeElement.value = 'Input created with ViewChild setter with *ngIf';
    }
  }


  ngOnInit() {
    setTimeout(() => {
      this.showInput = true;
    }, 500);
  }

}

// inspiration f
// https://stackoverflow.com/questions/39366981/viewchild-in-ngif