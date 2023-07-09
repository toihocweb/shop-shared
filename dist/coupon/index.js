"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateCouponSchema = void 0;
const zod_1 = require("zod");
exports.CreateCouponSchema = zod_1.z.object({
    code: zod_1.z.string().nonempty(),
    type: zod_1.z.string().nonempty(),
    amount: zod_1.z.number(),
    description: zod_1.z.string(),
    expire_at: zod_1.z.string(),
    active_from: zod_1.z.string(),
    minimum_cart_amount: zod_1.z.number(),
});
//# sourceMappingURL=index.js.map