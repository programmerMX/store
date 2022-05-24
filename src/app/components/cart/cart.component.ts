import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cartImg = '../../../assets/icons/icon_shopping_cart.svg'

  constructor(
    private productService: ProductService
  ) { }

  ngOnInit(): void {
    this.productService.$cartObservable.subscribe(shoopingCart=>{
      if(shoopingCart.length > 0) this.cartImg = '../../../assets/icons/icon_shopping_cart_notification.svg'
      else this.cartImg = '../../../assets/icons/icon_shopping_cart.svg'
    })
  }

}
