import { Component, OnInit } from '@angular/core';
import { IBrand } from '../shared/models/IBrand';
import { IType } from '../shared/models/IType';
import { IProduct } from '../shared/models/product';
import { ShopService } from './shop.service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss']
})
export class ShopComponent implements OnInit {
  products : IProduct[];
  brands : IBrand[];
  types : IType[];

  constructor(private shopService : ShopService) { }

  ngOnInit(): void {
    this.getProducts()
    this.getBrands();
    this.getTypes();
  }

  getProducts(){
    this.shopService.getProducts().subscribe({
      next: (v) => this.products = v.data,
      error: (e) => console.log(e)
      }
    )
  }

  getBrands() {
    this.shopService.getBrands().subscribe({
      next: (v) => this.brands = v,
      error: (e) => console.log(e)
      }
    )
  }

  getTypes() {
    this.shopService.getTypes().subscribe({
      next: (v) => this.types = v,
      error: (e) => console.log(e)
      }
    )
  }
}
