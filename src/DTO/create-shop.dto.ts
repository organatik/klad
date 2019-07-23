// const Vacansies = new mongoose.Schema({
//   vacansies: [
//     {
//       rolle: String,
//       description: String,
//     },
//   ],
//   vacansiesContact: String,
// });

// const shopRulles = new mongoose.Schema({
//   rulles : String,
// });

// const Payment = new mongoose.Schema({
//   description: String,
// });

// const Bonus = new mongoose.Schema({
//   description: String,
// });

// export const CatSchema = new mongoose.Schema({
//   mainInfo: MainShopInfo,
//   price: Price,
//   contacts: Contacts,
//   vacansies: Vacansies,
//   rulles: shopRulles,
//   payment: Payment,
//   bonus: Bonus,
//   review: Review,
// });

// tslint:disable: max-classes-per-file

class MainShopInfo  {
  shopName: string;
  description: string;
}

class Price {
  price: [
    {
      name: string;
      cost: number;
      photo: string;
      opt: [
        {
          count: number;
          cost: number;
        }
      ]
    }
  ];
}

class Contacts {
  telegram: string;
  otherContacts: [string];
}

class Review {
  stars: {
    stealth: number,
    quality: number,
    operator: number,
    priceToQuality: number,
  };
  description: string;
}

class ShopRulles {
  rulles: string;
}

class Payment {
  description: string;
}

class Bonus {
  description: string;
}

export class CreateShop {
  shopInfo: MainShopInfo;
  price: Price;
  contacts: Contacts;
  review: [Review];
  shopRulles: ShopRulles;
  payment: Payment;
  bonus: Bonus;
}
