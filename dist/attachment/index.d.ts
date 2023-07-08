import { z } from "zod";
export declare const AttachmentFieldEnum: {
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
    readonly COUPON_IMAGE: "coupon.image";
    readonly SHOP_COVER: "shop.cover";
    readonly SHOP_LOGO: "shop.logo";
};
export type AttachmentField = (typeof AttachmentFieldEnum)[keyof typeof AttachmentFieldEnum];
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
        readonly COUPON_IMAGE: "coupon.image";
        readonly SHOP_COVER: "shop.cover";
        readonly SHOP_LOGO: "shop.logo";
    }>;
    id: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    field: "user.avatar" | "category.image" | "type.image" | "banner.image" | "promotion.slider" | "menu.image" | "cover.image" | "tag.image" | "product.image" | "product.gallery" | "coupon.image" | "shop.cover" | "shop.logo";
    attachment?: any;
    id?: string | undefined;
}, {
    field: "user.avatar" | "category.image" | "type.image" | "banner.image" | "promotion.slider" | "menu.image" | "cover.image" | "tag.image" | "product.image" | "product.gallery" | "coupon.image" | "shop.cover" | "shop.logo";
    attachment?: any;
    id?: string | undefined;
}>;
