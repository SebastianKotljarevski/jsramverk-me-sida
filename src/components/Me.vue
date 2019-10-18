<template>
<main>
    <Nav />
    <h1 id="text">Jag</h1>
    <p id="text">Mitt namn är Sebastian Kullander. Jag är 22 år gammal och kommer ifrån en liten ort utanför stockholm.
    När jag inte pluggar gillar jag att sitta framför datorn, umgås med vänner och kolla fotboll, främst serieledargårdens IF(Djurgården).
    Välkommen till min Me-sida.</p>

    <img src="../assets/serbberg.jpg" width="300">
</main>
</template>

<script>
import Nav from './Nav.vue'

export default {
  name: 'Me',
  props: { },
  components: {
      Nav,
  },
  data() {
    return {
        text: ""
    }
  },
  mounted() {
    this.getMe();
  },
  methods: {
    getMe() {
      let that = this;
      fetch("https://me-api.jsramverk.me")
      .then(function(response) {
          return response.json();
      })
      .then(function(result) {
          that.text = result.description;
      });
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
p, h1, h2 {
    color: #373D3F;
}

h1, h2, h3, h4 {
    color: black;
    padding-bottom: 20px;
}

img {
    border-radius: 50%;
    display: block;
    margin-left: auto;
    margin-right: auto;
    margin-top: 75px;
    box-shadow: 0 8px 6px -6px black;

}
</style>
