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
  id?: number;
  image: string;
  name: string;
  price: number;
  currency?: ProductCurrencyEnum
}

export enum ButtonTypeEnum {
  button = "button",
  reset = "reset",
  submit = "submit",
}

export enum SortingEnum {
  button = "button",
  reset = "reset",
  submit = "submit",
}