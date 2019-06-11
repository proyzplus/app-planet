<template>
	<div id="axiostest">
		<h1>{{app}}</h1>
		<h2>{{api}}</h2>
	</div>
</template>

<script>
	import qs from 'qs'
	export default {
		name: 'index',
		data() {
			return {
				app:'',
				api:''
			}
		},
		methods:{
			
		},
		created(){
			this.$axios.get("http://api.coindesk.com/v1/bpi/currentprice.json")
				.then(response =>{
					console.log(response);
					this.app = response.data.time.updated;
					this.api = response.data.bpi;
				})
			this.$axios.post("http://www.wwtliu.com/sxtstu/blueberrypai/login.php",qs.stringify({
				user_id:'iwen@qq.com',
				password:'iwen123',
				verification_code:'crfvw'
			}))
				.then(res =>{
					console.log(res);
				})
				.catch(error =>{
					console.log(error);
				})
		}
	}
</script>

<style>
</style>