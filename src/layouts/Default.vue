<template>
  <div class="layout">
    <slot/>
  </div>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Koulen&display=swap');

h1, h2, h3, h4, h5, h6 {
  font-family: 'Koulen', cursive;
  margin-block-end: 0.33em;
  margin-block-start: 0.33em;
  letter-spacing: 0.03em;
}

h1 {
  font-size: 3em;
}

h2 {
  font-size: 2.5em;
}

h3 {
  font-size: 2.17em;
}

h4 {
  font-size: 2em;
}

h5 {
  font-size: 1.83em;
}

h6 {
  font-size: 1.67em;
}

body {
  font-family: -apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;
  margin:0;
  padding:0;
  line-height: 1.5;
  color: #212121;
}

.layout {
  max-width: 760px;
  margin: 0 auto;
  padding-left: 20px;
  padding-right: 20px;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-flow: column;
}

a {
  text-decoration: none;
  color: inherit;
}

a:hover {
  text-decoration: underline;
}

.go-back-link {
  text-decoration: none;
  color: #000;
  margin: 5rem auto;
  display: block;
  width: max-content;
}
</style>
