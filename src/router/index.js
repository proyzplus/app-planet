import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index'
import bingo from '@/components/bingo'
import indextopic from '@/components/indextopic'
import shopcar from '@/components/shopcar'
import mine from '@/components/mine'
import search from '@/components/bigsearch/search'
import axiostest from '@/components/axiostest'
import shopmain from '@/components/shopmain'
import topicmain from '@/components/indextopic/topicmain'
import order from '@/components/mine/order'
import assemble from '@/components/mine/assemble'
import message from '@/components/mine/message'
import member from '@/components/mine/member'
import coupon from '@/components/mine/coupon'
import tel from '@/components/mine/tel'
import like from '@/components/mine/like'
import buynow from '@/components/buynow'

Vue.use(Router)

export default new Router({
	routes: [
		{
			path: '/',
			name: 'index',
			component: index
		},
		{
			path: "/bingo",
			name: 'bingo',
			component: bingo
			//			,
			//			children:[
			//				
			//			]
		},
		{
			path: "/indextopic",
			name: 'indextopic',
			component: indextopic
		},
		{
			path: "/shopcar",
			name: 'shopcar',
			component: shopcar
		},
		{
			path: "/mine",
			name: 'mine',
			component: mine
		},
		{
			path: "/search",
			name: 'search',
			component: search
		},
		{
			path: "/shopmain",
			name: 'shopmain',
			component: shopmain,
			children:[
				{
					path: "/shopmain/buynow",
					name: 'buynow',
					component: buynow
				}
			]
		},
		{
			path: "/topicmain",
			name: 'topicmain',
			component: topicmain
		},
		{
			path: "/order",
			name: 'order',
			component: order
		},
		{
			path: "/assemble",
			name: 'assemble',
			component: assemble
		},
		{
			path: "/message",
			name: 'message',
			component: message
		},
		{
			path: "/member",
			name: 'member',
			component: member
		},
		{
			path: "/coupon",
			name: 'coupon',
			component: coupon
		},
		{
			path: "/tel",
			name: 'tel',
			component: tel
		},
		{
			path: "/like",
			name: 'like',
			component: like
		}
	],
	mode:'history'
})