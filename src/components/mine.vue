<template>
	<div id="mine">
		<header>
			<div class="headrt" v-for="mt in minetop">
				<div style="height: 0.2rem;"></div>
				<div class="top_mine">
					<ul>
						<li class="minetop_head">
							<div class="minetop_left">
								<ul>
									<li class="left_mine">
										<img :src="mt.mineimg" style="border-radius: 50%;" />
									</li>
									<li class="right_mine">
										<p class="mine_pone">{{mt.minename}}</p>
										<span class="mine_ptwo">{{mt.minexz}}</span>
										<p class="mine_pthree">{{mt.minejf}}</p>
									</li>
								</ul>
							</div>
						</li>
						<li class="minetop_headd">
							<div class="minetop_right">
								<img :src="mt.sbing" />
							</div>
						</li>
					</ul>
				</div>
				<div class="renae">
					<div class="renae_left"></div>
					<div class="renae_right">
						<span>{{mt.jf}}</span>
					</div>
				</div>
			</div>
		</header>
		<nav>
			<div class="mainbanner">
				<div class="mine_icon">
					<div style="height: 0.1rem;"></div>
					<ul>
						<li>
							<router-link to="/order">
							<img src="../../static/img/dd.png" />
							<p>我的订单</p>
							</router-link>
						</li>
						<li>
							<router-link to="/assemble">
							<img src="../../static/img/pt.png" />
							<p>我的拼团</p>
							</router-link>
						</li>
						<li>
							<router-link to="/message">
							<img src="../../static/img/xx.png" />
							<p>消息中心</p>
							</router-link>
						</li>
						<li>
							<router-link to="/member">
							<img src="../../static/img/hy.png" />
							<p>会员中心</p>
							</router-link>
						</li>
					</ul>
				</div>
			</div>
			<div class="minelist">
				<ul>
					<li>
						<router-link to="/tel">
						<div class="minelist_one">
							<ul>
								<li class="mine_left">
									<div class="minelist_tao">
										<ul>
											<li>
												<img src="../../static/img/kf.png" />
											</li>
											<li>
												<span>联系客服</span>
											</li>
										</ul>
									</div>
								</li>
								<li class="mine_right">
									<div class="minelist_taso">
										<ul>
											<li>
												<p>工作日9:30-18:00</p>
											</li>
											<li>
												<div style="height: 0.15rem;"></div>
												<img src="../../static/img/next.png" />
											</li>
										</ul>
									</div>
								</li>
							</ul>
						</div>
						</router-link>
					</li>
					<li>
						<router-link to="/like">
						<div class="minelist_one">
							<ul>
								<li class="mine_left">
									<div class="minelist_tao">
										<ul>
											<li>
												<img src="../../static/img/xh.png" />
											</li>
											<li>
												<span>我的喜欢</span>
											</li>
										</ul>
									</div>
								</li>
								<li class="mine_right">
									<div class="minelist_taso">
										<ul>
											<li>

											</li>
											<li>
												<div style="height: 0.15rem;"></div>
												<img src="../../static/img/next.png" />
											</li>
										</ul>
									</div>
								</li>
							</ul>
						</div>
						</router-link>
					</li>
					<hr />
					<li>
						<router-link to="/coupon">
						<div class="minelist_one">
							<ul>
								<li class="mine_left">
									<div class="minelist_tao">
										<ul>
											<li>
												<img src="../../static/img/yhj.png" />
											</li>
											<li>
												<span>优惠卷</span>
											</li>
										</ul>
									</div>
								</li>
								<li class="mine_right">
									<div class="minelist_taso">
										<ul>
											<li>
												<p>您有优惠卷未使用</p>
											</li>
											<li>
												<div style="height: 0.15rem;"></div>
												<img src="../../static/img/next.png" />
											</li>
										</ul>
									</div>
								</li>
							</ul>
						</div>
						</router-link>
					</li>
					<li>
						<div class="minelist_one">
							<ul>
								<li class="mine_left">
									<div class="minelist_tao">
										<ul>
											<li>
												<img src="../../static/img/fx.png" />
											</li>
											<li>
												<span>分享有礼</span>
											</li>
										</ul>
									</div>
								</li>
								<li class="mine_right">
									<div class="minelist_taso">
										<ul>
											<li>

											</li>
											<li>
												<div style="height: 0.15rem;"></div>
												<img src="../../static/img/next.png" />
											</li>
										</ul>
									</div>
								</li>
							</ul>
						</div>
					</li>
					<li>
						<div class="minelist_one">
							<ul>
								<li class="mine_left">
									<div class="minelist_tao">
										<ul>
											<li>
												<img src="../../static/img/yj.png" />
											</li>
											<li>
												<span>给球长提意见</span>
											</li>
										</ul>
									</div>
								</li>
								<li class="mine_right">
									<div class="minelist_taso">
										<ul>
											<li>

											</li>
											<li>
												<div style="height: 0.15rem;"></div>
												<img src="../../static/img/next.png" />
											</li>
										</ul>
									</div>
								</li>
							</ul>
						</div>
					</li>
					<li>
						<div class="minelist_one">
							<ul>
								<li class="mine_left">
									<div class="minelist_tao">
										<ul>
											<li>
												<img src="../../static/img/ufo.png" />
											</li>
											<li>
												<span>收货地址管理</span>
											</li>
										</ul>
									</div>
								</li>
								<li class="mine_right">
									<div class="minelist_taso">
										<ul>
											<li>

											</li>
											<li>
												<div style="height: 0.15rem;"></div>
												<img src="../../static/img/next.png" />
											</li>
										</ul>
									</div>
								</li>
							</ul>
						</div>
					</li>
					<li>
						<div class="minelist_one">
							<ul>
								<li class="mine_left">
									<div class="minelist_tao">
										<ul>
											<li>
												<img src="../../static/img/rq.png" />
											</li>
											<li>
												<span>星球评测团</span>
											</li>
										</ul>
									</div>
								</li>
								<li class="mine_right">
									<div class="minelist_taso">
										<ul>
											<li>

											</li>
											<li>
												<div style="height: 0.15rem;"></div>
												<img src="../../static/img/next.png" />
											</li>
										</ul>
									</div>
								</li>
							</ul>
						</div>
					</li>
				</ul>
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
							<img src="../../static/img/shop1.png" />
							<br />
							<span>{{shopcar}}</span>
						</router-link>
					</li>
					<li>
						<router-link to="/mine">
							<img src="../../static/img/mine1.png" />
							<br />
							<span style="color: #fe5c7b;">{{mine}}</span>
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
		props:{
			minetop:{
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
	@import url("../../static/mine/mine.css");
</style>