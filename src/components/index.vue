<template>
	<div id="index">
		<header>
			<div id="head_top" v-for="top in indextop">
				<div class="top">
					<div class="headtop_left">
						<router-link to="">
							<span>{{top.indextopone}}</span>
						</router-link>
					</div>
					<div class="headtop_right">
						<router-link to="/indextopic">
							<span>{{top.indextoptwo}}</span>
						</router-link>
					</div>
				</div>
				<div class="top_im">
					<img :src="top.indextopsrc" />
				</div>
			</div>
		</header>
		<nav id="main_box">
			<div class="box_fir" v-for="ind in index">
				<div class="container maib_ban">
					<img :src="ind.gg" width="100%" />
				</div>
				<router-link to="/shopmain">
				<div class="bannermain">
					<div class="banner_img">
						<img :src="ind.shoponesrc" />
					</div>
					<div class="banner_span">
						<span>{{ind.shoponename}}</span>
					</div>
					<div class="banner_bottom">
						<div class="bane_left">
							<div class="left_main">
								<ul>
									<li>
										<div class="lmain_boox">
											<span>{{ind.shoponetypea}}</span>
										</div>
									</li>
									<li>
										<div class="lmain_boox">
											<span>{{ind.shoponetypeb}}</span>
										</div>
									</li>
									<li>
										<div class="lmain_boox">
											<span>{{ind.shoponetopec}}</span>
										</div>
									</li>
								</ul>
							</div>
						</div>
						<div class="bane_right">
							<span>{{ind.shoponetimea}}</span>
						</div>
					</div>
				</div>
				</router-link>
			</div>

			<div class="box_fir" v-for="is in indexshop">
				<div class="bannermain">
					<div class="banner_img">
						<img :src="is.shopsrc" />
					</div>
					<div class="banner_span">
						<span>{{is.shopname}}</span>
					</div>
					<div class="banner_bottom">
						<div class="bane_left">
							<div class="left_main">
								<ul>
									<li>
										<div class="lmain_boox">
											<span>{{is.shoptypea}}</span>
										</div>
									</li>
									<li>
										<div class="lmain_boox">
											<span>{{is.shoptypeb}}</span>
										</div>
									</li>
									<li>
										<div class="lmain_boox">
											<span>{{is.shoptopec}}</span>
										</div>
									</li>
									<li>
										<div class="lmain_boox">
											<span>{{is.shoptoped}}</span>
										</div>
									</li>
								</ul>
							</div>
						</div>
						<div class="bane_right">
							<span>{{is.shoptimea}}</span>
						</div>
					</div>
				</div>
			</div>

			<div class="box_fir" v-for="st in indexshopthree">
				<div class="bannermain">
					<div class="banner_img">
						<img :src="st.shopsrc" />
					</div>
					<div class="banner_span">
						<span>{{st.shopname}}</span>
					</div>
					<div class="banner_bottom">
						<div class="bane_left">
							<div class="left_main">
								<ul>
									<li>
										<div class="lmain_boox">
											<span>{{st.shoptypea}}</span>
										</div>
									</li>
									<li>
										<div class="lmain_boox">
											<span>{{st.shoptypeb}}</span>
										</div>
									</li>
									<li>
										<div class="lmain_boox">
											<span>{{st.shoptopec}}</span>
										</div>
									</li>
								</ul>
							</div>
						</div>
						<div class="bane_right">
							<span>{{st.shoptimea}}</span>
						</div>
					</div>
				</div>
			</div>
			<br /><br /><br />
		</nav>
		<footer>
			<div class="foot">
				<ul>

					<li>
						<router-link to="/">
							<img src="../../static/img/index2.png" />
							<br />
							<span style="color: #fe5c7b;">{{indexna}}</span>
						</router-link>
					</li>

					<li>
						<router-link to="/bingo">
							<img src="../../static/img/sw--1.png" />
							<br />
							<span>{{bingo}}</span>
						</router-link>
					</li>

					<li>
						<router-link to="/shopcar">
						<img src="../../static/img/shop1.png" />
						<br />
						<span>{{shopcar}}</span>
						</router-link>
					</li>
					<li>
						<router-link to="/mine">
						<img src="../../static/img/mine2.png" />
						<br />
						<span>{{mine}}</span>
						</router-link>
					</li>
				</ul>
			</div>
		</footer>
	</div>
</template>

<script>
	export default {
		name: 'index',
		props: {
			indextop: {
				type: Array
			},
			index: {
				type: Array
			},
			indexshop: {
				type: Array
			},
			indexshopthree: {
				type: Array
			}
		},
		data() {
			return {
				indexna: '首页',
				bingo: '值得买',
				shopcar: '购物车',
				mine: '个人'
			}
		}
	}
</script>

<style scoped="scoped" lang="sass">
	@import url("../../static/index.css");
</style>