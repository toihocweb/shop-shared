"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AttachmentSchema = void 0;
const zod_1 = require("zod");
const AttachmentField = {
    AVATAR: "avatar",
    COVER: "cover",
};
exports.AttachmentSchema = zod_1.z.object({
    attachment: zod_1.z.any(),
    field: zod_1.z.nativeEnum(AttachmentField),
});
//# sourceMappingURL=index.js.map