import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'first last name';
  imgUrl = 'https://picsum.photos/id/237/300/300';
  images = [
    'https://picsum.photos/id/237/300/300',
    'https://picsum.photos/id/237/300/300',
    'https://picsum.photos/id/237/300/300',
  ];
  currentDate = new Date();
  cost = 2000;
  temperature = 25.3;
  pizza = {
    toppings: ['pepperoni', 'bacon'],
    size: 'large',
  };
  blueClass = false;
  fontSize = 16;

  getName(): string {
    return this.title;
  }

  changeImage(e: KeyboardEvent) {
    this.imgUrl = (e.target as HTMLInputElement).value;
  }

  logImg(e: string) {
    console.log(e);
  }
}
