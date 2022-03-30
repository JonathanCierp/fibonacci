<template>
  <main class="m-8">
    <!-- Title of page -->
    <h1 class="text-3xl font-bold mb-4">Calcul de la suite de Fibonacci</h1>
    <!-- Rules -->
    <div class="mb-8">
      <h3 class="text-xl font-medium">Consignes :</h3>
      <ul class="ml-8 mt-2">
        <li class="list-disc">Demander a l’utilisateur un nombre</li>
        <li class="list-disc">
          Afficher la suite de Fibonacci jusqu’à ce nombre exclu
        </li>
        <li class="list-disc">
          Et tout les multiples de 3 doivent mis en gras
        </li>
      </ul>
      <p class="mt-2">Le tout en web app avec les techno de ton choix.</p>
    </div>
    <!-- Form -->
    <form class="mb-8">
      <BaseFormInput
        v-model.number="chosenNumber"
        label="Entrez un nombre"
        type="number"
        @keyup="calculateFibonaccyNumbers"
      />
    </form>
    <!-- Results -->
    <div v-if="results.length" class="mb-8">
      <h3 class="text-xl font-medium mb-1">
        Suite de fibonacci pour le nombre <strong>{{ chosenNumber }}</strong> :
      </h3>
      <BaseTable :items="results" />
    </div>
    <!-- If no results can be calculated -->
    <div v-else class="mb-8">
      <h3 class="text-xl font-medium">Aucune suite trouvée.</h3>
    </div>
  </main>
</template>

<script setup>
import BaseTable from '@/components/base/BaseTable.vue'
import BaseFormInput from '@/components/base/form/BaseFormInput.vue'
import { onMounted, ref } from 'vue'

// Number chosen by user | number
const chosenNumber = ref()
// Result of fibonaccy | array<number>
const results = ref([])

/**
 * Calculate Fibonaccy number and put them in @var results
 * Expression : Fn = Fn-1 + Fn-2 for n >= 2
 * @returns void
 */
const calculateFibonaccyNumbers = () => {
  // Reset array
  results.value = []
  for (let i = 0; i < chosenNumber.value; i++) {
    // Fn = Fn-1 + Fn-2
    let calculatedNumber =
      results.value[i - 1]?.value + results.value[i - 2]?.value

    // F0 = 0
    if (i === 0) {
      calculatedNumber = 0
    }
    // F1 = 1
    if (i === 1) {
      calculatedNumber = 1
    }

    results.value = [
      ...results.value,
      {
        key: `F(${i})`,
        value: calculatedNumber,
        isDivisibleBy3: calculatedNumber % 3 === 0,
      },
    ]
  }
}

onMounted(() => {
  // Calculate Fibonaccy number of chosen number on start
  calculateFibonaccyNumbers()
})
</script>
