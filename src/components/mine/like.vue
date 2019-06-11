<template>
	<div id="like">
		<header>
			<div id="head">
				<div id="shopmain_head">
				<ul>
					<li class="head_rig">
						<router-link to="/mine">
							<img src="../../../static/img/lai.png" />
						</router-link>
					</li>
					<li>
						<span>我的喜欢</span>
					</li>
					<li></li>
				</ul>
			</div>
			</div>
		</header>
		<nav>
			<div id="banner">
				<img src="../../../static/img/mine/images/qsdrt_03.png" />
			</div>
		</nav>
	</div>
</template>

<script>
	export default {
		name: "like",
		data() {
			return {
				
			}
		}
	}
</script>

<style scoped="scoped" lang="sass">
	@import url("../../../static/mine/order.css");
</style>