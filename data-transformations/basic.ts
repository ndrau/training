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

const oldRealEstateFilter = (property: Property) => {
  if (property.rent < 1000 && property.bedrooms >= 2) {
    return property;
  }
};

// use destructuring instead of property access
const middleRealEstateFilter = (property: Property) => {
  const { rent, bedrooms } = property;
  return rent < 1000 && bedrooms >= 2;
};

const realEstateFilter = ({ rent, bedrooms }: Property) =>
  rent < 1000 && bedrooms >= 2;

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

const oldMappingFunction = (item: [string, number]) => {
  const [name, quantity] = item;
  const inventoryItem: InventoryItem = {
    name,
    quantity,
    isLowStock: isLowStock(quantity),
  };
  return inventoryItem;
};

type NameAndQuantity = [string, number];

const mappingFunction = ([name, quantity]: NameAndQuantity) =>
  ({
    name,
    quantity,
    isLowStock: isLowStock(quantity),
  } as InventoryItem);

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

const ordersMappingFunction = (order: Order, index: number) => {
  const { id: orderId } = order;

  const filteredShipping = shipping.filter(
    ({ id: shippingItemId }) => shippingItemId === orderId,
  );

  const [shippingDetail] = filteredShipping;

  return {
    ...order,
    ...shippingDetail,
  };
};

const solutionArray = orders.map(ordersMappingFunction);

console.log(solutionArray);

console.log('---');

console.log('Task 4:');

/**
 * Task 4: Aggregating Financial Data
 *
 * Scenario: You are working on a financial app that tracks monthly expenses.
 * You have an array of expense categories and their respective amounts.
 * You need to calculate the total expenses and generate a list of categories
 * where more than 500 is spent.
 *
 * Data Example:
 */

const expenses = [
  { category: 'Rent', amount: 1200 },
  { category: 'Groceries', amount: 300 },
  { category: 'Entertainment', amount: 200 },
  { category: 'Utilities', amount: 150 },
  { category: 'Transportation', amount: 600 },
];

/**
 * Task:
 * Calculate the total amount spent using reduce.
 * Generate an array of categories where the amount spent is greater
 * than 500 using filter and map.
 */

type Expense = {
  category: string;
  amount: number;
};

const typedExpenses: Expense[] = expenses;

const initialValue = 0;

const totalAmountSpent = expenses.reduce(
  (previousValue, { amount: currentAmount }) => previousValue + currentAmount,
  initialValue,
);

const spentMoreThan500CategoryArray = expenses
  .filter(({ amount }: Expense) => amount > 500)
  .map(({ category }: Expense) => category);

console.log(spentMoreThan500CategoryArray);

console.log('---');

console.log('Task 5:');
/**
 * Task 5: Working with Nested Objects
 *
 * Scenario: You are building a tool that manages user profiles, which include details
 * like their contact information and preferences. You’ve been given an array of users,
 * but you need to extract only the contact information (email and phone) and return it
 * as a new array.
 *
 * Example Data:
 */

const users = [
  {
    id: 1,
    name: 'Alice',
    contact: { email: 'alice@example.com', phone: '555-1234' },
    preferences: { theme: 'dark', language: 'en' },
  },
  {
    id: 2,
    name: 'Bob',
    contact: { email: 'bob@example.com', phone: '555-5678' },
    preferences: { theme: 'light', language: 'fr' },
  },
];

/**
 * Task: Using array methods and object destructuring, extract the email and phone from
 * each user into a new array of objects in this format:
 * [
 *  { email: "alice@example.com", phone: "555-1234" },
 *  { email: "bob@example.com", phone: "555-5678" }
 * ]
 */

type Contact = {
  email: string;
  phone: string;
};

type Preferences = {
  theme: string;
  language: string;
};

type User = {
  id: number;
  name: string;
  contact: Contact;
  preferences: Preferences;
};

type Users = User[];

const typedUsers: Users = users;

const solutionContacts = typedUsers.map(({ contact }: User) => contact);

console.log(solutionContacts);

console.log('---');

console.log('Task 6:');

/**
 * Task 6: Handling Optional Data and Defaults
 *
 * Scenario: You’re working on a booking system where users can book rooms at a hotel.
 * The system receives booking requests, but sometimes the information about the room
 * type or the number of nights is missing. If missing, the room type should default to
 * "standard," and the number of nights should default to 1.
 *
 * Example Data:
 */

const bookings = [
  { guest: 'Alice', roomType: 'suite', nights: 3 },
  { guest: 'Bob' }, // missing roomType and nights
  { guest: 'Charlie', nights: 2 }, // missing roomType
];

/**
 * Task: Use the rest/spread operator and destructuring to fill in the missing fields
 * with defaults. Return a new array with the complete data.
 */

type UnfinishedBooking = {
  guest: string;
  roomType?: string;
  nights?: number;
};

type FullBooking = {
  guest: string;
  roomType: string;
  nights: number;
};

const oldFullBookings = bookings.map((booking: UnfinishedBooking) => {
  const fullBooking = booking;
  if (fullBooking.roomType === undefined) {
    fullBooking.roomType = 'standard';
  }
  if (fullBooking.nights === undefined) {
    fullBooking.nights = 1;
  }
  return fullBooking;
});

const fullBookings = bookings.map(
  ({ guest, roomType = 'standard', nights = 1 }: UnfinishedBooking) => {
    return { guest, roomType, nights } as FullBooking;
  },
);

console.log(oldFullBookings);

console.log('---');

console.log('Task 7:');

/**
 * Task 7: Summarizing Orders with Rest Parameters

 * Scenario: You’re writing a function to handle multiple customer orders.
 * The function will receive an unknown number of arguments, each representing an order total.
 * You need to calculate the sum of all orders, but you also want to return an object that
 * contains the total number of orders and the total revenue.
 *
 * Example Function Call:
 * calculateOrders(25, 50, 100, 75);
 *
 * Task: Write a function that uses the rest operator to accept any number of arguments.
 * The function should return an object that looks like this:
 *
 * { totalOrders: 4, totalRevenue: 250 }
 */

const calculateOrders = (...orders: number[]) => {
  const totalOrders = orders.length;

  const totalRevenue = orders.reduce((totalRevenue, currentOrderValue) => {
    return totalRevenue + currentOrderValue;
  }, 0);

  return {
    totalOrders,
    totalRevenue,
  };
};

console.log(calculateOrders(25, 50, 100, 75));
