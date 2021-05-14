export interface ProductPortionType {
  id?: string;
  name: string;
  portions?: ProductPortion[];
}

export interface ProductPortion {
  id: string;
  name: string;
}

export const createEmptyProductPortionType = (): ProductPortionType => ({
  id: '',
  name: '',
  portions: [],
});
