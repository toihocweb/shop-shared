"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoginSchema = exports.OtpLoginSchema = exports.ChangePasswordSchema = exports.CreateUserDtoSchema = exports.AuthPayloadResponse = exports.OtpSchema = exports.OtpResponse = exports.VerifyOtpSchema = exports.AuthResponse = exports.ResetPasswordSchema = exports.VerifyForgetPasswordSchema = exports.ForgetPasswordSchema = exports.SocialLoginSchema = exports.Permission = exports.AuthSchema = void 0;
const zod_1 = require("zod");
exports.AuthSchema = zod_1.z.object({
    username: zod_1.z.string().min(3),
    email: zod_1.z.string().email(),
    password: zod_1.z.string().min(6),
    token: zod_1.z.string(),
    otp_id: zod_1.z.string(),
    code: zod_1.z.string(),
    phone_number: zod_1.z.string(),
    provider: zod_1.z.string(),
    access_token: zod_1.z.string(),
    oldPassword: zod_1.z.string(),
    newPassword: zod_1.z.string(),
});
var Permission;
(function (Permission) {
    Permission["SUPER_ADMIN"] = "super_admin";
    Permission["STORE_OWNER"] = "store_owner";
    Permission["STAFF"] = "staff";
    Permission["CUSTOMER"] = "customer";
})(Permission || (exports.Permission = Permission = {}));
exports.SocialLoginSchema = exports.AuthSchema.pick({
    provider: true,
    access_token: true,
});
exports.ForgetPasswordSchema = exports.AuthSchema.pick({
    email: true,
});
exports.VerifyForgetPasswordSchema = exports.AuthSchema.pick({
    email: true,
    token: true,
});
exports.ResetPasswordSchema = exports.AuthSchema.pick({
    email: true,
    token: true,
    password: true,
});
class AuthResponse {
}
exports.AuthResponse = AuthResponse;
exports.VerifyOtpSchema = exports.AuthSchema.pick({
    otp_id: true,
    code: true,
    phone_number: true,
});
class OtpResponse {
}
exports.OtpResponse = OtpResponse;
exports.OtpSchema = exports.AuthSchema.pick({
    phone_number: true,
});
class AuthPayloadResponse {
}
exports.AuthPayloadResponse = AuthPayloadResponse;
exports.CreateUserDtoSchema = exports.AuthSchema.pick({
    username: true,
    email: true,
    password: true,
});
exports.ChangePasswordSchema = exports.AuthSchema.pick({
    oldPassword: true,
    newPassword: true,
});
exports.OtpLoginSchema = exports.AuthSchema.pick({
    otp_id: true,
    code: true,
    phone_number: true,
    name: true,
    email: true,
}).extend({
    name: zod_1.z.string().optional(),
    email: zod_1.z.string().optional(),
});
exports.LoginSchema = exports.AuthSchema.pick({
    email: true,
    password: true,
});
//# sourceMappingURL=index.js.map