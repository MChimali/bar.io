import {
  getMenuCategories,
  getMenuCategoryByProductId,
  getProductById,
  getProductPortionTypeById,
  getProductPortionTypes as getProductPortionTypes,
  ProductPortionType,
  saveProduct,
} from 'core/api';
import { routes } from 'core/router';
import React from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { EditProductComponent } from './edit-product.component';
import * as classes from './edit-product.styles';
import { mapMenuCategoryListFromApiToViewModel } from './menu-category.mapper';
import { MenuCategory } from './menu-category.vm';
import { mapProductPortionTypeListFromApiToViewModels } from './product-portion.mapper';
import {
  createEmptyProductVm,
  mapProductFromApiToViewModel,
  mapProductFromViewToApiModel,
} from './product.mapper';
import { Product } from './product.vm';
import produce from 'immer';

interface Params {
  productId?: string;
}

export const EditProductContainer: React.FunctionComponent = () => {
  const { productId } = useParams<Params>();
  const [categories, setCategories] = React.useState<MenuCategory[]>([]);
  const [product, setProduct] = React.useState<Product>(createEmptyProductVm());
  const [portionTypes, setPortionTypes] = React.useState<ProductPortionType[]>([]);
  const history = useHistory();

  const onChangeName = (name: string) => setProduct({ ...product, name: name });
  const onChangeDescription = (description: string) =>
    setProduct({ ...product, description: description });
  const onChangePortionPrice = (id: string, price: number) => {
    setProduct({
      ...product,
      portions: produce(product.portions, (newPortionPrices) => {
        newPortionPrices.find((p) => p.id === id).price = +price;
      }),
    });
  };

  const onChangeCategory = (categoryId: string) => {
    setProduct({ ...product, categoryId });
  };

  const onChangePortionType = async (portionTypeId: string) => {
    const productPortionType = await getProductPortionTypeById(portionTypeId);
    setProduct({
      ...product,
      portionTypeId,
      portions: productPortionType.portions.map((p) => ({ ...p, price: 0.0 })),
    });
  };

  const onSave = (p: Product) => {
    saveProduct(mapProductFromViewToApiModel({ ...p, visible: false }), p.categoryId).then(() =>
      history.push(routes.productList),
    );
  };

  const onCancel = () => history.goBack();

  const getProductInfo = async () => {
    if (!!productId) {
      const product = await getProductById(productId);
      if (!!product) {
        const categoryId = (await getMenuCategoryByProductId(product.id))?.id;
        const productPortionType = await getProductPortionTypeById(product.portionTypeId);
        const productViewModel = mapProductFromApiToViewModel(product);

        productViewModel.portions.map(
          (p) => (p.name = productPortionType.portions?.find((s) => s.id === p.id)?.name ?? ''),
        );

        setProduct({
          ...productViewModel,
          categoryId: categoryId,
        });
      }
    }

    const menuCategories = await getMenuCategories();
    setCategories(mapMenuCategoryListFromApiToViewModel(menuCategories));

    const portionTypes = await getProductPortionTypes();
    setPortionTypes(portionTypes);
  };

  React.useEffect(() => {
    async function loadProductInfo() {
      await getProductInfo();
    }
    loadProductInfo();
  }, []);

  return (
    <div className={classes.container}>
      <EditProductComponent
        categories={categories}
        portionTypes={mapProductPortionTypeListFromApiToViewModels(portionTypes)}
        product={product}
        onSave={onSave}
        onCancel={onCancel}
        onChangeCategory={onChangeCategory}
        onChangePortionType={onChangePortionType}
        onChangeName={onChangeName}
        onChangeDescription={onChangeDescription}
        onChangePortionPrice={onChangePortionPrice}
      />
    </div>
  );
};
