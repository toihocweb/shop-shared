import { z } from "zod";
export declare enum AddressType {
    BILLING = "billing",
    SHIPPING = "shipping"
}
export declare const CreateAddressSchema: z.ZodObject<{
    title: z.ZodString;
    type: z.ZodNativeEnum<typeof AddressType>;
    default: z.ZodBoolean;
    country: z.ZodString;
    state: z.ZodString;
    city: z.ZodString;
    street_address: z.ZodString;
    zip: z.ZodString;
}, "strip", z.ZodTypeAny, {
    title: string;
    type: AddressType;
    default: boolean;
    country: string;
    state: string;
    city: string;
    street_address: string;
    zip: string;
}, {
    title: string;
    type: AddressType;
    default: boolean;
    country: string;
    state: string;
    city: string;
    street_address: string;
    zip: string;
}>;
export type CreateAddressDto = z.infer<typeof CreateAddressSchema>;
export declare const UpdateAddressSchema: z.ZodObject<{
    title: z.ZodOptional<z.ZodString>;
    type: z.ZodOptional<z.ZodNativeEnum<typeof AddressType>>;
    default: z.ZodOptional<z.ZodBoolean>;
    country: z.ZodOptional<z.ZodString>;
    state: z.ZodOptional<z.ZodString>;
    city: z.ZodOptional<z.ZodString>;
    street_address: z.ZodOptional<z.ZodString>;
    zip: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    title?: string | undefined;
    type?: AddressType | undefined;
    default?: boolean | undefined;
    country?: string | undefined;
    state?: string | undefined;
    city?: string | undefined;
    street_address?: string | undefined;
    zip?: string | undefined;
}, {
    title?: string | undefined;
    type?: AddressType | undefined;
    default?: boolean | undefined;
    country?: string | undefined;
    state?: string | undefined;
    city?: string | undefined;
    street_address?: string | undefined;
    zip?: string | undefined;
}>;
export type UpdateAddressDto = z.infer<typeof UpdateAddressSchema>;
