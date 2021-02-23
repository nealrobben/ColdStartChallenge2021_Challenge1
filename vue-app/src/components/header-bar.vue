<script>
import HeaderBarBrand from '@/components/header-bar-brand.vue';

export default {
  name: 'HeaderBar',
  components: {
    HeaderBarBrand,
  },
  data() {
    return {
    };
  },
  methods: {
  },
};
</script>

<template>
  <header>
    <nav class="navbar is-white" role="navigation" aria-label="main navigation">
      <HeaderBarBrand></HeaderBarBrand>
      <div class="navbar-menu">
        <div class="navbar-start">
          <router-link class="navbar-item nav-home" to="/">Home</router-link>
	  <router-link class="navbar-item nav-home" to="/.auth/login/github">Login with Github</router-link>
        </div>
      </div>
    </nav>
  </header>
</template>
