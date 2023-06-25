"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserProfileSchema = void 0;
const zod_1 = require("zod");
exports.UserProfileSchema = zod_1.z.object({
    avatar: zod_1.z.string(),
    bio: zod_1.z.string(),
    socials: zod_1.z.string(),
    contact: zod_1.z.string(),
    connect: zod_1.z.number(),
});
//# sourceMappingURL=index.js.map