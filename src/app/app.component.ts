import {Component} from '@angular/core';
import {productType} from "./types/product.type";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public showPresent: boolean = true;
  public ourPhone = '+375 (29) 368-98-68';
  public instagramHref = '#';

  public advantages = [
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

  public products: productType[] = [
    {
      image: 'macaroon1.png',
      title: 'Макарун с малиной',
      amount: 1,
      price: 1.70.toFixed(2).replace('.', ',')
    },
    {
      image: 'macaroon2.png',
      title: 'Макарун с манго',
      amount: 1,
      price: 1.70.toFixed(2).replace('.', ',')
    },
    {
      image: 'macaroon3.png',
      title: 'Пирог с ванилью',
      amount: 1,
      price: 1.70.toFixed(2).replace('.', ',')
    },
    {
      image: 'macaroon4.png',
      title: 'Пирог с фисташками',
      amount: 1,
      price: 1.70.toFixed(2).replace('.', ',')
    },
  ];

  public formValues = {
    choice: '',
    name: '',
    phone: ''
  }

  public scrollTo(target: HTMLElement): void {
    target.scrollIntoView({behavior: "smooth"});
  }

  public addToCart(product: productType, target: HTMLElement): void {
    this.scrollTo(target);
    this.formValues.choice = product.title.toUpperCase();
  }

  public toggleMenuClass(menuElement: HTMLElement): void {
    menuElement.classList.toggle('menu_open');
  }
}
