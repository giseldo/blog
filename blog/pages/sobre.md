---
layout: page
aside: false
sidebar: false
---
<script setup>
import {
  VPTeamPage,
  VPTeamPageTitle,
  VPTeamMembers
} from 'vitepress/theme'

const members = [
  {
    avatar: 'https://avatars.githubusercontent.com/u/1112941?v=4',
    name: 'Giseldo Neo',
    title: 'Criador',
    links: [
      { icon: 'github', link: 'https://github.com/giseldo' },
      { icon: 'twitter', link: 'https://x.com/@giseldoneo' }
    ]
  },
]
</script>

<VPTeamPage>
  <VPTeamPageTitle>
    <template #title>
      Nosso Time
    </template>
  </VPTeamPageTitle>
  <VPTeamMembers
    :members="members"
  />
</VPTeamPage>