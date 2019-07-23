import * as mongoose from 'mongoose';

const MainShopInfo = new mongoose.Schema({
  shopName : String,
  description: String,
});

const Price = new mongoose.Schema({
    price: [{
      name: String,
      cost: Number,
      photo: String,
      opt: [
        {
          count: Number,
          cost: Number,
        },
      ],
    }],
});

const Contacts = new mongoose.Schema({
  telegram: String,
  otherContacts: [String],
});

const Vacansies = new mongoose.Schema({
  vacansies: [
    {
      rolle: String,
      description: String,
    },
  ],
  vacansiesContact: String,
});

const ShopRulles = new mongoose.Schema({
  rulles : String,
});

const Payment = new mongoose.Schema({
  description: String,
});

const Bonus = new mongoose.Schema({
  description: String,
});

const Review = new mongoose.Schema({
  stars: {
    stealth: Number,
    quality: Number,
    operator: Number,
    priceToQuality: Number,
  },
  description: String,
});

export const CatSchema = new mongoose.Schema({
  mainInfo: MainShopInfo,
  price: Price,
  contacts: Contacts,
  vacansies: Vacansies,
  rulles: ShopRulles,
  payment: Payment,
  bonus: Bonus,
  review: Review,
});
