"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateFeedBackSchema = exports.CreateFeedBackSchema = exports.FeedbacksSchema = void 0;
const zod_1 = require("zod");
exports.FeedbacksSchema = zod_1.z.object({
    model_type: zod_1.z.string().nonempty(),
    model_id: zod_1.z.string().nonempty(),
    positive: zod_1.z.boolean().optional(),
    negative: zod_1.z.boolean().optional(),
});
exports.CreateFeedBackSchema = exports.FeedbacksSchema.pick({
    model_type: true,
    model_id: true,
    positive: true,
    negative: true,
});
exports.UpdateFeedBackSchema = exports.CreateFeedBackSchema.partial();
//# sourceMappingURL=index.js.map