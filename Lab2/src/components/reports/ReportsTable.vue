<script setup>
defineProps({
  items: {
    type: Array,
    default: () => []
  }
})
</script>

<template>
  <table class="table">
    <thead>
      <tr>
        <th class="col">ID</th>
        <th class="col">Title</th>
        <th class="col">Status</th>
      </tr>
    </thead>
    <tbody>
      <slot
        name="row"
        v-for="item in items"
        :key="item.id"
        :item="item"
      />
    </tbody>
  </table>
</template>

<style scoped>
.table {
  width: 100%;
  border-collapse: collapse;
  background: white;
}
th, td {
  padding: 8px 10px;
  border-bottom: 1px solid #e5e7eb;
  text-align: left;
}
thead {
  background: #f9fafb;
}
</style>
