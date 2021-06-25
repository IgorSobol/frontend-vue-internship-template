<template>
  <div id="app">
    <div id="nav">
      <h2>Stubs components</h2>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/empty">Empty</router-link> |
      <router-link to="/404">404</router-link>
    </div>
    <router-view />
  </div>
</template>
