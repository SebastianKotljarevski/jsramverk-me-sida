<template>
<main>
    <Nav />
    <div id="text">
        <form>
            <p>Fullständigt namn</p>
            <input id="test" class="input-label" type="text" name="name" pattern="([A-Za-z])+( [A-Za-z]+)"
            oninput="setCustomValidity(''); checkValidity(); setCustomValidity(validity.valid ? '' :'Du måste skriva in ditt för och efternamn');" required>
            <p>E-postadress</p>
            <input class="input-label" type="email" name="email"
            oninput="setCustomValidity(''); checkValidity(); setCustomValidity(validity.valid ? '' :'Du måste skriva in en giltig epost-adress');" required>
            <p>Lösenord</p>
            <div class="password-text"><p>Ditt lösenord måste innehålla minst 8 tecken, minst en stor bokstav, minst en siffra och minst ett specialtecken.</p></div>
            <input class="input-label" type="password" name="password" pattern="^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$"
            oninput="setCustomValidity(''); checkValidity(); setCustomValidity(validity.valid ? '' :'Ditt lösenord måste innehålla minst 8 tecken, minst en stor bokstav, minst en siffra och minst ett specialtecken');" required>
            <p>Födelsedatum</p>
            <div class="FormDate">
                <input class="input-date day" type="number" min="1" max="31" placeholder="dd"
                onfocus="this.placeholder = ''" onblur="this.placeholder = 'dd'"
                oninput="setCustomValidity(''); checkValidity(); setCustomValidity(validity.valid ? '' :'Skriv in en dag(siffra)');" required/>
                <span class="divider">/</span>
                <input class="input-date month" type="number" min="1" max="12" placeholder="mm"
                onfocus="this.placeholder = ''" onblur="this.placeholder = 'mm'"
                oninput="setCustomValidity(''); checkValidity(); setCustomValidity(validity.valid ? '' :'Skriv in en månad(siffra)');" required/>
                <span class="divider">/</span>
                <input class="input-date year" type="number" placeholder="yyyy"
                onfocus="this.placeholder = ''" onblur="this.placeholder = 'yyyy'"
                oninput="setCustomValidity(''); checkValidity(); setCustomValidity(validity.valid ? '' :'Skriv in ett år(siffra)');" required/>
            </div>
            <input class="submit-btn" type="submit">
        </form>
    </div>
</main>
</template>

<script>
import Nav from './Nav.vue'

export default {
  name: 'Registration',
  props: { },
  components: {
      Nav,
  },
}
</script>

<style scoped>
.input-label {
    height: 2rem;
    font-size: 20px;
    border: 1px solid black;
}

p {
    font-size: 20px;
}

.password-text p {
    font-size: 12px;
}

.FormDate {
    display: inline-flex;
    position: relative;
    overflow: hidden;
    border: 1px solid black;
}

.input-date {
    padding: 0.75em;
    padding-right: 0.75em / 2;
    padding-left: 0.75em / 2;
    border: none;
    text-align: center;
    -moz-appearance: textfield;
    outline: none;
}

.input-date::-webkit-inner-spin-button,
.input-date::-webkit-outer-spin-button {
  -webkit-appearance: none;
}

.day,
.month {
    width: 57px;
}

.year {
    width: 78px;
}

.divider {
    padding-top: 0.75em;
    padding-bottom: 0.75em;
    pointer-events: none;
}

.submit-btn {
    display: block;
    background: #6A041D;
    color: white;
    border-style: outset;
    border-color: black;
    height: 50px;
    width: 256px;
    font-size: 20px;
    margin-top: 15px;
}

.submit-btn:hover {
    border-color: white;
    cursor: pointer;
}
</style>
