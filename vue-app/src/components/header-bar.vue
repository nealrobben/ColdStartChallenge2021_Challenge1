<script>
import HeaderBarBrand from '@/components/header-bar-brand.vue';

export default {
  name: 'HeaderBar',
  components: {
    HeaderBarBrand,
  },
  data() {
    return {
		user: ''
    };
  },
  async created() {
    await this.getUser();
  },
  methods: {
	async  getUser() {
         const response = await fetch("/.auth/me");
         const payload = await response.json();
         const { clientPrincipal } = payload;
         this.user = clientPrincipal;
        }
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
		  <div v-if="user.userDetails">
			<p>User: {{ user.userDetails }}</p>
		  </div>
		  &nbsp;
		  <div v-if="user && user.userDetails">
			<a href="/.auth/logout">Log out</a>
		  </div>
		  <div v-else>
			<a href="/.auth/login/github">Login</a>
		  </div>
        </div>
      </div>
    </nav>
  </header>
</template>
