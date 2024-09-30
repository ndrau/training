console.log('Task 1:');
/**
 * Task 1: Filtering Data from an API Response
 *
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

console.log('---');

console.log('Task 2:');
/**
 * Task 2: Transforming Object Data for a Report
 *
 * Scenario: You’re building a report system for a grocery store. The
 * inventory is stored in an object where the keys are product names,
 * and the values are the quantities in stock. However, you need to
 * transform this data into an array format that includes the product
 * name, quantity, and whether the stock is low (less than 10 items).
 *
 * Data Example:
 */

const inventory = {
  apples: 25,
  bananas: 5,
  oranges: 8,
  pears: 30,
};

/**
 * Task: Convert the inventory object into an array of objects where
 * each object contains name, quantity, and isLowStock (boolean, true if
 * the quantity is below 10). Use object destructuring and object methods
 * like Object.entries or Object.keys.
 */

// Solution:

type InventoryItem = {
  name: string;
  quantity: number;
  isLowStock: boolean;
};

const intermediateInventoryArray = Object.entries(inventory);

const isLowStock = (quantity: number) => {
  return quantity < 10;
};

const mappingFunction = (item: [string, number]) => {
  const [name, quantity] = item;
  const inventoryItem: InventoryItem = {
    name,
    quantity,
    isLowStock: isLowStock(quantity),
  };
  return inventoryItem;
};

const inventoryArray = intermediateInventoryArray.map(mappingFunction);

console.log(inventoryArray);

console.log('---');

console.log('Task 3:');

/**
 * Task 3: Merging Data from Multiple Sources
 *
 * Scenario: You’re developing a dashboard for managing online orders.
 * You get two data sources: one with general order information and
 * another with shipping information. Both sources have a unique order ID,
 * and you need to merge them into a single array of order objects.
 *
 * Data Example:
 */

const orders = [
  { id: 1, customer: 'John Doe', total: 99.99 },
  { id: 2, customer: 'Jane Smith', total: 150.45 },
];

const shipping = [
  { id: 1, shippingAddress: '123 Main St', status: 'Shipped' },
  { id: 2, shippingAddress: '456 Elm St', status: 'Pending' },
];

/**
 * Task: Merge these two arrays into a single array where each element contains
 * both order information and shipping information. Make use of the spread operator
 * to achieve this.
 */

// Solution:

type Order = {
  id: number;
  customer: string;
  total: number;
};

const ordersMappingFunction = (orderDetail: Order, index: number) => {
  const { id: orderId } = orderDetail;

  const filteredShipping = shipping.filter(
    (shippingItem) => shippingItem.id === orderId,
  );

  const [shippingDetail] = filteredShipping;

  return {
    ...orderDetail,
    ...shippingDetail,
  };
};

const solutionArray = orders.map(ordersMappingFunction);
console.log(solutionArray);
