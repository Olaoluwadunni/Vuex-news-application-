<template>
    <div class="news-container">
      <div class="news-card" v-for='(Item,id) in news' :key='id' >
          <img :src='Item.UrlTOImage'>
          <h3>{{Item.title}}</h3>
          <p>{{Item.description}}</p>
          <a :href='Item.url'><p>Read more...</p></a>
      </div>
  </div>
</template>

<script>
export default {

    name: 'Newsitem',
    data() {
        return {
            news: [],
        }
    }
}
</script>

<style>

</style>