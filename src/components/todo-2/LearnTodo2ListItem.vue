<template>
  <li class="d-flex justify-content-between p-2 mb-2 border rounded">
    <slot name="task"> </slot>

    <div class="buttons">
      <slot name="button-group"></slot>
    </div>
  </li>
</template>
