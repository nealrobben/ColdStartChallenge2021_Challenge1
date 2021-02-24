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
        },
		
	placeOrder: function (icecreamId) {
      // `this` inside methods points to the Vue instance
      //alert('Icecream id: ' + icecreamId + '!');
	  
		var xhr = new XMLHttpRequest();
		xhr.open("POST", '/api/orders', true);

		//Send the proper header information along with the request
		xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

		xhr.onreadystatechange = function() { // Call a function when the state changes.
			if (this.readyState === XMLHttpRequest.DONE && this.status === 200) {
				// Request finished. Do processing here.
			}
		}
		xhr.send("icecreamid="+icecreamId);	  
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
		  <div v-if="user && user.userDetails">
			<button v-on:click="placeOrder(icecream.Id)">Buy</button>
		  </div>
        </div>
      </div>
    </div>
  </div>
</template>
