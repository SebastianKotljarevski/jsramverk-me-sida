<template>
<nav>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">

    <div class="navbar">
        <div class="nav">
            <a class="title">Jag-page</a>
            <div class="pos">
            <div class="dropdown">
                <button class="dropbtn">Vecka
                    <i class="fa fa-caret-down"></i>
                </button>
                <div class="dropdown-content">
                    <a><router-link to="/report/kmom01">kmom01</router-link></a>
                    <a><router-link to="/reportkmom02">kmom02</router-link></a>
                </div>
            </div>
        <a style="float:right;"><router-link to="/registration">Registrera</router-link></a>
        <a style="float:right;"><router-link to="/">Jag</router-link></a>
    </div>
        </div>
    </div>
</nav>
</template>

<script>
export default {
  name: 'Nav',
  props: { },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.navbar {
    width: 100%;
    background-color: #6A041D;
    text-align: center;
    padding-top: 45px;
    padding-bottom: 85px;
    margin-bottom: 50px;
    box-shadow: 0 4px 3px -3px black;
    padding-left: 25%;
}

a {
    text-decoration: none;
    color: white;
    font-size: 28px;
    padding-left: 15px;
}

a:hover {
    text-decoration: underline;
}

.pos {
    padding-right: 53%;
}

.title {
    float: left;
    padding-top: 0px;
    font-size: 60px;
    margin-top: -30px;
    margin-left: -15px;
}

.dropdown {
    float: right;
    overflow: hidden;
    padding-left: 15px;
}

.dropdown .dropbtn {
  font-size: 28px;
  border: none;
  outline: none;
  color: white;
  background-color: inherit;
  font-family: inherit;
  margin: 0;
}

.dropbtn:hover {
    text-decoration: underline;
}

.dropdown-content {
  display: none;
  position: absolute;
  background-color: #f9f9f9;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
}

.dropdown-content a {
  float: none;
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
  text-align: center;
}

.dropdown-content a:hover {
  background-color: #ddd;
}

.dropdown:hover .dropdown-content {
  display: block;
}
</style>
