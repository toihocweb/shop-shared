"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateProfileSchema = void 0;
const zod_1 = require("zod");
exports.UpdateProfileSchema = zod_1.z.object({
    bio: zod_1.z.string().optional(),
    username: zod_1.z.string().min(3).nonempty(),
    socials: zod_1.z
        .array(zod_1.z.object({
        type: zod_1.z.string().optional(),
        link: zod_1.z.string().optional(),
    }))
        .optional(),
    contact: zod_1.z.string().optional(),
});
//# sourceMappingURL=index.js.map