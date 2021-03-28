

export interface Product {
  id: string;
  categoryId: string;
  name: string;
  description: string;
  portionTypeId: string;
  portions: Portion[];
  visible: boolean;
}

export interface Portion {
  id: string;
  price: number;
  name: string;
}