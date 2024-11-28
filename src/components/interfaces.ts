export enum InputTypeEnum {
  text = 'text',
  password = 'password',
  email = 'email',
  number = 'number',
}

export enum ProductCurrencyEnum {
  usd = 'USD',
  uah = 'UAH',
}

export interface IProduct {
  description: string;
  id: number;
  image: string;
  name: string;
  price: number;
}
