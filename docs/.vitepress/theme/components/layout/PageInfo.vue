<script setup lang="ts">
import { computed, ref } from 'vue'
import { useData } from 'vitepress'
import { getDate, getFromNow } from '../../utils'

defineProps<{
    readTime: string
    words: string
}>()
const defaultAuthor = 'Anda Toshiki'
const author = ref(defaultAuthor)
const { frontmatter, page } = useData()

const publishedTime = getDate(frontmatter.value?.date)

if (frontmatter.value?.author) author.value = frontmatter.value?.author

const lastUpdatedDate = computed(() => new Date(page.value.lastUpdated!))
const isoDatetime = computed(() => lastUpdatedDate.value.toISOString())
const timeFormNow = getFromNow(isoDatetime.value)
</script>

<template>
    <div>
        <section
            class="border-b-1 border-[var(--vp-c-divider)] w-full border-b-solid mt-[24px] pb-[12px] flex gap-[12px] mb-[12px] flex-wrap max-w-[85%]"
        >
            <div class="flex gap-[4px] items-center">
                <octicon:feed-person-16 />
                Author:<span>
                    {{ author }}
                </span>
            </div>
            <div v-if="publishedTime" class="flex gap-[4px] items-center">
                <eos-icons:modified-date />
                Published:<span>{{ publishedTime }}</span>
            </div>
            <div class="flex gap-[4px] items-center">
                <radix-icons:update />
                Updated:<span>{{ timeFormNow }}</span>
            </div>
            <div class="flex gap-[4px] items-center">
                <bi:file-earmark-word-fill />
                Words:<span>{{ words }}</span>
            </div>
            <div class="flex gap-[4px] items-center">
                <ooui:clock />
                Reading:<span>{{ readTime }} min</span>
            </div>
        </section>
    </div>
</template>
