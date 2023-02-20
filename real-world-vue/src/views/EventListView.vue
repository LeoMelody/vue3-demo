<script lang="ts" setup>
import { onMounted, ref } from 'vue'
import EventCard from '@/components/EventCard.vue'
import { getEvents, type Event } from '@/api/event'

const events = ref<Event[]>([])

onMounted(() => {
  getEvents().then((res) => {
    events.value = res
  })
})
</script>

<template>
  <main>
    <div class="events">
      <EventCard v-for="event in events" :key="event.id" :event="event" />
    </div>
  </main>
</template>

<style>
.events {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
