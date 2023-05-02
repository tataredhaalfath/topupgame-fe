export interface CategoryTypes {
  _id: string;
  name: string;
  __v: number;
}

export interface GameItemTypes {
  _id: string;
  name: string;
  status: string;
  thumbnail: string;
  category: CategoryTypes;
}

export interface BankTypes {
  _id: string;
  bankName: string;
  name: string;
  noRekening: string;
  __v: number;
}
export interface PaymentTypes {
  banks: BankTypes[];
  status: string;
  type: string;
  __v: number;
  _id: string;
}

export interface NominalTypes {
  _id: string;
  coinName: string;
  coinQuantity: number;
  price: number;
  __v: number;
}

