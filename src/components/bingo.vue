<template>
	<div id="bingo">
		<header>
			<div id="head">
				<ul v-for="top in bingotop">
					<li>
						<span>{{top.bingotopone}}</span>
					</li>
					<li>
						<div style="height: 0.16rem;"></div>
						<router-link to="/search">
							<div class="top_search">
								<span>{{top.bingotoptwo}}</span>
							</div>
						</router-link>
						<!--<router-view></router-view>-->
					</li>
				</ul>
			</div>
		</header>
		<div id="bigbox">
			<div class="banner">
				<ul v-for="bmg in bingotopimg">
					<li>
						<img :src="bmg.bingsrca" />
					</li>
					<li>
						<img :src="bmg.bingsrcb" />
					</li>
				</ul>
			</div>
			<div class="everyday">
				<div class="everyday_topword">
					<p>{{everyp}}</p>
				</div>
				<div class="everyday_shopping">
					<div class="shop_left" v-for="eon in everyshop">
						<img :src="eon.shopimg" />
						<p>{{eon.shopname}}</p>
						<div class="shop_price">
							<ul>
								<li>
									<span style="font-size: 0.14rem;color: #dd515c;">{{eon.shopprice}}
										<span style="font-size: 0.1rem;color: lightgray;">{{eon.shopoldprice}}</span></span>
								</li>
								<li>
									<div class="sprice_bot">
										{{eon.add}}
									</div>
								</li>
							</ul>
						</div>
					</div>
					<div class="shop_right" v-for="eon in everyshopb">
						<img :src="eon.shopimgb" />
						<p>{{eon.shopnameb}}</p>
						<div class="shop_price">
							<ul>
								<li>
									<span style="font-size: 0.14rem;color: #dd515c;">{{eon.shoppriceb}}
										<span style="font-size: 0.1rem;color: lightgray;">{{eon.shopoldpriceb}}</span></span>
								</li>
								<li>
									<div class="sprice_bot">
										{{eon.addb}}
									</div>
								</li>
							</ul>
						</div>
					</div>
				</div>
				<div style="height: 0.2rem;"></div>
				<div class="everyday_shopping">
					<div class="shop_left" v-for="eon in everyshopb">
						<img :src="eon.shopimgb" />
						<p>{{eon.shopnameb}}</p>
						<div class="shop_price">
							<ul>
								<li>
									<span style="font-size: 0.14rem;color: #dd515c;">{{eon.shoppriceb}}
										<span style="font-size: 0.1rem;color: lightgray;">{{eon.shopoldpriceb}}</span></span>
								</li>
								<li>
									<div class="sprice_bot">
										{{eon.addb}}
									</div>
								</li>
							</ul>
						</div>
					</div>
					<div class="shop_right" v-for="eon in everyshop">
						<img :src="eon.shopimg" />
						<p>{{eon.shopname}}</p>
						<div class="shop_price">
							<ul>
								<li>
									<span style="font-size: 0.14rem;color: #dd515c;">{{eon.shopprice}}
										<span style="font-size: 0.1rem;color: lightgray;">{{eon.shopoldprice}}</span></span>
								</li>
								<li>
									<div class="sprice_bot">
										{{eon.add}}
									</div>
								</li>
							</ul>
						</div>
					</div>
				</div>
				<div class="goodshop">
					<div class="goodshop_topword">
						<p>{{goodp}}</p>
					</div>
					<div class="goodshop_shopp" v-for="sh in shopmain">
						<ul>
							<li class="li_fir">
								<div class="shop_img">
									<img :src="sh.src" />
								</div>
							</li>
							<li class="li_sec">
								<div class="shop_wordprice">
									<div class="wprice_top">
										<p>{{sh.shopname}}</p>
									</div>
									<div class="shop_wrbto">
										<ul>
											<li>
												<span class="wr_fir">{{sh.shopprice}}</span>
											</li>
											<li>
												<img src="../../static/img/bingo/sdasfhj_03.png">
												<span class="wr_sec">{{sh.shoplove}}</span>
											</li>
										</ul>
									</div>
								</div>
							</li>
						</ul>
					</div>

					<div class="banner_shop" v-for="bs in bingobanshop">
						<img :src="bs.bimg" />
						<p>{{bs.bname}}</p>
						<ul>
							<li>
								<span class="wr_fir">{{bs.bprice}}</span>
							</li>
							<li>
								<span class="wr_sec">{{bs.blove}}</span>
							</li>
						</ul>
					</div>

					<div class="goodshop_shopp" v-for="bg in bingogood">
						<ul>
							<li class="li_fir">
								<div class="shop_img">
									<img :src="bg.bgimg" />
								</div>
							</li>
							<li class="li_sec">
								<div class="shop_wordprice">
									<div class="wprice_top">
										<p>{{bg.bgname}}</p>
									</div>
									<div class="shop_wrbto">
										<ul>
											<li>
												<span class="wr_fir">{{bg.bgprice}}</span>
											</li>
											<li>
												<img :src="bg.bgloimg">
												<span class="wr_sec">{{bg.bglove}}</span>
											</li>
										</ul>
									</div>
								</div>
							</li>
						</ul>
					</div>

					<div class="banner_shop" v-for="bt in bingobanshoptwo">
						<img :src="bt.bimg" />
						<p>{{bt.bname}}</p>
						<ul>
							<li>
								<span class="wr_fir">{{bt.bprice}}</span>
							</li>
							<li>
								<span class="wr_sec">{{bt.blove}}</span>
							</li>
						</ul>
					</div>

				</div>
			</div>
			<br /><br /><br />
		</div>
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
							<img src="../../static/img/sw--2.png" />
							<br />
							<span style="color: #fe5c7b;">{{bingo}}</span>
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
		name: "bingo",
		props: {
			shopmain: {
				type: Array
			},
			bingotop: {
				type: Array
			},
			bingotopimg: {
				type: Array
			},
			everyp: {
				type: String
			},
			everyshop: {
				type: Array
			},
			everyshopb: {
				type: Array
			},
			goodp: {
				type: String
			},
			bingobanshop: {
				type: Array
			},
			bingogood: {
				type: Array
			},
			bingobanshoptwo: {
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
	@import url("../../static/bingo/bingo.css");
	@import url("../../static/index.css");
</style>