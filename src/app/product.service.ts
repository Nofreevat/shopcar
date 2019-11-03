import { Injectable } from "@angular/core";
import { Product } from "./Products.model";

@Injectable({
  providedIn: "root"
})
export class ProductService {
  products: Product[] = [
    {
      id: 1,
      model: "Intel",
      price: 10000,
      quantity: 1,
      descript: "Đâu là hãng sản xuất chip lớn nhất thế giới",
      img:
        "https://i-vnexpress.vnecdn.net/2019/11/01/20443528-7636673-image-m-7-157-6204-8197-1572582866.jpg"
    },
    {
      id: 2,
      model: "AMD",
      price: 20000,
      quantity: 1,
      descript: "Đâu là hãng sản xuất chip lớn nhất thế giới",
      img:
        "https://i-thethao.vnecdn.net/2019/11/01/a139751549939467-1572588435-7898-1572589618_140x84.jpg"
    }
  ];

  removeProduct(id: number): boolean {
    const index = this.products.findIndex(product => product.id === id);
    const namePro = this.products[index].model;
    if (index !== -1) {
      this.products.splice(index, 1);
      return true;
    }
    return false;
    // alert('Đã xóa sản phẩm: ' + namePro );
  }

  findProductIndex(productId: number): number {
    const index = this.products.findIndex(product => product.id === productId);
    return index;
  }

  findProductName(productId: number): string {
   const index = this.products.findIndex(product => product.id === productId);
   const namePro = this.products[index].model;
   return namePro;
  }
}
