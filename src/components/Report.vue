<template>
<main>
    <Nav />
    <h2 id="text">{{ $route.params.kmom }}</h2>
    <div id="text">
        <p>asdasda</p>
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

p, h1, h2 {
    color: #373D3F;
}
</style>
