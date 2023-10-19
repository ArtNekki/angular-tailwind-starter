import {environment} from './../environments/environment'
import {Component} from '@angular/core'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'angular-tailwind-starter'

  constructor() {
    console.log('hello', environment.apiUrl)
  }
}
