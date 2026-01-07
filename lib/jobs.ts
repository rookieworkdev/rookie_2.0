import { createServerClient } from './supabase/server'
import { WebsiteJob } from './supabase'

export interface Job {
  id: string
  title: string
  company: string
  description: string
  location: string
  category: string
  externalUrl: string
  postedDate: string
}

// Transform database row to Job interface
function transformJob(row: WebsiteJob): Job {
  return {
    id: row.id,
    title: row.title,
    company: row.company,
    description: row.description,
    location: row.location,
    category: row.category,
    externalUrl: row.external_url,
    postedDate: row.posted_date,
  }
}

export async function getAvailableJobs(): Promise<Job[]> {
  const supabase = createServerClient()
  
  const { data, error } = await supabase
    .from('website_jobs')
    .select('*')
    .eq('is_active', true)
    .order('posted_date', { ascending: false })

  if (error) {
    console.error('Error fetching jobs:', error)
    return []
  }

  return (data || []).map(transformJob)
}

export async function getJobById(id: string): Promise<Job | null> {
  const supabase = createServerClient()
  
  const { data, error } = await supabase
    .from('website_jobs')
    .select('*')
    .eq('id', id)
    .eq('is_active', true)
    .single()

  if (error || !data) {
    console.error('Error fetching job:', error)
    return null
  }

  return transformJob(data)
}

export async function getJobsByCategory(category: string): Promise<Job[]> {
  const supabase = createServerClient()
  
  const { data, error } = await supabase
    .from('website_jobs')
    .select('*')
    .eq('category', category)
    .eq('is_active', true)
    .order('posted_date', { ascending: false })

  if (error) {
    console.error('Error fetching jobs by category:', error)
    return []
  }

  return (data || []).map(transformJob)
}

export async function getJobsByLocation(location: string): Promise<Job[]> {
  const supabase = createServerClient()
  
  const { data, error } = await supabase
    .from('website_jobs')
    .select('*')
    .eq('location', location)
    .eq('is_active', true)
    .order('posted_date', { ascending: false })

  if (error) {
    console.error('Error fetching jobs by location:', error)
    return []
  }

  return (data || []).map(transformJob)
}

// Get unique categories from all jobs
export async function getJobCategories(): Promise<string[]> {
  const supabase = createServerClient()
  
  const { data, error } = await supabase
    .from('website_jobs')
    .select('category')
    .eq('is_active', true)

  if (error) {
    console.error('Error fetching job categories:', error)
    return []
  }

  const categories = [...new Set((data || []).map((job) => job.category))]
  return categories.sort()
}

// Get unique locations from all jobs
export async function getJobLocations(): Promise<string[]> {
  const supabase = createServerClient()
  
  const { data, error } = await supabase
    .from('website_jobs')
    .select('location')
    .eq('is_active', true)

  if (error) {
    console.error('Error fetching job locations:', error)
    return []
  }

  const locations = [...new Set((data || []).map((job) => job.location))]
  return locations.sort()
}
