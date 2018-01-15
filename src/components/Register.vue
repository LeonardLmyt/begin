<style>
	body{background:url(../../static/images/loginbg.jpg) no-repeat;color: #fff;}
</style>
<template>
	<div class="container wrap1" style="height:450px;">
        <h2 class="mg-b20 text-center"></h2>
        <div class="col-sm-8 col-md-5 center-auto pd-sm-50 pd-xs-20 main_content">
            <p class="text-center font16">用户注册</p>
            <div>
                <div class="form-group mg-t20">
                    <i class="icon-user icon_font"></i>
                    <input name="user_name" type="text" class="login_input" placeholder="请输入用户名" v-model="user_name">
                </div>
                <div class="form-group mg-t20">
                    <i class="icon-lock icon_font"></i>
                    <input name="password" type="password" class="login_input" placeholder="请输入密码" v-model="password">
                </div>
                <div class="form-group mg-t20">
                    <i class="icon-lock icon_font"></i>
                    <input name="password" type="password" class="login_input" placeholder="请确认密码" v-model="passwordsubmit">
                </div>
                <button style="submit" class="login_btn" @click="loginSubmit">注  册</button>
           </div>
    </div><!--row end -->
</div>
</template>
<script>
	export default {
		data(){
			return {
				user_name:"",
			  password:"",
			  passwordsubmit:""
			}
		},
		methods: {
		  	loginSubmit :function(){
		  		let user_name = this.$data.user_name,
				  		password= this.$data.password,
				  		passwordsubmit = this.$data.passwordsubmit;
				  		
				  if(!user_name){
				  	layer.msg('用户名不能为空', {
						  offset: 't',
						  anim: 6
						});
						return false;
				  }
				  
				  if(!password){
				  	layer.msg('用户密码不能为空', {
						  offset: 't',
						  anim: 6
						});
						return false;
				  }
				  
				  if(password !== passwordsubmit){
				  	layer.msg('确认密码不一致', {
						  offset: 't',
						  anim: 6
						});
						return false;
				  }
		  		
			    this.$http.post("api",{classify:"user",type:"register",user_name:this.$data.user_name,password:this.$data.password,passwordsubmit:this.$data.passwordsubmit},{emulateJSON:true}).then(
				    function (res) {
					    let re = JSON.parse(res.bodyText);
				    	layer.msg(re.message, {
							  offset: 't',
							  anim: (!re.status ? 6 : 1)
							});
						re.status ? this.$router.push('/Index') : "";
				    },function (re) {
						  console.log('链接失败');
				})
			}
		}
    }
</script>