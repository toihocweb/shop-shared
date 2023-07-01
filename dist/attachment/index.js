"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AttachmentShema = void 0;
const zod_1 = require("zod");
const AttachmentField = {
    AVATAR: "avatar",
    COVER: "cover",
};
exports.AttachmentShema = zod_1.z.object({
    attachment: zod_1.z.any(),
    field: zod_1.z.nativeEnum(AttachmentField),
});
//# sourceMappingURL=index.js.map