<template>
  <main class="m-8">
    <h1 class="text-3xl font-bold">Calcul de la suite de Fibonacci</h1>
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
    <form>
      <BaseFormInput label="Entrez un nombre" type="number" />
    </form>
  </main>
</template>

<script setup>
import BaseFormInput from '@/components/base/form/BaseFormInput.vue'
</script>
