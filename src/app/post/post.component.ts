import {
  Component,
  Input,
  Output,
  EventEmitter,
  OnInit,
  OnChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
} from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
})
export class PostComponent
  implements
    OnInit,
    OnChanges,
    DoCheck,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked
{
  @Input('img') postImg = '';

  @Output() imgSelected = new EventEmitter<string>();

  constructor() {
    console.log('constructor() called', this.postImg);
  }

  ngOnInit(): void {
    console.log('ngOnInit() called', this.postImg);
  }

  ngOnChanges(): void {
    console.log('ngOnChanges() called');
  }

  ngDoCheck(): void {
    console.log('ngDoCheck() called');
  }

  ngAfterViewInit(): void {
    console.log('ngAfterViewInit() called');
  }

  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked() called');
  }

  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked() called');
  }

  ngAfterContentInit(): void {
    console.log('ngAfterContentInit() called');
  }

  selectImg(): void {
    this.imgSelected.emit(this.postImg);
  }
}
