<template>
	<div id="coupon">
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
							<span>优惠卷</span>
						</li>
						<li>
							<span style="font-size: 0.14rem;line-height: 0.4rem;float: right;">已失效</span>
						</li>
					</ul>
				</div>
			</div>
		</header>
		<nav>
			<div id="conpon_man">
				<ul>
					<li>
						<img src="../../../static/img/mine/images/coupon_03.png" />
					</li>
					<li>
						<img src="../../../static/img/mine/images/coupon_05.png" />
					</li>
				</ul>
			</div>
			<div id="coupon_ap">
				<ul>
					<li>
						<img src="../../../static/img/mine/images/coupon_09.png" />
					</li>
					<li>
						<div style="height: 0.1rem;"></div>
					</li>
					<li>
						<img src="../../../static/img/mine/images/coupon_09.png" />
					</li>
					<li>
						<div style="height: 0.1rem;"></div>
					</li>
					<li>
						<img src="../../../static/img/mine/images/coupon_09.png" />
					</li>
					<li>
						<div style="height: 0.1rem;"></div>
					</li>
					<li>
						<img src="../../../static/img/mine/images/coupon_09.png" />
					</li>
					<li>
						<div style="height: 0.1rem;"></div>
					</li>
					<li>
						<img src="../../../static/img/mine/images/coupon_09.png" />
					</li>
					<li>
						<div style="height: 0.1rem;"></div>
					</li>
					<li>
						<img src="../../../static/img/mine/images/coupon_09.png" />
					</li>
					<li>
						<div style="height: 0.1rem;"></div>
					</li>
				</ul>
				
			</div>
		</nav>
	</div>
</template>

<script>
	export default {
		name: "coupon",
		data() {
			return {
				
			}
		}
	}
</script>

<style scoped="scoped" lang="sass">
	@import url("../../../static/mine/coupon.css");
	@import url("../../../static/mine/order.css");
</style>