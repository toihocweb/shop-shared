import { z } from "zod";
export declare const CreateCategorySchema: z.ZodObject<{
    name: z.ZodString;
    details: z.ZodOptional<z.ZodString>;
    icon: z.ZodOptional<z.ZodString>;
    language: z.ZodString;
    translated_languages: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
    image: z.ZodOptional<z.ZodString>;
    parentId: z.ZodOptional<z.ZodNumber>;
}, "strip", z.ZodTypeAny, {
    name: string;
    language: string;
    details?: string | undefined;
    icon?: string | undefined;
    translated_languages?: string[] | undefined;
    image?: string | undefined;
    parentId?: number | undefined;
}, {
    name: string;
    language: string;
    details?: string | undefined;
    icon?: string | undefined;
    translated_languages?: string[] | undefined;
    image?: string | undefined;
    parentId?: number | undefined;
}>;
export declare const UpdateCategorySchema: z.ZodObject<{
    name: z.ZodOptional<z.ZodString>;
    details: z.ZodOptional<z.ZodOptional<z.ZodString>>;
    icon: z.ZodOptional<z.ZodOptional<z.ZodString>>;
    language: z.ZodOptional<z.ZodString>;
    translated_languages: z.ZodOptional<z.ZodOptional<z.ZodArray<z.ZodString, "many">>>;
    image: z.ZodOptional<z.ZodOptional<z.ZodString>>;
    parentId: z.ZodOptional<z.ZodOptional<z.ZodNumber>>;
}, "strip", z.ZodTypeAny, {
    name?: string | undefined;
    details?: string | undefined;
    icon?: string | undefined;
    language?: string | undefined;
    translated_languages?: string[] | undefined;
    image?: string | undefined;
    parentId?: number | undefined;
}, {
    name?: string | undefined;
    details?: string | undefined;
    icon?: string | undefined;
    language?: string | undefined;
    translated_languages?: string[] | undefined;
    image?: string | undefined;
    parentId?: number | undefined;
}>;
export type UpdateCategoryDto = z.infer<typeof UpdateCategorySchema>;
export type CreateCategoryDto = z.infer<typeof CreateCategorySchema>;
