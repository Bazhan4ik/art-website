import { Component } from '@angular/core';
import { title } from 'node:process';

@Component({
  selector: 'app-sketchbook',
  standalone: true,
  imports: [],
  templateUrl: './sketchbook.component.html',
  styleUrl: './sketchbook.component.scss'
})
export class SketchbookComponent {

  elements = [
    {
      image: "7",
      title: "Valentine's Aftermath",
      description: "Valentine broke many hearts",
      rating: "happy",
      date: "2/15/2024"
    },
    {
      image: "9",
      title: "Look Out!",
      description: "A monster is about to eat his friend",
      rating: "happy",
      date: "2/22/2024"
    },
    {
      image: "8",
      title: "Show Off",
      description: "He's a rapper with a cool car and a mansion.",
      rating: "skull",
      date: "2/29/2024"
    },
    {
      image: "4",
      title: "Give Praise",
      description: "An angel answers your prayers.",
      rating: "happy",
      date: "3/28/2024"
    },
    {
      image: "6",
      title: "Making choice",
      description: "A hard choice stands before them.",
      rating: "happy",
      date: "4/04/2024"
    },
    {
      image: "5",
      title: "Personification of a Phone",
      description: "Phone bad.",
      rating: "skull",
      date: "4/11/2024"
    },
    {
      image: "3",
      title: "Robot Making a Friend",
      description: "Humans can't give anything to robots, we are very different.",
      rating: "skull",
      date: "4/24/2024"
    },
    {
      image: "1",
      title: "Facial Features",
      description: "Solid drawing technique in this one.",
      rating: "happy",
      date: "4/11/2024"
    },
    {
      image: "2",
      title: "A Controversy",
      description: "Freemasons and Globalists are out for me :(",
      rating: "happy",
      date: "5/23/2024"
    }
  ]
}
