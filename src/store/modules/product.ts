export const namespaced = true;

export interface ProductInfo {
  productNo: number;
  name: string;
}

interface State {
  pageName: string;
  product: ProductInfo;
}

export const state: State = {
  pageName: "상품 페이지",
  product: {
    productNo: 0,
    name: "상품 이름"
  }
};
