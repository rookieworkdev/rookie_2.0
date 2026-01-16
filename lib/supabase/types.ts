export type Json = string | number | boolean | null | { [key: string]: Json | undefined } | Json[]

export type Database = {
  public: {
    Tables: {
      website_contacts: {
        Row: {
          created_at: string | null
          email: string
          id: string
          message: string
          name: string
          phone: string | null
          status: string | null
          subject: string
          company: string | null
          industry: string | null
          service_type: string | null
          experience: string | null
          consent: boolean
        }
        Insert: {
          created_at?: string | null
          email: string
          id?: string
          message: string
          name: string
          phone?: string | null
          status?: string | null
          subject: string
          company?: string | null
          industry?: string | null
          service_type?: string | null
          experience?: string | null
          consent: boolean
        }
        Update: {
          created_at?: string | null
          email?: string
          id?: string
          message?: string
          name?: string
          phone?: string | null
          status?: string | null
          subject?: string
          company?: string | null
          industry?: string | null
          service_type?: string | null
          experience?: string | null
          consent?: boolean
        }
        Relationships: []
      }
      website_inspiration: {
        Row: {
          author: string
          category: string
          content: string
          created_at: string | null
          date: string
          description: string
          id: string
          image: string
          is_published: boolean | null
          slug: string
          title: string
          updated_at: string | null
        }
        Insert: {
          author: string
          category: string
          content: string
          created_at?: string | null
          date: string
          description: string
          id?: string
          image: string
          is_published?: boolean | null
          slug: string
          title: string
          updated_at?: string | null
        }
        Update: {
          author?: string
          category?: string
          content?: string
          created_at?: string | null
          date?: string
          description?: string
          id?: string
          image?: string
          is_published?: boolean | null
          slug?: string
          title?: string
          updated_at?: string | null
        }
        Relationships: []
      }
      website_jobs: {
        Row: {
          category: string
          company: string
          created_at: string | null
          description: string
          external_url: string
          id: string
          is_active: boolean | null
          location: string
          posted_date: string
          title: string
          updated_at: string | null
        }
        Insert: {
          category: string
          company: string
          created_at?: string | null
          description: string
          external_url: string
          id?: string
          is_active?: boolean | null
          location: string
          posted_date: string
          title: string
          updated_at?: string | null
        }
        Update: {
          category?: string
          company?: string
          created_at?: string | null
          description?: string
          external_url?: string
          id?: string
          is_active?: boolean | null
          location?: string
          posted_date?: string
          title?: string
          updated_at?: string | null
        }
        Relationships: []
      }
      website_rookies: {
        Row: {
          city: string
          created_at: string | null
          id: string
          image_src: string | null
          is_current: boolean | null
          month: string
          name: string
          school: string
          studies: string
          updated_at: string | null
          year: number
        }
        Insert: {
          city: string
          created_at?: string | null
          id?: string
          image_src?: string | null
          is_current?: boolean | null
          month: string
          name: string
          school: string
          studies: string
          updated_at?: string | null
          year: number
        }
        Update: {
          city?: string
          created_at?: string | null
          id?: string
          image_src?: string | null
          is_current?: boolean | null
          month?: string
          name?: string
          school?: string
          studies?: string
          updated_at?: string | null
          year?: number
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

// Convenience types for the website tables
export type WebsiteJob = Database['public']['Tables']['website_jobs']['Row']
export type WebsiteRookie = Database['public']['Tables']['website_rookies']['Row']
export type WebsiteInspiration = Database['public']['Tables']['website_inspiration']['Row']
export type WebsiteContact = Database['public']['Tables']['website_contacts']['Row']
export type WebsiteContactInsert = Database['public']['Tables']['website_contacts']['Insert']
