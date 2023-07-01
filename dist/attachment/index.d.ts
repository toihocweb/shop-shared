import { z } from "zod";
declare const AttachmentField: {
    readonly AVATAR: "avatar";
    readonly COVER: "cover";
};
export type AttachmentField = (typeof AttachmentField)[keyof typeof AttachmentField];
export declare const AttachmentShema: z.ZodObject<{
    attachment: z.ZodAny;
    field: z.ZodNativeEnum<{
        readonly AVATAR: "avatar";
        readonly COVER: "cover";
    }>;
}, "strip", z.ZodTypeAny, {
    field: "avatar" | "cover";
    attachment?: any;
}, {
    field: "avatar" | "cover";
    attachment?: any;
}>;
export {};
