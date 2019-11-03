// Dùng đến đâu khai báo import đến đó
// ở đây chỉ có 2 phương thức là component và input
import { Component, Input} from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html'
})
export class FooterComponent {
// Một khung sạch nhất

// Khai báo biến hứng kết quả từ component cho gọi tới
@Input() tongSoTien: number;
}
