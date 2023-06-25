import { z } from "zod";
export declare enum AddressType {
    BILLING = "billing",
    SHIPPING = "shipping"
}
export declare const CreateAddressSchema: z.ZodObject<{
    title: z.ZodString;
    type: z.ZodString;
    default: z.ZodDefault<z.ZodBoolean>;
    address: z.ZodEnum<[AddressType.BILLING, AddressType.SHIPPING]>;
}, "strip", z.ZodTypeAny, {
    title: string;
    type: string;
    default: boolean;
    address: AddressType;
}, {
    title: string;
    type: string;
    address: AddressType;
    default?: boolean | undefined;
}>;
export type CreateAddressDto = z.infer<typeof CreateAddressSchema>;
export declare const UpdateAddressSchema: z.ZodObject<{
    title: z.ZodOptional<z.ZodString>;
    type: z.ZodOptional<z.ZodString>;
    default: z.ZodOptional<z.ZodDefault<z.ZodBoolean>>;
    address: z.ZodOptional<z.ZodEnum<[AddressType.BILLING, AddressType.SHIPPING]>>;
}, "strip", z.ZodTypeAny, {
    title?: string | undefined;
    type?: string | undefined;
    default?: boolean | undefined;
    address?: AddressType | undefined;
}, {
    title?: string | undefined;
    type?: string | undefined;
    default?: boolean | undefined;
    address?: AddressType | undefined;
}>;
export type UpdateAddressDto = z.infer<typeof UpdateAddressSchema>;
