<template>
	<div id="search">
		<header>
			<div id="head">
				<ul>
					<li class="head_lio">
						<router-link to="/bingo">
							<img src="../../../static/img/lai.png" />
						</router-link>
					</li>
					<li class="head_lit">
						<input type="text" placeholder="搜索好物" />
					</li>
					<li class="head_lih">
						<img src="../../../static/img/www.png" />
					</li>
				</ul>
			</div>
		</header>
		<nav>
			<div id="main">
				<div id="main_left">
					<ul>
						<li v-for="sml in searchmainleft">
							<a href="#1"><span>{{sml.namea}}</span></a>
						</li>
						<li v-for="sml in searchmainleft">
							<a href="#2"><span>{{sml.nameb}}</span></a>
						</li>
						<li v-for="sml in searchmainleft">
							<a href="#3"><span>{{sml.namec}}</span></a>
						</li>
						<li v-for="sml in searchmainleft">
							<a href="#4"><span>{{sml.named}}</span></a>
						</li>
						<li v-for="sml in searchmainleft">
							<a href="#5"><span>{{sml.namee}}</span></a>
						</li>
						<li v-for="sml in searchmainleft">
							<a href="#6"><span>{{sml.namef}}</span></a>
						</li>
						<li v-for="sml in searchmainleft">
							<a href="#7"><span>{{sml.nameg}}</span></a>
						</li>
						<li v-for="sml in searchmainleft">
							<a href="#8"><span>{{sml.nameh}}</span></a>
						</li>
						<li v-for="sml in searchmainleft">
							<a href="#9"><span>{{sml.namei}}</span></a>
						</li>
						<li v-for="sml in searchmainleft">
							<a href="#10"><span>{{sml.namej}}</span></a>
						</li>
					</ul>
				</div>
				<div id="main_right">
					<a name="1">
						<div class="first" v-for="ss in searchshop">
							<div class="first_topword">
								<p>{{ss.classname}}</p>
							</div>
							<div class="first_mainimg">
								<img :src="ss.classhotimg" />
							</div>
							<div class="first_mainshop">
								<table>
									<tr>
										<td>
											<img :src="ss.shoponeimg" />
											<p>{{ss.shoponeword}}</p>
										</td>
										<td>
											<img :src="ss.shoptwoimg" />
											<p>{{ss.shoptwoword}}</p>
										</td>
										<td>
											<img :src="ss.shopthreeimg" />
											<p>{{ss.shopthreeword}}</p>
										</td>
									</tr>
									<tr>
										<td>
											<img :src="ss.shopforeimg" />
											<p>{{ss.shopforeword}}</p>
										</td>
										<td>
											<img :src="ss.shopfiveimg" />
											<p>{{ss.shopfiveword}}</p>
										</td>
										<td>
											<img :src="ss.shopsicimg" />
											<p>{{ss.shopsixword}}</p>
										</td>
									</tr>
								</table>
							</div>
						</div>
					</a>
					<a name="2">
						<div class="first" v-for="ss in searchshoptwo">
							<div class="first_topword">
								<p>{{ss.classname}}</p>
							</div>
							<div class="first_mainimg">
								<img :src="ss.classhotimg" />
							</div>
							<div class="first_mainshop">
								<table>
									<tr>
										<td>
											<img :src="ss.shoponeimg" />
											<p>{{ss.shoponeword}}</p>
										</td>
										<td>
											<img :src="ss.shoptwoimg" />
											<p>{{ss.shoptwoword}}</p>
										</td>
										<td>
											<img :src="ss.shopthreeimg" />
											<p>{{ss.shopthreeword}}</p>
										</td>
									</tr>
									<tr>
										<td>
											<img :src="ss.shopforeimg" />
											<p>{{ss.shopforeword}}</p>
										</td>
										<td>
											<img :src="ss.shopfiveimg" />
											<p>{{ss.shopfiveword}}</p>
										</td>
										<td>
											<img :src="ss.shopsicimg" />
											<p>{{ss.shopsixword}}</p>
										</td>
									</tr>
								</table>
							</div>
						</div>
					</a>
					<a name="3">
						<div class="first" v-for="ss in searchshoph">
							<div class="first_topword">
								<p>{{ss.classname}}</p>
							</div>
							<div class="first_mainimg">
								<img :src="ss.classhotimg" />
							</div>
							<div class="first_mainshop">
								<table>
									<tr>
										<td>
											<img :src="ss.shoponeimg" />
											<p>{{ss.shoponeword}}</p>
										</td>
										<td>
											<img :src="ss.shoptwoimg" />
											<p>{{ss.shoptwoword}}</p>
										</td>
										<td>
											<img :src="ss.shopthreeimg" />
											<p>{{ss.shopthreeword}}</p>
										</td>
									</tr>
									<tr>
										<td>
											<img :src="ss.shopforeimg" />
											<p>{{ss.shopforeword}}</p>
										</td>
										<td>
											<img :src="ss.shopfiveimg" />
											<p>{{ss.shopfiveword}}</p>
										</td>
										<td>
											<img :src="ss.shopsicimg" />
											<p>{{ss.shopsixword}}</p>
										</td>
									</tr>
								</table>
							</div>
						</div>
					</a>
					<a name="4">
						<div class="first" v-for="ss in searchshopf">
							<div class="first_topword">
								<p>{{ss.classname}}</p>
							</div>
							<div class="first_mainimg">
								<img :src="ss.classhotimg" />
							</div>
							<div class="first_mainshop">
								<table>
									<tr>
										<td>
											<img :src="ss.shoponeimg" />
											<p>{{ss.shoponeword}}</p>
										</td>
										<td>
											<img :src="ss.shoptwoimg" />
											<p>{{ss.shoptwoword}}</p>
										</td>
										<td>
											<img :src="ss.shopthreeimg" />
											<p>{{ss.shopthreeword}}</p>
										</td>
									</tr>
									<tr>
										<td>
											<img :src="ss.shopforeimg" />
											<p>{{ss.shopforeword}}</p>
										</td>
										<td>
											<img :src="ss.shopfiveimg" />
											<p>{{ss.shopfiveword}}</p>
										</td>
										<td>
											<img :src="ss.shopsicimg" />
											<p>{{ss.shopsixword}}</p>
										</td>
									</tr>
								</table>
							</div>
						</div>
					</a>
					<a name="5">
						<div class="first" v-for="ss in searchshopfo">
							<div class="first_topword">
								<p>{{ss.classname}}</p>
							</div>
							<div class="first_mainimg">
								<img :src="ss.classhotimg" />
							</div>
							<div class="first_mainshop">
								<table>
									<tr>
										<td>
											<img :src="ss.shoponeimg" />
											<p>{{ss.shoponeword}}</p>
										</td>
										<td>
											<img :src="ss.shoptwoimg" />
											<p>{{ss.shoptwoword}}</p>
										</td>
										<td>
											<img :src="ss.shopthreeimg" />
											<p>{{ss.shopthreeword}}</p>
										</td>
									</tr>
									<tr>
										<td>
											<img :src="ss.shopforeimg" />
											<p>{{ss.shopforeword}}</p>
										</td>
										<td>
											<img :src="ss.shopfiveimg" />
											<p>{{ss.shopfiveword}}</p>
										</td>
										<td>
											<img :src="ss.shopsicimg" />
											<p>{{ss.shopsixword}}</p>
										</td>
									</tr>
								</table>
							</div>
						</div>
					</a>
					<a name="6">
						<div class="first" v-for="ss in searchshops">
							<div class="first_topword">
								<p>{{ss.classname}}</p>
							</div>
							<div class="first_mainimg">
								<img :src="ss.classhotimg" />
							</div>
							<div class="first_mainshop">
								<table>
									<tr>
										<td>
											<img :src="ss.shoponeimg" />
											<p>{{ss.shoponeword}}</p>
										</td>
										<td>
											<img :src="ss.shoptwoimg" />
											<p>{{ss.shoptwoword}}</p>
										</td>
										<td>
											<img :src="ss.shopthreeimg" />
											<p>{{ss.shopthreeword}}</p>
										</td>
									</tr>
									<tr>
										<td>
											<img :src="ss.shopforeimg" />
											<p>{{ss.shopforeword}}</p>
										</td>
										<td>
											<img :src="ss.shopfiveimg" />
											<p>{{ss.shopfiveword}}</p>
										</td>
										<td>
											<img :src="ss.shopsicimg" />
											<p>{{ss.shopsixword}}</p>
										</td>
									</tr>
								</table>
							</div>
						</div>
					</a>
					<a name="7">
						<div class="first" v-for="ss in searchshopsv">
							<div class="first_topword">
								<p>{{ss.classname}}</p>
							</div>
							<div class="first_mainimg">
								<img :src="ss.classhotimg" />
							</div>
							<div class="first_mainshop">
								<table>
									<tr>
										<td>
											<img :src="ss.shoponeimg" />
											<p>{{ss.shoponeword}}</p>
										</td>
										<td>
											<img :src="ss.shoptwoimg" />
											<p>{{ss.shoptwoword}}</p>
										</td>
										<td>
											<img :src="ss.shopthreeimg" />
											<p>{{ss.shopthreeword}}</p>
										</td>
									</tr>
									<tr>
										<td>
											<img :src="ss.shopforeimg" />
											<p>{{ss.shopforeword}}</p>
										</td>
										<td>
											<img :src="ss.shopfiveimg" />
											<p>{{ss.shopfiveword}}</p>
										</td>
										<td>
											<img :src="ss.shopsicimg" />
											<p>{{ss.shopsixword}}</p>
										</td>
									</tr>
								</table>
							</div>
						</div>
					</a>
					<a name="8">
						<div class="first" v-for="ss in searchshopei">
							<div class="first_topword">
								<p>{{ss.classname}}</p>
							</div>
							<div class="first_mainimg">
								<img :src="ss.classhotimg" />
							</div>
							<div class="first_mainshop">
								<table>
									<tr>
										<td>
											<img :src="ss.shoponeimg" />
											<p>{{ss.shoponeword}}</p>
										</td>
										<td>
											<img :src="ss.shoptwoimg" />
											<p>{{ss.shoptwoword}}</p>
										</td>
										<td>
											<img :src="ss.shopthreeimg" />
											<p>{{ss.shopthreeword}}</p>
										</td>
									</tr>
									<tr>
										<td>
											<img :src="ss.shopforeimg" />
											<p>{{ss.shopforeword}}</p>
										</td>
										<td>
											<img :src="ss.shopfiveimg" />
											<p>{{ss.shopfiveword}}</p>
										</td>
										<td>
											<img :src="ss.shopsicimg" />
											<p>{{ss.shopsixword}}</p>
										</td>
									</tr>
								</table>
							</div>
						</div>
					</a>
					<a name="9">
						<div class="first" v-for="ss in searchshopni">
							<div class="first_topword">
								<p>{{ss.classname}}</p>
							</div>
							<div class="first_mainimg">
								<img :src="ss.classhotimg" />
							</div>
							<div class="first_mainshop">
								<table>
									<tr>
										<td>
											<img :src="ss.shoponeimg" />
											<p>{{ss.shoponeword}}</p>
										</td>
										<td>
											<img :src="ss.shoptwoimg" />
											<p>{{ss.shoptwoword}}</p>
										</td>
										<td>
											<img :src="ss.shopthreeimg" />
											<p>{{ss.shopthreeword}}</p>
										</td>
									</tr>
									<tr>
										<td>
											<img :src="ss.shopforeimg" />
											<p>{{ss.shopforeword}}</p>
										</td>
										<td>
											<img :src="ss.shopfiveimg" />
											<p>{{ss.shopfiveword}}</p>
										</td>
										<td>
											<img :src="ss.shopsicimg" />
											<p>{{ss.shopsixword}}</p>
										</td>
									</tr>
								</table>
							</div>
						</div>
					</a>
					<a name="10">
						<div class="first" v-for="ss in searchshopte">
							<div class="first_topword">
								<p>{{ss.classname}}</p>
							</div>
							<div class="first_mainimg">
								<img :src="ss.classhotimg" />
							</div>
							<div class="first_mainshop">
								<table>
									<tr>
										<td>
											<img :src="ss.shoponeimg" />
											<p>{{ss.shoponeword}}</p>
										</td>
										<td>
											<img :src="ss.shoptwoimg" />
											<p>{{ss.shoptwoword}}</p>
										</td>
										<td>
											<img :src="ss.shopthreeimg" />
											<p>{{ss.shopthreeword}}</p>
										</td>
									</tr>
									<tr>
										<td>
											<img :src="ss.shopforeimg" />
											<p>{{ss.shopforeword}}</p>
										</td>
										<td>
											<img :src="ss.shopfiveimg" />
											<p>{{ss.shopfiveword}}</p>
										</td>
										<td>
											<img :src="ss.shopsicimg" />
											<p>{{ss.shopsixword}}</p>
										</td>
									</tr>
								</table>
							</div>
						</div>
					</a>
				</div>
			</div>
		</nav>
	</div>
</template>

<script>
	export default {
		name: 'index',
		props: {
			searchmainleft: {
				type: Array
			},
			searchshop: {
				type: Array
			},
			searchshoptwo: {
				type: Array
			},
			searchshoph: {
				type: Array
			},
			searchshopf: {
				type: Array
			},
			searchshopfo: {
				type: Array
			},
			searchshops: {
				type: Array
			},
			searchshopsv: {
				type: Array
			},
			searchshopei: {
				type: Array
			},
			searchshopni: {
				type: Array
			},
			searchshopte: {
				type: Array
			}
		},
		data() {
			return {

			}
		},
		methods:{
			
		}
	}
	$(document).ready(function() {
		$("#main_left ul li").click(function() {
			var index = $(this).index();
			$(this).addClass("spical").siblings().removeClass("spical");
		});
	});
</script>

<style scoped="scoped" lang="sass">
	@import url("../../../static/bingo/search.css");
</style>