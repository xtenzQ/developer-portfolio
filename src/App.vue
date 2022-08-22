<template>
  <div
    class="scrollspy-example"
    data-bs-offset="0"
    data-bs-spy="scroll"
    data-bs-target="#main-nav"
    tabindex="0"
  >
    <!-- App header -->
    <MenuVue />

    <!-- Render active component contents with vue transition -->
    <transition name="fade" mode="out-in">
      <router-view :theme="appTheme" />
    </transition>

    <!-- Scroll to top -->
    <back-to-top
      visibleoffset="500"
      right="30px"
      bottom="20px"
      class="shadow-lg"
    >
      <i data-feather="chevron-up"></i>
    </back-to-top>

    <!-- App footer -->
    <FooterVue />
  </div>
</template>
<script>
import MenuVue from "./components/shared/AppMenu.vue";
import FooterVue from "./components/shared/AppFooter.vue";

export default {
  components: {
    MenuVue,
    FooterVue,
  },
  data: () => {
    return {
      appTheme: localStorage.getItem("theme"),
    };
  },
};
</script>
<style lang="scss">
html {
  scroll-behavior: smooth;
}

body {
  position: relative;
  font-family: $default-family;
  font-size: $default-font-size;
}

::-webkit-scrollbar {
  width: 9px;
}

::-webkit-scrollbar-thumb {
  background: #363636;
}

::-webkit-scrollbar-track {
  background: #fff;
}

.btn {
  border-width: 1px;
  cursor: pointer;
  justify-content: center;
  padding: calc(0.5em - 1px) 1em;
  text-align: center;
  white-space: nowrap;
  -webkit-appearance: none;
  align-items: center;
  border-radius: 4px;
  box-shadow: none;
  display: inline-flex;
  font-size: 1rem;
  height: 2.5em;
  line-height: 1.5;
  position: relative;
  vertical-align: top;
}

.btn-primary {
  color: white;
}

a,
a:active,
a:visited {
  text-decoration: none !important;
}
</style>
