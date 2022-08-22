<template>
  <nav
    class="navbar navbar-expand-lg navbar-light bg-white fixed-top"
    id="main-nav"
  >
    <div class="container">
      <a class="logo navbar-brand d-flex align-items-center" href="#">
        > # ~ / rusetsk<span class="prim">ii</span>
      </a>
      <button
        aria-controls="navbar4"
        aria-expanded="false"
        aria-label="Toggle navigation"
        class="navbar-toggler"
        data-bs-target="#navbar4"
        data-bs-toggle="collapse"
        type="button"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse bg-white" id="navbar4">
        <ul class="navbar-nav ms-auto">
          <li class="nav-item px-lg-2">
            <a class="nav-link" href="#hero">home</a>
          </li>
          <li class="nav-item px-lg-2">
            <a class="nav-link" href="#skills">skills</a>
          </li>
          <li class="nav-item px-lg-2">
            <a class="nav-link" href="#edu-exp">experience</a>
          </li>
          <li class="nav-item px-lg-2">
            <a class="nav-link" href="#awards">awards</a>
          </li>
          <li class="nav-item px-lg-2">
            <a class="nav-link" href="#projects">projects</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
<script>
export default {
  name: "AppMenu",
};
</script>
<style lang="scss" scoped>
* {
  font-weight: 600;
}

.nav-link.active {
  border-bottom: 2px solid $primary;
}

.prim {
  color: $primary;
}

.logo {
  font-size: 20px;
  display: flex;
  align-items: center;
  text-decoration: none;
  font-weight: bold;
  font-display: auto;
  font-family: monospace, monospace;
}
</style>
