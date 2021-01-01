import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class CartService {
  items = [];

  addTocart(product) {
    this.items.push(product);
  }

  getItem() {
    return this.items;
  }

  clearMyCart() {
    this.items = [];
    return this.items;
  }

  constructor() {}
}
