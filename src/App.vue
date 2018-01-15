<style scoped>
  @import "/static/css/main.css";
</style>
<template>
  <div>
    <nav class="one-page-header navbar navbar-default navbar-fixed-top homeapp-header" data-role="navigation">
          <div class="container">
               <div class="menu-container page-scroll">
                    <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-ex1-collapse">	<span class="sr-only">Toggle navigation</span>
                         <span class="icon-bar"></span>
                         <span class="icon-bar"></span>
                         <span class="icon-bar"></span>
                    </button>
                    <a class="navbar-brand" href="#body">
                         <img src="https://etlworks.com/assets/img/etlworks.png" alt="Cloud data integration - Etlworks">
                    </a>
               </div>
               <!-- Collect the nav links, forms, and other content for toggling -->
               <div class="collapse navbar-collapse navbar-ex1-collapse">
                    <div class="menu-container">
                         <ul class="nav navbar-nav">
                              <li class="page-scroll"><router-link to="/">首页</router-link></li>
                              <li class="page-scroll"><router-link to="/About">About</router-link></li>
                              <li class="page-scroll"><router-link to="/Ours">Ours</router-link></li>
                              <li class="page-scroll hidden-xs hidden-sm"><router-link to="/Login"  class="btn-u btn-u-lg btn-u-green btn-u-upper rounded-2x">Sign up</router-link></li>
                              <li class="page-scroll hidden-xs hidden-sm"><router-link to="/Register"  class="btn-u btn-u-lg btn-u-green btn-u-upper rounded-2x">Register</router-link></li>
                         </ul>
                    </div>
               </div>
               <!-- /.navbar-collapse -->
          </div>
          <!-- /.container -->
    </nav>
    <div style="width: 100%;height: 100px;"></div>
    <div class="container">
	    <!--用于渲染匹配的组件-->
	    <keep-alive>
	      <router-view></router-view>
	    </keep-alive>
    </div>
  </div>
</template>
