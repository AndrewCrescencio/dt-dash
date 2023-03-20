<template>
  <div class="h-100 d-flex align-center justify-space-between">
    <!-- 👉 Footer: left content -->
    <span class="d-flex align-center">
      &copy;
      {{ new Date().getFullYear() }}
      Teste Duotalk
      <VIcon
        icon="tabler-checks"
        color="success"
        size="1.25rem"
        class="mx-1"
      />

    </span>
  </div>
</template>
