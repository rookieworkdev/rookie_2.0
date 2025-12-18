'use client'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { sectionContainer, sectionWrapper } from '@/lib/utils'
import { Mail, MapPin, Phone } from 'lucide-react'
import { motion } from 'motion/react'
import { useState } from 'react'

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')

    // TODO: Implement actual form submission
    // For now, simulate an API call
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000))
      setSubmitStatus('success')
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
      })
    } catch (error) {
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  return (
    <section className={sectionWrapper('bg-background')}>
      <div className={sectionContainer()}>
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Contact Details */}
          <motion.div
            initial={{ opacity: 0, filter: 'blur(12px)' }}
            whileInView={{ opacity: 1, filter: 'blur(0px)' }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="space-y-8"
          >
            <div>
              <h2 className="mb-4 text-3xl font-medium md:text-3xl lg:text-4xl">
                Kan vi hjälpa dig?
              </h2>
              <p className="text-muted-foreground text-lg">
                Kontakta oss så berättar vi gärna mer om hur vi matchar unga talanger med rätt
                företag.
              </p>
            </div>

            <div className="space-y-6">
              <h3 className="text-2xl font-medium tracking-tight">Kontaktuppgifter</h3>

              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="bg-primary/10 flex h-14 w-14 shrink-0 items-center justify-center rounded-lg">
                    <MapPin className="text-primary h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="mb-0 font-semibold">Adress</h4>
                    <p className="text-muted-foreground">
                      Drottninggatan 32, 8tr, 111 51 Stockholm
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="bg-primary/10 flex h-14 w-14 shrink-0 items-center justify-center rounded-lg">
                    <Mail className="text-primary h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="mb-0 font-semibold">E-post</h4>
                    <a
                      href="mailto:info@rookiework.se"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      info@rookiework.se
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="bg-primary/10 flex h-14 w-14 shrink-0 items-center justify-center rounded-lg">
                    <Phone className="text-primary h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="mb-0 font-semibold">Telefon</h4>
                    <a
                      href="tel:+4610129600"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      010 129 60 00
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, filter: 'blur(12px)' }}
            whileInView={{ opacity: 1, filter: 'blur(0px)' }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.1 }}
            className="bg-card border-border rounded-lg border p-8 shadow-xs"
          >
            <h3 className="mb-6 text-2xl font-medium tracking-tight">Skicka ett meddelande</h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="name">
                  Namn <span className="text-destructive">*</span>
                </Label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Ditt för- och efternamn"
                />
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="email">
                    E-post <span className="text-destructive">*</span>
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="din@email.se"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone">Telefon</Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="070-123 45 67"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="subject">
                  Ämne <span className="text-destructive">*</span>
                </Label>
                <select
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="border-input bg-background ring-offset-background placeholder:text-muted-foreground focus-visible:ring-ring flex h-10 w-full rounded-md border px-3 py-2 text-sm file:border-0 file:bg-transparent file:text-sm file:font-medium focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50"
                >
                  <option value="">Välj ett ämne</option>
                  <option value="jobseeker">Jag söker jobb</option>
                  <option value="employer">Jag vill rekrytera</option>
                  <option value="partnership">Samarbete</option>
                  <option value="other">Övrigt</option>
                </select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">
                  Meddelande <span className="text-destructive">*</span>
                </Label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  placeholder="Berätta hur vi kan hjälpa dig..."
                  rows={6}
                />
              </div>

              {submitStatus === 'success' && (
                <div className="rounded-md bg-green-50 p-4 text-sm text-green-800 dark:bg-green-950 dark:text-green-200">
                  Tack för ditt meddelande! Vi återkommer så snart vi kan.
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="bg-destructive/10 text-destructive rounded-md p-4 text-sm">
                  Något gick fel. Försök igen eller kontakta oss via telefon eller e-post.
                </div>
              )}

              <Button type="submit" className="w-full" disabled={isSubmitting}>
                {isSubmitting ? 'Skickar...' : 'Skicka meddelande'}
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
