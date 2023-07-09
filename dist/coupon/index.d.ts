import { z } from "zod";
export declare enum CouponType {
    FIXED_COUPON = "fixed",
    PERCENTAGE_COUPON = "percentage",
    FREE_SHIPPING_COUPON = "free_shipping"
}
export declare const CreateCouponSchema: z.ZodObject<{
    code: z.ZodString;
    type: z.ZodNativeEnum<typeof CouponType>;
    amount: z.ZodNumber;
    description: z.ZodString;
    expire_at: z.ZodString;
    active_from: z.ZodString;
    minimum_cart_amount: z.ZodNumber;
}, "strip", z.ZodTypeAny, {
    code: string;
    type: CouponType;
    amount: number;
    description: string;
    expire_at: string;
    active_from: string;
    minimum_cart_amount: number;
}, {
    code: string;
    type: CouponType;
    amount: number;
    description: string;
    expire_at: string;
    active_from: string;
    minimum_cart_amount: number;
}>;
export type CreateCouponDto = z.infer<typeof CreateCouponSchema>;
