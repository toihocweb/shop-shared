import { z } from "zod";
declare const PaymentInfoSchema: z.ZodObject<{
    account: z.ZodString;
    bank: z.ZodString;
    name: z.ZodString;
    email: z.ZodString;
}, "strip", z.ZodTypeAny, {
    account: string;
    bank: string;
    name: string;
    email: string;
}, {
    account: string;
    bank: string;
    name: string;
    email: string;
}>;
export declare const CreateShopSchema: z.ZodObject<{
    name: z.ZodString;
    slug: z.ZodString;
    description: z.ZodOptional<z.ZodString>;
    cover_image: z.ZodOptional<z.ZodString>;
    logo: z.ZodOptional<z.ZodString>;
    address: z.ZodObject<Pick<{
        title: z.ZodString;
        type: z.ZodEnum<[import("src/addresses").AddressType.BILLING, import("src/addresses").AddressType.SHIPPING]>;
        default: z.ZodDefault<z.ZodBoolean>;
        country: z.ZodString;
        state: z.ZodString;
        city: z.ZodString;
        street_address: z.ZodString;
        zip: z.ZodString;
    }, "country" | "state" | "city" | "street_address" | "zip">, "strip", z.ZodTypeAny, {
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
    settings: z.ZodObject<{
        website: z.ZodOptional<z.ZodString>;
        contact: z.ZodOptional<z.ZodString>;
        socials: z.ZodOptional<z.ZodArray<z.ZodObject<{
            icon: z.ZodOptional<z.ZodString>;
            url: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            icon?: string | undefined;
            url?: string | undefined;
        }, {
            icon?: string | undefined;
            url?: string | undefined;
        }>, "many">>;
        location: z.ZodOptional<z.ZodObject<{
            lat: z.ZodOptional<z.ZodNumber>;
            lng: z.ZodOptional<z.ZodNumber>;
            city: z.ZodOptional<z.ZodString>;
            state: z.ZodOptional<z.ZodString>;
            country: z.ZodOptional<z.ZodString>;
            zip: z.ZodOptional<z.ZodString>;
            formattedAddress: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            lat?: number | undefined;
            lng?: number | undefined;
            city?: string | undefined;
            state?: string | undefined;
            country?: string | undefined;
            zip?: string | undefined;
            formattedAddress?: string | undefined;
        }, {
            lat?: number | undefined;
            lng?: number | undefined;
            city?: string | undefined;
            state?: string | undefined;
            country?: string | undefined;
            zip?: string | undefined;
            formattedAddress?: string | undefined;
        }>>;
    }, "strip", z.ZodTypeAny, {
        website?: string | undefined;
        contact?: string | undefined;
        socials?: {
            icon?: string | undefined;
            url?: string | undefined;
        }[] | undefined;
        location?: {
            lat?: number | undefined;
            lng?: number | undefined;
            city?: string | undefined;
            state?: string | undefined;
            country?: string | undefined;
            zip?: string | undefined;
            formattedAddress?: string | undefined;
        } | undefined;
    }, {
        website?: string | undefined;
        contact?: string | undefined;
        socials?: {
            icon?: string | undefined;
            url?: string | undefined;
        }[] | undefined;
        location?: {
            lat?: number | undefined;
            lng?: number | undefined;
            city?: string | undefined;
            state?: string | undefined;
            country?: string | undefined;
            zip?: string | undefined;
            formattedAddress?: string | undefined;
        } | undefined;
    }>;
}, "strip", z.ZodTypeAny, {
    name: string;
    slug: string;
    address: {
        country: string;
        state: string;
        city: string;
        street_address: string;
        zip: string;
    };
    settings: {
        website?: string | undefined;
        contact?: string | undefined;
        socials?: {
            icon?: string | undefined;
            url?: string | undefined;
        }[] | undefined;
        location?: {
            lat?: number | undefined;
            lng?: number | undefined;
            city?: string | undefined;
            state?: string | undefined;
            country?: string | undefined;
            zip?: string | undefined;
            formattedAddress?: string | undefined;
        } | undefined;
    };
    description?: string | undefined;
    cover_image?: string | undefined;
    logo?: string | undefined;
}, {
    name: string;
    slug: string;
    address: {
        country: string;
        state: string;
        city: string;
        street_address: string;
        zip: string;
    };
    settings: {
        website?: string | undefined;
        contact?: string | undefined;
        socials?: {
            icon?: string | undefined;
            url?: string | undefined;
        }[] | undefined;
        location?: {
            lat?: number | undefined;
            lng?: number | undefined;
            city?: string | undefined;
            state?: string | undefined;
            country?: string | undefined;
            zip?: string | undefined;
            formattedAddress?: string | undefined;
        } | undefined;
    };
    description?: string | undefined;
    cover_image?: string | undefined;
    logo?: string | undefined;
}>;
export type PaymentInfoDto = z.infer<typeof PaymentInfoSchema>;
export type CreateCategoryDto = z.infer<typeof CreateShopSchema>;
export {};
