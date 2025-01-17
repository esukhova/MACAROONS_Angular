import { Injectable } from '@angular/core';
import {ProductType} from "../types/product.type";

@Injectable()
export class ProductService {

  constructor() { }

  getProducts(): ProductType[] {
    return [
      {
        image: 'macaroon1.png',
        title: 'Макарун с малиной',
        amount: 1,
        price: 1.70
      },
      {
        image: 'macaroon2.png',
        title: 'Макарун с манго',
        amount: 1,
        price: 1.70
      },
      {
        image: 'macaroon3.png',
        title: 'Пирог с ванилью',
        amount: 1,
        price: 1.70
      },
      {
        image: 'macaroon4.png',
        title: 'Пирог с фисташками',
        amount: 1,
        price: 1.70
      },
    ];
  }
}
