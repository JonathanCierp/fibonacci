<template>
  <div>
    <label class="block text-sm font-medium text-gray-700">
      {{ label }}
    </label>
    <input
      :type="type"
      class="mt-1 py-2 px-2 focus:ring-indigo-500 focus:border-indigo-500 block w-64 shadow-sm sm:text-sm border-gray-800 border rounded-md"
    />
  </div>
</template>

<script setup>
defineProps({
  label: {
    type: String,
    default: '',
  },
  type: {
    type: String,
    default: 'text',
  },
})
</script>
