"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateCategorySchema = exports.CreateCategorySchema = void 0;
const zod_1 = require("zod");
exports.CreateCategorySchema = zod_1.z.object({
    name: zod_1.z.string().nonempty(),
    details: zod_1.z.string().optional(),
    icon: zod_1.z.string().optional(),
    language: zod_1.z.string().nonempty(),
    translated_languages: zod_1.z.array(zod_1.z.string()).optional(),
    image: zod_1.z.string().optional(),
    parentId: zod_1.z.number().optional(),
});
exports.UpdateCategorySchema = exports.CreateCategorySchema.partial();
//# sourceMappingURL=index.js.map