import { z } from "zod";
export declare const PaymentInfoSchema: z.ZodObject<{
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
export declare const ShopAddressSchema: z.ZodObject<{
    country: z.ZodString;
    state: z.ZodString;
    city: z.ZodString;
    zip: z.ZodString;
    street_address: z.ZodString;
}, "strip", z.ZodTypeAny, {
    country: string;
    state: string;
    city: string;
    zip: string;
    street_address: string;
}, {
    country: string;
    state: string;
    city: string;
    zip: string;
    street_address: string;
}>;
export declare const ShopSocialSchema: z.ZodObject<{
    icon: z.ZodString;
    url: z.ZodString;
}, "strip", z.ZodTypeAny, {
    icon: string;
    url: string;
}, {
    icon: string;
    url: string;
}>;
export declare const ShopLocationSchema: z.ZodObject<{
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
}>;
export declare const ShopSettingsSchema: z.ZodObject<{
    website: z.ZodOptional<z.ZodString>;
    contact: z.ZodOptional<z.ZodString>;
    socials: z.ZodOptional<z.ZodObject<{
        icon: z.ZodString;
        url: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        icon: string;
        url: string;
    }, {
        icon: string;
        url: string;
    }>>;
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
        icon: string;
        url: string;
    } | undefined;
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
        icon: string;
        url: string;
    } | undefined;
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
export declare const CreateShopSchema: z.ZodObject<{
    name: z.ZodString;
    description: z.ZodOptional<z.ZodString>;
    address: z.ZodOptional<z.ZodObject<{
        country: z.ZodString;
        state: z.ZodString;
        city: z.ZodString;
        zip: z.ZodString;
        street_address: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        country: string;
        state: string;
        city: string;
        zip: string;
        street_address: string;
    }, {
        country: string;
        state: string;
        city: string;
        zip: string;
        street_address: string;
    }>>;
    paymentInfo: z.ZodOptional<z.ZodObject<{
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
    }>>;
    settings: z.ZodOptional<z.ZodObject<{
        website: z.ZodOptional<z.ZodString>;
        contact: z.ZodOptional<z.ZodString>;
        socials: z.ZodOptional<z.ZodObject<{
            icon: z.ZodString;
            url: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            icon: string;
            url: string;
        }, {
            icon: string;
            url: string;
        }>>;
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
            icon: string;
            url: string;
        } | undefined;
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
            icon: string;
            url: string;
        } | undefined;
        location?: {
            lat?: number | undefined;
            lng?: number | undefined;
            city?: string | undefined;
            state?: string | undefined;
            country?: string | undefined;
            zip?: string | undefined;
            formattedAddress?: string | undefined;
        } | undefined;
    }>>;
}, "strip", z.ZodTypeAny, {
    name: string;
    description?: string | undefined;
    address?: {
        country: string;
        state: string;
        city: string;
        zip: string;
        street_address: string;
    } | undefined;
    paymentInfo?: {
        account: string;
        bank: string;
        name: string;
        email: string;
    } | undefined;
    settings?: {
        website?: string | undefined;
        contact?: string | undefined;
        socials?: {
            icon: string;
            url: string;
        } | undefined;
        location?: {
            lat?: number | undefined;
            lng?: number | undefined;
            city?: string | undefined;
            state?: string | undefined;
            country?: string | undefined;
            zip?: string | undefined;
            formattedAddress?: string | undefined;
        } | undefined;
    } | undefined;
}, {
    name: string;
    description?: string | undefined;
    address?: {
        country: string;
        state: string;
        city: string;
        zip: string;
        street_address: string;
    } | undefined;
    paymentInfo?: {
        account: string;
        bank: string;
        name: string;
        email: string;
    } | undefined;
    settings?: {
        website?: string | undefined;
        contact?: string | undefined;
        socials?: {
            icon: string;
            url: string;
        } | undefined;
        location?: {
            lat?: number | undefined;
            lng?: number | undefined;
            city?: string | undefined;
            state?: string | undefined;
            country?: string | undefined;
            zip?: string | undefined;
            formattedAddress?: string | undefined;
        } | undefined;
    } | undefined;
}>;
export declare const UpdateShopSchema: z.ZodObject<{
    name: z.ZodOptional<z.ZodString>;
    description: z.ZodOptional<z.ZodOptional<z.ZodString>>;
    address: z.ZodOptional<z.ZodOptional<z.ZodObject<{
        country: z.ZodString;
        state: z.ZodString;
        city: z.ZodString;
        zip: z.ZodString;
        street_address: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        country: string;
        state: string;
        city: string;
        zip: string;
        street_address: string;
    }, {
        country: string;
        state: string;
        city: string;
        zip: string;
        street_address: string;
    }>>>;
    paymentInfo: z.ZodOptional<z.ZodOptional<z.ZodObject<{
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
    }>>>;
    settings: z.ZodOptional<z.ZodOptional<z.ZodObject<{
        website: z.ZodOptional<z.ZodString>;
        contact: z.ZodOptional<z.ZodString>;
        socials: z.ZodOptional<z.ZodObject<{
            icon: z.ZodString;
            url: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            icon: string;
            url: string;
        }, {
            icon: string;
            url: string;
        }>>;
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
            icon: string;
            url: string;
        } | undefined;
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
            icon: string;
            url: string;
        } | undefined;
        location?: {
            lat?: number | undefined;
            lng?: number | undefined;
            city?: string | undefined;
            state?: string | undefined;
            country?: string | undefined;
            zip?: string | undefined;
            formattedAddress?: string | undefined;
        } | undefined;
    }>>>;
}, "strip", z.ZodTypeAny, {
    name?: string | undefined;
    description?: string | undefined;
    address?: {
        country: string;
        state: string;
        city: string;
        zip: string;
        street_address: string;
    } | undefined;
    paymentInfo?: {
        account: string;
        bank: string;
        name: string;
        email: string;
    } | undefined;
    settings?: {
        website?: string | undefined;
        contact?: string | undefined;
        socials?: {
            icon: string;
            url: string;
        } | undefined;
        location?: {
            lat?: number | undefined;
            lng?: number | undefined;
            city?: string | undefined;
            state?: string | undefined;
            country?: string | undefined;
            zip?: string | undefined;
            formattedAddress?: string | undefined;
        } | undefined;
    } | undefined;
}, {
    name?: string | undefined;
    description?: string | undefined;
    address?: {
        country: string;
        state: string;
        city: string;
        zip: string;
        street_address: string;
    } | undefined;
    paymentInfo?: {
        account: string;
        bank: string;
        name: string;
        email: string;
    } | undefined;
    settings?: {
        website?: string | undefined;
        contact?: string | undefined;
        socials?: {
            icon: string;
            url: string;
        } | undefined;
        location?: {
            lat?: number | undefined;
            lng?: number | undefined;
            city?: string | undefined;
            state?: string | undefined;
            country?: string | undefined;
            zip?: string | undefined;
            formattedAddress?: string | undefined;
        } | undefined;
    } | undefined;
}>;
export type CreateShopDto = z.infer<typeof CreateShopSchema>;
export type UpdateShopDto = z.infer<typeof UpdateShopSchema>;
export type PaymentInfoDto = z.infer<typeof PaymentInfoSchema>;
export type ShopAddressDto = z.infer<typeof ShopAddressSchema>;
export type ShopSocialDto = z.infer<typeof ShopSocialSchema>;
export type ShopLocationDto = z.infer<typeof ShopLocationSchema>;
export type ShopSettingsDto = z.infer<typeof ShopSettingsSchema>;
