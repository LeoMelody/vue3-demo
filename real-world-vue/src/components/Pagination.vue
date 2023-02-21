<template>
  <div class="pagination">
    <router-link
      class="prev"
      rel="prev"
      v-if="showPre"
      :to="{ name: 'EventListView', query: { page: props.curPage - 1 } }"
    >
      pre
    </router-link>
    <router-link
      class="next"
      rel="next"
      v-if="showNext"
      :to="{ name: 'EventListView', query: { page: props.curPage + 1 } }"
    >
      next
    </router-link>
  </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue'

const props = defineProps({
  curPage: {
    type: Number,
    default: 1,
  },
  pageSize: {
    type: Number,
    default: 10,
  },
  total: {
    type: Number,
    default: 0,
  },
})

const showPre = computed(() => props.curPage > 1)

const showNext = computed(() => props.curPage < props.total / props.pageSize)
</script>

<style scoped>
pagination {
  display: flex;
  width: 290px;
}
.pagination a {
  flex: 1;
  text-decoration: none;
  color: #2c3e50;
}

.prev {
  text-align: left;
}

.next {
  text-align: right;
}
</style>
