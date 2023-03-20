import type { VerticalNavItems } from '@/@layouts/types'

export default [
  {
    title: 'Home',
    to: { name: 'index' },
    icon: { icon: 'tabler-smart-home' },
  },
  {
    title: 'Chat',
    icon: { icon: 'tabler-message' },
    to: 'apps-chat',
  },
] as VerticalNavItems
