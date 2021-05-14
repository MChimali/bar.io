import { gql } from 'graphql-request';
import * as apiClient from '../client';
import { MenuCategory } from './menu-categories.model';
import { Product } from './product.model';

export const getMenuCategories = async (
  withProducts: boolean = false,
): Promise<MenuCategory[]> =>
  (await apiClient.request<MenuCategory[]>(
    withProducts
      ? gql`
          query {
            getMenuCategories {
              id
              name
              products {
                id
                name
                visible
                description
                portionTypeId
                portions {
                  id
                  price
                }
              }
            }
          }
        `
      : gql`
          query {
            getMenuCategories {
              id
              name
            }
          }
        `,
  )) ?? [];

export const getMenuCategoryById = async (id: string): Promise<MenuCategory> =>
  await apiClient.request<MenuCategory>(
    gql`
      query($id: ID!) {
        getMenuCategoryById(id: $id) {
          id
          name
          products {
            id
            name
            visible
            description
            portionTypeId
            portions {
              id
              price
            }
          }
        }
      }
    `,
    { id: id },
  );

export const getProductById = async (id: string): Promise<Product> =>
  await apiClient.request<Product>(
    gql`
      query($id: ID!) {
        getProductById(id: $id) {
          id
          name
          portions {
            id
            price
          }
          portionTypeId
          description
          visible
        }
      }
    `,
    { id },
  );

export const getMenuCategoryByProductId = async (id: string): Promise<MenuCategory> =>
  await apiClient.request<any>(
    gql`
      query($id: ID!) {
        getMenuCategoryByProductId(id: $id) {
          id
          name
          products {
            id
            name
            visible
            description
            portionTypeId
            portions {
              id
              price
            }
          }
        }
      }
    `,
    { id: id },
  );

export const saveMenuCategories = async (menuCategories: MenuCategory[]): Promise<boolean> =>
  await apiClient.request<boolean>(
    gql`
      mutation($menuCategories: [MenuCategoryInput]!) {
        saveMenuCategories(menuCategories: $menuCategories)
      }
    `,
    {
      menuCategories,
    },
  );

export const saveMenuCategory = async (name: string, id?: string): Promise<boolean> =>
  await apiClient.request<boolean>(
    gql`
      mutation($menuCategory: MenuCategoryInput!) {
        saveMenuCategory(menuCategory: $menuCategory)
      }
    `,
    { menuCategory: { id, name } },
  );

export const deleteMenuCategory = async (id: string): Promise<boolean> =>
  await apiClient.request<boolean>(
    gql`
      mutation($id: ID!) {
        deleteMenuCategory(id: $id)
      }
    `,
    { id: id },
  );

export const saveProduct = async (product: Product, categoryId?: string): Promise<boolean> =>
  await apiClient.request<boolean>(
    gql`
      mutation($product: ProductInput!, $categoryId: ID) {
        saveProduct(product: $product, categoryId: $categoryId)
      }
    `,
    {
      product: product,
      categoryId: categoryId,
    },
  );

export const saveProducts = async (
  categoryId: string,
  products: Product[],
): Promise<boolean> =>
  await apiClient.request(
    gql`
      mutation($categoryId: ID!, $products: [ProductInput]!) {
        saveProducts(categoryId: $categoryId, products: $products)
      }
    `,
    {
      categoryId: categoryId,
      products: products,
    },
  );

export const deleteProduct = async (id: string): Promise<boolean> =>
  await apiClient.request<boolean>(
    gql`
      mutation($id: ID!) {
        deleteProduct(id: $id)
      }
    `,
    { id: id },
  );
