<template>
  <div class="app-container">
    <h1 class="main-title">To-Do List</h1>

    <div class="counters-container">
      <span
        >Всього: <span class="counter-value">{{ totalTasks }}</span></span
      >
      <span
        >Активних: <span class="counter-value">{{ activeTasks }}</span></span
      >
      <span
        >Виконаних: <span class="counter-value">{{ completedTasks }}</span></span
      >
    </div>

    <AddTaskForm @add-task="addTask" />
    <FilterPanel :filters="filters" @update-filters="updateFilters" @clear-filters="clearFilters" />
    <TaskList :tasks="paginatedTasks" @toggle-status="toggleTaskStatus" @delete-task="deleteTask" />
    <Pagination :currentPage="currentPage" :totalPages="totalPages" @change-page="changePage" />
  </div>
</template>

<script setup>
import { ref, computed, watch, onMounted } from 'vue'
import AddTaskForm from './components/AddTaskForm.vue'
import FilterPanel from './components/FilterPanel.vue'
import TaskList from './components/TaskList.vue'
import Pagination from './components/Pagination.vue'

const tasks = ref([])
const filters = ref({
  title: '',
  description: '',
  status: 'all',
  priority: 'all',
  dateFrom: null,
  dateTo: null,
})

const addTask = (title, description, priority) => {
  if (title.trim() === '') return
  const newTask = {
    id: Date.now(),
    title,
    description,
    status: 'active',
    createdAt: new Date().toISOString(),
    priority,
  }
  tasks.value.unshift(newTask)
}

const toggleTaskStatus = (id) => {
  const task = tasks.value.find((t) => t.id === id)
  if (task) {
    task.status = task.status === 'active' ? 'done' : 'active'
  }
}

const deleteTask = (id) => {
  tasks.value = tasks.value.filter((t) => t.id !== id)
}

const totalTasks = computed(() => tasks.value.length)
const activeTasks = computed(() => tasks.value.filter((t) => t.status === 'active').length)
const completedTasks = computed(() => tasks.value.filter((t) => t.status === 'done').length)

const filteredTasks = computed(() => {
  const { title, description, status, priority } = filters.value
  return tasks.value.filter((task) => {
    const matchesTitle = title === '' || task.title?.toLowerCase().includes(title.toLowerCase())
    const matchesDescription =
      description === '' || task.description?.toLowerCase().includes(description.toLowerCase())
    const matchesStatus = status === 'all' || task.status === status
    const matchesPriority = priority === 'all' || task.priority === priority

    return matchesTitle && matchesDescription && matchesStatus && matchesPriority
  })
})

const itemsPerPage = 5
const currentPage = ref(1)
const totalPages = computed(() => Math.ceil(filteredTasks.value.length / itemsPerPage))
const paginatedTasks = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage
  const end = start + itemsPerPage
  return filteredTasks.value.slice(start, end)
})
const changePage = (page) => {
  if (page >= 1 && page <= totalPages.value) {
    currentPage.value = page
  }
}

const updateFilters = (newFilters) => {
  filters.value = { ...filters.value, ...newFilters }
  currentPage.value = 1
}

const clearFilters = () => {
  filters.value = {
    title: '',
    description: '',
    status: 'all',
    priority: 'all',
    dateFrom: null,
    dateTo: null,
  }
}

onMounted(() => {
  const storedTasks = localStorage.getItem('tasks')
  if (storedTasks) {
    tasks.value = JSON.parse(storedTasks)
  }
})
watch(
  tasks,
  (newTasks) => {
    localStorage.setItem('tasks', JSON.stringify(newTasks))
  },
  { deep: true },
)
</script>
