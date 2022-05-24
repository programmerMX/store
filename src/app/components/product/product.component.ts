import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { Product } from 'src/app/models/product.model';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  @Input() product: Product = {
    id: 0,
    title: '',
    price: '',
    category: '',
    description: '',
    image: '',
    addedCart: false,
    addedFavorites: false
  }

  constructor(
    private productService: ProductService
  ) { }

  ngOnInit(): void {
  }

  addToCart(product: Product){
    this.productService.handleShoopingCart(product)
  }

  toggleFavorites(product: Product){
    this.productService.handleFavorites(product)
  }

}
