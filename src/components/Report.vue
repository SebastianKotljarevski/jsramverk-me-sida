<template>
<main>
    <Nav />
    <h2 id="text">{{ $route.params.kmom }}</h2>
    <div id="text">
        <a href="https://github.com/SebastianKotljarevski/jsramverk-me-sida">https://github.com/SebastianKotljarevski/jsramverk-me-sida</a>
        <h4>Hur startar jag me-sidan?</h4>
        <p>1, Klona repot.</p>
        <p>2, Kör 'npm install'</p>
        <p>3, npm run serve</p>
    </div>
</main>

</template>

<script>
import Nav from './Nav.vue'

export default {
  name: 'Report',
  components: {
    Nav,
  },
  data() {
    return {
      questions: [],
    }
  },
  mounted() {
    this.getText(this.$route.params.kmom);
  },
  methods: {
    getText(kmom) {
      let that = this;
      that.text = "";
      fetch("https://me-api.jsramverk.me/reports/" + kmom)
      .then(function(response) {
          return response.json();
      })
      .then(function(result) {
          that.questions = result.data.map((question, index) => {
            return {
              key: index,
              question: question.question,
              answer: question.answer
            };
          });
      });
    }

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h2 {
  text-transform: uppercase;
}

.question {
  margin-bottom: 2em;
}

p, h1, h2, h3, h4 {
    color: #373D3F;
}

h1, h2, h3, h4 {
    color: black;
    padding-bottom: 20px;
}
</style>
