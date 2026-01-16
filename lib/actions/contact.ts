'use server'

import { createServerClient } from '@/lib/supabase/server'
import { WebsiteContactInsert } from '@/lib/supabase/types'

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
    const supabase = createServerClient()

    const contactData: WebsiteContactInsert = {
      name: formData.name,
      email: formData.email,
      phone: formData.phone || null,
      company: formData.company || null,
      industry: formData.industry || null,
      service_type: formData.service_type || null,
      experience: formData.experience || null,
      subject: formData.subject || 'Allmän förfrågan',
      message: formData.message,
      consent: formData.consent,
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

