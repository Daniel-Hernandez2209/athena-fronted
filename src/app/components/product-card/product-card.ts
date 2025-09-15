@Component({
  selector: 'app-product-card',
  template: `
    <div class="col col_imagenes">
      <a [routerLink]="['/producto', product.slug]">
        <div class="card card_imagenes">
          <img [src]="product.images[0]"
               class="card-img-top card_img"
               [alt]="product.name"
               (error)="onImageError($event)">
          <div class="card-body card_body_imagenes">
            <h5 class="card-title">{{ product.name }}</h5>
            <div class="price-section">
              <span class="current-price">\${{ product.discountPrice | number }}</span>
              <span class="original-price" *ngIf="product.discountPrice < product.price">
                \${{ product.price | number }}
              </span>
            </div>
            <button class="btn btn-athena" (click)="addToCart(product)">
              AGREGAR AL CARRITO
            </button>
          </div>
        </div>
      </a>
    </div>
  `,
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent {
  @Input() product: Product;

  constructor(private cartService: CartService) {}

  addToCart(product: Product) {
    this.cartService.addToCart(product);
  }

  onImageError(event: any) {
    event.target.src = 'assets/images/no-image.jpg';
  }
}
