"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateAddressSchema = exports.CreateAddressSchema = exports.AddressType = void 0;
const zod_1 = require("zod");
var AddressType;
(function (AddressType) {
    AddressType["BILLING"] = "billing";
    AddressType["SHIPPING"] = "shipping";
})(AddressType || (exports.AddressType = AddressType = {}));
exports.CreateAddressSchema = zod_1.z.object({
    title: zod_1.z.string().nonempty(),
    type: zod_1.z.nativeEnum(AddressType),
    default: zod_1.z.boolean(),
    country: zod_1.z.string().nonempty(),
    state: zod_1.z.string().nonempty(),
    city: zod_1.z.string().nonempty(),
    street_address: zod_1.z.string().nonempty(),
    zip: zod_1.z.string().nonempty(),
});
exports.UpdateAddressSchema = exports.CreateAddressSchema.partial();
//# sourceMappingURL=index.js.map