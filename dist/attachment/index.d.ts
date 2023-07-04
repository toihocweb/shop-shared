import { z } from "zod";
declare const AttachmentField: {
    readonly USER_AVATAR: "user.avatar";
    readonly CATEGORY_IMAGE: "category.image";
    readonly TYPE_IMAGE: "type.image";
    readonly BANNER_IMAGE: "banner.image";
    readonly PROMOTION_SLIDER: "promotion.slider";
    readonly MENU_IMAGE: "menu.image";
    readonly COVER_IMAGE: "cover.image";
    readonly TAG_IMAGE: "tag.image";
    readonly PRODUCT_IMAGE: "product.image";
    readonly PRODUCT_GALLERY: "product.gallery";
};
export type AttachmentField = (typeof AttachmentField)[keyof typeof AttachmentField];
export declare const AttachmentSchema: z.ZodObject<{
    attachment: z.ZodAny;
    field: z.ZodNativeEnum<{
        readonly USER_AVATAR: "user.avatar";
        readonly CATEGORY_IMAGE: "category.image";
        readonly TYPE_IMAGE: "type.image";
        readonly BANNER_IMAGE: "banner.image";
        readonly PROMOTION_SLIDER: "promotion.slider";
        readonly MENU_IMAGE: "menu.image";
        readonly COVER_IMAGE: "cover.image";
        readonly TAG_IMAGE: "tag.image";
        readonly PRODUCT_IMAGE: "product.image";
        readonly PRODUCT_GALLERY: "product.gallery";
    }>;
}, "strip", z.ZodTypeAny, {
    field: "user.avatar" | "category.image" | "type.image" | "banner.image" | "promotion.slider" | "menu.image" | "cover.image" | "tag.image" | "product.image" | "product.gallery";
    attachment?: any;
}, {
    field: "user.avatar" | "category.image" | "type.image" | "banner.image" | "promotion.slider" | "menu.image" | "cover.image" | "tag.image" | "product.image" | "product.gallery";
    attachment?: any;
}>;
export {};
