import { type SchemaTypeDefinition } from "sanity";
import heroSection from "./HomePage/hero";
import rangeSection from "./HomePage/rangeSection";
import featureSection from "./HomePage/featureSection";
import product from "./HomePage/product";
import footer from "./Footer/footer";
import shareSetup from "./HomePage/shareSetup";
import contactPage from "./ContactPage/contactPage";

import blogPage from "./BlogPage/blogPage";
import SearchPage from "./SearchPage/search";
import cartPage from "./CartPage/cartPage";
import checkOutPage from "./CheckOutPage/checkoutPage";
import shopPage from "./ShopPage/shopPage";
import loginPage from "./LoginPage/login";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    heroSection,
    rangeSection,
    featureSection,
    product,
    shareSetup,
    contactPage,
    loginPage,
    blogPage,
    SearchPage,
    cartPage,
    checkOutPage,
    shopPage,
    footer,
  ],
};
