import * as restaurantApi from './api/restaurant.api.model';
import * as restaurantVm from './restaurant.vm';
import { mapToCollection } from 'common/mappers';
import { emptyRestaurantInfo } from './restaurant.vm';

export const mapDatefromApiToModel = (date: string): string => {
  const dateToDateFormat = new Date(date);
  const day = dateToDateFormat.getDate();
  const year = dateToDateFormat.getUTCFullYear();
  const month = dateToDateFormat.toLocaleString('es-ES', { month: 'long' });

  return `Actualizada el ${day} de ${month} de ${year}`;
};

const mapListFromRationTypeApiToRationTypeVm = (
  rationType: restaurantApi.RationType[]
): restaurantVm.RationType[] =>
  mapToCollection(rationType, mapFromRationTypeApiToRationTypeVm);

const mapFromRationTypeApiToRationTypeVm = (
  rationType: restaurantApi.RationType
): restaurantVm.RationType => ({
  unit: rationType.unit,
  price: rationType.price,
});

const mapFromPriceByRationApiToPriceByRationVm = (
  priceByRation: restaurantApi.PriceByRation
): restaurantVm.PriceByRation => ({
  rationName: priceByRation.rationName,
  rationsTypes: mapListFromRationTypeApiToRationTypeVm(
    priceByRation.rationsTypes
  ),
});

const mapListFromItemsApiToItemsVm = (
  items: restaurantApi.Item[]
): restaurantVm.Item[] => mapToCollection(items, mapFromItemsApiToItemsVm);

export const mapFromItemsApiToItemsVm = (
  item: restaurantApi.Item
): restaurantVm.Item => ({
  name: item.name,
  description: item.description ? item.description : null,
  price: item.price ? item.price : null,
  priceByRation: item.priceByRation
    ? mapFromPriceByRationApiToPriceByRationVm(item.priceByRation)
    : null,
  unit: item.unit ? item.unit : null,
  allergenIconsUrl: item.allergenCollection
    ? mapAllergenCollectionToAllergenIconsUrl(item.allergenCollection)
    : null,
});

const mapAllergenCollectionToAllergenIconsUrl = (
  allergenCollection: restaurantApi.AllergenEnum[]
): string[] =>
  allergenCollection.length > 0
    ? allergenCollection.map(AllergenToimageUrl)
    : [];

export const AllergenToimageUrl = (allergen) => {
  return `/allergen-icons/webp/${allergen.replace(/\s/g, '')}.webp`;
};

const mapListFromCategoryEntryApitoCategoryEntryVm = (
  category: restaurantApi.CategoryEntry[]
): restaurantVm.CategoryEntry[] =>
  mapToCollection(category, mapFromCategoryEntryApitoCategoryEntryVm);

const mapFromCategoryEntryApitoCategoryEntryVm = (
  category: restaurantApi.CategoryEntry
): restaurantVm.CategoryEntry => ({
  name: category.name,
  items: mapListFromItemsApiToItemsVm(category.items),
});

export const mapFromRestaurantApiToRestaurantVm = (
  restaurantApi: restaurantApi.RestaurantApi
): restaurantVm.RestaurantInfo => {
  if (restaurantApi !== undefined && restaurantApi !== null) {
    return {
      id: restaurantApi.id,
      name: restaurantApi.name,
      urlName: restaurantApi.urlName,
      phone: restaurantApi.phone,
      address: restaurantApi.address,
      locationUrl: restaurantApi.locationUrl,
      menuDate: mapDatefromApiToModel(restaurantApi.menuDate),
      communitySourceUrl: restaurantApi.communitySourceUrl,
      official: restaurantApi.official,
      description: restaurantApi.description,
      theme: restaurantApi.theme,
      menu: mapListFromCategoryEntryApitoCategoryEntryVm(restaurantApi.menu),
    };
  } else return emptyRestaurantInfo();
};
