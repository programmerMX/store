import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../models/product.model';
import { BehaviorSubject } from 'rxjs';
import { CartComponent } from '../components/cart/cart.component';

@Injectable({
  providedIn: 'root'
})

export class ProductService {

  //serviceProducts:Product[] = [];
  serviceShoopingCart: Product[] = [];
  serviceFavoriteProduct: Product[] = [];
  private cartObservable = new BehaviorSubject<Product[]>([]);

  $cartObservable = this.cartObservable.asObservable();

  constructor(
    private http: HttpClient
  ) { }

  API_URL = 'https://fakestoreapi.com/products'

  getAll(){
    return this.http.get<Product[]>(this.API_URL)
  }

  get(id: number){
    return this.http.get(`${this.API_URL}/${id}`)
  }

  handleShoopingCart(product: Product){

    if(product.addedCart){
      const productIndex = this.serviceShoopingCart.findIndex(item=> item.id === product.id)
      this.serviceShoopingCart.splice(productIndex, 1);
      product.addedCart = false;
    } else{
      product.addedCart = true;
      this.serviceShoopingCart.push(product)
    }

    this.cartObservable.next(this.serviceShoopingCart);

  }

  handleFavorites(product: Product){
    if(product.addedFavorites){
      const productIndex = this.serviceFavoriteProduct.findIndex(item=> item.id === product.id)
      this.serviceFavoriteProduct.splice(productIndex, 1);
      product.addedFavorites = false;
    } else{
      product.addedFavorites = true;
      this.serviceFavoriteProduct.push(product)
    }
  }

}
