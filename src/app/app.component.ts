import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {ComposantJoueurComponent} from "./composant-joueur/composant-joueur.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ComposantJoueurComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'front-pingpong';
}
