import { z } from "zod";
export declare const AttributeValueSchema: z.ZodObject<{
    value: z.ZodString;
    meta: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    value: string;
    meta?: string | undefined;
}, {
    value: string;
    meta?: string | undefined;
}>;
export declare const AttributeSchema: z.ZodObject<{
    name: z.ZodString;
    values: z.ZodArray<z.ZodObject<{
        value: z.ZodString;
        meta: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        value: string;
        meta?: string | undefined;
    }, {
        value: string;
        meta?: string | undefined;
    }>, "many">;
}, "strip", z.ZodTypeAny, {
    values: {
        value: string;
        meta?: string | undefined;
    }[];
    name: string;
}, {
    values: {
        value: string;
        meta?: string | undefined;
    }[];
    name: string;
}>;
export declare const AttributeUpdateSchema: z.ZodObject<{
    name: z.ZodOptional<z.ZodString>;
    values: z.ZodOptional<z.ZodArray<z.ZodObject<{
        value: z.ZodString;
        meta: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        value: string;
        meta?: string | undefined;
    }, {
        value: string;
        meta?: string | undefined;
    }>, "many">>;
}, "strip", z.ZodTypeAny, {
    name?: string | undefined;
    values?: {
        value: string;
        meta?: string | undefined;
    }[] | undefined;
}, {
    name?: string | undefined;
    values?: {
        value: string;
        meta?: string | undefined;
    }[] | undefined;
}>;
export type AttributeValueDto = z.infer<typeof AttributeValueSchema>;
export type AttributeDto = z.infer<typeof AttributeSchema>;
export type AttributeUpdateDto = z.infer<typeof AttributeUpdateSchema>;
