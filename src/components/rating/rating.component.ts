import { Component, ElementRef, ViewChild, viewChild } from '@angular/core';

@Component({
  selector: 'app-rating',
  standalone: true,
  imports: [],
  templateUrl: './rating.component.html',
  styleUrl: './rating.component.scss'
})
export class RatingComponent {

  show = false;

  @ViewChild("popup") popup!: ElementRef<HTMLDivElement>;
  @ViewChild("btn") btn!: ElementRef<HTMLButtonElement>;



  open() {
    this.show = true;

    const pos = JSON.parse(JSON.stringify(this.btn.nativeElement.getBoundingClientRect()));

    this.popup.nativeElement.style.top = `${pos.y - 20}px`;

    console.log(this.btn.nativeElement.getBoundingClientRect())
  }

}
