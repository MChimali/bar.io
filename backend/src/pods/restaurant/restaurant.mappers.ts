import * as model from 'dals';
import * as apiModel from './restaurant.api-model';
import { mapToCollection } from 'common/mappers';
import { ObjectId } from 'mongodb';

// Esto nos devolería del tipo
// {
//   Raciones: ["media ración", "ración"]
//   Bocadillos: ['pitufo', 'barra']
// }
const createRationsUnits = (
  acc: Record<string, string[]>,
  item: apiModel.Item
) => {
  return {
    ...acc,
    [item.priceByRation.rationName]: [
      ...new Set([
        ...(acc[item.priceByRation.rationName] ?? []),
        ...item.priceByRation.rationsTypes.map(
          (rationType: apiModel.RationType) => rationType.unit
        ),
      ]),
    ],
  };
};

// pero esto no es lo que queremos como salida
// pasamos el objeto a un array de objetos { name: key, units: rations[key] }
// y nos devuelve
// [
//   {
//     name: "Raciones",
//     units: ["media ración", "ración"]
//   },
//   {
//     name: "Bocadillos",
//     units: ["pitufo", "barra"]
//   }
// ]

const createRationsUnitsList = (rations: Record<string, string[]>) =>
  Object.keys(rations).reduce((acc, key) => {
    return [...acc, { name: key, units: rations[key] }];
  }, []);

export const reduceCategoryEntryListToRationDefinitionList = (
  category: apiModel.CategoryEntry[]
): model.RationDefinition[] => {
  if (Array.isArray(category)) {
    const rations = category
      // Creo un array con los items de cada categoría
      .map((category: apiModel.CategoryEntry) => category.items)
      // Aplanar: Aplico un reduce y pongo todos los items uno detrás de otro en un mismo array
      .reduce(
        (acc: apiModel.Item[], item: apiModel.Item[]) => [...acc, ...item],
        []
      )
      // Filtro y me quedo solo con los objetos que contiene priceByRation
      .filter((item: apiModel.Item) => item.priceByRation)
      // Montamos un objeto con key como nombre de ración y value lista de units
      .reduce(createRationsUnits, {});

    return createRationsUnitsList(rations);
  } else return [];
};

const mapListFromRationTypeApiToRationTypeMode = (
  rationType: apiModel.RationType[]
): model.RationType[] =>
  mapToCollection(rationType, mapFromRationTypeApiToRationTypeMode);

const mapFromRationTypeApiToRationTypeMode = (
  rationType: apiModel.RationType
): model.RationType => ({
  unit: rationType.unit,
  price: rationType.price,
});

const mapFromPriceByRationToSubItemPrice = (
  priceByRation: apiModel.PriceByRation
): model.SubItemPrice => ({
  rationName: priceByRation.rationName,
  rationsTypes: mapListFromRationTypeApiToRationTypeMode(
    priceByRation.rationsTypes
  ),
});

const mapListFromItemApiToItemModel = (item: apiModel.Item[]): model.Item[] =>
  mapToCollection(item, mapFromItemApiToItemModel);

const mapFromItemApiToItemModel = (item: apiModel.Item): model.Item => ({
  name: item.name,
  description: item.description,
  price: item.price ? item.price : null,
  priceByRation: item.priceByRation
    ? mapFromPriceByRationToSubItemPrice(item.priceByRation)
    : null,
  unit: item.unit ? item.unit : null,
  allergenCollection: item.allergenCollection ? item.allergenCollection : null,
});

const mapListFromCategoryEntryToItemsByCategory = (
  category: apiModel.CategoryEntry[]
): model.ItemsByCategory[] =>
  mapToCollection(category, mapFromCategoryEntryToItemsByCategory);

const mapFromCategoryEntryToItemsByCategory = (
  category: apiModel.CategoryEntry
): model.ItemsByCategory => {
  return {
    categoryName: category.name,
    items: mapListFromItemApiToItemModel(category.items),
  };
};

export const mapRestaurantFromApiModelToModel = (
  restaurant: apiModel.RestaurantApiModel
): model.Restaurant => ({
  _id: new ObjectId(restaurant.id),
  name: restaurant.name,
  urlName: restaurant.urlName,
  phone: restaurant.phone,
  address: restaurant.address,
  locationUrl: restaurant.locationUrl,
  menuDate: restaurant.menuDate,
  communitySourceUrl: restaurant.communitySourceUrl,
  description: restaurant.description,
  theme: restaurant.theme,
  rationsDefinitions: reduceCategoryEntryListToRationDefinitionList(
    restaurant.menu
  ),
  menu: mapListFromCategoryEntryToItemsByCategory(restaurant.menu),
  official: restaurant.official,
});

// Mapper from Model to ApiModel
const mapListFromRationTypeApiToRationTypeModel = (
  rationType: model.RationType[]
): apiModel.RationType[] =>
  mapToCollection(rationType, mapFromRationTypeModelToRationTypeApiModel);

const mapFromRationTypeModelToRationTypeApiModel = (
  rationType: model.RationType
): apiModel.RationType => ({
  unit: rationType.unit,
  price: rationType.price,
});

const mapFromSubItemPriceToPriceByRation = (
  priceByRation: model.SubItemPrice
): apiModel.PriceByRation => ({
  rationName: priceByRation.rationName,
  rationsTypes: mapListFromRationTypeApiToRationTypeModel(
    priceByRation.rationsTypes
  ),
});

const mapListFromItemModelToItemApi = (item: model.Item[]): apiModel.Item[] =>
  mapToCollection(item, mapFromItemModelToItemModelApi);

const mapFromItemModelToItemModelApi = (item: model.Item): apiModel.Item => ({
  name: item.name,
  description: item.description,
  price: item.price ? item.price : null,
  priceByRation: item.priceByRation
    ? mapFromSubItemPriceToPriceByRation(item.priceByRation)
    : null,
  unit: item.unit ? item.unit : null,
  allergenCollection: item.allergenCollection ? item.allergenCollection : null,
});

const mapListFromItemsCategoryToCategoryEntry = (
  category: model.ItemsByCategory[]
): apiModel.CategoryEntry[] =>
  mapToCollection(category, mapFromItemsByCategoryToCategoryEntry);

const mapFromItemsByCategoryToCategoryEntry = (
  category: model.ItemsByCategory
): apiModel.CategoryEntry => {
  return {
    name: category.categoryName,
    items: mapListFromItemModelToItemApi(category.items),
  };
};

export const mapRestaurantListFromModelToApiModel = (
  restaurant: model.Restaurant[]
): apiModel.RestaurantApiModel[] =>
  mapToCollection(restaurant, mapRestaurantFromModelToApiModel);

export const mapRestaurantFromModelToApiModel = (
  restaurant: model.Restaurant
): apiModel.RestaurantApiModel => ({
  id: restaurant._id.toHexString(),
  name: restaurant.name,
  urlName: restaurant.urlName,
  phone: restaurant.phone,
  address: restaurant.address,
  locationUrl: restaurant.locationUrl,
  menuDate: restaurant.menuDate,
  communitySourceUrl: restaurant.communitySourceUrl,
  description: restaurant.description,
  theme: restaurant.theme,
  menu: mapListFromItemsCategoryToCategoryEntry(restaurant.menu),
  official: restaurant.official,
});
