<template>
	<div id="shopmain">
		<header>
			<div id="shopmain_head">
				<ul>
					<li>
						<router-link to="/">
							<img src="../../static/img/shopsyg.png" />
						</router-link>
					</li>
					<li class="head_rig">
						<img src="../../static/img/shopfx.png" />
					</li>
				</ul>
			</div>
		</header>
		<nav>
			<div id="shopbanner">
				<div class="shopword">
					<p>淡化痘印，修复受损，痘肌敏感肌一定要入的冻干粉来了！</p>
				</div>
			</div>
			<div class="main" v-for="sms in shopmainshop">
				<div class="maintop">
					<p>{{sms.topword}}</p>
				</div>
				<div class="maintop">
					<p>{{sms.secondword}}</p>
				</div>
				<div class="maintop">
					<p>{{sms.thirdword}}</p>
				</div>
				<div class="mainimg">
					<img :src="sms.mainimdg" />
				</div>
			</div>
			<div class="blank"></div>
			<div class="message">
				<div class="message_top">
					<ul>
						<li>
							<p>留言</p>
						</li>
						<li>
							<span>查看全部留言></span>
						</li>
					</ul>
				</div>
				<div class="message_main">
					<button>留言</button>
				</div>
			</div>
			<div class="blank"></div>
			<div class="time">
				<div class="time_top">
					<p>购买须知</p>
				</div>
				<div class="time_main">
					<ul v-for="ts in timeshop">
						<li>
							<p>{{ts.leftname}}</p>
						</li>
						<li>
							<span>{{ts.righrname}}</span>
						</li>
					</ul>
				</div>
			</div>
			<div class="blank"></div>
			<div class="question">
				<div class="question_top">
					<p>常见问题</p>
				</div>
				<div class="question_main" v-for="qt in question">
					<div class="main_top">
						<p>{{qt.title}}</p>
					</div>
					<div class="main_box">
						<p>{{qt.mainword}}</p>
					</div>
				</div>
			</div>
		</nav>
		<footer>
			<div id="foot">
				<ul>
					<li>
						<div class="foot_left">
							<ul>
								<li>
									<router-link to="/shopcar">
										<img src="../../static/img/shop1.png" />
									</router-link>
								</li>
								<li>
									<img src="../assets/img/xh.png" />
								</li>
								<li>
									<img src="../../static/img/kf.png" />
								</li>
							</ul>
						</div>
					</li>
					<li>
						<router-link to="/shopmain/buynow">
							<ul>
								<li>
									<button style="background-color: #fe8d61;">￥66<br>加入购物车</button>
								</li>
								<li>
									<button style="background-color: #d081ea;">￥66<br>包邮购买</button>
								</li>
							</ul>
						</router-link>
						<router-view></router-view>
					</li>
				</ul>
			</div>
		</footer>
	</div>
</template>

<script>
	export default {
		name: "shopmain",
		props: {
			shopmainshop: {
				type: Array
			},
			timeshop: {
				type: Array
			},
			question: {
				type: Array
			}
		},
		data() {
			return {

			}
		},
		methods: {

		}
	}
</script>

<style scoped="scoped" lang="sass">
	@import url("../../static/shopmain/shopmain.css");
</style>