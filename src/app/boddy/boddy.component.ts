import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
// Cùng thư mục
// import {Product} from '../boddy/Product.model';

// Ngoài thư mục
import { Product } from '../Products.model';
// import { ConsoleReporter } from '../jasmine';


@Component({
  selector: 'app-boddy',
  templateUrl: './boddy.component.html'
})
export class BoddyComponent implements OnInit {
  @Input() product: Product;
  // Đẩy dữ liệu ra thằng cha
  // tslint:disable-next-line: no-output-on-prefix
  @Output() onRemoveProduct = new EventEmitter();

  @Output() suKienThayDoi = new EventEmitter();

  // removeProduct(producID: number) {
  //   this.onRemoveProduct.emit(producID);
  // }

  remuvePrd(id: string, model: string) {
    // const index = this.product.findIndex(product => product.id);
    // if (index !== -1) {
    //   this.product.splice(index, 1);
    // }
    // alert("Đã xóa sản phẩm " + model);
    this.onRemoveProduct.emit(id);
  }
  onKeydown(event) {
    // Viết ra console trên browse
    // console.log(event);
    // console.log('Alo');
    // alert('Anh đã bấm phím Enter');

    console.log(event.value);
  }

  changQuantity(inputElement: HTMLInputElement, productID: number) {
    // Chuyển giá trị của input text ra ngoài component chính để xử lý
    // Kiểu này chỉ đẩy được 1 giá trí
    // this.suKienThayDoi.emit(inputElement.value);

    // Cần chuyển qua là số lượng mã sản phẩm
    this.suKienThayDoi.emit({
      maSanPham: productID,
      soLuong: inputElement.value
    });
  }
  // Mang sang ts cha để đẩy vào

  // prd: Product[] = [
  //   {
  //     id: 1,
  //     model: 'Intel',
  //     price: 123456789.08,
  //     quantity: 12,
  //     descript: 'Đâu là hãng sản xuất chip lớn nhất thế giới',
  //     img: 'https://i-vnexpress.vnecdn.net/2019/11/01/20443528-7636673-image-m-7-157-6204-8197-1572582866.jpg'
  //   },
  //   {
  //     id: 2,
  //     model: 'AMD',
  //     price: 987654321.98,
  //     quantity: 14,
  //     descript: 'Đâu là hãng sản xuất chip lớn nhất thế giới',
  //     img: 'https://i-thethao.vnecdn.net/2019/11/01/a139751549939467-1572588435-7898-1572589618_140x84.jpg'
  //   }

  // ]

  // Khai báo đối tượng

  // product1: Product = {
  //   id: 1,
  //   model: 'Intel',
  //   price: 12000000,
  //   quantity: 22,
  //   descript: 'Đâu là hãng sản xuất chip lớn nhất thế giới',
  //   img: 'data:image/png;base64,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'
  // };

  // product2: Product = {
  //   id: 1,
  //   model: 'AMD',
  //   price: 140000,
  //   quantity: 33,
  //   descript: 'Đây là hãng sản xuất chíp lớn thứ 2',
  //   img: 'data:image/jpeg;base64,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'
  // };

  // products: Products = {
  //   id: 1,
  //   model: 'Ibm',
  //   price: 120
  // };

  constructor() {}

  ngOnInit() {
    console.log('Chạy cái này nhé');
  }

  // Chuyển sang thằng cha

}
