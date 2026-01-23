'use server'

import { createServerClient } from '@/lib/supabase/server'
import { WebsiteContactInsert } from '@/lib/supabase/types'
import { z } from 'zod'

const contactFormSchema = z.object({
  name: z
    .string()
    .min(2, 'Namnet måste vara minst 2 tecken')
    .max(100, 'Namnet får inte överstiga 100 tecken')
    .trim(),
  email: z
    .string()
    .email('Ogiltig e-postadress')
    .max(255, 'E-postadressen får inte överstiga 255 tecken')
    .trim()
    .toLowerCase(),
  phone: z
    .string()
    .max(20, 'Telefonnumret får inte överstiga 20 tecken')
    .trim()
    .optional()
    .or(z.literal('')),
  company: z
    .string()
    .max(100, 'Företagsnamnet får inte överstiga 100 tecken')
    .trim()
    .optional()
    .or(z.literal('')),
  industry: z.string().max(50).optional().or(z.literal('')),
  service_type: z.string().max(50).optional().or(z.literal('')),
  experience: z.string().max(50).optional().or(z.literal('')),
  message: z
    .string()
    .min(10, 'Meddelandet måste vara minst 10 tecken')
    .max(5000, 'Meddelandet får inte överstiga 5000 tecken')
    .trim(),
  consent: z.literal(true, { error: 'Du måste godkänna integritetspolicyn' }),
  subject: z.string().max(100).optional(),
})

export interface ContactFormData {
  name: string
  email: string
  phone?: string
  company?: string
  industry?: string
  service_type?: string
  experience?: string
  message: string
  consent: boolean
  subject?: string
}

/**
 * Server Action to submit contact form data to Supabase.
 * This keeps the database write operation on the server for better security.
 */
export async function submitContactAction(
  formData: ContactFormData
): Promise<{ success: boolean; error?: string }> {
  try {
    const validationResult = contactFormSchema.safeParse(formData)

    if (!validationResult.success) {
      const firstError = validationResult.error.issues[0]
      return { success: false, error: firstError.message }
    }

    const validatedData = validationResult.data
    const supabase = createServerClient()

    const contactData: WebsiteContactInsert = {
      name: validatedData.name,
      email: validatedData.email,
      phone: validatedData.phone || null,
      company: validatedData.company || null,
      industry: validatedData.industry || null,
      service_type: validatedData.service_type || null,
      experience: validatedData.experience || null,
      subject: validatedData.subject || 'Allmän förfrågan',
      message: validatedData.message,
      consent: validatedData.consent,
    }

    const { error } = await supabase.from('website_contacts').insert(contactData)

    if (error) {
      console.error('Error submitting contact form:', error)
      return { success: false, error: error.message }
    }

    return { success: true }
  } catch (error) {
    console.error('Unexpected error submitting contact form:', error)
    return { success: false, error: 'An unexpected error occurred' }
  }
}

