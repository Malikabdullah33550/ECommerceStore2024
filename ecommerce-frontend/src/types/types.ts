export type User = {
  name: string;
  email: string;
  photo: string;
  gender: string;
  role: string;
  dob: string;
  _id: string;
};

export type Product = {
  name: string;
  price: number;
  stock: number;
  category: string;
  photo: string;
  _id: string;
};

export type ShippingInfo = {
  address: string;
  city: string;
  state: string;
  country: string;
  pinCode: string;
};

export type CartItem = {
  productId: string;
  photo: string;
  name: string;
  price: number;
  quantity: number;
  stock: number;
};

export type OrderItem = Omit<CartItem, "stock"> & { _id: string };

export type Order = {
  orderItems: OrderItem[];
  shippingInfo: ShippingInfo;
  subtotal: number;
  tax: number;
  shippingCharges: number;
  discount: number;
  total: number;
  status: string;
  user: {
    name: string;
    _id: string;
  };
  _id: string;
};

// const a = {
//       _id: "66f726cf571f8bf3c1130883",
//       user: "abc",
//       subtotal: 5000,
//       tax: 200,
//       shippingCharges: 10,
//       discount: 200,
//       total: 5000,
//       status: "Processing",
//       orderItems: [
//         {
//           name: "Valorant",
//           photo: "uploads\fd409615-acfb-4c3b-90a6-0eb91134fdc0.png",
//           price: 60000,
//           quantity: 2,
//           productId: "66f423b0d2f388cd7711a7f2",
//           _id: "66f726cf571f8bf3c1130884",
//         },
//       ],
//     },
//   ],
// };
