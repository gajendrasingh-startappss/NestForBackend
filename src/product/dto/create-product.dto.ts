import { IsNotEmpty } from 'class-validator';
export class CreateProductDto {
  @IsNotEmpty()
  product_name?: string;
  @IsNotEmpty()
  price?: number;
  @IsNotEmpty()
  discount?: number;
  @IsNotEmpty()
  delivery_charge?: number;
  @IsNotEmpty()
  tax?: number;
  @IsNotEmpty()
  distance?: number;
  // @IsNotEmpty()
  // date?: Date;
}

// const dummyData = [
//   {
//     product_name: 'Laptop',
//     price: 799.99,
//     discount: 10,
//     delivery_charge: 19.99,
//     tax: 5,
//     date: '2023-10-01',
//   },
//   {
//     product_name: 'Smartphone',
//     price: 499.99,
//     discount: 5,
//     delivery_charge: 9.99,
//     tax: 3,
//     date: '2023-10-02',
//   },

//   {
//     product_name: 'Television',
//     price: 699.99,
//     discount: 15,
//     delivery_charge: 29.99,
//     tax: 7,
//     date: '2023-10-03',
//   },
//   {
//     product_name: 'Headphones',
//     price: 99.99,
//     discount: 20,
//     delivery_charge: 4.99,
//     tax: 2,
//     date: '2023-10-04',
//   },
//   {
//     product_name: 'Coffee Maker',
//     price: 49.99,
//     discount: 5,
//     delivery_charge: 6.99,
//     tax: 2.5,
//     date: '2023-10-05',
//   },
//   {
//     product_name: 'Gaming Console',
//     price: 299.99,
//     discount: 10,
//     delivery_charge: 14.99,
//     tax: 6,
//     date: '2023-10-05',
//   },
//   {
//     product_name: 'Refrigerator',
//     price: 899.99,
//     discount: 20,
//     delivery_charge: 39.99,
//     tax: 8,
//     date: '2023-10-06',
//   },
//   {
//     product_name: 'Digital Camera',
//     price: 249.99,
//     discount: 5,
//     delivery_charge: 9.99,
//     tax: 4,
//     date: '2023-10-07',
//   },
//   {
//     product_name: 'Fitness Tracker',
//     price: 79.99,
//     discount: 10,
//     delivery_charge: 4.99,
//     tax: 2,
//     date: '2023-10-08',
//   },
//   {
//     product_name: 'Microwave Oven',
//     price: 149.99,
//     discount: 15,
//     delivery_charge: 12.99,
//     tax: 4.5,
//     date: '2023-10-09',
//   },
//   {
//     product_name: 'Tablet',
//     price: 199.99,
//     discount: 10,
//     delivery_charge: 9.99,
//     tax: 3.5,
//     date: '2023-10-10',
//   },
//   {
//     product_name: 'Wireless Speaker',
//     price: 69.99,
//     discount: 5,
//     delivery_charge: 5.99,
//     tax: 2.5,
//     date: '2023-10-11',
//   },
//   {
//     product_name: 'Vacuum Cleaner',
//     price: 129.99,
//     discount: 10,
//     delivery_charge: 11.99,
//     tax: 4,
//     date: '2023-10-12',
//   },
//   {
//     product_name: 'Washing Machine',
//     price: 499.99,
//     discount: 20,
//     delivery_charge: 24.99,
//     tax: 7.5,
//     date: '2023-10-13',
//   },
//   {
//     product_name: 'Blender',
//     price: 39.99,
//     discount: 5,
//     delivery_charge: 5.99,
//     tax: 2,
//     date: '2023-10-14',
//   },
//   {
//     product_name: 'Digital Watch',
//     price: 69.99,
//     discount: 10,
//     delivery_charge: 4.99,
//     tax: 2.5,
//   },
//   {
//     product_name: 'Toaster',
//     price: 29.99,
//     discount: 5,
//     delivery_charge: 4.99,
//     tax: 2,
//     date: '2023-10-02',
//   },
//   {
//     product_name: 'Desk Chair',
//     price: 89.99,
//     discount: 10,
//     delivery_charge: 9.99,
//     tax: 3,
//     date: '2023-10-02',
//   },
//   {
//     product_name: 'Power Bank',
//     price: 19.99,
//     discount: 5,
//     delivery_charge: 3.99,
//     tax: 1.5,
//     date: '2023-10-02',
//   },
//   {
//     product_name: 'Hiking Backpack',
//     price: 49.99,
//     discount: 10,
//     delivery_charge: 6.99,
//     tax: 2.5,
//     date: '2023-10-02',
//   },
// ];
