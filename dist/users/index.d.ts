import { z } from "zod";
export interface Social {
    type?: string;
    link?: string;
}
export declare const UpdateProfileSchema: z.ZodObject<{
    bio: z.ZodOptional<z.ZodString>;
    username: z.ZodString;
    socials: z.ZodOptional<z.ZodArray<z.ZodObject<{
        type: z.ZodOptional<z.ZodString>;
        link: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        type?: string | undefined;
        link?: string | undefined;
    }, {
        type?: string | undefined;
        link?: string | undefined;
    }>, "many">>;
    contact: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    username: string;
    bio?: string | undefined;
    socials?: {
        type?: string | undefined;
        link?: string | undefined;
    }[] | undefined;
    contact?: string | undefined;
}, {
    username: string;
    bio?: string | undefined;
    socials?: {
        type?: string | undefined;
        link?: string | undefined;
    }[] | undefined;
    contact?: string | undefined;
}>;
export type UpdateProfileDto = z.infer<typeof UpdateProfileSchema>;
