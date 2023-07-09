import { z } from "zod";
export declare const CreateCouponSchema: z.ZodObject<{
    code: z.ZodString;
    type: z.ZodString;
    amount: z.ZodNumber;
    description: z.ZodString;
    expire_at: z.ZodString;
    active_from: z.ZodString;
    minimum_cart_amount: z.ZodNumber;
}, "strip", z.ZodTypeAny, {
    code: string;
    type: string;
    amount: number;
    description: string;
    expire_at: string;
    active_from: string;
    minimum_cart_amount: number;
}, {
    code: string;
    type: string;
    amount: number;
    description: string;
    expire_at: string;
    active_from: string;
    minimum_cart_amount: number;
}>;
export type CreateCouponDto = z.infer<typeof CreateCouponSchema>;
