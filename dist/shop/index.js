"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateShopSchema = void 0;
const addresses_1 = require("src/addresses");
const zod_1 = require("zod");
const PaymentInfoSchema = zod_1.z.object({
    account: zod_1.z.string().nonempty(),
    bank: zod_1.z.string().nonempty(),
    name: zod_1.z.string().nonempty(),
    email: zod_1.z.string().nonempty(),
});
exports.CreateShopSchema = zod_1.z.object({
    name: zod_1.z.string().nonempty(),
    slug: zod_1.z.string().nonempty(),
    description: zod_1.z.string().optional(),
    cover_image: zod_1.z.string().optional(),
    logo: zod_1.z.string().optional(),
    address: addresses_1.CreateAddressSchema.pick({
        country: true,
        city: true,
        state: true,
        zip: true,
        street_address: true,
    }),
    settings: zod_1.z.object({
        website: zod_1.z.string().optional(),
        contact: zod_1.z.string().optional(),
        socials: zod_1.z
            .array(zod_1.z.object({
            icon: zod_1.z.string().optional(),
            url: zod_1.z.string().optional(),
        }))
            .optional(),
        location: zod_1.z
            .object({
            lat: zod_1.z.number().optional(),
            lng: zod_1.z.number().optional(),
            city: zod_1.z.string().optional(),
            state: zod_1.z.string().optional(),
            country: zod_1.z.string().optional(),
            zip: zod_1.z.string().optional(),
            formattedAddress: zod_1.z.string().optional(),
        })
            .optional(),
    }),
});
//# sourceMappingURL=index.js.map