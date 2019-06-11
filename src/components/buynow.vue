<template>
	<div id="buynow">
		<div id="bigbox">
			<router-link to="/shopmain">
				<span style="position: absolute;top: 0.1rem;right: 0.2rem;">*</span>
			</router-link>
			<div class="top">
				<p>颜色分类</p>
				<ul>
					<li>
						<p>红色</p>
					</li>
					<li>
						<p>黑色</p>
					</li>
					<li>
						<p>白色</p>
					</li>
					<li>
						<p>蓝色</p>
					</li>
				</ul>
				<p style="font-weight: 600;">中国·日式初夏纯棉双面化妆棉</p>
				<table>
					<tr>
						<td>
							<span>100*3</span>
						</td>
						<td>
							<span>|</span>
						</td>
						<td>
							<span>库存充足</span>
						</td>
					</tr>
				</table>
			</div>
			<div class="main">
				<table>
					<tr>
						<td><span>价格:</span></td>
						<td><p>66</p></td>
					</tr>
				</table>
			</div>
			<div class="more">
				<p>数量</p>
				<button v-on:click="adda">+</button>
				<input type="text" value="1" id="put1" />
				<button v-on:click="eage">-</button>
			</div>
			<hr />
			<div class="buy">
				<button>立即购买</button>
				<div style="padding-top: 0.1rem;">
					<button style="background-color: orange;">加入购物车</button>
				</div>
				
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: "buynow",
		data() {
			return {
				
			}
		},
		methods:{
//			close(){
//				$("#buynow").css('display','none');	
//	    		$("footer").css('display','none');
//			},
			adda(){
				var put1=document.getElementById("put1");
				put1.value = Number(put1.value) + 1;
			},
			eage(){
				var put1=document.getElementById("put1");
				put1.value = Number(put1.value) - 1;
		  		if(put1.value<1)
		  		{
		  			put1.value = 1;
		  		}
			}
		}
	}
</script>

<style scoped="scoped" lang="sass">
	@import url("../../static/buynow/buynow.css");
</style>