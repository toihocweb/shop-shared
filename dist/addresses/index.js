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
    type: zod_1.z.string().nonempty(),
    default: zod_1.z.boolean().default(false),
    address: zod_1.z.enum([AddressType.BILLING, AddressType.SHIPPING]),
});
exports.UpdateAddressSchema = exports.CreateAddressSchema.partial();
//# sourceMappingURL=index.js.map