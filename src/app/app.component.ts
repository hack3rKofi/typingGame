import { Component } from '@angular/core';
import { faker } from '@faker-js/faker';
import { max } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'typingGame';
  randomSentence = faker.lorem.paragraph(4);
  enteredText = '';
  onKey(value: string) {
    this.enteredText = value;
  }

  compare(randomCharacter: string, enteredText: string) {
    if (!enteredText) {
      return 'pending';
    }
    return enteredText === randomCharacter ? 'correct' : 'incorrect';
  }

  refresh() {
    this.randomSentence = faker.lorem.paragraph(4);
    this.enteredText = '';
  }
}
