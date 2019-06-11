<template>
	<div id="member">
		<header>
			<div id="head">
				<div id="shopmain_head">
				<ul>
					<li class="head_rig">
						<router-link to="/mine">
							<img src="../../../static/img/shopsyg.png" />
						</router-link>
					</li>
					<li>
						<span>会员中心</span>
					</li>
					<li></li>
				</ul>
			</div>
			</div>
		</header>
		<nav>
			<div id="banner">
				<div  style="height: 0.3rem;"></div>
				<div class="top_mine">
					<ul>
						<li class="minetop_head">
							<div class="minetop_left">
								<ul>
									<li class="left_mine">
										<img src="../../../static/img/mine/images/sadad_03.png" style="border-radius: 50%;" />
									</li>
									<li class="right_mine">
										<p class="mine_pone">新晋小可爱</p>
										<p class="mine_pthree">还需消费130元课升级</p>
									</li>
								</ul>
							</div>
						</li>
						<li class="minetop_headd">
							<div class="minetop_right">
								<p>积分明细></p>
							</div>
						</li>
					</ul>
				</div>
				<div style="height: 0.2rem;"></div>
				<div class="renae">
					<div class="renae_left"></div>
					<div class="renae_right">
						<span>0/1300</span>
					</div>
				</div>
			</div>
		</nav>
		<div id="vip">
			<div class="vip_main">
				<div class="vip_top">
					<p>会员特权</p>
				</div>
				<table>
					<tr>
						<td>
							<img src="../../../static/img/mine/images/sadad_07.png"/>
							<p>生日特权</p>
						</td>
						<td>
							<img src="../../../static/img/mine/images/sadad_09.png"/>
							<p>专属优惠卷</p>
						</td>
					</tr>
				</table>
			</div>
		</div>
		<div id="good">
			<div class="good_top">
				<p>更多福利</p>
			</div>
			<div class="good_main">
				<table>
					<tr>
						<td>
							<img src="../../../static/img/mine/images/sadad_14.png" />
						</td>
					</tr>
				</table>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: "member",
		data() {
			return {
				
			}
		}
	}
</script>

<style scoped="scoped" lang="sass">
	@import url("../../../static/mine/order.css");
	@import url("../../../static/mine/member.css");
</style>