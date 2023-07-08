"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AttachmentSchema = exports.AttachmentFieldEnum = void 0;
const zod_1 = require("zod");
exports.AttachmentFieldEnum = {
    USER_AVATAR: "user.avatar",
    CATEGORY_IMAGE: "category.image",
    TYPE_IMAGE: "type.image",
    BANNER_IMAGE: "banner.image",
    PROMOTION_SLIDER: "promotion.slider",
    MENU_IMAGE: "menu.image",
    COVER_IMAGE: "cover.image",
    TAG_IMAGE: "tag.image",
    PRODUCT_IMAGE: "product.image",
    PRODUCT_GALLERY: "product.gallery",
    COUPON_IMAGE: "coupon.image",
    SHOP_COVER: "shop.cover",
    SHOP_LOGO: "shop.logo",
};
exports.AttachmentSchema = zod_1.z.object({
    attachment: zod_1.z.any(),
    field: zod_1.z.nativeEnum(exports.AttachmentFieldEnum),
    id: zod_1.z.string().optional(),
});
//# sourceMappingURL=index.js.map