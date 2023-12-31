"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateShopSchema = exports.CreateShopSchema = exports.ShopSettingsSchema = exports.ShopLocationSchema = exports.ShopSocialSchema = exports.ShopAddressSchema = exports.PaymentInfoSchema = void 0;
const zod_1 = require("zod");
exports.PaymentInfoSchema = zod_1.z.object({
    account: zod_1.z.string().optional(),
    bank: zod_1.z.string().optional(),
    name: zod_1.z.string().optional(),
    email: zod_1.z.string().optional(),
});
exports.ShopAddressSchema = zod_1.z.object({
    country: zod_1.z.string().optional(),
    state: zod_1.z.string().optional(),
    city: zod_1.z.string().optional(),
    zip: zod_1.z.string().optional(),
    street_address: zod_1.z.string().optional(),
});
exports.ShopSocialSchema = zod_1.z.object({
    icon: zod_1.z.string().optional(),
    url: zod_1.z.string().optional(),
});
exports.ShopLocationSchema = zod_1.z.object({
    lat: zod_1.z.number().optional(),
    lng: zod_1.z.number().optional(),
    city: zod_1.z.string().optional(),
    state: zod_1.z.string().optional(),
    country: zod_1.z.string().optional(),
    zip: zod_1.z.string().optional(),
    formattedAddress: zod_1.z.string().optional(),
});
exports.ShopSettingsSchema = zod_1.z.object({
    website: zod_1.z.string().optional(),
    contact: zod_1.z.string().optional(),
    socials: zod_1.z.array(exports.ShopSocialSchema).optional(),
    location: exports.ShopLocationSchema.optional(),
});
exports.CreateShopSchema = zod_1.z.object({
    name: zod_1.z.string().nonempty(),
    description: zod_1.z.string().optional(),
    address: exports.ShopAddressSchema.optional(),
    paymentInfo: exports.PaymentInfoSchema.optional(),
    settings: exports.ShopSettingsSchema.optional(),
    owner: zod_1.z.number(),
});
exports.UpdateShopSchema = exports.CreateShopSchema.partial();
//# sourceMappingURL=index.js.map