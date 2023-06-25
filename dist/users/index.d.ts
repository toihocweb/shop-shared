import { z } from "zod";
export declare const UserProfileSchema: z.ZodObject<{
    avatar: z.ZodString;
    bio: z.ZodString;
    socials: z.ZodString;
    contact: z.ZodString;
    connect: z.ZodNumber;
}, "strip", z.ZodTypeAny, {
    avatar: string;
    bio: string;
    socials: string;
    contact: string;
    connect: number;
}, {
    avatar: string;
    bio: string;
    socials: string;
    contact: string;
    connect: number;
}>;
export interface Social {
    type?: string;
    link?: string;
}
