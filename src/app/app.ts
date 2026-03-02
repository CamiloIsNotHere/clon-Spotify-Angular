import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('clon-Spotify-Angular');

  constructor(private router: Router) {}

  navegar() {
    this.router.navigate(['/home']);
  }

  songs = [
    {
      title: 'Danza Kuduro',
      artist: 'Don Omar',
      image: './assets/images/DonOmar.png',
      song: './assets/mp3/Danza Kuduro_spotdown.org.mp3',
    },
  ];
}
