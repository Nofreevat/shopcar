import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent {
  // Java
  // totalItems = 0;

  // TypeScrit   ---> Thuộc tính của class

  // tslint:disable-next-line: no-inferrable-types
  // totalItems: number = 1;

  @Input() totalItems: number;

  // Khai báo Object

  // Bỏ đi không dùng vì rỗng
  // constructor() { }
  // ngOnInit() {

}

