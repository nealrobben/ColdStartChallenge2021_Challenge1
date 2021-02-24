<script>
import CardContent from '@/components/card-content.vue';

export default {
  name: 'CatalogList',
  props: {
    icecreams: {
      type: Array,
      default: () => [],
    },
    errorMessage: {
      type: String,
      default: () => '',
    },
  },
  components: {
    CardContent,
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
  <div>
    <div v-if="errorMessage">{{ errorMessage }}</div>
    <div v-if="!icecreams.length && !errorMessage">
      Loading data ...
    </div>
    <div class="container">
      <div
        v-for="(icecream) in icecreams"
        :key="icecream.Id"
        role="presentation"
      >
        <div class="card">
          <CardContent
            :name="icecream.Name"
            :description="icecream.Description"
            :imageurl="icecream.ImageUrl"
          />
		  <div v-if="user.userDetails">
			<a href="/" >Buy></a>
		  </div>
        </div>
      </div>
    </div>
  </div>
</template>
