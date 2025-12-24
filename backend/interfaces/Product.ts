export interface Product {
  readonly id: string;
  title: string;
  date: string | Date;
  description: string;
  price: number;
  brand: string;
}