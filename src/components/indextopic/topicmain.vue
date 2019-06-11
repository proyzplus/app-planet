<template>
	<div id="topicmain">
		<header>
			<div id="head">
				<ul>
					<li class="head_lef">
						<router-link to="/indextopic">
							<img src="../../../static/img/lai.png" />
						</router-link>
					</li>
					<li>
						<span>用户话题详情</span>
					</li>
					<li class="head_rig">
						<img src="../../../static/img/fx.png" />
					</li>
				</ul>
			</div>
		</header>
		<nav>
			<div class="banner">
				<img src="../../../static/img/wadsfaaf.jpg" />
			</div>
			<div class="what">
				<div style="height: 0.15rem;"></div>
				<div class="what_main">
					<p>不开心的时候你会干什么</p>
				</div>
			</div>
			<div style="height: 0.15rem;"></div>
			<div class="messager">
				<img src="../../../static/img/images/af_03.png" />
			</div>
		</nav>
	</div>
</template>

<script>
	export default {
		name: "shopmain",
		data() {
			return {
				
			}
		}
	}
</script>

<style scoped="scoped" lang="sass">
	@import url("../../../static/indextopic/topicmain.css");
</style>