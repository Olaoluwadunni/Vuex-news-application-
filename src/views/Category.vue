<template>
  <div class="home">
    <div class="container">
      <div class="card" v-for='item in getAllCategory' :key='item.id' >
        <!-- <img :src="item.urlToImage"/> -->
        <h3>{{item.source.name}}</h3>
        <h2>{{item.title}}</h2>
        <p>{{item.description}}</p>
        <button class='btn'> <a :href="item.url">Read more...</a></button>
        <p class='italics'>{{item.author}}, {{item.publishedAt}}</p>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import {mapActions, mapGetters} from 'vuex';

export default {
  name: 'Category',
  components: {
  },

  watch: {
    '$route.params.category': function (category) {
			this.fetchAllCategories(category)
		}
  },
  mounted() {
    const category = this.$route.params.category
    console.log(category)
    // const {params:{ category}} = this.$route
    this.fetchAllCategories(category)
  },
  computed: {
    ...mapGetters(['getAllCategory'])
  },
  methods: {
    ...mapActions(['fetchAllCategories'])
  }
  }
</script>
