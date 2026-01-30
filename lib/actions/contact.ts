'use server'

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
 * Server Action to submit contact form data to WEHOOK_URL.
 */
export async function submitContactAction(
  formData: ContactFormData
): Promise<{ success: boolean; error?: string }> {
  try {
    // Validate form data with Zod
    const validationResult = contactFormSchema.safeParse(formData)

    if (!validationResult.success) {
      const firstError = validationResult.error.issues[0]
      return { success: false, error: firstError.message }
    }

    const validatedData = validationResult.data

    const webhookUrl = process.env.WEBHOOK_URL

    if (!webhookUrl) {
      console.error('WEBHOOK_URL is not configured')
      return { success: false, error: 'Server configuration error' }
    }

    console.log('Submitting to webhook:', { webhookUrl })

    const response = await fetch(webhookUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(validatedData),
    })

    const responseText = await response.text()
    console.log('Webhook response:', {
      status: response.status,
      statusText: response.statusText,
      body: responseText,
    })

    if (!response.ok) {
      console.error('Webhook error:', response.status, response.statusText, responseText)
      return { success: false, error: 'Failed to submit form' }
    }

    // Even if status is OK, check if webhook returned an error in the body
    try {
      const responseJson = JSON.parse(responseText)
      if (responseJson.error || responseJson.success === false) {
        console.error('Webhook returned error in response:', responseJson)
        return { success: false, error: responseJson.error || 'Failed to submit form' }
      }
    } catch {
      // Response is not JSON, that's okay for webhooks
    }

    return { success: true }
  } catch (error) {
    console.error('Unexpected error submitting to webhook:', error)
    return {
      success: false,
      error: error instanceof Error ? error.message : 'An unexpected error occurred',
    }
  }
}
