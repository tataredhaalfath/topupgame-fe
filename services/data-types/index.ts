export interface CategoryTypes {
  _id: string;
  name: string;
  value: number;
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

export interface SignInTypes {
  email: string;
  password: string;
}

export interface UserTypes {
  id: string;
  username: string;
  email: string;
  name: string;
  avatar: string;
  phoneNumber: string;
}

export interface JWTPayloadTypes {
  player: UserTypes;
  iat: number;
}

export interface CheckOutTypes {
  voucher: string;
  nominal: string;
  payment: string;
  bank: string;
  name: string;
  accountUser: string;
}

export interface HistoryVoucherTopupTypes {
  coinName: string;
  coinQuantity: string;
  gameName: string;
  category: string;
  thumbnail: string;
  price: number;
}

export interface HistoryPaymentTypes {
  bankName: string;
  name: string;
  noRekening: string;
  type: string;
}
export interface HistoryTransactionTypes {
  _id: string;
  value: number;
  status: string;
  historyVoucherTopup: HistoryVoucherTopupTypes;
  category: CategoryTypes;
  accountUser: string;
  tax: number;
  name: string;
  historyPayment: HistoryPaymentTypes;
}
