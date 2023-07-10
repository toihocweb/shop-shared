import { z } from "zod";
export declare const PaymentInfoSchema: z.ZodObject<{
    account: z.ZodOptional<z.ZodString>;
    bank: z.ZodOptional<z.ZodString>;
    name: z.ZodOptional<z.ZodString>;
    email: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    account?: string | undefined;
    bank?: string | undefined;
    name?: string | undefined;
    email?: string | undefined;
}, {
    account?: string | undefined;
    bank?: string | undefined;
    name?: string | undefined;
    email?: string | undefined;
}>;
export declare const ShopAddressSchema: z.ZodObject<{
    country: z.ZodOptional<z.ZodString>;
    state: z.ZodOptional<z.ZodString>;
    city: z.ZodOptional<z.ZodString>;
    zip: z.ZodOptional<z.ZodString>;
    street_address: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    country?: string | undefined;
    state?: string | undefined;
    city?: string | undefined;
    zip?: string | undefined;
    street_address?: string | undefined;
}, {
    country?: string | undefined;
    state?: string | undefined;
    city?: string | undefined;
    zip?: string | undefined;
    street_address?: string | undefined;
}>;
export declare const ShopSocialSchema: z.ZodObject<{
    icon: z.ZodOptional<z.ZodString>;
    url: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    icon?: string | undefined;
    url?: string | undefined;
}, {
    icon?: string | undefined;
    url?: string | undefined;
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
export declare const CreateShopSchema: z.ZodObject<{
    name: z.ZodString;
    description: z.ZodOptional<z.ZodString>;
    address: z.ZodOptional<z.ZodObject<{
        country: z.ZodOptional<z.ZodString>;
        state: z.ZodOptional<z.ZodString>;
        city: z.ZodOptional<z.ZodString>;
        zip: z.ZodOptional<z.ZodString>;
        street_address: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        country?: string | undefined;
        state?: string | undefined;
        city?: string | undefined;
        zip?: string | undefined;
        street_address?: string | undefined;
    }, {
        country?: string | undefined;
        state?: string | undefined;
        city?: string | undefined;
        zip?: string | undefined;
        street_address?: string | undefined;
    }>>;
    paymentInfo: z.ZodOptional<z.ZodObject<{
        account: z.ZodOptional<z.ZodString>;
        bank: z.ZodOptional<z.ZodString>;
        name: z.ZodOptional<z.ZodString>;
        email: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        account?: string | undefined;
        bank?: string | undefined;
        name?: string | undefined;
        email?: string | undefined;
    }, {
        account?: string | undefined;
        bank?: string | undefined;
        name?: string | undefined;
        email?: string | undefined;
    }>>;
    settings: z.ZodOptional<z.ZodObject<{
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
    }>>;
    owner: z.ZodNumber;
}, "strip", z.ZodTypeAny, {
    name: string;
    owner: number;
    description?: string | undefined;
    address?: {
        country?: string | undefined;
        state?: string | undefined;
        city?: string | undefined;
        zip?: string | undefined;
        street_address?: string | undefined;
    } | undefined;
    paymentInfo?: {
        account?: string | undefined;
        bank?: string | undefined;
        name?: string | undefined;
        email?: string | undefined;
    } | undefined;
    settings?: {
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
    } | undefined;
}, {
    name: string;
    owner: number;
    description?: string | undefined;
    address?: {
        country?: string | undefined;
        state?: string | undefined;
        city?: string | undefined;
        zip?: string | undefined;
        street_address?: string | undefined;
    } | undefined;
    paymentInfo?: {
        account?: string | undefined;
        bank?: string | undefined;
        name?: string | undefined;
        email?: string | undefined;
    } | undefined;
    settings?: {
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
    } | undefined;
}>;
export declare const UpdateShopSchema: z.ZodObject<{
    name: z.ZodOptional<z.ZodString>;
    description: z.ZodOptional<z.ZodOptional<z.ZodString>>;
    address: z.ZodOptional<z.ZodOptional<z.ZodObject<{
        country: z.ZodOptional<z.ZodString>;
        state: z.ZodOptional<z.ZodString>;
        city: z.ZodOptional<z.ZodString>;
        zip: z.ZodOptional<z.ZodString>;
        street_address: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        country?: string | undefined;
        state?: string | undefined;
        city?: string | undefined;
        zip?: string | undefined;
        street_address?: string | undefined;
    }, {
        country?: string | undefined;
        state?: string | undefined;
        city?: string | undefined;
        zip?: string | undefined;
        street_address?: string | undefined;
    }>>>;
    paymentInfo: z.ZodOptional<z.ZodOptional<z.ZodObject<{
        account: z.ZodOptional<z.ZodString>;
        bank: z.ZodOptional<z.ZodString>;
        name: z.ZodOptional<z.ZodString>;
        email: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        account?: string | undefined;
        bank?: string | undefined;
        name?: string | undefined;
        email?: string | undefined;
    }, {
        account?: string | undefined;
        bank?: string | undefined;
        name?: string | undefined;
        email?: string | undefined;
    }>>>;
    settings: z.ZodOptional<z.ZodOptional<z.ZodObject<{
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
    }>>>;
    owner: z.ZodOptional<z.ZodNumber>;
}, "strip", z.ZodTypeAny, {
    name?: string | undefined;
    description?: string | undefined;
    address?: {
        country?: string | undefined;
        state?: string | undefined;
        city?: string | undefined;
        zip?: string | undefined;
        street_address?: string | undefined;
    } | undefined;
    paymentInfo?: {
        account?: string | undefined;
        bank?: string | undefined;
        name?: string | undefined;
        email?: string | undefined;
    } | undefined;
    settings?: {
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
    } | undefined;
    owner?: number | undefined;
}, {
    name?: string | undefined;
    description?: string | undefined;
    address?: {
        country?: string | undefined;
        state?: string | undefined;
        city?: string | undefined;
        zip?: string | undefined;
        street_address?: string | undefined;
    } | undefined;
    paymentInfo?: {
        account?: string | undefined;
        bank?: string | undefined;
        name?: string | undefined;
        email?: string | undefined;
    } | undefined;
    settings?: {
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
    } | undefined;
    owner?: number | undefined;
}>;
export type CreateShopDto = z.infer<typeof CreateShopSchema>;
export type UpdateShopDto = z.infer<typeof UpdateShopSchema>;
export type PaymentInfoDto = z.infer<typeof PaymentInfoSchema>;
export type ShopAddressDto = z.infer<typeof ShopAddressSchema>;
export type ShopSocialDto = z.infer<typeof ShopSocialSchema>;
export type ShopLocationDto = z.infer<typeof ShopLocationSchema>;
export type ShopSettingsDto = z.infer<typeof ShopSettingsSchema>;
