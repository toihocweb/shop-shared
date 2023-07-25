"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AttributeUpdateSchema = exports.AttributeSchema = exports.AttributeValueSchema = void 0;
const zod_1 = require("zod");
exports.AttributeValueSchema = zod_1.z.object({
    value: zod_1.z.string().nonempty(),
    meta: zod_1.z.string().optional(),
});
exports.AttributeSchema = zod_1.z.object({
    name: zod_1.z.string().nonempty(),
    values: zod_1.z.array(exports.AttributeValueSchema),
});
exports.AttributeUpdateSchema = exports.AttributeSchema.partial();
//# sourceMappingURL=index.js.map