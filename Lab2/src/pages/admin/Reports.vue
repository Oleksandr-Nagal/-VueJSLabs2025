<script setup>
import { ref } from 'vue'
import ReportsTable from '../../components/reports/ReportsTable.vue'

const reports = ref([
  { id: 1, title: 'Weekly stats', status: 'OK' },
  { id: 2, title: 'Errors overview', status: 'WARN' },
  { id: 3, title: 'Security report', status: 'OK' }
])
</script>

<template>
  <div>
    <h2>Reports</h2>
    <ReportsTable :items="reports">
      <template #row="{ item }">
        <tr>
          <td>{{ item.id }}</td>
          <td>
            <strong>{{ item.title }}</strong>
          </td>
          <td>
            <span
              :class="['badge', item.status === 'OK' ? 'badge-ok' : 'badge-warn']"
            >
              {{ item.status }}
            </span>
          </td>
        </tr>
      </template>
    </ReportsTable>
  </div>
</template>

<style scoped>
.badge {
  padding: 2px 6px;
  border-radius: 999px;
  font-size: 0.8rem;
}
.badge-ok {
  background: #bbf7d0;
  color: #166534;
}
.badge-warn {
  background: #fee2e2;
  color: #b91c1c;
}
</style>
