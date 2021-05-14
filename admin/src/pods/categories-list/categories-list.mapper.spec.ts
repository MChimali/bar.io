import { MenuCategory } from 'core/api/menu-categories/menu-categories.model';
import { mapMenuCategorieListFromApiModelToListItem, mapProductListFromApiModelToListItem } from './categories-list.mapper';
import { ListItem } from 'common/components/sortable-list/list-item.vm';
import { Product } from 'core/api/menu-categories/product.model';

describe('Categories List mapper tests', () => {
  it('should map to the expected item list when passing valid menu categories', () => {
    // Arrange
    const menuCategories: MenuCategory[] = [
      { id: '1', name: 'Entrantes', products: [] },
      { id: '2', name: 'Primeros', products: [] },
      { id: '3', name: 'Segundos', products: [] },
      { id: '4', name: 'Postres', products: [] },
      { id: '5', name: 'Bebidas', products: [] },
    ];

    const expectedListItems: ListItem[] = [
      { id: '1', value: 'Entrantes' },
      { id: '2', value: 'Primeros' },
      { id: '3', value: 'Segundos' },
      { id: '4', value: 'Postres' },
      { id: '5', value: 'Bebidas' },
    ];

    // Act
    const result = mapMenuCategorieListFromApiModelToListItem(menuCategories);

    // Assert
    expect(result).toStrictEqual(expectedListItems);
  });
  it('should map to a an empty list of items when passing an undefined list of menu categories', () => {
    // Arrange
    const menuCategories: MenuCategory[] = undefined;

    const expectedListItems: ListItem[] = [];

    // Act
    const result = mapMenuCategorieListFromApiModelToListItem(menuCategories);

    // Assert
    expect(result).toStrictEqual(expectedListItems);
  });
  it('should map to a an empty list of items when passing an null list of menu categories', () => {
    // Arrange
    const menuCategories: MenuCategory[] = null;

    const expectedListItems: ListItem[] = [];

    // Act
    const result = mapMenuCategorieListFromApiModelToListItem(menuCategories);

    // Assert
    expect(result).toStrictEqual(expectedListItems);
  });
  it('should map to a an empty list of items when passing an empty list of menu categories', () => {
    // Arrange
    const menuCategories: MenuCategory[] = [];

    const expectedListItems: ListItem[] = [];

    // Act
    const result = mapMenuCategorieListFromApiModelToListItem(menuCategories);

    // Assert
    expect(result).toStrictEqual(expectedListItems);
  });
  it('should map to the expected item list when passing valid products', () => {
    // Arrange
    const products: Product[] = [
      {
        id: '1',
        name: 'Flamenquín',
        description: 'Con jamón y queso',
        visible: true,
        portionTypeId: '',
        portions: [],
      },
      {
        id: '2',
        name: 'Salmorejo',
        description: 'Malagueño',
        visible: false,
        portionTypeId: '',
        portions: [],
      },
      {
        id: '3',
        name: 'Tortilla de patata',
        description: 'Poco hecha',
        visible: true,
        portionTypeId: '',
        portions: [],
      },
    ];

    const expectedListItems: ListItem[] = [
      { id: '1', value: `Flamenquín`, visible: true },
      { id: '2', value: `Salmorejo`, visible: false },
      { id: '3', value: `Tortilla de patata`, visible: true },
    ];

    // Act
    const result = mapProductListFromApiModelToListItem(products);

    // Assert
    expect(result).toStrictEqual(expectedListItems);
  });
  it('should map to an empty item list when passing an undefined product list', () => {
    // Arrange
    const products: Product[] = undefined;
    const expectedListItems: ListItem[] = [];

    // Act
    const result = mapProductListFromApiModelToListItem(products);

    // Assert
    expect(result).toStrictEqual(expectedListItems);
  });
  it('should map to an empty item list when passing an null product list', () => {
    // Arrange
    const products: Product[] = null;
    const expectedListItems: ListItem[] = [];

    // Act
    const result = mapProductListFromApiModelToListItem(products);

    // Assert
    expect(result).toStrictEqual(expectedListItems);
  });
  it('should map to an empty item list when passing an empty product list', () => {
    // Arrange
    const products: Product[] = [];
    const expectedListItems: ListItem[] = [];

    // Act
    const result = mapProductListFromApiModelToListItem(products);

    // Assert
    expect(result).toStrictEqual(expectedListItems);
  });
});
