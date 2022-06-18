<template>
  <header>
    <div class="logo-wrapper">
      <img
        alt="Todo App Intro Illustration"
        class="intro-illustration"
        src="../assets/young-man-holding-chin-and-taking-notes-in-notebook.png"
        width="200"
      />
      <img
        alt="Vue logo"
        class="logo"
        src="../assets/logo.svg"
        width="125"
        height="125"
      />
    </div>

    <div class="wrapper">
      <div class="greetings">
        <h1 class="green">Tada 🎉 App</h1>
        <h3>My First Vue 3 Project!</h3>
      </div>
    </div>
  </header>
</template>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}

.greetings h1 {
  font-family: "Craftwork Grotesk", system-ui, sans-serif;
  font-weight: 700;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>
