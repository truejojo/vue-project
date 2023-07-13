<script setup>
import LinkView from './common/LinkView.vue'
</script>

<template>
  <header class="bg-dark text-white border-bottom">
    <nav class="navbar navbar-expand-md navbar-dark bg-dark">
      <div class="container">
        <LinkView classNames="navbar-brand text-uppercase text-lighter" to="/"
          >Vue Projekt</LinkView>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <LinkView classNames="nav-link" to="/">Home</LinkView>
            </li>
            <li class="nav-item">
              <LinkView classNames="nav-link" to="/todos">Todos</LinkView>
            </li>
            <li class="nav-item">
              <LinkView classNames="nav-link" to="/products">Products</LinkView>
            </li>
            <li class="nav-item">
              <LinkView classNames="nav-link" to="/todos2">Todos2</LinkView>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
</template>
