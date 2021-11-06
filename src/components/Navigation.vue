<template>
  <div class="hello">
    <div class='intro'>
      <div class='icons'>
        <ion-icon name="logo-twitter" size="large" class='twitter'></ion-icon>
        <ion-icon name="logo-facebook" size="large" class='facebook'></ion-icon>
        <ion-icon name="logo-instagram" size="large" class='instagram'></ion-icon>
      </div>
      <div class='register'>
        <p>Want to join our newsletter?</p>
        <button  type='btn' class='reg-btn'>Register</button>
      </div>
    </div>
    <nav>
      <div class="logo">
        <img src="" alt="">
        NewsUpdate.NG
      </div>
    <div>
      <ul>
        <li><router-link to="/">Home</router-link></li>
        <li><router-link :to="{name:'Category', params:{category:'business'}}">Business</router-link></li>
        <li><router-link :to="{name:'Category', params:{category:'entertainment'}}">Entertainment</router-link></li>
        <li><router-link :to="{name:'Category', params:{category:'health'}}">Health</router-link></li>        
        <!-- <li><router-link to="/science-news">Science</router-link></li> -->
        <li><router-link :to="{name:'Category', params:{category:'sports'}}">Sports</router-link></li>
        <li><router-link :to="{name:'Category', params:{category:'technology'}}">Technology</router-link></li>
      </ul>
    </div>
  </nav>
  </div>
</template>

<script>
export default {
  name: 'Navbar',
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
.intro {
      display: flex;
    justify-content: space-between;
      background-color: #03624A; 
      padding: 20px 60px;

}
.intro p {
  font-size: 18px;
}
ul {
  list-style-type: none;
  padding: 0;
  font-size: 20px;
}
li {
  display: inline-block;
  margin-right:  30px;
}
a {
  color: black;
  /* color: #42b983; */
  text-decoration: none;
}
nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 25px;
    height: 100px;
    color: black;
    background-color: rgb(248, 240, 240);
    padding: 20px 60px;
}
ion-icon {
  margin-right: 20px;
}
.register {
      display: flex;
      align-items: center ;
}
.reg-btn {
    margin-left: 30px;
    width: 140px;
    height: 40px;
    color: #03624A;
    font-size:18px;
    font-weight: 500;
    cursor: pointer;
    }
</style>
