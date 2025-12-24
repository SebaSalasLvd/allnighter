export interface User {
  readonly id: string;
  username: string;
  password: string;
  email: string;
  vendor: boolean;
  phone: number;
}