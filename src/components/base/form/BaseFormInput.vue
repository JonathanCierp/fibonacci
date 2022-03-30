<template>
  <div>
    <label class="block font-medium text-gray-700">
      {{ label }}
    </label>
    <input
      v-model="value"
      :type="type"
      class="mt-1 py-2 px-2 focus:ring-indigo-500 focus:border-indigo-500 block w-32 shadow-sm border-gray-800 border rounded-md"
      @update:model-value="$emit('update:modelValue', value)"
    />
  </div>
</template>

<script setup>
import { ref } from 'vue'

const props = defineProps({
  label: {
    type: String,
    default: '',
  },
  type: {
    type: String,
    default: 'text',
  },
  modelValue: {
    type: [String, Number],
    default: '',
  },
})
defineEmits(['update:modelValue'])

const value = ref(props.modelValue)
</script>
