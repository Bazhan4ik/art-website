import { Component } from '@angular/core';
import { RatingComponent } from '../../components/rating/rating.component';
import { StatueComponent } from '@pages/statue/statue.component';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [RatingComponent, StatueComponent],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  rotated = false;
  
  
  rotate() {
    console.log("hello")
    this.rotated = true;

    setTimeout(() => {
      this.rotated = false;
    }, 9000);
  }
}
