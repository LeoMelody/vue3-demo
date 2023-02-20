<template>
  <div v-if="event">
    <h1>{{ event.title }}</h1>
    <p>{{ event.time }} on {{ event.date }} @ {{ event.location }}</p>
    <p>{{ event.description }}</p>
  </div>
</template>

<script setup lang="ts">
import { getEvent, type Event } from '@/api/event'
import { onMounted, ref } from 'vue'

const props = defineProps({
  id: {
    required: true,
  },
})

const event = ref<Event | null>(null)

onMounted(() => {
  getEvent(Number(props.id)).then((res) => {
    event.value = res
  })
})
</script>

<style scoped></style>
