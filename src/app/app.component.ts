import { Component } from '@angular/core';
import { faker } from '@faker-js/faker';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  RandomText: string = faker.lorem.paragraph();
  enteredText: string = '';
  onInput(value: string) {
    this.enteredText = value;
  }

  getText(letter: string, enteredText: string) {
    if (!enteredText) {
      return 'pending';
    }
    return letter === enteredText ? 'success' : 'incorrect';
  }
}
