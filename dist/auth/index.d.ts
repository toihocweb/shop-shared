import { z } from "zod";
export declare const AuthSchema: z.ZodObject<{
    username: z.ZodString;
    email: z.ZodString;
    password: z.ZodString;
    token: z.ZodString;
    otp_id: z.ZodString;
    code: z.ZodString;
    phone_number: z.ZodString;
    provider: z.ZodString;
    access_token: z.ZodString;
    oldPassword: z.ZodString;
    newPassword: z.ZodString;
}, "strip", z.ZodTypeAny, {
    username: string;
    email: string;
    password: string;
    token: string;
    otp_id: string;
    code: string;
    phone_number: string;
    provider: string;
    access_token: string;
    oldPassword: string;
    newPassword: string;
}, {
    username: string;
    email: string;
    password: string;
    token: string;
    otp_id: string;
    code: string;
    phone_number: string;
    provider: string;
    access_token: string;
    oldPassword: string;
    newPassword: string;
}>;
export declare enum Permission {
    SUPER_ADMIN = "super_admin",
    STORE_OWNER = "store_owner",
    STAFF = "staff",
    CUSTOMER = "customer"
}
export declare const SocialLoginSchema: z.ZodObject<Pick<{
    username: z.ZodString;
    email: z.ZodString;
    password: z.ZodString;
    token: z.ZodString;
    otp_id: z.ZodString;
    code: z.ZodString;
    phone_number: z.ZodString;
    provider: z.ZodString;
    access_token: z.ZodString;
    oldPassword: z.ZodString;
    newPassword: z.ZodString;
}, "provider" | "access_token">, "strip", z.ZodTypeAny, {
    provider: string;
    access_token: string;
}, {
    provider: string;
    access_token: string;
}>;
export type SocialLoginDto = z.infer<typeof SocialLoginSchema>;
export declare const ForgetPasswordSchema: z.ZodObject<Pick<{
    username: z.ZodString;
    email: z.ZodString;
    password: z.ZodString;
    token: z.ZodString;
    otp_id: z.ZodString;
    code: z.ZodString;
    phone_number: z.ZodString;
    provider: z.ZodString;
    access_token: z.ZodString;
    oldPassword: z.ZodString;
    newPassword: z.ZodString;
}, "email">, "strip", z.ZodTypeAny, {
    email: string;
}, {
    email: string;
}>;
export type ForgetPasswordDto = z.infer<typeof ForgetPasswordSchema>;
export declare const VerifyForgetPasswordSchema: z.ZodObject<Pick<{
    username: z.ZodString;
    email: z.ZodString;
    password: z.ZodString;
    token: z.ZodString;
    otp_id: z.ZodString;
    code: z.ZodString;
    phone_number: z.ZodString;
    provider: z.ZodString;
    access_token: z.ZodString;
    oldPassword: z.ZodString;
    newPassword: z.ZodString;
}, "email" | "token">, "strip", z.ZodTypeAny, {
    email: string;
    token: string;
}, {
    email: string;
    token: string;
}>;
export type VerifyForgetPasswordDto = z.infer<typeof VerifyForgetPasswordSchema>;
export declare const ResetPasswordSchema: z.ZodObject<Pick<{
    username: z.ZodString;
    email: z.ZodString;
    password: z.ZodString;
    token: z.ZodString;
    otp_id: z.ZodString;
    code: z.ZodString;
    phone_number: z.ZodString;
    provider: z.ZodString;
    access_token: z.ZodString;
    oldPassword: z.ZodString;
    newPassword: z.ZodString;
}, "email" | "password" | "token">, "strip", z.ZodTypeAny, {
    email: string;
    password: string;
    token: string;
}, {
    email: string;
    password: string;
    token: string;
}>;
export type ResetPasswordDto = z.infer<typeof ResetPasswordSchema>;
export declare class AuthResponse {
    token: string;
    permissions: Permission[];
}
export declare const VerifyOtpSchema: z.ZodObject<Pick<{
    username: z.ZodString;
    email: z.ZodString;
    password: z.ZodString;
    token: z.ZodString;
    otp_id: z.ZodString;
    code: z.ZodString;
    phone_number: z.ZodString;
    provider: z.ZodString;
    access_token: z.ZodString;
    oldPassword: z.ZodString;
    newPassword: z.ZodString;
}, "otp_id" | "code" | "phone_number">, "strip", z.ZodTypeAny, {
    otp_id: string;
    code: string;
    phone_number: string;
}, {
    otp_id: string;
    code: string;
    phone_number: string;
}>;
export type VerifyOtpDto = z.infer<typeof VerifyOtpSchema>;
export declare class OtpResponse {
    id: string;
    message: string;
    success: boolean;
    phone_number: string;
    provider: string;
    is_contact_exist: boolean;
}
export declare const OtpSchema: z.ZodObject<Pick<{
    username: z.ZodString;
    email: z.ZodString;
    password: z.ZodString;
    token: z.ZodString;
    otp_id: z.ZodString;
    code: z.ZodString;
    phone_number: z.ZodString;
    provider: z.ZodString;
    access_token: z.ZodString;
    oldPassword: z.ZodString;
    newPassword: z.ZodString;
}, "phone_number">, "strip", z.ZodTypeAny, {
    phone_number: string;
}, {
    phone_number: string;
}>;
export type OtpDto = z.infer<typeof OtpSchema>;
export declare class AuthPayloadResponse {
    id: string;
    username: string;
    email: string;
    permissions: Permission[];
}
export declare const CreateUserSchema: z.ZodObject<Pick<{
    username: z.ZodString;
    email: z.ZodString;
    password: z.ZodString;
    token: z.ZodString;
    otp_id: z.ZodString;
    code: z.ZodString;
    phone_number: z.ZodString;
    provider: z.ZodString;
    access_token: z.ZodString;
    oldPassword: z.ZodString;
    newPassword: z.ZodString;
}, "username" | "email" | "password">, "strip", z.ZodTypeAny, {
    username: string;
    email: string;
    password: string;
}, {
    username: string;
    email: string;
    password: string;
}>;
export type CreateUserDto = z.infer<typeof CreateUserSchema>;
export declare const ChangePasswordSchema: z.ZodObject<Pick<{
    username: z.ZodString;
    email: z.ZodString;
    password: z.ZodString;
    token: z.ZodString;
    otp_id: z.ZodString;
    code: z.ZodString;
    phone_number: z.ZodString;
    provider: z.ZodString;
    access_token: z.ZodString;
    oldPassword: z.ZodString;
    newPassword: z.ZodString;
}, "oldPassword" | "newPassword">, "strip", z.ZodTypeAny, {
    oldPassword: string;
    newPassword: string;
}, {
    oldPassword: string;
    newPassword: string;
}>;
export type ChangePasswordDto = z.infer<typeof ChangePasswordSchema>;
export declare const OtpLoginSchema: z.ZodObject<{
    otp_id: z.ZodString;
    code: z.ZodString;
    phone_number: z.ZodString;
    name: z.ZodOptional<z.ZodString>;
    email: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    otp_id: string;
    code: string;
    phone_number: string;
    name?: string | undefined;
    email?: string | undefined;
}, {
    otp_id: string;
    code: string;
    phone_number: string;
    name?: string | undefined;
    email?: string | undefined;
}>;
export type OtpLoginDto = z.infer<typeof OtpLoginSchema>;
export declare const LoginSchema: z.ZodObject<Pick<{
    username: z.ZodString;
    email: z.ZodString;
    password: z.ZodString;
    token: z.ZodString;
    otp_id: z.ZodString;
    code: z.ZodString;
    phone_number: z.ZodString;
    provider: z.ZodString;
    access_token: z.ZodString;
    oldPassword: z.ZodString;
    newPassword: z.ZodString;
}, "email" | "password">, "strip", z.ZodTypeAny, {
    email: string;
    password: string;
}, {
    email: string;
    password: string;
}>;
export type LoginDto = z.infer<typeof LoginSchema>;
