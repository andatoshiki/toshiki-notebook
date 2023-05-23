<script setup lang="ts">
import { VPDocAsideSponsors } from 'vitepress/theme'

const data = [
    {
        items: [
            {
                img: 'https://jsd.toshiki.dev/gh/andatoshiki/toshiki-notebook@master/assets/logo/sponsor/telegram.pngg',
            },
        ],
    },
]
</script>

<template>
    <VPDocAsideSponsors :data="data" />
</template>

<style>
.vp-sponsor-grid.medium .vp-sponsor-grid-image {
    max-height: 90px;
}
</style>
