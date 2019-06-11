<template>
	<div id="indextopic">
		<header>
			<div id="head_top" v-for="top in indextop">
				<div class="top">
					<div class="headtop_left">
						<router-link to="/">
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

		<div id="topic">
			<div class="topic_top" v-for="tt in topictop">
				<ul>
					<li class="top_li_one">
						<ul>
							<li class="li_bda">
								<img :src="tt.bdaimg" />
							</li>
							<li class="li_bdb">
								<h5>{{tt.bdbh}}</h5>
							</li>
							<li class="li_bdc">
								<span>{{tt.bdcs}}</span>
							</li>
							<li class="li_bdd">
								<span>{{tt.bdds}}</span>
							</li>
						</ul>
					</li>
					<li class="top_li_two">
						<img :src="tt.tltimg" />
					</li>
				</ul>
			</div>
			<div class="topic_new" v-for="tn in topicnew">
				<div class="new_top">
					<ul>
						<li>
							<span class="new_la">{{tn.newtop}}</span>
						</li>
						<li>
							<span class="new_lb">{{tn.newword}}</span>
						</li>
					</ul>
				</div>
				<div class="new_main">
					<div class="mains_new">
						<ul>
							<li>
								<img :src="tn.newimga" />
							</li>
							<li>
								<img :src="tn.newimgb" />
							</li>
						</ul>
					</div>
				</div>
				<div class="new_top">
					<ul>
						<li>
							<span class="new_la">{{tn.hottop}}</span>
						</li>
						<li>
							<span class="new_lb">{{tn.hotword}}</span>
						</li>
					</ul>
				</div>
				<div class="new_main">
					<div class="mains_new">
						<ul>
							<li>
								<img :src="tn.hotimga" />
							</li>
							<li>
								<img :src="tn.hotimgb" />
							</li>
						</ul>
					</div>
				</div>
			</div>
			<div class="topic_us">
				<div class="us_top" v-for="ut in ustop">
					<div class="us_p">
						<p>{{ut.usp}}</p>
					</div>
					<div class="us_il">
						<ul>
							<li>
								<span style="color: #f74563;">{{ut.uss}}</span>
							</li>
							<li>
								<span style="color: #7a7a7a;">{{ut.ussa}}</span>
							</li>
						</ul>
					</div>
				</div>
				<div class="user_us" v-for="uu in userus">
					<router-link to="/topicmain">
					<ul>
						<li style="width: 65%;height: 100%;">
							<div class="user_left">
								<p>{{uu.uuptitle}}</p>
								<span>{{uu.uupname}}</span>
								<ul>
									<li>
										<p style="color: #bfbfbf;font-weight: 200;">
											<img :src="uu.uupimg">
											<span>{{uu.uupimgword}}</span>
										</p>
									</li>
									<li>
										<ul>
											<li>
												<img :src="uu.uupbingoimg" width="30%" />
												<span>{{uu.uupbingoword}}</span>
											</li>
											<li>
												<img :src="uu.uupsayimg" width="30%" />
												<span>{{uu.uupsayword}}</span>
											</li>
										</ul>
									</li>
								</ul>
							</div>
						</li>
						<li style="width: 35%;height: 100%;">
							<div class="user_right">
								<div class="userright_img">
									<img :src="uu.uupmainimg" />
								</div>
							</div>
						</li>
					</ul>
					</router-link>
				</div>
			</div>
			<br /><br /><br />
		</div>
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
		name: 'indextopic',
		props: {
			indextop: {
				type: Array
			},
			topictop:{
				type: Array
			},
			topicnew:{
				type:Array
			},
			ustop:{
				type:Array
			},
			userus:{
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
	@import url("../../static/indextopic/indextopic.css");
</style>