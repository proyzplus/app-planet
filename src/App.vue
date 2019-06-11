<template>
	<div id="app">
		<router-view :mestotl="mestotl" :question="question" :timeshop="timeshop" 
			:shopmainshop="shopmainshop" :searchshopte="searchshopte" :searchshopni="searchshopni" 
			:searchshopei="searchshopei" :searchshopsv="searchshopsv" :searchshops="searchshops" 
			:searchshopfo="searchshopfo" :searchshopf="searchshopf" :searchshoph="searchshoph" 
			:searchshoptwo="searchshoptwo" :searchshop="searchshop" :searchmainleft="searchmainleft" 
			:minetop="minetop" :shopcaelikeshop="shopcaelikeshop" :shopcarlike="shopcarlike" 
			:shopcare="shopcare" :shopcarbanner="shopcarbanner" :shopcartop="shopcartop" 
			:userus="userus" :ustop="ustop" :topicnew="topicnew" :topictop="topictop" 
			:bingobanshoptwo="bingobanshoptwo" :bingogood="bingogood" :bingobanshop="bingobanshop" 
			:goodp="goodp" :everyshopb="everyshopb" :everyshop="everyshop" :everyp="everyp" 
			:bingotopimg="bingotopimg" :bingotop="bingotop" :shopmain="shopmain" 
			:indextop="indextop" :index="index" :indexshop="indexshop" 
			:indexshopthree="indexshopthree" />
	</div>
</template>

<script>
	export default {
		name: 'App',
		data() {
			return {
				
				mestotl:[
					{
						imgone:'../../../static/img/mine/images/images/wsdasddddd4.png',
						word:'文章留言',
						imgtwo:'../../../static/img/next.png'
					},
					{
						imgone:'../../../static/img/mine/images/images/wsdasddddd2.png',
						word:'话题评论',
						imgtwo:'../../../static/img/next.png'
					},
					{
						imgone:'../../../static/img/mine/images/images/wsdasddddd1.png',
						word:'赞',
						imgtwo:'../../../static/img/next.png'
					},
					{
						imgone:'../../../static/img/mine/images/images/wsdasddddd3.png',
						word:'通知',
						imgtwo:'../../../static/img/next.png'
					}
				],
				
				question:[
					{
						title:'猫屎星球的商品是正品吗？',
						mainword:'猫屎星球的商品均由测评团成员亲自挑选、采购、试用，保障优良品质，保证100%正品。海外商品包装更新频率较高，您收到的商品可能与我们文章中的图片不完全一致，请以收到的实物为准。我们会及时更新图片，标注新旧版本，感谢谅解。'
					},
					{
						title:'什么时候发货?',
						mainword:'发货时间根据发货地点不同而有所区别，普通订单按付款的先后顺序发出，猫屎星球发货的商品保证24小时发货，合作商家自主发货商品尽力保证在72小时内发货，拼团订单无论是猫尿星球发货的商品还是合作商家商品都会尽力保证在72小时内发货;'
					},
					{
						title:'订单满多少元包邮?',
						mainword:'猫屎星球发货的订单实付金额满79元全国包邮，包邮包括新疆，西藏等偏远地区;合作商家订单支持件包邮，存在小部分 合作商家不支持偏远地区发货，如新疆，西藏，购买前可咨询客服， 同时因为新疆，西藏属于偏远地区，合作商家发货时需额外支付10元的运费，请小可爱们可以理解。'
					},
					{
						title:'如何申请退换货?',
						mainword:'猫屎星球支持7天无理由退换货，商品如遇质量问题，或漏液、破损、缺失等情况，请及时拍照并联系客服处理，由猫屎星球承诺运费;因个人原因申请退换货，您需支付来回邮费;'
					},
					{
						title:'哪些商品不支持7天无理由退换货?',
						mainword:'已拆封的商品如无质量问题，不享有退换货政策食品，保健品，内衣，袜品，成人用品等由于商品的特殊性，不支持7天无理由退换货;'
					},
					{
						title:'7天保价规则详情?',
						mainword:'遇到下单后7个自然日内(如18日下单，19日起算第一个自然日)，商品在猫屎星球APP内降价，球长承诺全额返还差价。差价计算公式:差价=申请退差价商品的实付价格一降价后的价格。小婊贝们可以联系猫屎星球客服团申请补差价，确认无误后退款。适用降价包括平日价的变动，不包括每日特价，限时特价，大促11.11, 周年庆，12.12, 浪漫七夕节，6.18等) .大促提前购，大促返场活动以及其他形式的促销(如月度促销活动等) .'
					}
				],
				
				shopmainshop:[
					{
						topword:'最近一直关注app首页的姐妹一定发现了一个小秘密--我们陆陆续续上架了好多自然旋律家的产品，甚至怀疑我们被自然旋律“包养”了！',
						secondword:'No,No,No,不存在的，猫屎和合租商家都是互相选择过程，是两情相悦啦！',
						thirdword:'或者说肥仔我现在单方面爱自然旋律爱的深沉，我几乎使用了他家全线的明星产品，用到现就没有踩雷的，真的很惊喜。',
						mainimdg: '../../static/img/shopcar/images/shopmain_03.png'
					},
					{
						topword:'刚上架自然旋律第一款产品的时候，就有小可爱给我们留言说他家的冻干粉也超好用。',
						secondword:'其实我早就在使用中了，只是当时时机未到还不能向你们分享。现在，这款冻干粉被我用的只剩下一组了，再不介绍的话，我可真就要“空口无凭”啦~',
						mainimdg: '../../static/img/shopcar/images/shopmain_06.png'
					},
					{
						topword:'废话少说，切入主题',
						secondword:'冻干粉着以累产品，近两年风头很旺，但我倒是一直处于观望状态中，直到被品牌爸爸投喂，便一发不可收拾',
						mainimdg: '../../static/img/shopcar/images/shopmain_08.png'
					},
					{
						topword:'我本身是不长痘的体制，但长期熬夜时不时冒闭口，脸颊角质薄遇热遇冷易泛红或者不知道什么时候就长了一个小痘痘 ',
						secondword:'一开始使用这款冻干粉是抱着试一试、能只要维持皮肤现状就好的心态，没想到效果还挺不错的。',
						mainimdg: '../../static/img/shopcar/images/shopmain_10.png'
					},
					{
						topword:'虽然这一段时间还是依日作死熬夜，但是依目凑效!',
						secondword:'我猜想，如果调整好作息，皮肤说不定还能更少一层楼。',
						mainimdg: '../../static/img/shopcar/images/shopmain_12.png'
					},
					{
						topword:'其实这款冻干粉对于痉癌、痉印的治愈更佳。',
						secondword:'不仅能重塑肌底，淡化癌印痘坑，还能修复薄弱受损的角质，防止痘痘反复再尘。',
						mainimdg: '../../static/img/shopcar/images/shopmain_14.png'
					},
					{
						topword:'此外，还有平衡水油收缩毛孔的作用，维持皮肤正常水油值。',
						secondword:'每个人的皮肤状态不同，并不是所有人使用之后就立马就会见效的。',
						mainimdg: '../../static/img/shopcar/images/shopmain_16.png'
					},
					{
						topword:'我也是使用了三组冻干粉之后，感受到了皮肤的变化。',
						secondword:'一共历时两周左右，早晚都会使用冻干粉，期间还配合使用了他家的B5喷雾。',
						mainimdg: '../../static/img/shopcar/images/shopmain_18.png'
					},
					{
						topword:'▼使用方法',
						secondword:'冻干粉的使用方法和一般的护肤品还不大相同。说是冻干粉，其实常要将料剂客解在溶剂中溶解。',
						mainimdg: '../../static/img/shopcar/images/shopmain_20.png'
					},
					{
						topword:'两者混合之后，轻轻摇晃直至全部溶解。打开胶头的小盖子，就可以使用了。',
						mainimdg: '../../static/img/shopcar/images/shopmain_22.png'
					},
					{
						topword:'▼使用顺序',
						secondword:'结面后，先，拍一层常用的爽肤水，再将冻干粉涂抹在需要修复的部位。',
						secondword:'吸收后，按照你自己的护肤步骤涂抹后续的乳液或是面霜。'
					},
					{
						topword:'▼赠送福利',
						secondword:'现购买正装冻干粉一盒，赠送寡肽原液一瓶和导入议一个。即买一点二，买二送四。',
						thirdword:'寡肽原液也有修复皮肤屏障、淡化痘印痘坑的作用，可以用在冻十粉之后哦!'
					},
					{
						mainimdg: '../../static/img/shopcar/images/shopmain_24.png'
					},
					{
						topword:'导入仅打开后会产生震动，帮助我们的皮肤更好更快地吸收原液精华。“红灯”是导入状态，“绿灯”是导出状态',
						mainimdg: '../../static/img/shopcar/images/shopmain_26.png'
					},
					{
						topword:'▼注意事项',
						secondword:'未开启的冻干粉请置于阴凉处保存。冻干粉调配之后，置于冰箱冷藏更佳，并在7天之内使用究。',
						thirdword:'请勿与含有重金属的膏体、含有酒精的爽肤水等-起使用，否则会是冻干粉失去活性，无法到达效果。',
						thirdword:'由于寡肽成分属于高蛋白类物质，对蛋的类过敏人群计勿使用。市品含有水杨酸(作皮肤调理制。三岁以下儿童约用。'
					}
				],
				
				timeshop:[
					{
						 leftname:'预计发货时间',
						 righrname:'1-5个工作日'
					},
					{
						 leftname:'正品保证',
						 righrname:'该商品由合作商家自主发货'
					},
					{
						 leftname:'无忧退换货',
						 righrname:'支持七天无理由退货'
					}
				],

				searchshoptwo: [{
					classname: '心机彩妆',
					classhotimg: '../../../static/img/search/images/searcgh_17.png',
					shoponeimg: '../../../static/img/search/images/searcgh_20.png',
					shoponeword: '底妆',
					shoptwoimg: '../../../static/img/search/images/searcgh_22.png',
					shoptwoword: '彩妆',
					shopthreeimg: '../../../static/img/search/images/searcgh_24.png',
					shopthreeword: '唇妆',
					shopforeimg: '../../../static/img/search/images/searcgh_29.png',
					shopforeword: '腮红妆容',
					shopfiveimg: '../../../static/img/search/images/searcgh_30.png',
					shopfiveword: '美容工具',
					shopsicimg: '../../../static/img/search/images/searcgh_31.png',
					shopsixword: '香水美甲'
				}],

				searchshoph: [{
					classname: '个人护理',
					classhotimg: '../../../static/img/search/images/searcgh_35.png',
					shoponeimg: '../../../static/img/search/images/searcgh_38.png',
					shoponeword: '身体护理',
					shoptwoimg: '../../../static/img/search/images/searcgh_40.png',
					shoptwoword: '洗发护发',
					shopthreeimg: '../../../static/img/search/images/searcgh_42.png',
					shopthreeword: '私密护理',
					shopforeimg: '../../../static/img/search/images/searcgh_47.png',
					shopforeword: '口腔护理'
				}],

				searchshopf: [{
					classname: '女装',
					classhotimg: '../../../static/img/search/images/searcgh_49.png',
					shoponeimg: '../../../static/img/search/images/searcgh_52.png',
					shoponeword: '上衣',
					shoptwoimg: '../../../static/img/search/images/searcgh_54.png',
					shoptwoword: '外套',
					shopthreeimg: '../../../static/img/search/images/searcgh_56.png',
					shopthreeword: '裤子',
					shopforeimg: '../../../static/img/search/images/searcgh_61.png',
					shopforeword: '裙子',
					shopfiveimg: '../../../static/img/search/images/searcgh_62.png',
					shopfiveword: '内衣',
					shopsicimg: '../../../static/img/search/images/searcgh_63.png',
					shopsixword: '袜品'
				}],

				searchshopfo: [{
					classname: '鞋靴',
					classhotimg: '../../../static/img/search/images/searcgh_69.png',
					shoponeimg: '../../../static/img/search/images/searcgh_72.png',
					shoponeword: '休闲鞋',
					shoptwoimg: '../../../static/img/search/images/searcgh_74.png',
					shoptwoword: '凉鞋',
					shopthreeimg: '../../../static/img/search/images/searcgh_76.png',
					shopthreeword: '靴子',
					shopforeimg: '../../../static/img/search/images/searcgh_81.png',
					shopforeword: '家具鞋'
				}],

				searchshops: [{
					classname: '箱包',
					classhotimg: '../../../static/img/search/images/searcgh_83.png',
					shoponeimg: '../../../static/img/search/images/searcgh_86.png',
					shoponeword: '斜挎包',
					shoptwoimg: '../../../static/img/search/images/searcgh_88.png',
					shoptwoword: '单肩包',
					shopthreeimg: '../../../static/img/search/images/searcgh_90.png',
					shopthreeword: '双肩包',
					shopforeimg: '../../../static/img/search/images/searcgh_97.png',
					shopforeword: '钱包',
					shopforeimg: '../../../static/img/search/images/searcgh_95.png',
					shopforeword: '行李箱'
				}],

				searchshopsv: [{
					classname: '家居生活',
					classhotimg: '../../../static/img/search/images/searcgh_100.png',
					shoponeimg: '../../../static/img/search/images/searcgh_106.png',
					shoponeword: '百货',
					shoptwoimg: '../../../static/img/search/images/searcgh_108.png',
					shoptwoword: '厨卫',
					shopthreeimg: '../../../static/img/search/images/searcgh_103.png',
					shopthreeword: '文创酷玩',
					shopforeimg: '../../../static/img/search/images/searcgh_114.png',
					shopforeword: '睡眠相关',
					shopforeimg: '../../../static/img/search/images/searcgh_116.png',
					shopforeword: '成人用品'
				}],

				searchshopei: [{
					classname: '配饰',
					classhotimg: '../../../static/img/search/images/searcgh_120.png',
					shoponeimg: '../../../static/img/search/images/searcgh_123.png',
					shoponeword: '首饰',
					shoptwoimg: '../../../static/img/search/images/searcgh_125.png',
					shoptwoword: '服饰相关',
					shopthreeimg: '../../../static/img/search/images/searcgh_127.png',
					shopthreeword: '手表'
				}],

				searchshopni: [{
					classname: '数码电器',
					classhotimg: '../../../static/img/search/images/searcgh_132.png',
					shoponeimg: '../../../static/img/search/images/searcgh_135.png',
					shoponeword: '生活用品',
					shoptwoimg: '../../../static/img/search/images/searcgh_137.png',
					shoptwoword: '数码周边'
				}],

				searchshopte: [{
					classname: '美食',
					classhotimg: '../../../static/img/search/images/searcgh_141.png',
					shoponeimg: '../../../static/img/search/images/searcgh_149.png',
					shoponeword: '休闲食品',
					shoptwoimg: '../../../static/img/search/images/searcgh_144.png',
					shoptwoword: '酒水饮料',
					shopthreeimg: '../../../static/img/search/images/searcgh_146.png',
					shopthreeword: '咖啡冲泡',
					shopforeimg: '../../../static/img/search/images/searcgh_154.png',
					shopforeword: '营养保健'
				}],

				searchshop: [{
					classname: '基础护肤',
					classhotimg: '../../../static/img/search/images/searcgh_03.png',
					shoponeimg: '../../../static/img/search/images/searcgh_07.png',
					shoponeword: '水乳精华',
					shoptwoimg: '../../../static/img/search/images/searcgh_09.png',
					shoptwoword: '卸妆洁面',
					shopthreeimg: '../../../static/img/search/images/searcgh_07.png',
					shopthreeword: '精华水乳',
					shopforeimg: '../../../static/img/search/images/searcgh_13.png',
					shopforeword: '眼唇护理',
					shopfiveimg: '../../../static/img/search/images/searcgh_14.png',
					shopfiveword: '防晒',
					shopsicimg: '../../../static/img/search/images/searcgh_09.png',
					shopsixword: '乳精华'
				}],

				searchmainleft: [{
					namea: '基础护肤',
					nameb: '心机彩妆',
					namec: '个人护理',
					named: '女装',
					namee: '鞋靴',
					namef: '箱包',
					nameg: '家居生活',
					nameh: '配饰',
					namei: '数码电器',
					namej: '美食'
				}],

				minetop: [{
					mineimg: '../../static/img/bingo/bot_15.png',
					minename: '星球居民2743574号',
					minexz: '新晋小可爱',
					minejf: '再积累1300分积分可升级',
					sbing: '../../static/img/mine/images/sz.png',
					jf: '0/1300'
				}],

				shopcartop: [{
					shopcarname: '购物车',
					shopbj: '编辑'
				}],

				shopcarbanner: [{
					scimg: '../../static/img/shopcar/images/bingo.png',
					oneth: '100%正品保障',
					sevbj: '7天安心保价',
					sevth: '7天无理由退货'
				}],

				shopcare: '../../static/img/shopcar/images/qwe_03.png',

				shopcarlike: '猜你喜欢',

				shopcaelikeshop: [{
						img: '../../static/img/shopcar/images/shopcar_07.png',
						name: '这些魔性的小游戏，奇葩又减压',
						price: '￥1',
						imgt: '../../static/img/shopcar/images/shopcar_10.png',
						namet: '今天我们一起去调戏金拱门',
						pricet: '￥19'
					},
					{
						img: '../../static/img/shopcar/images/shopcar_12.png',
						name: '不就是心机素颜嘛，这还不容易',
						price: '￥58',
						imgt: '../../static/img/shopcar/images/shopcar_16.png',
						namet: '阴差阳错，长辈都夸我皮肤变好了？',
						pricet: '￥45'
					},
					{
						img: '../../static/img/shopcar/images/shopcar_17.png',
						name: '林允强烈安利的洗面奶，四舍五入不要钱',
						price: '￥39',
						imgt: '../../static/img/shopcar/images/shopcar_20.png',
						namet: '现在就要公开素颜天才的秘诀',
						pricet: '￥39'
					},
					{
						img: '../../static/img/shopcar/images/shopcar_21.png',
						name: '怎么又是simple？没办法啊谁让它便宜大碗还好用！',
						price: '￥47',
						imgt: '../../static/img/shopcar/images/shopcar_25.png',
						namet: '我贝峦得局部睫毛夹又回来了',
						pricet: '￥15'
					}
				],

				userus: [{
						uuptitle: '推荐一款好喝的酒',
						uupname: '桃花球',
						uupimg: '../../static/img/indextopic/images/topic_35.png',
						uupimgword: '继承与',
						uupbingoimg: '../../static/img/indextopic/images/topic_16.png',
						uupbingoword: '0',
						uupsayimg: '../../static/img/indextopic/images/topic_18.png',
						uupsayword: '0',
						uupmainimg: '../../static/img/indextopic/images/topic_15.png'
					},
					{
						uuptitle: '推荐你最喜欢的穿塔博主',
						uupname: '坐等推荐160体重100+',
						uupimg: '../../static/img/indextopic/images/topic_35.png',
						uupimgword: '继承与',
						uupbingoimg: '../../static/img/indextopic/images/topic_16.png',
						uupbingoword: '0',
						uupsayimg: '../../static/img/indextopic/images/topic_18.png',
						uupsayword: '0',
						uupmainimg: '../../static/img/indextopic/images/topic_23.png'
					},
					{
						uuptitle: '晒一晒你正在用的手机壁纸',
						uupname: '哆啦A梦',
						uupimg: '../../static/img/indextopic/images/topic_35.png',
						uupimgword: '爱因斯坦',
						uupbingoimg: '../../static/img/indextopic/images/topic_16.png',
						uupbingoword: '0',
						uupsayimg: '../../static/img/indextopic/images/topic_18.png',
						uupsayword: '0',
						uupmainimg: '../../static/img/indextopic/images/topic_25.png'
					},
					{
						uuptitle: '你每个月生活费是多少',
						uupname: '1000',
						uupimg: '../../static/img/indextopic/images/topic_35.png',
						uupimgword: '哆啦A梦',
						uupbingoimg: '../../static/img/indextopic/images/topic_16.png',
						uupbingoword: '0',
						uupsayimg: '../../static/img/indextopic/images/topic_18.png',
						uupsayword: '0',
						uupmainimg: '../../static/img/indextopic/images/topic_27.png'
					},
					{
						uuptitle: '一个月你能花多少',
						uupname: '六百饿不死',
						uupimg: '../../static/img/indextopic/images/topic_35.png',
						uupimgword: '下回再见',
						uupbingoimg: '../../static/img/indextopic/images/topic_16.png',
						uupbingoword: '0',
						uupsayimg: '../../static/img/indextopic/images/topic_18.png',
						uupsayword: '0',
						uupmainimg: '../../static/img/indextopic/images/topic_33.png'
					},
					{
						uuptitle: '我的爱早已不在',
						uupname: '1000',
						uupimg: '../../static/img/indextopic/images/topic_35.png',
						uupimgword: '养乐多',
						uupbingoimg: '../../static/img/indextopic/images/topic_16.png',
						uupbingoword: '0',
						uupsayimg: '../../static/img/indextopic/images/topic_18.png',
						uupsayword: '0',
						uupmainimg: '../../static/img/indextopic/images/topic_38.png'
					}
				],

				ustop: [{
					usp: '大家都在聊什么:',
					uss: '新帖',
					ussa: '热帖'
				}],

				topicnew: [{
					newtop: '最新话题',
					newword: '更多>',
					newimga: '../../static/img/indextopic/images/topic_03.png',
					newimgb: '../../static/img/indextopic/images/topic_05.png',
					hottop: '最热话题',
					hotword: '更多>',
					hotimga: '../../static/img/indextopic/images/topic_09.png',
					hotimgb: '../../static/img/indextopic/images/topic_10.png'
				}],

				topictop: [{
					bdaimg: '../../static/img/images/wwwwwwww_03.png',
					bdbh: '昨日中奖名单',
					bdcs: '|',
					bdds: '最高50元优惠卷',
					tltimg: '../../static/img/images/wwwwwwww_06.png'
				}],

				index: [{
					gg: '../../static/img/index/fasf_03.png',
					shoponesrc: '../../static/img/index/fasf_06.png',
					shoponename: '淡化痘印,修复受损，痘肌敏感肌入的冻干粉来了！',
					shoponetypea: '#敏感肌专属',
					shoponetypeb: '#淡化痘印',
					shoponetopec: '#修复角质',
					shoponetimea: '4小时前'
				}],

				indexshop: [{
						shopsrc: '../../static/img/index/ban_03.png',
						shopname: '我花了100块，买到了人生挚爱的化妆水',
						shoptypea: '#补水课程',
						shoptypeb: '#淡斑',
						shoptopec: '#祛痘印',
						shoptoped: '#美白',
						shoptimea: '4小时前'
					},
					{
						shopsrc: '../../static/img/index/ban_06.png',
						shopname: '空调房里的水润肌肤，养生堂桦树汁帮你打造！',
						shoptypea: '#88%天然白桦汁',
						shoptypeb: '#天然',
						shoptopec: '#纯正',
						shoptoped: '#品质',
						shoptimea: '4小时前'
					}
				],

				indexshopthree: [{
						shopsrc: '../../static/img/index/dasd_03.png',
						shopname: '我的妈呀！这份肉松麦片也太好吃了吧！',
						shoptypea: '#营养麦片',
						shoptypeb: '#营养代餐',
						shoptopec: '#代餐食物',
						shoptimea: '4小时前'
					},
					{
						shopsrc: '../../static/img/index/dasd_06.png',
						shopname: '夏季最爱荷包蛋，文艺小套装穿起来~~~',
						shoptypea: '#荷包蛋t版',
						shoptypeb: '#格子半身裙',
						shoptopec: '#格子',
						shoptimea: '4小时前'
					},
					{
						shopsrc: '../../static/img/index/wsd_03.png',
						shopname: '隔离用的好，底妆没烦恼~',
						shoptypea: '#隔离妆前乳',
						shoptypeb: '#隔离',
						shoptopec: '#妆前乳',
						shoptimea: '4小时前'
					},
					{
						shopsrc: '../../static/img/index/wsd_06.png',
						shopname: '复古少女心，淡点小短袖好撩人哦~ ',
						shoptypea: '#淡点',
						shoptypeb: '#复古少女心',
						shoptopec: '#复古',
						shoptimea: '4小时前'
					},
					{
						shopsrc: '../../static/img/index/wer_03.png',
						shopname: '天价眼线睫毛膏也防不住水，我20几元就搞定了',
						shoptypea: '#防晕妆',
						shoptypeb: '#任何肤质',
						shoptopec: '#睫毛膏',
						shoptimea: '4小时前'
					},
					{
						shopsrc: '../../static/img/index/wer_06.png',
						shopname: '论搓背，我还是服沐浴刷',
						shoptypea: '#清洁',
						shoptypeb: '#沐浴',
						shoptopec: '#生活必备',
						shoptimea: '4小时前'
					}
				],

				indextop: [{
					indextopone: '内容',
					indextoptwo: '话题',
					indextopsrc: '../../static/img/index/top_03.png'
				}],

				shopmain: [{
						src: '../../static/img/bingo/bot_15.png',
						shopname: '美国玫瑰翠	 热气球护手霜三件套',
						shopprice: '￥110',
						shoplove: '321'
					},
					{
						src: '../../static/img/bingo/bot_18.png',
						shopname: '日本GEKKA 睡眠免洗面膜',
						shopprice: '￥118',
						shoplove: '1549'
					},
					{
						src: '../../static/img/bingo/bot_20.png',
						shopname: 'ATREUS 蜂蜜护手霜',
						shopprice: '￥19',
						shoplove: '184'
					},
					{
						src: '../../static/img/bingo/bot_22.png',
						shopname: '日本FASALA 软毛沐浴刷',
						shopprice: '￥28.8',
						shoplove: '2125'
					},
					{
						src: '../../static/img/bingo/bot_24.png',
						shopname: '中国有心  手机补光灯',
						shopprice: '￥32',
						shoplove: '895'
					},
					{
						src: '../../static/img/bingo/bot_26.png',
						shopname: '日本大创粉扑清洗剂',
						shopprice: '￥19.9',
						shoplove: '352'
					}
				],

				bingotop: [{
					bingotopone: '值得买',
					bingotoptwo: '搜索'
				}],
				bingotopimg: [{
					bingsrca: '../../static/img/bingo/top_03.png',
					bingsrcb: '../../static/img/bingo/top_05.png'
				}],

				everyp: '每日特价',
				goodp: '好物推荐',

				everyshop: [{
					shopimg: '../../static/img/bingo/top_10.png',
					shopname: '日本DUP隐形双眼皮贴',
					shopprice: '￥45',
					shopoldprice: '￥66',
					add: '加入购物车'
				}],
				everyshopb: [{
					shopimgb: '../../static/img/bingo/top_13.png',
					shopnameb: '阿玛尼宏观405特别靓',
					shoppriceb: '￥25',
					shopoldpriceb: '￥34',
					addb: '加入购物车'
				}],
				bingobanshop: [{
					bimg: '../../static/img/bingo/bot_28.png',
					bname: '泰国Ambuja 梦幻花香护手霜',
					bprice: '￥17',
					blove: '998'
				}],
				bingogood: [{
						bgimg: '../../static/img/bingo/bot_31.png',
						bgname: '美国玫瑰翠	 热气球护手霜三件套',
						bgprice: '￥110',
						bgloimg: '../../static/img/bingo/sdasfhj_03.png',
						bglove: '321'
					},
					{
						bgimg: '../../static/img/bingo/bot_34.png',
						bgname: '日本GEKKA 睡眠免洗面膜',
						bgprice: '￥118',
						bgloimg: '../../static/img/bingo/sdasfhj_03.png',
						bglove: '1549'
					},
					{
						bgimg: '../../static/img/bingo/bot_36.png',
						bgname: 'ATREUS 蜂蜜护手霜',
						bgprice: '￥19',
						bgloimg: '../../static/img/bingo/sdasfhj_03.png',
						bglove: '184'
					},
					{
						bgimg: '../../static/img/bingo/bot_38.png',
						bgname: '日本FASALA 软毛沐浴刷',
						bgprice: '￥28.8',
						bgloimg: '../../static/img/bingo/sdasfhj_03.png',
						bglove: '2125'
					},
					{
						bgimg: '../../static/img/bingo/bot_40.png',
						bgname: '中国有心  手机补光灯',
						bgprice: '￥32',
						bgloimg: '../../static/img/bingo/sdasfhj_03.png',
						bglove: '895'
					},
					{
						bgimg: '../../static/img/bingo/bot_42.png',
						bgname: '日本大创粉扑清洗剂',
						bgprice: '￥19.9',
						bgloimg: '../../static/img/bingo/sdasfhj_03.png',
						bglove: '352'
					}
				],
				bingobanshoptwo: [{
					bimg: '../../static/img/bingo/bot_44.png',
					bname: '泰国Ambuja 梦幻花香护手霜',
					bprice: '￥17',
					blove: '998'
				}]

			}
		}
	}
</script>

<style>
	* {
		padding: 0;
		margin: 0;
		color: black;
		font-family: "楷体";
	}
	
	a {
		text-decoration: none;
	}
</style>