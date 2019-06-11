<template>
	<div id="message">
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
							<span>消息中心</span>
						</li>
						<li></li>
					</ul>
				</div>
			</div>
		</header>
		<nav>
			<div id="message_main">
				<ul v-for="mt in mestotl">
					<li>
						<div class="message_total">
							<ul>
								<li>
									<img :src="mt.imgone" />
								</li>
								<li>
									<span>{{mt.word}}</span>
								</li>
							</ul>
						</div>
					</li>
					<li>
						<div class="totla_rig">
							<img :src="mt.imgtwo" />
						</div>
					</li>
				</ul>
			</div>
		</nav>
	</div>
</template>

<script>
	export default {
		name: 'index',
		props:{
			mestotl:{
				type:Array
			}
		},
		data() {
			return {
				
			}
		}
	}
</script>

<style scoped="scoped" lang="sass">
	@import url("../../../static/mine/message.css");
	@import url("../../../static/mine/order.css");
</style>