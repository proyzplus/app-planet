<template>
	<div id="shopcar">
		<header>
			<div class="header">
				<ul v-for="sct in shopcartop">
					<li>
						<span class="shopcar">{{sct.shopcarname}}</span>
					</li>
					<li>
						<span class="bj">{{sct.shopbj}}</span>
					</li>
				</ul>
			</div>
		</header>
		<nav id="mainshop">
			<div style="height: 0.02rem;background-color: #f4f4f4;"></div>
			<div class="shoptop">
				<div class="mainshop_top">
					<ul v-for="scb in shopcarbanner">
						<li>
							<img :src="scb.scimg" />
							<span>{{scb.oneth}}</span>
						</li>
						<li>
							<img :src="scb.scimg" />
							<span>{{scb.sevbj}}</span>
						</li>
						<li>
							<img :src="scb.scimg" />
							<span>{{scb.sevth}}</span>
						</li>
					</ul>
				</div>
			</div>
			<div class="banner_shopcar">
				<div class="banners">
					<img :src="shopcare" />
				</div>
			</div>
			<div style="height: 0.1rem;background-color: #f4f4f4;"></div>
			<div class="youlike">
				<div class="youlike_top">
					<p>{{shopcarlike}}</p>
				</div>
				<div class="youlike_shop" v-for="likeshop in shopcaelikeshop">
					<ul>
						<li>
							<div class="like_shop">
								<div class="like_img">
									<img :src="likeshop.img" />
								</div>
								<div class="like_word">
									<p>{{likeshop.name}}</p>
								</div>
								<div class="like_price">
									<p>{{likeshop.price}}</p>
								</div>
							</div>
						</li>
						<li>
							<div class="like_shop">
								<div class="like_img">
									<img :src="likeshop.imgt" />
								</div>
								<div class="like_word">
									<p>{{likeshop.namet}}</p>
								</div>
								<div class="like_price">
									<p>{{likeshop.pricet}}</p>
								</div>
							</div>
						</li>
					</ul>
					<div style="height: 0.1rem;"></div>
				</div>
				<div class="youlike_shop" v-for="likeshop in shopcaelikeshop">
					<ul>
						<li>
							<div class="like_shop">
								<div class="like_img">
									<img :src="likeshop.img" />
								</div>
								<div class="like_word">
									<p>{{likeshop.name}}</p>
								</div>
								<div class="like_price">
									<p>{{likeshop.price}}</p>
								</div>
							</div>
						</li>
						<li>
							<div class="like_shop">
								<div class="like_img">
									<img :src="likeshop.imgt" />
								</div>
								<div class="like_word">
									<p>{{likeshop.namet}}</p>
								</div>
								<div class="like_price">
									<p>{{likeshop.pricet}}</p>
								</div>
							</div>
						</li>
					</ul>
					<div style="height: 0.1rem;"></div>
				</div>
			</div>
		</nav>
		<footer>
			<div class="foot">
				<ul>

					<li>
						<router-link to="/">
							<img src="../../static/img/index1.png" />
							<br />
							<span>{{indexna}}</span>
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
						<img src="../../static/img/shop2.png" />
						<br />
						<span style="color: #fe5c7b;">{{shopcar}}</span>
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
			},
			shopcartop:{
				type:Array
			},
			shopcarbanner:{
				type:Array
			},
			shopcare:{
				type:String
			},
			shopcarlike:{
				type:String
			},
			shopcaelikeshop:{
				type:Array
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
	@import url("../../static/shopcar/shopcar.css");
</style>