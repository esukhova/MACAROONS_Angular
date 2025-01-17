import {Component, OnInit} from '@angular/core';
import {ProductService} from "./services/product.service";
import {CartService} from "./services/cart.service";
import {ProductType} from "./types/product.type";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private productService: ProductService,
              public cartService: CartService) {
  }
  showCart: boolean = true;
  ourPhone: string = '375293689868';
  instagramHref = 'https://www.google.com/';

  formValues = {
    choice: '',
    name: '',
    phone: ''
  }

  advantages = [
    {
      title: 'Лучшие продукты',
      text: 'Мы честно готовим макаруны только из натуральных и качественных продуктов. Мы не используем консерванты, ароматизаторы и красители.'
    },
    {
      title: 'Много вкусов',
      text: 'Наша задача – предоставить вам широкое разнобразие вкусов. Вы удивитесь, но у нас более 70 вкусов пироженок.'
    },
    {
      title: 'Бисквитное тесто',
      text: 'Все пирожные готовятся на бисквитном тесте с качественным сливочным маслом 82,5%. В составе нет маргарина и дрожжей!'
    },
    {
      title: 'Честный продукт',
      text: 'Вкус, качество и безопасность наших пирогов подтверждена декларацией о соответствии, которую мы получили 22.06.2016 г.'
    }
  ];

  products: ProductType[] = [];

  ngOnInit() {
 this.products = this.productService.getProducts();
  }

  scrollTo(target: HTMLElement): void {
    target.scrollIntoView({behavior: "smooth"});
  }

  addToCart(product: ProductType, target: HTMLElement): void {
    this.scrollTo(target);
    this.formValues.choice = this.formValues.choice? this.formValues.choice + ', ' + product.title.toUpperCase() : product.title.toUpperCase();
    this.cartService.count++;
    this.cartService.sum = this.cartService.sum + product.price;
    alert(product.title.toUpperCase() + ' добавлен в корзину!');
  }

  toggleMenuClass(menuElement: HTMLElement): void {
    menuElement.classList.toggle('menu_open');
  }

  protected readonly CartService = CartService;
}
