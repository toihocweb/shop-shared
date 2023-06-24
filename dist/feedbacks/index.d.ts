import { z } from "zod";
export declare const FeedbacksSchema: z.ZodObject<{
    model_type: z.ZodString;
    model_id: z.ZodString;
    positive: z.ZodOptional<z.ZodBoolean>;
    negative: z.ZodOptional<z.ZodBoolean>;
}, "strip", z.ZodTypeAny, {
    model_type: string;
    model_id: string;
    positive?: boolean | undefined;
    negative?: boolean | undefined;
}, {
    model_type: string;
    model_id: string;
    positive?: boolean | undefined;
    negative?: boolean | undefined;
}>;
export declare const CreateFeedBackSchema: z.ZodObject<Pick<{
    model_type: z.ZodString;
    model_id: z.ZodString;
    positive: z.ZodOptional<z.ZodBoolean>;
    negative: z.ZodOptional<z.ZodBoolean>;
}, "model_type" | "model_id" | "positive" | "negative">, "strip", z.ZodTypeAny, {
    model_type: string;
    model_id: string;
    positive?: boolean | undefined;
    negative?: boolean | undefined;
}, {
    model_type: string;
    model_id: string;
    positive?: boolean | undefined;
    negative?: boolean | undefined;
}>;
export type CreateFeedBackDto = z.infer<typeof CreateFeedBackSchema>;
export declare const UpdateFeedBackSchema: z.ZodObject<{
    model_type: z.ZodOptional<z.ZodString>;
    model_id: z.ZodOptional<z.ZodString>;
    positive: z.ZodOptional<z.ZodOptional<z.ZodBoolean>>;
    negative: z.ZodOptional<z.ZodOptional<z.ZodBoolean>>;
}, "strip", z.ZodTypeAny, {
    model_type?: string | undefined;
    model_id?: string | undefined;
    positive?: boolean | undefined;
    negative?: boolean | undefined;
}, {
    model_type?: string | undefined;
    model_id?: string | undefined;
    positive?: boolean | undefined;
    negative?: boolean | undefined;
}>;
export type UpdateFeedBackDto = z.infer<typeof UpdateFeedBackSchema>;
