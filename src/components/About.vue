<template>
  <div class="hello">
    <h1>地址：{{address}}</h1>
    <h1>经度：{{ lat }}</h1>
	<h1>纬度：{{ lng }}</h1>
  </div>
</template>
<script>
  export default {
	  data (){
		  return {
		  address:0,
		  lat:0,
		  lng:0
		  }
	  },
  mounted: function() {
		  this.$http.get('/api?classify=user&type=test&c=a').then((data) => {
			  console.log(data);
		  }, (response) => {
		  })
	  }
  }

</script>