export enum DiscountStatus {
  Percent_10 = 'Percent_10',
  Percent_30 = 'Percent_20',
  Percent_50 = 'Percent_50',
  Percent_80 = 'Percent_80',
  none = 'none',
}

export class Product {
  id: string
  title: string
  description: string
  discount: DiscountStatus
}
