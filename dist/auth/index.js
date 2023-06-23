"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OtpLoginSchema = exports.ChangePasswordSchema = exports.CreateUserDtoSchema = exports.AuthPayloadResponse = exports.OtpSchema = exports.OtpResponse = exports.VerifyOtpSchema = exports.AuthResponse = exports.ResetPasswordSchema = exports.VerifyForgetPasswordSchema = exports.ForgetPasswordSchema = exports.SocialLoginSchema = exports.Permission = void 0;
const zod_1 = require("zod");
var Permission;
(function (Permission) {
    Permission["SUPER_ADMIN"] = "super_admin";
    Permission["STORE_OWNER"] = "store_owner";
    Permission["STAFF"] = "staff";
    Permission["CUSTOMER"] = "customer";
})(Permission || (exports.Permission = Permission = {}));
exports.SocialLoginSchema = zod_1.z.object({
    provider: zod_1.z.string(),
    access_token: zod_1.z.string(),
});
exports.ForgetPasswordSchema = zod_1.z.object({
    email: zod_1.z.string().email(),
});
exports.VerifyForgetPasswordSchema = zod_1.z.object({
    email: zod_1.z.string().email(),
    token: zod_1.z.string(),
});
exports.ResetPasswordSchema = zod_1.z.object({
    email: zod_1.z.string().email(),
    token: zod_1.z.string(),
    password: zod_1.z.string().min(6),
});
class AuthResponse {
}
exports.AuthResponse = AuthResponse;
exports.VerifyOtpSchema = zod_1.z.object({
    otp_id: zod_1.z.string(),
    code: zod_1.z.string(),
    phone_number: zod_1.z.string(),
});
class OtpResponse {
}
exports.OtpResponse = OtpResponse;
exports.OtpSchema = zod_1.z.object({
    phone_number: zod_1.z.string(),
});
class AuthPayloadResponse {
}
exports.AuthPayloadResponse = AuthPayloadResponse;
exports.CreateUserDtoSchema = zod_1.z.object({
    username: zod_1.z.string().min(3),
    email: zod_1.z.string().email(),
    password: zod_1.z.string().min(6),
});
exports.ChangePasswordSchema = zod_1.z.object({
    oldPassword: zod_1.z.string().min(6),
    newPassword: zod_1.z.string().min(6),
});
exports.OtpLoginSchema = zod_1.z.object({
    otp_id: zod_1.z.string(),
    code: zod_1.z.string(),
    phone_number: zod_1.z.string(),
    name: zod_1.z.string().optional(),
    email: zod_1.z.string().optional(),
});
//# sourceMappingURL=index.js.map