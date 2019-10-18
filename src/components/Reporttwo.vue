<template>
<main>
    <Nav />
    <h2 id="text">KMOM02</h2>
    <div id="text">
        <a href="https://github.com/SebastianKotljarevski/jsramverk-me-sida">https://github.com/SebastianKotljarevski/jsramverk-me-sida</a>
        <h4>inspiration</h4>
        <p>Jag började att läsa igenom artikeln "Designing The Perfect Date And Time Picker" samt kolla igenom Dribble
        lite snabbt. När jag läste igenom artikeln så insåg jag att jag bara ville bygga en simpel datepicker med så lite klick
        som möjligt, då jag anser att det inte behövdes någon avancerad som om man skulle tex boka en resa. Sedan så valde jag att kolla igenom lite
        olika registreringsformulär ifrån hemsidor jag använder ofta som tex facebook, reddit, gmail osv. Jag tyckte att facebook hade en väldigt simpel
        datepicker och försökte bygga en som liknade deras. Det blev totalt 3 klick för att fylla i datepickern vilket jag nöjde mig med.</p>
    </div>
</main>

</template>

<script>
import Nav from './Nav.vue'

export default {
  name: 'Reporttwo',
  components: {
    Nav,
  },
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
