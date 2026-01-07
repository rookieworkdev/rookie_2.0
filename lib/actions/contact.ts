'use server'

import { createServerClient } from '@/lib/supabase/server'
import { WebsiteContactInsert } from '@/lib/supabase/types'

export interface ContactFormData {
  name: string
  email: string
  phone?: string
  subject: string
  message: string
}

/**
 * Server Action to submit contact form data to Supabase.
 * This keeps the database write operation on the server for better security.
 */
export async function submitContactAction(
  formData: ContactFormData
): Promise<{ success: boolean; error?: string }> {
  try {
    const supabase = createServerClient()

    const contactData: WebsiteContactInsert = {
      name: formData.name,
      email: formData.email,
      phone: formData.phone || null,
      subject: formData.subject,
      message: formData.message,
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

