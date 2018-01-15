<template>
	<h1>
	首页
	</h1>
</template>
<script>
	export default {
		data(){
			return {
				user_name:"",
			    password:""
			}
		},
		methods: {
		  	loginSubmit :function(){
		  		console.log();
			    this.$http.post("api",{type:"login",user_name:this.$data.user_name,password:this.$data.password},{emulateJSON:true}).then(
				    function (res) {
					    console.log(res)
				    },function (res) {
						console.log('链接失败')
				})
			}
		}
    }
</script>