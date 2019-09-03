<template>
<nav>
    <div class="navbar">
        <a class="title">Jag-page</a>
        <a><router-link to="/">Jag</router-link></a>
        <a class="right"><router-link to="/report/kmom01">kmom01</router-link></a>
    </div>
</nav>
</template>

<script>
export default {
  name: 'Me',
  props: { }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.navbar {
    width: 100%;
    background-color: #6A041D;
    text-align: center;
    padding-top: 45px;
    padding-bottom: 45px;
    margin-bottom: 50px;
}

a {
    text-decoration: none;
    color: white;
    font-size: 28px;
    padding: 15px;
}

a:hover {
    text-decoration: underline;
}

.title {
    float: left;
    padding-top: 0px;
    font-size: 60px;
    margin-top: -30px;
    padding-left: 25%;
}

.right {
    padding-right: 13%;
}
</style>
