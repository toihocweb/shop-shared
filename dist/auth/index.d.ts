import { z } from "zod";
export declare enum Permission {
  SUPER_ADMIN = "super_admin",
  STORE_OWNER = "store_owner",
  STAFF = "staff",
  CUSTOMER = "customer",
}
export declare const SocialLoginSchema: z.ZodObject<
  {
    provider: z.ZodString;
    access_token: z.ZodString;
  },
  "strip",
  z.ZodTypeAny,
  {
    provider?: string;
    access_token?: string;
  },
  {
    provider?: string;
    access_token?: string;
  }
>;
export type SocialLoginDto = z.infer<typeof SocialLoginSchema>;
export declare const ForgetPasswordSchema: z.ZodObject<
  {
    email: z.ZodString;
  },
  "strip",
  z.ZodTypeAny,
  {
    email?: string;
  },
  {
    email?: string;
  }
>;
export type ForgetPasswordDto = z.infer<typeof ForgetPasswordSchema>;
export declare const VerifyForgetPasswordSchema: z.ZodObject<
  {
    email: z.ZodString;
    token: z.ZodString;
  },
  "strip",
  z.ZodTypeAny,
  {
    email?: string;
    token?: string;
  },
  {
    email?: string;
    token?: string;
  }
>;
export type VerifyForgetPasswordDto = z.infer<
  typeof VerifyForgetPasswordSchema
>;
export declare const ResetPasswordSchema: z.ZodObject<
  {
    email: z.ZodString;
    token: z.ZodString;
    password: z.ZodString;
  },
  "strip",
  z.ZodTypeAny,
  {
    email?: string;
    token?: string;
    password?: string;
  },
  {
    email?: string;
    token?: string;
    password?: string;
  }
>;
export type ResetPasswordDto = z.infer<typeof ResetPasswordSchema>;
export declare class AuthResponse {
  token: string;
  permissions: Permission[];
}
export declare const VerifyOtpSchema: z.ZodObject<
  {
    otp_id: z.ZodString;
    code: z.ZodString;
    phone_number: z.ZodString;
  },
  "strip",
  z.ZodTypeAny,
  {
    otp_id?: string;
    code?: string;
    phone_number?: string;
  },
  {
    otp_id?: string;
    code?: string;
    phone_number?: string;
  }
>;
export type VerifyOtpDto = z.infer<typeof VerifyOtpSchema>;
export declare class OtpResponse {
  id: string;
  message: string;
  success: boolean;
  phone_number: string;
  provider: string;
  is_contact_exist: boolean;
}
export declare const OtpSchema: z.ZodObject<
  {
    phone_number: z.ZodString;
  },
  "strip",
  z.ZodTypeAny,
  {
    phone_number?: string;
  },
  {
    phone_number?: string;
  }
>;
export type OtpDto = z.infer<typeof OtpSchema>;
export declare class AuthPayloadResponse {
  id: string;
  username: string;
  email: string;
  permissions: Permission[];
}
export declare const CreateUserDtoSchema: z.ZodObject<
  {
    username: z.ZodString;
    email: z.ZodString;
    password: z.ZodString;
  },
  "strip",
  z.ZodTypeAny,
  {
    username?: string;
    email?: string;
    password?: string;
  },
  {
    username?: string;
    email?: string;
    password?: string;
  }
>;
export type CreateUserDto = z.infer<typeof CreateUserDtoSchema>;
export declare const ChangePasswordSchema: z.ZodObject<
  {
    oldPassword: z.ZodString;
    newPassword: z.ZodString;
  },
  "strip",
  z.ZodTypeAny,
  {
    oldPassword?: string;
    newPassword?: string;
  },
  {
    oldPassword?: string;
    newPassword?: string;
  }
>;
export type ChangePasswordDto = z.infer<typeof ChangePasswordSchema>;
export declare const OtpLoginSchema: z.ZodObject<
  {
    otp_id: z.ZodString;
    code: z.ZodString;
    phone_number: z.ZodString;
    name: z.ZodOptional<z.ZodString>;
    email: z.ZodOptional<z.ZodString>;
  },
  "strip",
  z.ZodTypeAny,
  {
    otp_id?: string;
    code?: string;
    phone_number?: string;
    name?: string;
    email?: string;
  },
  {
    otp_id?: string;
    code?: string;
    phone_number?: string;
    name?: string;
    email?: string;
  }
>;
export type OtpLoginDto = z.infer<typeof OtpLoginSchema>;
