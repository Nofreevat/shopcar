import { Component, OnInit} from '@angular/core';
import { Product } from './Products.model';
import { ProductService } from './product.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  // Khai báo biến từ componet cha để truyền cho các componet con
  totalItems1: number = 123;
  products: Product[];
  // tongSoTien1: number = 0;

  constructor(public productService: ProductService) {}


  ngOnInit() {
    this.products = this.productService.products;
  }
  // Version 3 là chuyển vào serivice

  // prd: Product[] = [
  //   {
  //     id: 1,
  //     model: 'Intel',
  //     price: 10000,
  //     quantity: 1,
  //     descript: 'Đâu là hãng sản xuất chip lớn nhất thế giới',
  //     img: 'https://i-vnexpress.vnecdn.net/2019/11/01/20443528-7636673-image-m-7-157-6204-8197-1572582866.jpg'
  //   },
  //   {
  //     id: 2,
  //     model: 'AMD',
  //     price: 20000,
  //     quantity: 1,
  //     descript: 'Đâu là hãng sản xuất chip lớn nhất thế giới',
  //     img: 'https://i-thethao.vnecdn.net/2019/11/01/a139751549939467-1572588435-7898-1572589618_140x84.jpg'
  //   }
  // ];


  // Chức năng này là chuyển từ con ra cha để xử lý

  // Version 3 copy sang service

  // removeProduct(id: number) {
  //   const index = this.prd.findIndex(product => product.id === id);
  //   const namePro = this.prd[index].model;
  //   if (index !== -1) {
  //     this.prd.splice(index, 1);
  //   }
  //   alert('Đã xóa sản phẩm: ' + namePro );
  // }

  // Gọi methord ở tầng service
  removeProduct(productID: number) {

    // Lấy thông tin sản phẩm định xóa, viết qua tầng service luôn
    const index = this.productService.findProductIndex(productID);


    // Thông báo là việc của componet, service làm việc thầm lặng, do
    // this.productService.removeProduct(productID);

    const model = this.productService.findProductName(productID);
    const isRemoved = this.productService.removeProduct(productID);
    if (isRemoved) {
      alert('Đã xóa thành công mã sản phẩm ' + model);
    }
  }

  // Nhận 2 giá trị
  // suKienThayDoi(soluong: number) {
  //   console.log('Số lượng hiện nay là: ' + soluong);
  // }

  // Nhận giá trị qua kiểu Obj
  // suKienThayDoi(obj) {
  //   console.log('Số lượng hiện nay là: ', obj);
  // }

  // Miểu tả tường minh thuộc tính của obj
  suKienThayDoi(obj: {
    maSanPham: number
    soLuong: number
  }) {

    console.log('Sản phẩm có mã ' +  obj.maSanPham + ' có số lượng là:' + obj.soLuong);


    // Cập nhật lại giá trị từ trên trình duyệt xuống code

    const product = this.products.find(prd => prd.id === obj.maSanPham);

    // Gán giá trị từ màn hình vào
    product.quantity = obj.soLuong;

    console.log(this.products);
  }

  getTotalItem() {
    let totalItems: number = 0;

    // tslint:disable-next-line: prefer-for-of
    for (let i = 0; i < this.products.length; i++) {
      totalItems += Number(this.products[i].quantity);
    }
    return totalItems;
  }

  // getTotalItemV2() {
  //   let totalItems: number = 0;

  //   // tslint:disable-next-line: prefer-for-of
  //   for (const p of this.prd) {
  //     totalItems += Number(this.prd.quantity);
  //   }

  getTinh_Tong_So_Tien() {
    let tongSoTien: number = 0;

    // tslint:disable-next-line: prefer-for-of
    for (let i = 0; i < this.products.length; i++) {
      tongSoTien += Number(this.products[i].quantity * this.products[i].price);
    }
    return tongSoTien;

  }

}

