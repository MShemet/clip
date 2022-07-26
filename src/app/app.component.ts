import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Test';
  imgUrl = 'https://picsum.photos/id/237/300/300';

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
