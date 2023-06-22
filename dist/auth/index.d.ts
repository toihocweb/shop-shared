export declare enum Permission {
    SUPER_ADMIN = "super_admin",
    STORE_OWNER = "store_owner",
    STAFF = "staff",
    CUSTOMER = "customer"
}
export declare class SocialLoginDto {
    provider: string;
    access_token: string;
}
export declare class ChangePasswordDto {
    oldPassword: string;
    newPassword: string;
}
export declare class ForgetPasswordDto {
    email: string;
}
export declare class VerifyForgetPasswordDto {
    email: string;
    token: string;
}
export declare class ResetPasswordDto {
    email: string;
    token: string;
    password: string;
}
export declare class AuthResponse {
    token: string;
    permissions: Permission[];
}
export declare class VerifyOtpDto {
    otp_id: string;
    code: string;
    phone_number: string;
}
export declare class OtpResponse {
    id: string;
    message: string;
    success: boolean;
    phone_number: string;
    provider: string;
    is_contact_exist: boolean;
}
export declare class OtpDto {
    phone_number: string;
}
export declare class OtpLoginDto {
    otp_id: string;
    code: string;
    phone_number: string;
    name?: string;
    email?: string;
}
export declare class AuthPayloadResponse {
    id: string;
    username: string;
    email: string;
    permissions: Permission[];
}
