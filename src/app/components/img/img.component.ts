import { Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-img',
  templateUrl: './img.component.html',
  styleUrls: ['./img.component.css']
})
export class ImgComponent implements OnInit {

  @Input() productImg:string = '';

  defaultImg = '../../../assets/images/default-img-product.png'

  constructor() { }

  ngOnInit(): void {
  }

  loadError(){
    this.productImg = this.defaultImg
  }

}
