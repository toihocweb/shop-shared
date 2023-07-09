"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateCouponSchema = exports.CouponType = void 0;
const zod_1 = require("zod");
var CouponType;
(function (CouponType) {
    CouponType["FIXED_COUPON"] = "fixed";
    CouponType["PERCENTAGE_COUPON"] = "percentage";
    CouponType["FREE_SHIPPING_COUPON"] = "free_shipping";
})(CouponType || (exports.CouponType = CouponType = {}));
exports.CreateCouponSchema = zod_1.z.object({
    code: zod_1.z.string().nonempty(),
    type: zod_1.z.nativeEnum(CouponType),
    amount: zod_1.z.number(),
    description: zod_1.z.string(),
    expire_at: zod_1.z.string(),
    active_from: zod_1.z.string(),
    minimum_cart_amount: zod_1.z.number(),
});
//# sourceMappingURL=index.js.map