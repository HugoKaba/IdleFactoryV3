<script setup lang="ts">
import '../../types.ts'

defineProps<{ factoryData: Factory }>()

</script>

<template>
    <div>
        <p>ID d'usine: {{ factoryData.id }}</p>
    </div>
</template>