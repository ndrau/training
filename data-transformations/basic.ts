/**
 * Task 1: Filtering Data from an API Response
 * Scenario: You are working on a real estate application, and you have
 * fetched a list of rental properties from an API. The API returns the
 * data in an array, but you need to filter out properties based on
 * certain criteria. Specifically, you only want to keep properties that
 * have a rent below 1,000 and have at least 2 bedrooms.
 *
 * Data Example:
 */

const properties = [
  { id: 1, title: 'Studio Apartment', rent: 900, bedrooms: 1 },
  { id: 2, title: 'Two Bedroom Flat', rent: 1200, bedrooms: 2 },
  { id: 3, title: 'Three Bedroom House', rent: 950, bedrooms: 3 },
  { id: 4, title: 'Luxury Penthouse', rent: 2000, bedrooms: 4 },
];

/**
 * Task: Filter the array to get only the properties with rent below
 * 1,000 and with at least 2 bedrooms. Return the resulting array of
 * objects.
 */

// Solution:

type Property = {
  id: number;
  title: string;
  rent: number;
  bedrooms: number;
};

const typedProperties: Property[] = properties;

const realEstateFilter = (property: Property) => {
  if (property.rent < 1000 && property.bedrooms >= 2) {
    return property;
  }
};

const filteredProperties = typedProperties.filter(realEstateFilter);
console.log(filteredProperties);
