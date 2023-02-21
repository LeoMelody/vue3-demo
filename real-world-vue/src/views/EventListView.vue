<script lang="ts" setup>
import {onMounted, ref, watch} from 'vue'
import { getEvents, type Event } from '@/api/event'
import EventCard from '@/components/EventCard.vue'
import Pagination from '@/components/Pagination.vue'

const props = defineProps({
  page: {
    type: Number,
    default: 1
  }
})

const events = ref<Event[]>([])
const pageSize = ref(2);
const totalPage = ref(0);

const getEventsPage = async () => {
  const {
    data,
    total
  } = await getEvents(pageSize.value, props.page)

  events.value = data
  totalPage.value = total
}

onMounted(getEventsPage);

watch(() => props.page, getEventsPage)
</script>

<template>
  <main>
    <div class="events">
      <EventCard v-for="event in events" :key="event.id" :event="event" />
    </div>
    <Pagination
        :cur-page="props.page"
        :page-size="pageSize"
        :total="totalPage"
    />
  </main>
</template>

<style>
.events {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
