"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AttachmentSchema = void 0;
const zod_1 = require("zod");
const AttachmentFieldEnum = {
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
};
exports.AttachmentSchema = zod_1.z.object({
    attachment: zod_1.z.any(),
    field: zod_1.z.nativeEnum(AttachmentFieldEnum),
});
//# sourceMappingURL=index.js.map