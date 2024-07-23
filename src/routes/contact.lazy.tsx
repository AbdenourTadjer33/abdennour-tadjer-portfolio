import { createLazyFileRoute } from '@tanstack/react-router'
import contact from '@/pages/contact'

export const Route = createLazyFileRoute('/contact')({
  component: contact
})