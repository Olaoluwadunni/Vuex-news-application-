<template>
  <div class="home">
    <div class="container">
      <div class="card" v-for='item in getNewsItems' :key='item.id' >
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
  name: 'Home',
  data()  {
    return {
      news: []
    }
  },
  components: {
  },

  // watch: {
  //   '$route.query': {
  //     handler: function(value) {
  //       const {param : { category } } = this.$route
  //       const source = value.source;
  //       this.fetchNewsItems({category, source})
  //     }
    // }
  mounted() {
    // console.log(this.route)
    // const {params:{ category}} = this.$route
    this.fetchNewsItems()
  },
  computed: {
    ...mapGetters(['getNewsItems', 'getAllSources'])
  },
  methods: {
    ...mapActions(['fetchNewsItems'])
  }

}
</script>

<style>
 .container {
    display: grid;
    grid-template-columns: auto auto auto ;
    grid-gap: 40px;
    /* background-color: #F1D2E6; */
    padding: 60px;
  }
  /* .container:hover .card{
    filter:blur(1px);
    opacity:.5;
    transform: scale(.90);
    box-shadow:none;
  } */
  .container:hover .card:hover{
      transform:scale(1);
      filter:blur(0px);
      opacity:1;
      /* box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px; */
      cursor: pointer;
      transform: scale(.90);
  }
  .card {
    padding: 45px ;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
     border-radius:3px;
    transition:.2s all; 
    border:1px solid #d6d6d6;
    background-color: white;
    height: 628px;
    width: 578px;
  }
  img {
    width: 70%;
    /* height: 88%; */
  }
  .card h3 {
    font-size:22px;
    font-weight: 500;
    text-transform: uppercase;
    color: #ff8d55;
    margin-bottom: 22px;
  }
  .card h2  {
    font-size: 38px;
    font-weight: 400;
  }
  .card p {
    font-size: 20px;
    margin-top: 16px;
    line-height: 1.3;
  }
  .btn  {
    width: 140px;
    height: 40px;
    margin-top: 15px;
    border: none;
    background-color:#ff8d55 ;
    
  }
  .btn a {
    text-decoration: none;
    color: white;
    font-family: Roboto;
    font-size: 18px;
  }
  .italics {
    font-style: italic;
  }
</style>
