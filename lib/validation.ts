import { z } from 'zod'

export const ContactFormSchema = z.object({
	message: z.string().min(10),
	email:z.string().email(),
	name:z.string().min(3)
})
