import { z } from "zod"

export const SignupValidation = z.object({
    name: z.string().min(2, {message : 'Too Short'} ),
    username: z.string().min(2, { message: 'Too short'}),
    email: z.string().email(),
    password: z.string().min(8, {message : 'Password must be atleast 8 characters'}),
  })
   