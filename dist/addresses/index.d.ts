import { z } from "zod";
export declare enum AddressType {
    BILLING = "billing",
    SHIPPING = "shipping"
}
export declare const UserAddress: z.ZodObject<{
    country: z.ZodString;
    state: z.ZodString;
    city: z.ZodString;
    street_address: z.ZodString;
    zip: z.ZodString;
}, "strip", z.ZodTypeAny, {
    country: string;
    state: string;
    city: string;
    street_address: string;
    zip: string;
}, {
    country: string;
    state: string;
    city: string;
    street_address: string;
    zip: string;
}>;
export declare const CreateAddressSchema: z.ZodObject<{
    title: z.ZodString;
    type: z.ZodEnum<[AddressType.BILLING, AddressType.SHIPPING]>;
    default: z.ZodDefault<z.ZodBoolean>;
    address: z.ZodObject<{
        country: z.ZodString;
        state: z.ZodString;
        city: z.ZodString;
        street_address: z.ZodString;
        zip: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        country: string;
        state: string;
        city: string;
        street_address: string;
        zip: string;
    }, {
        country: string;
        state: string;
        city: string;
        street_address: string;
        zip: string;
    }>;
}, "strip", z.ZodTypeAny, {
    type: AddressType;
    title: string;
    default: boolean;
    address: {
        country: string;
        state: string;
        city: string;
        street_address: string;
        zip: string;
    };
}, {
    type: AddressType;
    title: string;
    address: {
        country: string;
        state: string;
        city: string;
        street_address: string;
        zip: string;
    };
    default?: boolean | undefined;
}>;
export type CreateAddressDto = z.infer<typeof CreateAddressSchema>;
export declare const UpdateAddressSchema: z.ZodObject<{
    title: z.ZodOptional<z.ZodString>;
    type: z.ZodOptional<z.ZodEnum<[AddressType.BILLING, AddressType.SHIPPING]>>;
    default: z.ZodOptional<z.ZodDefault<z.ZodBoolean>>;
    address: z.ZodOptional<z.ZodObject<{
        country: z.ZodString;
        state: z.ZodString;
        city: z.ZodString;
        street_address: z.ZodString;
        zip: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        country: string;
        state: string;
        city: string;
        street_address: string;
        zip: string;
    }, {
        country: string;
        state: string;
        city: string;
        street_address: string;
        zip: string;
    }>>;
}, "strip", z.ZodTypeAny, {
    title?: string | undefined;
    type?: AddressType | undefined;
    default?: boolean | undefined;
    address?: {
        country: string;
        state: string;
        city: string;
        street_address: string;
        zip: string;
    } | undefined;
}, {
    title?: string | undefined;
    type?: AddressType | undefined;
    default?: boolean | undefined;
    address?: {
        country: string;
        state: string;
        city: string;
        street_address: string;
        zip: string;
    } | undefined;
}>;
export type UpdateAddressDto = z.infer<typeof UpdateAddressSchema>;
