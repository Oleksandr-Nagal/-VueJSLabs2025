<script setup>
import { ref } from 'vue'
import Overview from './tabs/Overview.vue'
import Activity from './tabs/Activity.vue'

const currentTab = ref('overview')
const tabs = [
  { id: 'overview', label: 'Overview', component: Overview },
  { id: 'activity', label: 'Activity', component: Activity }
]
</script>

<template>
  <div>
    <h2>Dashboard</h2>
    <div class="tabs">
      <button
        v-for="tab in tabs"
        :key="tab.id"
        class="tab-btn"
        :class="{ active: currentTab === tab.id }"
        @click="currentTab = tab.id"
      >
        {{ tab.label }}
      </button>
    </div>

    <KeepAlive include="Overview,Activity" max="2">
      <component
        :is="tabs.find(t => t.id === currentTab)?.component"
      />
    </KeepAlive>
  </div>
</template>

<style scoped>
.tabs {
  display: flex;
  gap: 8px;
  margin-bottom: 10px;
}
.tab-btn {
  padding: 6px 10px;
  border-radius: 9999px;
  border: 1px solid #d1d5db;
  background: white;
}
.tab-btn.active {
  background: #2563eb;
  border-color: #2563eb;
  color: white;
}
</style>
