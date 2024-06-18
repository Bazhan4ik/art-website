import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AboutComponent } from '@pages/about/about.component';
import { SketchbookComponent } from "../pages/sketchbook/sketchbook.component";
import { StatueComponent } from '@pages/statue/statue.component';
import { ProjectsComponent } from '@pages/projects/projects.component';
import { PlanningComponent } from '@pages/planning/planning.component';
import { ContactComponent } from '@pages/contact/contact.component';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [
      RouterOutlet,
      AboutComponent,
      SketchbookComponent,
      StatueComponent,
      ProjectsComponent,
      PlanningComponent,
      ContactComponent
    ]
})
export class AppComponent {
  title = 'art';
}
