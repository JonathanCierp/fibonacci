<template>
  <table>
    <thead>
      <tr>
        <th
          v-for="item in items"
          :key="item"
          class="p-4 border border-gray-300 whitespace-nowrap"
        >
          {{ item.key }}
        </th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td
          v-for="item in items"
          :key="item"
          class="p-4 border border-gray-300 whitespace-nowrap"
          :class="[item.isDivisibleBy3 ? 'font-bold' : '']"
        >
          {{ item.value }}
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script setup>
defineProps({
  items: {
    type: Array,
    required: true,
  },
})
</script>
