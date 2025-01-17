import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ProductType} from "../types/product.type";
import {CartService} from "../services/cart.service";


@Component({
  selector: 'product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  @Input() product: ProductType;

  @Output() addToCartEvent: EventEmitter<string> = new EventEmitter<string>();

  constructor() {
    this.product = {
      image: '',
      title: '',
      amount: 1,
      price: 0
    }
  }

  ngOnInit(): void {
  }

  addProductToCart() {
    this.addToCartEvent.emit();
  }

}
