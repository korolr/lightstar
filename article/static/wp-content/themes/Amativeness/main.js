! function(e) {
	function t(n) {
		if (a[n]) return a[n].exports;
		var r = a[n] = {
			exports: {},
			id: n,
			loaded: !1
		};
		return e[n].call(r.exports, r, r.exports, t), r.loaded = !0, r.exports
	}
	var a = {};
	return t.m = e, t.c = a, t.p = "", t(0)
}([function(e, t, a) {
	"use strict";
	a(1), a(5);
	var n = a(7),
		r = a(8),
		o = a(9);
	$(document).ready(function(e) {
		function t() {
			window.setTimeout(function() {
				t()
			}, 1e3);
			var a = new Date("10/18/2016 18:30:00"),
				n = new Date,
				r = n.getTime() - a.getTime(),
				o = 864e5,
				l = r / o,
				s = Math.floor(l),
				i = 24 * (l - s),
				d = Math.floor(i),
				p = 60 * (i - d),
				m = Math.floor(60 * (i - d)),
				c = Math.floor(60 * (p - m));
			e("#span_dt_dt").html(s + "天" + d + "小时" + m + "分" + c + "秒")
		}

		function a(e) {
			var t = e.clipboardData || window.clipboardData;
			if (t) {
				e.preventDefault();
				var a = "著作权归作者所有。<br>商业转载请联系作者获得授权，非商业转载请注明出处。<br>作者：DIYgod<br>链接：" + window.location.href + "<br>来源：Anotherhome<br><br>" + window.getSelection().toString(),
					n = "著作权归作者所有。\n商业转载请联系作者获得授权，非商业转载请注明出处。\n作者：DIYgod\n链接：" + window.location.href + "\n来源：Anotherhome\n\n" + window.getSelection().toString();
				t.setData("text/html", a), t.setData("text/plain", n)
			}
		}

		function l(t) {
			if (t.find("img").lazyload({
					effect: "fadeIn"
				}), e(".post a").attr("target", "_blank"), t.find("#dplayer3").length) {
				new n({
					element: document.getElementById("dplayer3"),
					autoplay: !1,
					theme: "#FADFA3",
					loop: !0,
					screenshot: !0,
					preload: "none",
					video: {
						url: "https://dplayer.b0.upaiyun.com/【微小微】玖月奇迹－踩踩踩.mp4",
						pic: "https://dplayer.b0.upaiyun.com/【微小微】玖月奇迹－踩踩踩.jpg"
					},
					danmaku: {
						id: "18EE8C0B4653D5F4",
						api: "https://dplayer.daoapp.io/",
						token: "tokendemo",
						maximum: 3e3,
						addition: ["https://dplayer.daoapp.io/bilibili?aid=2903742"]
					}
				})
			}
			if (t.find("#dplayer2").length) {
				new n({
					element: document.getElementById("dplayer2"),
					autoplay: !1,
					theme: "#FADFA3",
					loop: !0,
					screenshot: !0,
					preload: "none",
					video: {
						url: "https://dplayer.b0.upaiyun.com/微小微-江南皮革厂倒闭了.mp4",
						pic: "https://dplayer.b0.upaiyun.com/微小微-江南皮革厂倒闭了.jpg"
					},
					danmaku: {
						id: "5rGf5Y2X55qu6Z2p",
						api: "https://dplayer.daoapp.io/",
						token: "tokendemo",
						maximum: 3e3
					}
				})
			}
			if (t.find("#dplayer1").length) {
				new n({
					element: document.getElementById("dplayer1"),
					autoplay: !1,
					theme: "#FADFA3",
					loop: !0,
					screenshot: !0,
					preload: "none",
					video: {
						url: "https://dplayer.b0.upaiyun.com/若能绽放光芒.mp4",
						pic: "https://dplayer.b0.upaiyun.com/若能绽放光芒.png"
					},
					danmaku: {
						id: "9E2E3368B56CDBB4",
						api: "https://dplayer.daoapp.io/",
						token: "tokendemo",
						maximum: 3e3
					}
				})
			}
			if (t.find("#player1").length) {
				new APlayer({
					element: document.getElementById("player1"),
					autoplay: !1,
					preload: "none",
					music: {
						title: "あっちゅ～ま青春!",
						author: "七森中☆ごらく部",
						url: "https://diygod.b0.upaiyun.com/あっちゅ～ま青春!.mp3",
						pic: "https://diygod.b0.upaiyun.com/あっちゅ～ま青春!.jpg"
					}
				})
			}
			if (t.find("#player8").length) {
				new APlayer({
					element: document.getElementById("player8"),
					autoplay: !1,
					showlrc: 3,
					preload: "none",
					music: {
						title: "STYX HELIX",
						author: "MYTH & ROID",
						url: "https://diygod.b0.upaiyun.com/STYX HELIX.mp3",
						pic: "https://diygod.b0.upaiyun.com/STYX HELIX.jpg",
						lrc: "https://api.lwl12.com/music/netease/lyric?raw=true&id=413961906"
					}
				})
			}
			if (t.find("#player7").length) {
				new APlayer({
					element: document.getElementById("player7"),
					autoplay: !1,
					showlrc: 1,
					preload: "none",
					music: {
						title: "光るなら",
						author: "《四月是你的谎言》OP",
						url: "https://diygod.b0.upaiyun.com/光るなら.mp3",
						pic: "https://diygod.b0.upaiyun.com/光るなら.png",
						lrc: "[00:17.460]雨(あめ)上(あ)がりの虹(にじ)も (雨后的彩虹)\n[00:20.470]凛(りん)と咲(さ)いた花(はな)も (凛然绽放的花朵)\n[00:23.610]色(いろ)づき溢(あふ)れ出(だ)す (色彩仿佛要溢出)\n[00:29.710]茜色(あかねいろ)の空(そら (望着那个)\n[00:32.900]仰(あお)ぐ君(きみ)に (仰望绯红色天空的你)\n[00:34.850]あの日(ひ) 恋(こい)に落(お)ちた (就在那天 我坠入了爱河)\n[00:41.070]瞬間(しゅんかん)のドラマチック (戏剧性的瞬间)\n[00:44.270]フィルムの中(なか)の一(ひと)コマも (电影里的每个镜头)\n[00:47.190]消(き)えないよ 心(こころ)に刻(きざ)むから (我都铭记于心)\n[00:55.820]君(きみ)だよ 君(きみ)なんだよ (是你哦 就是你哟)\n[00:58.800]教(おし)えてくれた (告诉了我)\n[01:01.790]暗闇(くらやみ)も光(ひか)るなら (若能在黑暗中绽放光芒)\n[01:04.690]星空(ほしぞら)になる (就会如星空般闪亮)\n[01:07.820]悲(かな)しみを笑颜(えがお)に (被悲伤掩盖的笑容)\n[01:10.760]もう隠(かく)さないで (已经无需隐藏)\n[01:13.860]煌(きら)めくどんな星(ほし)も (闪耀的星光)\n[01:16.680]君(きみ)を照(て)らすから (会为你照亮前方)\n[01:21.440]眠(ねむ)りも忘(わす)れて迎(むか)えた朝日(あさひ)が (忘记了睡觉便迎来朝阳)\n[01:27.960]やたらと突(つ)き刺(さ)さる (胡乱刺眼的阳光)\n[01:33.780]低気圧(ていきあつ)运(はこ)ぶ 头痛だって (烦躁的令人头痛)\n[01:39.100]忘(わす)れる 君(きみ)に会(あ)えば (但只要见到你 便能瞬间遗忘)\n[01:45.480]静寂(せいじゃく)はロマンティック (浪漫的寂静)\n[01:48.380]红茶(こうちゃ)に溶(と)けたシュガーのように (像溶进红茶的砂糖)\n[01:51.520]全身(ぜんしん)に巡(めぐ)るよ 君(きみ)の声(こえ (全身都沉浸在你的声音中)\n[02:00.160]君(きみ)だよ 君(きみ)なんだよ (是你哦 就是你哟)\n[02:03.310]笑颜(えがお)をくれた (带给了我笑容)\n[02:06.400]涙(なみだ)も光(ひか)るなら (眼泪若能绽放光芒)\n[02:09.210]流星(りゅうせい)になる (就会像流星一样)\n[02:12.440]傷付(きずつ)いたその手(て)を (这双伤痕累累的手)\n[02:15.210]もう離(はな)さないで (请不要再松开)\n[02:18.360]愿(ねが)いを込(こ)めた空(そら)に (寄托心愿的天空)\n[02:21.240]明日(あした)が来(く)るから (明天一定会到来)\n[02:26.060]导(みちび)いてくれた 光(ひかり)は 君(きみ)だよ (你就是指引我前进的光)\n[02:32.110]つられて僕(ぼく)も走(はし)り出(だ)した (终于使我也开始向前奔跑)\n[02:36.950]知(し)らぬ间(ま)に クロスし始(はじ)めた (不知不觉间 我们开始交织在一起)\n[02:42.990]ほら 今(いま)だ ここで 光(ひか)るなら (现在 就在这里 若能绽放光芒！)\n[02:49.830]君(きみ)だよ 君(きみ)なんだよ (是你哦 就是你哟)\n[02:52.790]教(おし)えてくれた (告诉了我)\n[02:55.770]暗闇(くらやみ)は终(お)わるから (黑夜终将结束)\n[03:01.770]君(きみ)だよ 君(きみ)なんだよ (是你哦 就是你哟)\n[03:04.810]教(おし)えてくれた (告诉了我)\n[03:07.950]暗闇(くらやみ)も光(ひか)るなら (若能在黑暗中绽放光芒)\n[03:10.870]星空(ほしぞら)になる (就会如星空般闪亮)\n[03:13.890]悲(かな)しみを笑颜(えがお)に (被悲伤掩盖的笑容)\n[03:16.700]もう隠(かく)さないで (已经无需隐藏)\n[03:19.830]煌(きら)めくどんな星(ほし)も (闪耀的星光)\n[03:22.770]君(きみ)を照(て)らすから (会为你指引方向)\n[03:27.310]答(こた)えはいつでも 偶然(ぐうぜん)?必然(ひつぜん)? (答案是偶然？必然？)\n[03:32.610]いつか選(えら)んだ道(みち)こそ (总有一天你会选择这条道路)\n[03:36.550]運命(うんめい)になる (那将成为命运)\n[03:39.600]握(にぎ)りしめたその希望(きぼう)も不安(ふあん)も (握在手心的希望也好不安也罢)\n[03:44.570]きっと二人(ふたり)を動(うご)かす 光(ひかり)になるから (必定会化作驱使我们前进的光)\n"
					}
				})
			}
			if (t.find("#player5").length) {
				new APlayer({
					element: document.getElementById("player5"),
					autoplay: !1,
					showlrc: 1,
					preload: "none",
					music: {
						title: "九九八十一",
						author: "肥皂菌",
						url: "https://diygod.b0.upaiyun.com/九九八十一.mp3",
						pic: "https://diygod.b0.upaiyun.com/九九八十一.jpg",
						lrc: "[00:58.86]上路 巩州遇虎熊\n[01:01.04]五百年前一场疯 腾宵又是孙悟空\n[01:05.16]失马 鹰愁涧飞白龙\n[01:07.54]沙河阻断路难通 福陵山中收天蓬\n[01:11.72]岭上 前行逆黄风\n[01:13.88]七星不照波月洞 千年白骨化阴风\n[01:18.15]鱼篮 网通天一尾红\n[01:20.39]紫金葫芦二道童 九尾老狐敢压龙\n[01:24.79]白虹坠 雪浪击石碎\n[01:27.37]思归 难归 堕回 轮回\n[01:29.45]月满一江水 前世莫追\n[01:33.45]福泽聚宝象 春风度不让洛阳\n[01:36.50]玉面狐折兰香 七绝崖上暗伏赤色大蟒\n[01:40.36]过西梁 女儿国鸳鸯罗帐\n[01:42.89]与三道斗法相 火云扬 明枪易挡暗箭难防\n[01:46.86]十方魔 渴饮着我的脆弱\n[01:49.95]凭你计法相迫 逐个击破要你识我本色\n[01:53.25]万里恶 摧垮了我的沉默\n[01:55.94]一肩担路坎坷 我不说 又何须旁人来嚼口舌\n[02:01.77]借扇 翠云访罗刹\n[02:04.14]碧波潭内结亲宴 招来九头的驸马\n[02:08.11]雾隐 金斑豹伸利爪\n[02:10.49]城北黄狮盗钉耙 白毛小鼠偷烛花\n[02:14.63]思乡 未敢听琵琶\n[02:16.56]摄魂曲后三股叉 一朝命断美人画\n[02:20.84]六耳 幻形难辨真假\n[02:23.06]太岁摇铃唤风沙 玉兔抛绣高台搭\n[02:27.49]红霓垂 九重紫云飞\n[02:30.15]久归 未归 欲回 恨回\n[02:32.64]凡胎恰登对 天命难违\n[02:36.37]比丘走白鹿 十三娘情丝缠缚\n[02:39.18]乌袍君生百目 庙前拦路自称黄眉老祖\n[02:43.19]将云拂 孤直公对谈诗赋\n[02:45.60]还未能抵天竺 金平府 钺斩红尘斧辟寒暑\n[02:49.71]众笔者 嘲笑着我的贪得\n[02:52.07]藏美酒有甚者 谁却敢说自己放肆醉过\n[02:55.98]休怪我 这半生痴情煞多\n[02:58.61]活一遭风流客 慕娇娥 但愿抱拥世间真绝色\n[03:29.59]浮世千寻沫 冲荡了我的轮廓\n[03:32.45]纵身入尘埃里 雷雨大作我也放声而歌\n[03:36.18]方寸中 方寸却不能定夺\n[03:38.80]七十二般胆魄 这次我决意不闪躲\n[03:42.40]世尊如来佛 诘问着我的执着\n[03:45.54]当年我瑶池刻 闹得痛快并未想过太多\n[03:49.14]状罪责 拿捏了我的业果\n[03:51.89]可顽心不服错 不思过 齐天大圣地上行者\n[03:55.63]那传说 忘却了我的寂寞\n[03:58.44]英雄名不堪得 何必较我混沌徒费口沫\n[04:01.64]这人间 毕竟我真正走过\n[04:04.87]一途平九百波 九千错 凌云渡成正果但我\n[04:08.72]有九九八十一种不舍"
					}
				})
			}
			if (t.find("#player4").length) {
				new APlayer({
					element: document.getElementById("player4"),
					autoplay: !1,
					showlrc: 1,
					preload: "none",
					music: {
						title: "回レ！雪月花",
						author: "小倉唯",
						url: "https://diygod.b0.upaiyun.com/回レ！雪月花.mp3",
						pic: "https://diygod.b0.upaiyun.com/回レ！雪月花.jpg",
						lrc: "[by:京兆万年]\n[ti:回レ!雪月花 小紫ver.]\n[ar:小倉唯]\n[lr:ヒゲドライバー]\n[co:ヒゲドライバー]\n[ag:ヒゲドライバー]\n[00:00.00]せ〜の　いちにっさんはい！（预~备 一 二 三 嗨！）\n[00:04.68]ほい！　いよーーーーっ　ぽん！（嘿 咿哟 嘭）\n[00:07.66]ハッハッハッハッハッハッハィヤ（哈 哈 哈 哈 哈 哈 嗨呀）\n[00:11.12]ハッハッハッハッハッハッ　う～（哈 哈 哈 哈 哈 哈 呜~）\n[00:13.36]さぁさぁさぁ（来 来 来）\n[00:14.08]これよりご覧いただきますは（接下来诸位将欣赏到的是）\n[00:15.65]カブキ者たちの栄枯盛衰（歌舞伎演员们的荣辱盛衰）\n[00:17.14]時代常に日進月歩（时代总是在日新月异）\n[00:18.24]聞いてってよ老若男女（且听我一一道来 男女老少）\n[00:20.14]一見は勧善懲悪（乍一看是惩恶扬善）\n[00:21.49]悪者どもを一刀両断（将坏人们一刀两断）\n[00:22.85]「でもホンドにそれだけで楽しいの？」（“但是你真的会因此而觉得扬眉吐气吗？”）\n[00:25.63]もうなんだって蒟蒻問答（无论问什么 都是牛头马嘴）\n[00:27.58]ハッハッハッハッハッハッハィヤ（哈哈哈哈哈哈 咿呀）\n[00:30.57]ハッハッハッハッ（哈哈哈哈）\n[00:31.97]いよーーーーっ　ぽん！（咿哟 嘭）\n[00:33.61]どこからともなく現れて（自何处出现委实难料）\n[00:34.96]すぐどこかへ行っちゃって神出鬼沒（眼又遁隐他处总是神出鬼没）\n[00:36.35]チャンスを待ったら一日千秋（若是静候机会 便是一日千秋）\n[00:38.03]追いかければ東奔西走（追上前去的话又要东奔西走）\n[00:39.68]時代常に千変万化（时代总是千变万化）\n[00:40.95]人の心は複雑怪奇（世人之心复杂怪奇）\n[00:42.31]「でも本気でそんなこ言ってんの？」（“但是说着这些话的你岂不也是难免戏谑?”）\n[00:45.02]もうどうにも満身創痍（也罢 无论怎样都将满身疮痍）\n[00:46.98]嗚呼、巡り巡って夜の町（呜呼 绕来绕去相会在这夜色下的街）\n[00:53.27]キミは合図出し踊りだす（（由）你发出信号 （让）我们一同起舞转）\n[00:58.12]はぁ～（哈呜~）\n[00:58.88]回レ回レ回レ回レ回レ回レ回レ回レ回レ！（旋转吧旋转吧旋转吧旋转吧旋转吧旋转吧旋转吧旋转吧旋转吧！）\n[01:02.12]華麗に花弁　散らすように（在散落的美丽花瓣中）\n[01:04.97]回レ回レ回レ回レ回レ回レ回レ回レ回レ！（旋转吧旋转吧旋转吧旋转吧旋转吧旋转吧旋转吧旋转吧旋转吧！）\n[01:08.13]髪も振り乱して（头发凌乱又怎样？）\n[01:10.23]一昨日、昨日、今日と、明日と、明後日と（前日、昨日、今日、明日、后日）\n[01:14.13]この宴は続く（这场宴会亦不息）\n[01:16.31]踊レ、歌エ、一心不乱に回レ！（舞动吧 歌唱吧 一心不乱的旋转吧于）\n[01:20.19]今宵は雪月花（今夜的雪月花）\n[01:25.43]ほい！　いよーーーーっ　ぽん！（哈～!～哟ーーーー～嘣～!）\n[01:29.14]ハッハッハッハッハッハッハィヤ（哈 哈 哈 哈 哈 哈 嗨呀）\n[01:32.16]ハッハッハッハッハッハッ　う～（哈 哈 哈 哈 哈 哈 呜）\n[01:34.39]ねぇねぇねぇ（呐～呐～呐～）\n[01:35.12]この世に平安訪れるの？（平安已经访问此世了吗?）\n[01:36.50]のべつ幕無し丁丁発止（不会闭幕的丁当争斗）\n[01:38.09]兵ども千客万来（官兵们接踵而来）\n[01:39.50]ひしめき合群雄割拠（相互吵吵嚷嚷群雄割据）\n[01:41.00]伸るか反るか一攫千金（成败在于敢否一举千金）\n[01:42.47]気が付いたら絶体絶命（回过头来却已穷途末路）\n[01:43.50]「でも本音のとこ、どうなってんの？」（「不过真心的所在、到底是什么样呢?」）\n[01:46.62]もうまったく奇想天外（真是的总这么异想天开）\n[01:48.51]嗚呼、辿り辿って夜の町（呜呼、追溯于夜晚小镇上）\n[01:54.83]迷い一つなく踊りだす（心无杂念的就此起舞吧）\n[01:59.68]はぁ～（哈阿～）\n[02:00.44]回レ回レ回レ回レ回レ 回レ回レ回レ回レ！（转啊转啊转啊转啊转啊转啊转啊转啊转啊!）\n[02:03.64]華麗に花弁　散らすように（犹如花瓣华丽的散落一般）\n[02:06.49]回レ回レ回レ回レ回レ 回レ回レ回レ回レ！（转啊转啊转啊转啊转啊转啊转啊转啊转啊!）\n[02:09.66]髪も振り乱して（长发也随风飘散）\n[02:11.72]一昨日、昨日、今日と、明日と、明後日と（无论前天、昨天、还是今天、明天、与后天）\n[02:15.63]この宴は続く（这宴会还会持续）\n[02:17.67]踊レ、歌エ、一心不乱に回レ！（跳吧、唱吧、一心一意的转吧!）\n[02:21.60]今宵は雪月花（因为今宵乃是雪月花）\n[02:36.74]ハッハッハッハッハッハッハィヤ（哈 哈 哈 哈 哈 哈 嗨呀）\n[02:39.72]ハッハッハッハッハッハッ　さぁさぁさぁ（哈 哈 哈 哈 哈 哈 来～来～来～）\n[02:42.45]ハッハッハッハッハッハッハィヤ（哈 哈 哈 哈 哈 哈 嗨呀）\n[02:45.49]ハッハッハッハッハッハッ（哈 哈 哈 哈 哈 哈）\n[02:47.66]花で一つ、鳥で二つ（花就是一、鸟就是二）\n[02:51.31]手打ち鳴らす（拍着手轻声唱）\n[02:54.12]風で三つ、嗚呼、月出て四つ（风就是三、呜呼、月出就有四）\n[02:58.76]鳴らす鳴らす……（轻声唱轻轻唱……）\n[03:00.09]花で一つ、鳥で二つ（花就是一、鸟就是二）\n[03:03.34]手打ち鳴らす（拍着手轻声唱）\n[03:06.25]風で三つ、嗚呼、月出て四つ（风就是三、呜呼、月出就有四）\n[03:10.78]鳴らす鳴らす……（轻轻唱轻声唱……）\n[03:13.28]今は（在此）\n[03:15.35]回レ回レ回レ回レ回レ 回レ回レ回レ回レ！（转啊转啊转啊转啊转啊转啊转啊转啊转啊!）\n[03:18.63]華麗に花弁　散らすように（犹如花瓣华丽的散落一般）\n[03:21.35]回レ回レ回レ回レ回レ 回レ回レ回レ回レ！（转啊转啊转啊转啊转啊转啊转啊转啊转啊!）\n[03:24.60]髪も振り乱して（长发也随风飘散）\n[03:26.72]一昨日、昨日、今日と、明日と、明後日と（无论前天、昨天、还是今天、明天、与后天）\n[03:30.67]この宴は続く（这宴会不会结束）\n[03:32.75]踊レ、歌エ、一心不乱に回レ！（跳吧、唱吧、一心一意的转吧!）\n[03:36.63]今宵は何曜日か？（今宵是星期几呢?）\n[03:39.02]水木金？（三四五?）\n[03:40.56]土日月火？（六七一二?）\n[03:44.11]ハッハッハッハッハッハッハィヤ（哈 哈 哈 哈 哈 哈 嗨呀）\n[03:47.00]ハッハッハッハッ（哈 哈 哈 哈 哈 哈）\n[03:48.57]いよーーーーっ　ぽん！（～哟ーーーー～嘣～!）\n[03:50.43]-終わり-（-End-）"
					}
				})
			}
			if (t.find("#player3").length) {
				new APlayer({
					element: document.getElementById("player3"),
					autoplay: !1,
					showlrc: 1,
					preload: "none",
					music: {
						title: "secret base ~君がくれたもの~",
						author: "茅野愛衣",
						url: "https://diygod.b0.upaiyun.com/secretbase.mp3",
						pic: "https://diygod.b0.upaiyun.com/secretbase.jpg",
						lrc: "[00:00.230]君と夏の終わり 将来の夢（与你在夏末约定　将来的梦想）\n[00:04.170]大きな希望 忘れない（远大的希望　不要忘记了）\n[00:07.170]10年後の8月（我相信　十年後的八月）\n[00:09.700]また出会えるのを 信じて（我们还能再相遇）\n[00:14.360]最高の思い出を…（共划美好的回忆）\n[00:39.960]出会いは ふっとした 瞬間 帰り道の交差点で（相识　是那麼不经意的瞬间　我在回家途中的十字路口）\n[00:47.050]声をかけてくれたね 「一緒に帰ろう」（听见你的一声〞一起回家吧〞）\n[00:54.310]僕は 照れくさそうに カバンで顔を隠しながら（我当时有点尴尬　还拿书包遮著脸）\n[01:01.470]本当は とても とても 嬉しかったよ（其实我　心里好高兴　真的好高兴）\n[01:08.590]あぁ 花火が夜空 きれいに咲いて ちょっとセツナク（啊！烟火在夜空中　灿烂盛开　几许伤感）\n[01:15.770]あぁ 風が時間とともに 流れる（啊！风随着时光流逝）\n[01:22.580]嬉しくって 楽しくって 冒険も いろいろしたね（满心欢喜地　兴致冲冲地　我们四处探险）\n[01:29.760]二人の 秘密の 基地の中（就在我们的　秘密基地中）\n[01:36.740]君と夏の終わり 将来の夢 大きな希望 忘れない（与你在夏末约定　将来的梦想　远大的希望　不要忘记了）\n[01:43.920]10年後の8月 また出会えるのを 信じて（我相信　十年後的八月　我们还能再相遇）\n[01:51.010]君が最後まで 心から 「ありがとう」叫んでいたこと（我知道　一直到最後）\n[01:56.930]知っていたよ（你仍在心底呼喊著〞谢谢你〞）\n[01:58.200]涙をこらえて 笑顔でさようなら せつないよね（强忍著泪水　笑著说再见　无限感叹涌现）\n[02:05.420]最高の思い出を…（那一段最美好的回忆…）\n[02:13.070]あぁ 夏休みも あと少しで 終っちゃうから（啊！暑假就快要过完了）\n[02:20.310]あぁ 太陽と月 仲良くして（啊！太阳和月亮　默契十足）\n[02:27.080]悲しくって 寂しくって 喧嘩も いろいろしたね（想到令人悲伤　或许有些寂寥　我们也多有争吵）\n[02:34.160]二人の 秘密の 基地の中（就在我们的　秘密基地中）\n[02:41.140]君が最後まで 心から 「ありがとう」叫んでいたこと（我知道　一直到最後）\n[02:47.000]知っていたよ（你仍在心底呼喊著〞谢谢你）\n[02:48.340]涙をこらえて 笑顔でさようなら せつないよね（强忍著泪水　笑著说再见　无限感叹涌现）\n[02:55.630]最高の思い出を…（那一段最美好的回忆）\n[03:03.320]突然の 転校で どうしようもなく（你突然要转学　你我都可奈何）\n[03:24.190]手紙 書くよ 電話もするよ 忘れないでね 僕のことを（我会写信给你　也会打电话给你　千万不要忘记我）\n[03:31.420]いつまでも 二人の 基地の中（永远别忘记　那段在秘密基地中的日子）\n[03:38.520]君と夏の終わり ずっと話して（与你在夏末　聊了这麼多）\n[03:42.530]夕日を見てから星を眺め（从黄昏到繁星点点）\n[03:45.670]君の頬を 流れた涙は ずっと忘れない（流过你双颊的泪水　我永远不会忘记）\n[03:52.820]君が最後まで 大きく手を振ってくれたこと（直到最後　你紧紧握住我的手　这感觉也将长在我心中）\n[03:58.540]きっと忘れない（於是就这样）\n[03:59.930]だから こうして 夢の中で ずっと永遠に…（让我们在梦中相会吧　永远的…）\n[04:07.110]君と夏の終わり 将来の夢 大きな希望 忘れない（与你在夏末约定　将来的梦想　远大的希望　不要忘记了）\n[04:14.270]10年後の8月 また出会えるのを 信じて（我相信　十年後的八月　我们还能再相遇）\n[04:21.400]君が最後まで 心から 「ありがとう」叫んでいたこと（我知道　一直到最後）\n[04:27.260]知っていたよ（你仍在心底呼喊著〞谢谢你〞）\n[04:28.640]涙をこらえて 笑顔でさようなら せつないよね（强忍著泪水　笑著说再见　无限感叹涌现）\n[04:35.910]最高の思い出を…（那一段最美好的回忆…）\n[04:43.160]最高の思い出を…（那一段最美好的回忆…）"
					}
				})
			}
			if (t.find("#player2").length) {
				new APlayer({
					element: document.getElementById("player2"),
					autoplay: !1,
					preload: "none",
					music: {
						title: "Preparation",
						author: "Hans Zimmer/Richard Harvey",
						url: "https://diygod.b0.upaiyun.com/Preparation.mp3",
						pic: "https://diygod.b0.upaiyun.com/Preparation.jpg"
					}
				})
			}
			if (t.find(".unlike-count").length) {
				var a = function() {
					"left" === this.style["float"] ? this.style["float"] = "right" : "right" === this.style["float"] && (this.style["float"] = "left")
				};
				document.getElementsByClassName("unlike-count")[0].addEventListener("mouseover", a), document.getElementsByClassName("unlike-count")[0].addEventListener("click", a)
			}
			t.find(".like-vote").length && (e.getJSON("https://www.anotherhome.net/api/vote/like.php?action=get", function(t) {
				e(".like-vote span").html(t.like)
			}), e(".like-vote").click(function() {
				e.getJSON("https://www.anotherhome.net/api/vote/like.php?action=add", function(t) {
					t.success ? (e(".like-vote span").html(t.like), e(".like-title").html("我也喜欢你 (*≧▽≦)")) : e(".like-title").html("你的爱我已经感受到了~")
				})
			}))
		}
		var s = /mobile/i.test(window.navigator.userAgent);
		if (e(".typed a").typed({
				strings: ["天生我材必有用", "Believe yourself!"],
				typeSpeed: 30,
				backSpeed: 30,
				backDelay: 700
			}), e.scrollto = function(t, a) {
				e(t).click(function() {
					var t = e(this).attr("data-scroll");
					return e(this).addClass("active").siblings().removeClass("active"), e("html, body").animate({
						scrollTop: e(t).offset().top
					}, a), !1
				})
			}, e(window).width() > 800) {
			var i = e("#back-to-top"),
				d = e(window).height() - 980 + "px";
			e(window).scroll(function() {
				e(window).scrollTop() > 700 && "-900px" === i.css("top") ? i.css("top", d) : e(window).scrollTop() <= 700 && "-900px" !== i.css("top") && i.css("top", "-900px")
			})
		}
		e.scrollto("#back-to-top", 800), e("#comment-content").keydown(function(t) {
			if (t.ctrlKey && 13 == t.keyCode) return e("#submit").click(), !1
		}), e(".side .block .label").click(function() {
			e(this).siblings(".list").slideToggle("slow")
		}), e(".main .block .comments").click(function() {
			e(this).siblings(".comment-list").slideToggle("slow")
		}), e(".main .block .round-date").click(function() {
			e(this).siblings(".label").slideToggle("slow"), e(this).siblings(".article-content").slideToggle("slow")
		});
		var p, m = document.title;
		if (document.addEventListener("visibilitychange", function() {
				document.hidden ? (e('[rel="shortcut icon"]').attr("href", "//www.anotherhome.net/wp-content/themes/Amativeness/fail.ico"), document.title = "(●—●)喔哟，崩溃啦！", clearTimeout(p)) : (e('[rel="shortcut icon"]').attr("href", "//www.anotherhome.net/wp-content/themes/Amativeness/favicon.ico"), document.title = "(/≧▽≦/)咦！又好了！" + m, p = setTimeout(function() {
					document.title = m
				}, 2e3))
			}), e("#pagination a").on("click", function() {
				return e(this).addClass("loading").text("文章列表加载中..."), e.ajax({
					type: "POST",
					url: e(this).attr("href") + "#thumbs",
					success: function(t) {
						var a = e(t).find("#thumbs .post"),
							n = e(t).find("#pagination a").attr("href");
						e("#thumbs").append(a.fadeIn(300)), l(a), e("#pagination a").removeClass("loading").text("点击加载更多"), void 0 != n ? e("#pagination a").attr("href", n) : e("#pagination").remove()
					}
				}), !1
			}), document.getElementsByClassName("avatar")[0].onmouseover = function() {
				this.classList.add("animated", "tada")
			}, document.getElementsByClassName("avatar")[0].onmouseout = function() {
				this.classList.remove("animated", "tada")
			}, t(), !s) {
			var c = document.getElementsByClassName("navbar")[0],
				u = new r(c, {
					tolerance: 5,
					offset: 205,
					classes: {
						initial: "head-animated",
						pinned: "slideDown",
						unpinned: "slideUp"
					}
				});
			u.init()
		}
		for (var y = document.getElementsByClassName("article-content"), g = 0; g < y.length; g++) y[g].addEventListener("copy", function(e) {
			window.getSelection().toString() && window.getSelection().toString().length > 42 && (a(e), notie("info", "商业转载请联系作者获得授权，非商业转载请注明出处，谢谢合作。", !0))
		});
		document.getElementsByClassName("close-side")[0].addEventListener("click", function() {
			document.getElementsByClassName("side")[0].style.display = "none", document.getElementsByClassName("main")[0].style.width = "100%"
		});
		var f = e("#text-4"),
			h = e("#secondary"),
			b = e(window),
			x = h.offset().top + h.height();
		if (b.scroll(function() {
				b.scrollTop() > x ? f.css({
					position: "fixed",
					top: "40px",
					width: "22%",
					animation: "fade-in 0.5s"
				}) : f.css({
					position: "relative",
					top: "0",
					width: "initial",
					animation: "initial"
				})
			}), document.getElementById("submit") && document.getElementById("submit").addEventListener("click", function() {
				this.value = "正在提交,好累呀~"
			}), !s) {
			var v, w, k, Y, O, E, L, B, C, T, z, N;
			! function() {
				var e = function() {
						for (w.clearRect(0, 0, Y, O), L = [{
								x: 0,
								y: .7 * O + E
							}, {
								x: 0,
								y: .7 * O - E
							}]; L[1].x < Y + E;) t(L[0], L[1])
					},
					t = function(e, t) {
						w.beginPath(), w.moveTo(e.x, e.y), w.lineTo(t.x, t.y);
						var n = t.x + (2 * N() - .25) * E,
							r = a(t.y);
						w.lineTo(n, r), w.closePath(), C -= T / -50, w.fillStyle = "#" + (127 * z(C) + 128 << 16 | 127 * z(C + T / 3) + 128 << 8 | 127 * z(C + T / 3 * 2) + 128).toString(16), w.fill(), L[0] = L[1], L[1] = {
							x: n,
							y: r
						}
					},
					a = function n(e) {
						var t = e + (2 * N() - 1.1) * E;
						return t > O || t < 0 ? n(e) : t
					};
				v = document.getElementById("evanyou"), w = v.getContext("2d"), k = window.devicePixelRatio || 1, Y = window.innerWidth, O = window.innerHeight, E = 90, B = Math, C = 0, T = 2 * B.PI, z = B.cos, N = B.random, v.width = Y * k, v.height = O * k, w.scale(k, k), w.globalAlpha = .6, document.onclick = e, document.ontouchstart = e, e()
			}()
		}
		if (document.getElementsByClassName("content-field").length && new o({
				logo: "OωO表情",
				container: document.getElementsByClassName("content-field")[0].getElementsByClassName("OwO")[0],
				target: document.getElementById("comment-content"),
				api: "https://www.anotherhome.net/api/OwO/OwO.json"
			}), l(e("body")), e(".single article.block").append('<div class="share">分享到：</div>'), e(".share").share({
				disabled: ["tencent", "douban", "linkedin", "diandian", "facebook", "google"],
				wechatQrcodeTitle: "微信扫一扫",
				wechatQrcodeHelper: "<p>微信扫一扫，右上角分享</p>",
				source: "Anotherhome"
			}), e(".single article.block").append('\n        <div class="donate">\n            <div class="donate-word">赞赏</div>\n            <div class="donate-body">\n                <div class="donate-wx donate-item">\n                    <img src="https://diygod.b0.upaiyun.com/2016-08-25_wxd.png">\n                    <div class="donate-tip">微信扫一扫，向我赞赏</div>\n                </div>\n                <div class="donate-zfb donate-item">\n                    <img src="https://diygod.b0.upaiyun.com/2016-08-25_zfbd.png">\n                    <div class="donate-tip">支付宝扫一扫，向我赞赏</div>\n                </div>\n            </div>\n        </div>\n    '), e(".donate-word").click(function() {
				e(".donate-body").hasClass("donate-show") ? e(".donate-body").removeClass("donate-show") : e(".donate-body").addClass("donate-show")
			}), window.donateData && e(".donate-table").length) {
			for (var S = window.donateData.sort(function(e, t) {
					return e[0] > t[0] ? 1 : -1
				}), M = "", A = S.length - 1; A >= 0; A--) M += "\n                <tr>\n                    <td>" + S[A][0] + "</td>\n                    <td>" + S[A][1] + "</td>\n                    <td>" + S[A][2] + "</td>\n                </tr>\n            ";
			e(".donate-table tbody").append(M)
		}
	})
}, function(e, t, a) {
	var n = a(2);
	"string" == typeof n && (n = [
		[e.id, n, ""]
	]);
	a(4)(n, {});
	n.locals && (e.exports = n.locals)
}, function(e, t, a) {
	t = e.exports = a(3)(), t.push([e.id, 'button[data-balloon]{overflow:visible}[data-balloon]{position:relative}[data-balloon]:after,[data-balloon]:before{-ms-filter:"progid:DXImageTransform.Microsoft.Alpha(Opacity=0)";filter:alpha(opacity=0);-khtml-opacity:0;-moz-opacity:0;opacity:0;pointer-events:none;-webkit-transition:all .18s ease-out .18s;transition:all .18s ease-out .18s;bottom:100%;left:50%;position:absolute;z-index:10;-webkit-transform:translate(-50%,10px);transform:translate(-50%,10px);-webkit-transform-origin:top;transform-origin:top}[data-balloon]:after{background:hsla(0,0%,7%,.9);border-radius:4px;color:#fff;content:attr(data-balloon);font-size:12px;padding:.5em 1em;white-space:nowrap;margin-bottom:11px}[data-balloon]:before{background:url(\'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="36px" height="12px"><path fill="rgba(17, 17, 17, 0.9)" transform="rotate(0)" d="M2.658,0.000 C-13.615,0.000 50.938,0.000 34.662,0.000 C28.662,0.000 23.035,12.002 18.660,12.002 C14.285,12.002 8.594,0.000 2.658,0.000 Z"/></svg>\') no-repeat;background-size:100% auto;height:6px;width:18px;content:"";margin-bottom:5px}[data-balloon]:hover:after,[data-balloon]:hover:before,[data-balloon][data-balloon-visible]:after,[data-balloon][data-balloon-visible]:before{-ms-filter:"progid:DXImageTransform.Microsoft.Alpha(Opacity=100)";filter:alpha(opacity=100);-khtml-opacity:1;-moz-opacity:1;opacity:1;pointer-events:auto;-webkit-transform:translate(-50%);transform:translate(-50%)}[data-balloon][data-balloon-break]:after{white-space:normal}[data-balloon-pos=down]:after,[data-balloon-pos=down]:before{bottom:auto;left:50%;top:100%;-webkit-transform:translate(-50%,-10px);transform:translate(-50%,-10px)}[data-balloon-pos=down]:after{margin-top:11px}[data-balloon-pos=down]:before{background:url(\'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="36px" height="12px"><path fill="rgba(17, 17, 17, 0.9)" transform="rotate(180 18 6)" d="M2.658,0.000 C-13.615,0.000 50.938,0.000 34.662,0.000 C28.662,0.000 23.035,12.002 18.660,12.002 C14.285,12.002 8.594,0.000 2.658,0.000 Z"/></svg>\') no-repeat;background-size:100% auto;height:6px;width:18px;margin-top:5px;margin-bottom:0}[data-balloon-pos=down]:hover:after,[data-balloon-pos=down]:hover:before,[data-balloon-pos=down][data-balloon-visible]:after,[data-balloon-pos=down][data-balloon-visible]:before{-webkit-transform:translate(-50%);transform:translate(-50%)}[data-balloon-pos=left]:after,[data-balloon-pos=left]:before{bottom:auto;left:auto;right:100%;top:50%;-webkit-transform:translate(10px,-50%);transform:translate(10px,-50%)}[data-balloon-pos=left]:after{margin-right:11px}[data-balloon-pos=left]:before{background:url(\'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="12px" height="36px"><path fill="rgba(17, 17, 17, 0.9)" transform="rotate(-90 18 18)" d="M2.658,0.000 C-13.615,0.000 50.938,0.000 34.662,0.000 C28.662,0.000 23.035,12.002 18.660,12.002 C14.285,12.002 8.594,0.000 2.658,0.000 Z"/></svg>\') no-repeat;background-size:100% auto;height:18px;width:6px;margin-right:5px;margin-bottom:0}[data-balloon-pos=left]:hover:after,[data-balloon-pos=left]:hover:before,[data-balloon-pos=left][data-balloon-visible]:after,[data-balloon-pos=left][data-balloon-visible]:before{-webkit-transform:translateY(-50%);transform:translateY(-50%)}[data-balloon-pos=right]:after,[data-balloon-pos=right]:before{bottom:auto;left:100%;top:50%;-webkit-transform:translate(-10px,-50%);transform:translate(-10px,-50%)}[data-balloon-pos=right]:after{margin-left:11px}[data-balloon-pos=right]:before{background:url(\'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="12px" height="36px"><path fill="rgba(17, 17, 17, 0.9)" transform="rotate(90 6 6)" d="M2.658,0.000 C-13.615,0.000 50.938,0.000 34.662,0.000 C28.662,0.000 23.035,12.002 18.660,12.002 C14.285,12.002 8.594,0.000 2.658,0.000 Z"/></svg>\') no-repeat;background-size:100% auto;height:18px;width:6px;margin-bottom:0;margin-left:5px}[data-balloon-pos=right]:hover:after,[data-balloon-pos=right]:hover:before,[data-balloon-pos=right][data-balloon-visible]:after,[data-balloon-pos=right][data-balloon-visible]:before{-webkit-transform:translateY(-50%);transform:translateY(-50%)}[data-balloon-length]:after{white-space:normal}[data-balloon-length=small]:after{width:80px}[data-balloon-length=medium]:after{width:150px}[data-balloon-length=large]:after{width:260px}[data-balloon-length=xlarge]:after{width:90vw}@media screen and (min-width:768px){[data-balloon-length=xlarge]:after{width:380px}}[data-balloon-length=fit]:after{width:100%}', ""])
}, function(e, t) {
	e.exports = function() {
		var e = [];
		return e.toString = function() {
			for (var e = [], t = 0; t < this.length; t++) {
				var a = this[t];
				a[2] ? e.push("@media " + a[2] + "{" + a[1] + "}") : e.push(a[1])
			}
			return e.join("")
		}, e.i = function(t, a) {
			"string" == typeof t && (t = [
				[null, t, ""]
			]);
			for (var n = {}, r = 0; r < this.length; r++) {
				var o = this[r][0];
				"number" == typeof o && (n[o] = !0)
			}
			for (r = 0; r < t.length; r++) {
				var l = t[r];
				"number" == typeof l[0] && n[l[0]] || (a && !l[2] ? l[2] = a : a && (l[2] = "(" + l[2] + ") and (" + a + ")"), e.push(l))
			}
		}, e
	}
}, function(e, t, a) {
	function n(e, t) {
		for (var a = 0; a < e.length; a++) {
			var n = e[a],
				r = u[n.id];
			if (r) {
				r.refs++;
				for (var o = 0; o < r.parts.length; o++) r.parts[o](n.parts[o]);
				for (; o < n.parts.length; o++) r.parts.push(d(n.parts[o], t))
			} else {
				for (var l = [], o = 0; o < n.parts.length; o++) l.push(d(n.parts[o], t));
				u[n.id] = {
					id: n.id,
					refs: 1,
					parts: l
				}
			}
		}
	}

	function r(e) {
		for (var t = [], a = {}, n = 0; n < e.length; n++) {
			var r = e[n],
				o = r[0],
				l = r[1],
				s = r[2],
				i = r[3],
				d = {
					css: l,
					media: s,
					sourceMap: i
				};
			a[o] ? a[o].parts.push(d) : t.push(a[o] = {
				id: o,
				parts: [d]
			})
		}
		return t
	}

	function o(e, t) {
		var a = f(),
			n = x[x.length - 1];
		if ("top" === e.insertAt) n ? n.nextSibling ? a.insertBefore(t, n.nextSibling) : a.appendChild(t) : a.insertBefore(t, a.firstChild), x.push(t);
		else {
			if ("bottom" !== e.insertAt) throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
			a.appendChild(t)
		}
	}

	function l(e) {
		e.parentNode.removeChild(e);
		var t = x.indexOf(e);
		t >= 0 && x.splice(t, 1)
	}

	function s(e) {
		var t = document.createElement("style");
		return t.type = "text/css", o(e, t), t
	}

	function i(e) {
		var t = document.createElement("link");
		return t.rel = "stylesheet", o(e, t), t
	}

	function d(e, t) {
		var a, n, r;
		if (t.singleton) {
			var o = b++;
			a = h || (h = s(t)), n = p.bind(null, a, o, !1), r = p.bind(null, a, o, !0)
		} else e.sourceMap && "function" == typeof URL && "function" == typeof URL.createObjectURL && "function" == typeof URL.revokeObjectURL && "function" == typeof Blob && "function" == typeof btoa ? (a = i(t), n = c.bind(null, a), r = function() {
			l(a), a.href && URL.revokeObjectURL(a.href)
		}) : (a = s(t), n = m.bind(null, a), r = function() {
			l(a)
		});
		return n(e),
			function(t) {
				if (t) {
					if (t.css === e.css && t.media === e.media && t.sourceMap === e.sourceMap) return;
					n(e = t)
				} else r()
			}
	}

	function p(e, t, a, n) {
		var r = a ? "" : n.css;
		if (e.styleSheet) e.styleSheet.cssText = v(t, r);
		else {
			var o = document.createTextNode(r),
				l = e.childNodes;
			l[t] && e.removeChild(l[t]), l.length ? e.insertBefore(o, l[t]) : e.appendChild(o)
		}
	}

	function m(e, t) {
		var a = t.css,
			n = t.media;
		if (n && e.setAttribute("media", n), e.styleSheet) e.styleSheet.cssText = a;
		else {
			for (; e.firstChild;) e.removeChild(e.firstChild);
			e.appendChild(document.createTextNode(a))
		}
	}

	function c(e, t) {
		var a = t.css,
			n = t.sourceMap;
		n && (a += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(n)))) + " */");
		var r = new Blob([a], {
				type: "text/css"
			}),
			o = e.href;
		e.href = URL.createObjectURL(r), o && URL.revokeObjectURL(o)
	}
	var u = {},
		y = function(e) {
			var t;
			return function() {
				return "undefined" == typeof t && (t = e.apply(this, arguments)), t
			}
		},
		g = y(function() {
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase())
		}),
		f = y(function() {
			return document.head || document.getElementsByTagName("head")[0]
		}),
		h = null,
		b = 0,
		x = [];
	e.exports = function(e, t) {
		t = t || {}, "undefined" == typeof t.singleton && (t.singleton = g()), "undefined" == typeof t.insertAt && (t.insertAt = "bottom");
		var a = r(e);
		return n(a, t),
			function(e) {
				for (var o = [], l = 0; l < a.length; l++) {
					var s = a[l],
						i = u[s.id];
					i.refs--, o.push(i)
				}
				if (e) {
					var d = r(e);
					n(d, t)
				}
				for (var l = 0; l < o.length; l++) {
					var i = o[l];
					if (0 === i.refs) {
						for (var p = 0; p < i.parts.length; p++) i.parts[p]();
						delete u[i.id]
					}
				}
			}
	};
	var v = function() {
		var e = [];
		return function(t, a) {
			return e[t] = a, e.filter(Boolean).join("\n")
		}
	}()
}, function(e, t, a) {
	var n = a(6);
	"string" == typeof n && (n = [
		[e.id, n, ""]
	]);
	a(4)(n, {});
	n.locals && (e.exports = n.locals)
}, function(e, t, a) {
	t = e.exports = a(3)(), t.push([e.id, ".OwO{position:relative;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.OwO:hover .OwO-logo{color:#444}.OwO.OwO-open .OwO-logo{border-radius:4px 4px 0 0;border-bottom:none;color:#444}.OwO.OwO-open .OwO-body{display:block}.OwO.OwO-up .OwO-body{top:inherit;bottom:21px;border-radius:4px 4px 4px 0}.OwO.OwO-up .OwO-body .OwO-bar .OwO-packages li:nth-child(1){border-radius:0}.OwO.OwO-up.OwO-open .OwO-logo{border:1px solid #ddd;border-radius:0 0 4px 4px;border-top:none}.OwO .OwO-logo{position:relative;display:inline-block;color:#888;background:#fff;border:1px solid #ddd;border-radius:4px;font-size:13px;padding:2px 5px;cursor:pointer;height:22px;box-sizing:border-box;z-index:2;line-height:16px}.OwO .OwO-logo:hover span{display:inline-block;-webkit-animation:a 5s infinite ease-in-out;animation:a 5s infinite ease-in-out}.OwO .OwO-body{display:none;position:absolute;width:400px;background:#fff;border:1px solid #ddd;z-index:1;top:21px;border-radius:0 4px 4px 4px}.OwO .OwO-body .OwO-items{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;display:none;padding:10px;margin:0;overflow:scroll;font-size:0}.OwO .OwO-body .OwO-items .OwO-item{list-style-type:none;background:#f7f7f7;padding:5px 10px;border-radius:5px;display:inline-block;font-size:12px;line-height:14px;margin:0 10px 12px 0;cursor:pointer;-webkit-transition:.3s;transition:.3s}.OwO .OwO-body .OwO-items .OwO-item:hover{background:#eee;box-shadow:0 2px 2px 0 rgba(0,0,0,.14),0 3px 1px -2px rgba(0,0,0,.2),0 1px 5px 0 rgba(0,0,0,.12);-webkit-animation:a 5s infinite ease-in-out;animation:a 5s infinite ease-in-out}.OwO .OwO-body .OwO-items-emoji .OwO-item{font-size:20px;line-height:19px}.OwO .OwO-body .OwO-items-image .OwO-item{max-width:calc(25% - 10px);box-sizing:border-box}.OwO .OwO-body .OwO-items-image .OwO-item img{max-width:100%}.OwO .OwO-body .OwO-items-show{display:block}.OwO .OwO-body .OwO-bar{width:100%;height:30px;border-top:1px solid #ddd;background:#fff;border-radius:0 0 4px 4px;color:#444}.OwO .OwO-body .OwO-bar .OwO-packages{margin:0;padding:0;font-size:0}.OwO .OwO-body .OwO-bar .OwO-packages li{list-style-type:none;display:inline-block;line-height:30px;font-size:14px;padding:0 10px;cursor:pointer;margin-right:3px}.OwO .OwO-body .OwO-bar .OwO-packages li:nth-child(1){border-radius:0 0 0 3px}.OwO .OwO-body .OwO-bar .OwO-packages li:hover{background:#eee}.OwO .OwO-body .OwO-bar .OwO-packages .OwO-package-active{background:#eee;-webkit-transition:.3s;transition:.3s}@-webkit-keyframes a{2%{-webkit-transform:translateY(1.5px) rotate(1.5deg);transform:translateY(1.5px) rotate(1.5deg)}4%{-webkit-transform:translateY(-1.5px) rotate(-.5deg);transform:translateY(-1.5px) rotate(-.5deg)}6%{-webkit-transform:translateY(1.5px) rotate(-1.5deg);transform:translateY(1.5px) rotate(-1.5deg)}8%{-webkit-transform:translateY(-1.5px) rotate(-1.5deg);transform:translateY(-1.5px) rotate(-1.5deg)}10%{-webkit-transform:translateY(2.5px) rotate(1.5deg);transform:translateY(2.5px) rotate(1.5deg)}12%{-webkit-transform:translateY(-.5px) rotate(1.5deg);transform:translateY(-.5px) rotate(1.5deg)}14%{-webkit-transform:translateY(-1.5px) rotate(1.5deg);transform:translateY(-1.5px) rotate(1.5deg)}16%{-webkit-transform:translateY(-.5px) rotate(-1.5deg);transform:translateY(-.5px) rotate(-1.5deg)}18%{-webkit-transform:translateY(.5px) rotate(-1.5deg);transform:translateY(.5px) rotate(-1.5deg)}20%{-webkit-transform:translateY(-1.5px) rotate(2.5deg);transform:translateY(-1.5px) rotate(2.5deg)}22%{-webkit-transform:translateY(.5px) rotate(-1.5deg);transform:translateY(.5px) rotate(-1.5deg)}24%{-webkit-transform:translateY(1.5px) rotate(1.5deg);transform:translateY(1.5px) rotate(1.5deg)}26%{-webkit-transform:translateY(.5px) rotate(.5deg);transform:translateY(.5px) rotate(.5deg)}28%{-webkit-transform:translateY(.5px) rotate(1.5deg);transform:translateY(.5px) rotate(1.5deg)}30%{-webkit-transform:translateY(-.5px) rotate(2.5deg);transform:translateY(-.5px) rotate(2.5deg)}32%,34%{-webkit-transform:translateY(1.5px) rotate(-.5deg);transform:translateY(1.5px) rotate(-.5deg)}36%{-webkit-transform:translateY(-1.5px) rotate(2.5deg);transform:translateY(-1.5px) rotate(2.5deg)}38%{-webkit-transform:translateY(1.5px) rotate(-1.5deg);transform:translateY(1.5px) rotate(-1.5deg)}40%{-webkit-transform:translateY(-.5px) rotate(2.5deg);transform:translateY(-.5px) rotate(2.5deg)}42%{-webkit-transform:translateY(2.5px) rotate(-1.5deg);transform:translateY(2.5px) rotate(-1.5deg)}44%{-webkit-transform:translateY(1.5px) rotate(.5deg);transform:translateY(1.5px) rotate(.5deg)}46%{-webkit-transform:translateY(-1.5px) rotate(2.5deg);transform:translateY(-1.5px) rotate(2.5deg)}48%{-webkit-transform:translateY(-.5px) rotate(.5deg);transform:translateY(-.5px) rotate(.5deg)}50%{-webkit-transform:translateY(.5px) rotate(.5deg);transform:translateY(.5px) rotate(.5deg)}52%{-webkit-transform:translateY(2.5px) rotate(2.5deg);transform:translateY(2.5px) rotate(2.5deg)}54%{-webkit-transform:translateY(-1.5px) rotate(1.5deg);transform:translateY(-1.5px) rotate(1.5deg)}56%{-webkit-transform:translateY(2.5px) rotate(2.5deg);transform:translateY(2.5px) rotate(2.5deg)}58%{-webkit-transform:translateY(.5px) rotate(2.5deg);transform:translateY(.5px) rotate(2.5deg)}60%{-webkit-transform:translateY(2.5px) rotate(2.5deg);transform:translateY(2.5px) rotate(2.5deg)}62%{-webkit-transform:translateY(-.5px) rotate(2.5deg);transform:translateY(-.5px) rotate(2.5deg)}64%{-webkit-transform:translateY(-.5px) rotate(1.5deg);transform:translateY(-.5px) rotate(1.5deg)}66%{-webkit-transform:translateY(1.5px) rotate(-.5deg);transform:translateY(1.5px) rotate(-.5deg)}68%{-webkit-transform:translateY(-1.5px) rotate(-.5deg);transform:translateY(-1.5px) rotate(-.5deg)}70%{-webkit-transform:translateY(1.5px) rotate(.5deg);transform:translateY(1.5px) rotate(.5deg)}72%{-webkit-transform:translateY(2.5px) rotate(1.5deg);transform:translateY(2.5px) rotate(1.5deg)}74%{-webkit-transform:translateY(-.5px) rotate(.5deg);transform:translateY(-.5px) rotate(.5deg)}76%{-webkit-transform:translateY(-.5px) rotate(2.5deg);transform:translateY(-.5px) rotate(2.5deg)}78%{-webkit-transform:translateY(-.5px) rotate(1.5deg);transform:translateY(-.5px) rotate(1.5deg)}80%{-webkit-transform:translateY(1.5px) rotate(1.5deg);transform:translateY(1.5px) rotate(1.5deg)}82%{-webkit-transform:translateY(-.5px) rotate(.5deg);transform:translateY(-.5px) rotate(.5deg)}84%{-webkit-transform:translateY(1.5px) rotate(2.5deg);transform:translateY(1.5px) rotate(2.5deg)}86%{-webkit-transform:translateY(-1.5px) rotate(-1.5deg);transform:translateY(-1.5px) rotate(-1.5deg)}88%{-webkit-transform:translateY(-.5px) rotate(2.5deg);transform:translateY(-.5px) rotate(2.5deg)}90%{-webkit-transform:translateY(2.5px) rotate(-.5deg);transform:translateY(2.5px) rotate(-.5deg)}92%{-webkit-transform:translateY(.5px) rotate(-.5deg);transform:translateY(.5px) rotate(-.5deg)}94%{-webkit-transform:translateY(2.5px) rotate(.5deg);transform:translateY(2.5px) rotate(.5deg)}96%{-webkit-transform:translateY(-.5px) rotate(1.5deg);transform:translateY(-.5px) rotate(1.5deg)}98%{-webkit-transform:translateY(-1.5px) rotate(-.5deg);transform:translateY(-1.5px) rotate(-.5deg)}0%,to{-webkit-transform:translate(0) rotate(0deg);transform:translate(0) rotate(0deg)}}@keyframes a{2%{-webkit-transform:translateY(1.5px) rotate(1.5deg);transform:translateY(1.5px) rotate(1.5deg)}4%{-webkit-transform:translateY(-1.5px) rotate(-.5deg);transform:translateY(-1.5px) rotate(-.5deg)}6%{-webkit-transform:translateY(1.5px) rotate(-1.5deg);transform:translateY(1.5px) rotate(-1.5deg)}8%{-webkit-transform:translateY(-1.5px) rotate(-1.5deg);transform:translateY(-1.5px) rotate(-1.5deg)}10%{-webkit-transform:translateY(2.5px) rotate(1.5deg);transform:translateY(2.5px) rotate(1.5deg)}12%{-webkit-transform:translateY(-.5px) rotate(1.5deg);transform:translateY(-.5px) rotate(1.5deg)}14%{-webkit-transform:translateY(-1.5px) rotate(1.5deg);transform:translateY(-1.5px) rotate(1.5deg)}16%{-webkit-transform:translateY(-.5px) rotate(-1.5deg);transform:translateY(-.5px) rotate(-1.5deg)}18%{-webkit-transform:translateY(.5px) rotate(-1.5deg);transform:translateY(.5px) rotate(-1.5deg)}20%{-webkit-transform:translateY(-1.5px) rotate(2.5deg);transform:translateY(-1.5px) rotate(2.5deg)}22%{-webkit-transform:translateY(.5px) rotate(-1.5deg);transform:translateY(.5px) rotate(-1.5deg)}24%{-webkit-transform:translateY(1.5px) rotate(1.5deg);transform:translateY(1.5px) rotate(1.5deg)}26%{-webkit-transform:translateY(.5px) rotate(.5deg);transform:translateY(.5px) rotate(.5deg)}28%{-webkit-transform:translateY(.5px) rotate(1.5deg);transform:translateY(.5px) rotate(1.5deg)}30%{-webkit-transform:translateY(-.5px) rotate(2.5deg);transform:translateY(-.5px) rotate(2.5deg)}32%,34%{-webkit-transform:translateY(1.5px) rotate(-.5deg);transform:translateY(1.5px) rotate(-.5deg)}36%{-webkit-transform:translateY(-1.5px) rotate(2.5deg);transform:translateY(-1.5px) rotate(2.5deg)}38%{-webkit-transform:translateY(1.5px) rotate(-1.5deg);transform:translateY(1.5px) rotate(-1.5deg)}40%{-webkit-transform:translateY(-.5px) rotate(2.5deg);transform:translateY(-.5px) rotate(2.5deg)}42%{-webkit-transform:translateY(2.5px) rotate(-1.5deg);transform:translateY(2.5px) rotate(-1.5deg)}44%{-webkit-transform:translateY(1.5px) rotate(.5deg);transform:translateY(1.5px) rotate(.5deg)}46%{-webkit-transform:translateY(-1.5px) rotate(2.5deg);transform:translateY(-1.5px) rotate(2.5deg)}48%{-webkit-transform:translateY(-.5px) rotate(.5deg);transform:translateY(-.5px) rotate(.5deg)}50%{-webkit-transform:translateY(.5px) rotate(.5deg);transform:translateY(.5px) rotate(.5deg)}52%{-webkit-transform:translateY(2.5px) rotate(2.5deg);transform:translateY(2.5px) rotate(2.5deg)}54%{-webkit-transform:translateY(-1.5px) rotate(1.5deg);transform:translateY(-1.5px) rotate(1.5deg)}56%{-webkit-transform:translateY(2.5px) rotate(2.5deg);transform:translateY(2.5px) rotate(2.5deg)}58%{-webkit-transform:translateY(.5px) rotate(2.5deg);transform:translateY(.5px) rotate(2.5deg)}60%{-webkit-transform:translateY(2.5px) rotate(2.5deg);transform:translateY(2.5px) rotate(2.5deg)}62%{-webkit-transform:translateY(-.5px) rotate(2.5deg);transform:translateY(-.5px) rotate(2.5deg)}64%{-webkit-transform:translateY(-.5px) rotate(1.5deg);transform:translateY(-.5px) rotate(1.5deg)}66%{-webkit-transform:translateY(1.5px) rotate(-.5deg);transform:translateY(1.5px) rotate(-.5deg)}68%{-webkit-transform:translateY(-1.5px) rotate(-.5deg);transform:translateY(-1.5px) rotate(-.5deg)}70%{-webkit-transform:translateY(1.5px) rotate(.5deg);transform:translateY(1.5px) rotate(.5deg)}72%{-webkit-transform:translateY(2.5px) rotate(1.5deg);transform:translateY(2.5px) rotate(1.5deg)}74%{-webkit-transform:translateY(-.5px) rotate(.5deg);transform:translateY(-.5px) rotate(.5deg)}76%{-webkit-transform:translateY(-.5px) rotate(2.5deg);transform:translateY(-.5px) rotate(2.5deg)}78%{-webkit-transform:translateY(-.5px) rotate(1.5deg);transform:translateY(-.5px) rotate(1.5deg)}80%{-webkit-transform:translateY(1.5px) rotate(1.5deg);transform:translateY(1.5px) rotate(1.5deg)}82%{-webkit-transform:translateY(-.5px) rotate(.5deg);transform:translateY(-.5px) rotate(.5deg)}84%{-webkit-transform:translateY(1.5px) rotate(2.5deg);transform:translateY(1.5px) rotate(2.5deg)}86%{-webkit-transform:translateY(-1.5px) rotate(-1.5deg);transform:translateY(-1.5px) rotate(-1.5deg)}88%{-webkit-transform:translateY(-.5px) rotate(2.5deg);transform:translateY(-.5px) rotate(2.5deg)}90%{-webkit-transform:translateY(2.5px) rotate(-.5deg);transform:translateY(2.5px) rotate(-.5deg)}92%{-webkit-transform:translateY(.5px) rotate(-.5deg);transform:translateY(.5px) rotate(-.5deg)}94%{-webkit-transform:translateY(2.5px) rotate(.5deg);transform:translateY(2.5px) rotate(.5deg)}96%{-webkit-transform:translateY(-.5px) rotate(1.5deg);transform:translateY(-.5px) rotate(1.5deg)}98%{-webkit-transform:translateY(-1.5px) rotate(-.5deg);transform:translateY(-1.5px) rotate(-.5deg)}0%,to{-webkit-transform:translate(0) rotate(0deg);transform:translate(0) rotate(0deg)}}", ""]);
}, function(e, t, a) {
	! function(t, a) {
		e.exports = a()
	}(this, function() {
		return function(e) {
			function t(n) {
				if (a[n]) return a[n].exports;
				var r = a[n] = {
					exports: {},
					id: n,
					loaded: !1
				};
				return e[n].call(r.exports, r, r.exports, t), r.loaded = !0, r.exports
			}
			var a = {};
			return t.m = e, t.c = a, t.p = "", t(0)
		}([function(e, t, a) {
			"use strict";

			function n(e, t) {
				if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
			}
			var r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
					return typeof e
				} : function(e) {
					return e && "function" == typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
				},
				o = function() {
					function e(e, t) {
						for (var a = 0; a < t.length; a++) {
							var n = t[a];
							n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
						}
					}
					return function(t, a, n) {
						return a && e(t.prototype, a), n && e(t, n), t
					}
				}();
			console.log("\n %c DPlayer 1.1.1 %c http://dplayer.js.org \n\n", "color: #fadfa3; background: #030307; padding:5px 0;", "background: #fadfa3; padding:5px 0;"), a(1);
			var l = 0,
				s = function() {
					function e(t) {
						var a = this;
						n(this, e);
						var o = {
							play: ["0 0 16 32", "M15.552 15.168q0.448 0.32 0.448 0.832 0 0.448-0.448 0.768l-13.696 8.512q-0.768 0.512-1.312 0.192t-0.544-1.28v-16.448q0-0.96 0.544-1.28t1.312 0.192z"],
							pause: ["0 0 17 32", "M14.080 4.8q2.88 0 2.88 2.048v18.24q0 2.112-2.88 2.112t-2.88-2.112v-18.24q0-2.048 2.88-2.048zM2.88 4.8q2.88 0 2.88 2.048v18.24q0 2.112-2.88 2.112t-2.88-2.112v-18.24q0-2.048 2.88-2.048z"],
							"volume-up": ["0 0 21 32", "M13.728 6.272v19.456q0 0.448-0.352 0.8t-0.8 0.32-0.8-0.32l-5.952-5.952h-4.672q-0.48 0-0.8-0.352t-0.352-0.8v-6.848q0-0.48 0.352-0.8t0.8-0.352h4.672l5.952-5.952q0.32-0.32 0.8-0.32t0.8 0.32 0.352 0.8zM20.576 16q0 1.344-0.768 2.528t-2.016 1.664q-0.16 0.096-0.448 0.096-0.448 0-0.8-0.32t-0.32-0.832q0-0.384 0.192-0.64t0.544-0.448 0.608-0.384 0.512-0.64 0.192-1.024-0.192-1.024-0.512-0.64-0.608-0.384-0.544-0.448-0.192-0.64q0-0.48 0.32-0.832t0.8-0.32q0.288 0 0.448 0.096 1.248 0.48 2.016 1.664t0.768 2.528zM25.152 16q0 2.72-1.536 5.056t-4 3.36q-0.256 0.096-0.448 0.096-0.48 0-0.832-0.352t-0.32-0.8q0-0.704 0.672-1.056 1.024-0.512 1.376-0.8 1.312-0.96 2.048-2.4t0.736-3.104-0.736-3.104-2.048-2.4q-0.352-0.288-1.376-0.8-0.672-0.352-0.672-1.056 0-0.448 0.32-0.8t0.8-0.352q0.224 0 0.48 0.096 2.496 1.056 4 3.36t1.536 5.056zM29.728 16q0 4.096-2.272 7.552t-6.048 5.056q-0.224 0.096-0.448 0.096-0.48 0-0.832-0.352t-0.32-0.8q0-0.64 0.704-1.056 0.128-0.064 0.384-0.192t0.416-0.192q0.8-0.448 1.44-0.896 2.208-1.632 3.456-4.064t1.216-5.152-1.216-5.152-3.456-4.064q-0.64-0.448-1.44-0.896-0.128-0.096-0.416-0.192t-0.384-0.192q-0.704-0.416-0.704-1.056 0-0.448 0.32-0.8t0.832-0.352q0.224 0 0.448 0.096 3.776 1.632 6.048 5.056t2.272 7.552z"],
							"volume-down": ["0 0 21 32", "M13.728 6.272v19.456q0 0.448-0.352 0.8t-0.8 0.32-0.8-0.32l-5.952-5.952h-4.672q-0.48 0-0.8-0.352t-0.352-0.8v-6.848q0-0.48 0.352-0.8t0.8-0.352h4.672l5.952-5.952q0.32-0.32 0.8-0.32t0.8 0.32 0.352 0.8zM20.576 16q0 1.344-0.768 2.528t-2.016 1.664q-0.16 0.096-0.448 0.096-0.448 0-0.8-0.32t-0.32-0.832q0-0.384 0.192-0.64t0.544-0.448 0.608-0.384 0.512-0.64 0.192-1.024-0.192-1.024-0.512-0.64-0.608-0.384-0.544-0.448-0.192-0.64q0-0.48 0.32-0.832t0.8-0.32q0.288 0 0.448 0.096 1.248 0.48 2.016 1.664t0.768 2.528z"],
							"volume-off": ["0 0 21 32", "M13.728 6.272v19.456q0 0.448-0.352 0.8t-0.8 0.32-0.8-0.32l-5.952-5.952h-4.672q-0.48 0-0.8-0.352t-0.352-0.8v-6.848q0-0.48 0.352-0.8t0.8-0.352h4.672l5.952-5.952q0.32-0.32 0.8-0.32t0.8 0.32 0.352 0.8z"],
							loop: ["0 0 32 32", "M1.882 16.941c0 4.152 3.221 7.529 7.177 7.529v1.882c-4.996 0-9.060-4.222-9.060-9.412s4.064-9.412 9.060-9.412h7.96l-3.098-3.098 1.331-1.331 5.372 5.37-5.37 5.372-1.333-1.333 3.1-3.098h-7.962c-3.957 0-7.177 3.377-7.177 7.529zM22.94 7.529v1.882c3.957 0 7.177 3.377 7.177 7.529s-3.221 7.529-7.177 7.529h-7.962l3.098-3.098-1.331-1.331-5.37 5.37 5.372 5.372 1.331-1.331-3.1-3.1h7.96c4.998 0 9.062-4.222 9.062-9.412s-4.064-9.412-9.060-9.412z"],
							full: ["0 0 32 33", "M6.667 28h-5.333c-0.8 0-1.333-0.533-1.333-1.333v-5.333c0-0.8 0.533-1.333 1.333-1.333s1.333 0.533 1.333 1.333v4h4c0.8 0 1.333 0.533 1.333 1.333s-0.533 1.333-1.333 1.333zM30.667 28h-5.333c-0.8 0-1.333-0.533-1.333-1.333s0.533-1.333 1.333-1.333h4v-4c0-0.8 0.533-1.333 1.333-1.333s1.333 0.533 1.333 1.333v5.333c0 0.8-0.533 1.333-1.333 1.333zM30.667 12c-0.8 0-1.333-0.533-1.333-1.333v-4h-4c-0.8 0-1.333-0.533-1.333-1.333s0.533-1.333 1.333-1.333h5.333c0.8 0 1.333 0.533 1.333 1.333v5.333c0 0.8-0.533 1.333-1.333 1.333zM1.333 12c-0.8 0-1.333-0.533-1.333-1.333v-5.333c0-0.8 0.533-1.333 1.333-1.333h5.333c0.8 0 1.333 0.533 1.333 1.333s-0.533 1.333-1.333 1.333h-4v4c0 0.8-0.533 1.333-1.333 1.333z"],
							setting: ["0 0 32 28", "M28.633 17.104c0.035 0.21 0.026 0.463-0.026 0.76s-0.14 0.598-0.262 0.904c-0.122 0.306-0.271 0.581-0.445 0.825s-0.367 0.419-0.576 0.524c-0.209 0.105-0.393 0.157-0.55 0.157s-0.332-0.035-0.524-0.105c-0.175-0.052-0.393-0.1-0.655-0.144s-0.528-0.052-0.799-0.026c-0.271 0.026-0.541 0.083-0.812 0.17s-0.502 0.236-0.694 0.445c-0.419 0.437-0.664 0.934-0.734 1.493s0.009 1.092 0.236 1.598c0.175 0.349 0.148 0.699-0.079 1.048-0.105 0.14-0.271 0.284-0.498 0.432s-0.476 0.284-0.747 0.406-0.555 0.218-0.851 0.288c-0.297 0.070-0.559 0.105-0.786 0.105-0.157 0-0.306-0.061-0.445-0.183s-0.236-0.253-0.288-0.393h-0.026c-0.192-0.541-0.52-1.009-0.982-1.402s-1-0.589-1.611-0.589c-0.594 0-1.131 0.197-1.611 0.589s-0.816 0.851-1.009 1.375c-0.087 0.21-0.218 0.362-0.393 0.458s-0.367 0.144-0.576 0.144c-0.244 0-0.52-0.044-0.825-0.131s-0.611-0.197-0.917-0.327c-0.306-0.131-0.581-0.284-0.825-0.458s-0.428-0.349-0.55-0.524c-0.087-0.122-0.135-0.266-0.144-0.432s0.057-0.397 0.197-0.694c0.192-0.402 0.266-0.86 0.223-1.375s-0.266-0.991-0.668-1.428c-0.244-0.262-0.541-0.432-0.891-0.511s-0.681-0.109-0.995-0.092c-0.367 0.017-0.742 0.087-1.127 0.21-0.244 0.070-0.489 0.052-0.734-0.052-0.192-0.070-0.371-0.231-0.537-0.485s-0.314-0.533-0.445-0.838c-0.131-0.306-0.231-0.62-0.301-0.943s-0.087-0.59-0.052-0.799c0.052-0.384 0.227-0.629 0.524-0.734 0.524-0.21 0.995-0.555 1.415-1.035s0.629-1.017 0.629-1.611c0-0.611-0.21-1.144-0.629-1.598s-0.891-0.786-1.415-0.996c-0.157-0.052-0.288-0.179-0.393-0.38s-0.157-0.406-0.157-0.616c0-0.227 0.035-0.48 0.105-0.76s0.162-0.55 0.275-0.812 0.244-0.502 0.393-0.72c0.148-0.218 0.31-0.38 0.485-0.485 0.14-0.087 0.275-0.122 0.406-0.105s0.275 0.052 0.432 0.105c0.524 0.21 1.070 0.275 1.637 0.197s1.070-0.327 1.506-0.747c0.21-0.209 0.362-0.467 0.458-0.773s0.157-0.607 0.183-0.904c0.026-0.297 0.026-0.568 0-0.812s-0.048-0.419-0.065-0.524c-0.035-0.105-0.066-0.227-0.092-0.367s-0.013-0.262 0.039-0.367c0.105-0.244 0.293-0.458 0.563-0.642s0.563-0.336 0.878-0.458c0.314-0.122 0.62-0.214 0.917-0.275s0.533-0.092 0.707-0.092c0.227 0 0.406 0.074 0.537 0.223s0.223 0.301 0.275 0.458c0.192 0.471 0.507 0.886 0.943 1.244s0.952 0.537 1.546 0.537c0.611 0 1.153-0.17 1.624-0.511s0.803-0.773 0.996-1.297c0.070-0.14 0.179-0.284 0.327-0.432s0.301-0.223 0.458-0.223c0.244 0 0.511 0.035 0.799 0.105s0.572 0.166 0.851 0.288c0.279 0.122 0.537 0.279 0.773 0.472s0.423 0.402 0.563 0.629c0.087 0.14 0.113 0.293 0.079 0.458s-0.070 0.284-0.105 0.354c-0.227 0.506-0.297 1.039-0.21 1.598s0.341 1.048 0.76 1.467c0.419 0.419 0.934 0.651 1.546 0.694s1.179-0.057 1.703-0.301c0.14-0.087 0.31-0.122 0.511-0.105s0.371 0.096 0.511 0.236c0.262 0.244 0.493 0.616 0.694 1.113s0.336 1 0.406 1.506c0.035 0.297-0.013 0.528-0.144 0.694s-0.266 0.275-0.406 0.327c-0.542 0.192-1.004 0.528-1.388 1.009s-0.576 1.026-0.576 1.637c0 0.594 0.162 1.113 0.485 1.559s0.747 0.764 1.27 0.956c0.122 0.070 0.227 0.14 0.314 0.21 0.192 0.157 0.323 0.358 0.393 0.602v0zM16.451 19.462c0.786 0 1.528-0.149 2.227-0.445s1.305-0.707 1.821-1.231c0.515-0.524 0.921-1.131 1.218-1.821s0.445-1.428 0.445-2.214c0-0.786-0.148-1.524-0.445-2.214s-0.703-1.292-1.218-1.808c-0.515-0.515-1.122-0.921-1.821-1.218s-1.441-0.445-2.227-0.445c-0.786 0-1.524 0.148-2.214 0.445s-1.292 0.703-1.808 1.218c-0.515 0.515-0.921 1.118-1.218 1.808s-0.445 1.428-0.445 2.214c0 0.786 0.149 1.524 0.445 2.214s0.703 1.297 1.218 1.821c0.515 0.524 1.118 0.934 1.808 1.231s1.428 0.445 2.214 0.445v0z"],
							right: ["0 0 32 32", "M22 16l-10.105-10.6-1.895 1.987 8.211 8.613-8.211 8.612 1.895 1.988 8.211-8.613z"],
							comment: ["0 0 32 32", "M27.128 0.38h-22.553c-2.336 0-4.229 1.825-4.229 4.076v16.273c0 2.251 1.893 4.076 4.229 4.076h4.229v-2.685h8.403l-8.784 8.072 1.566 1.44 7.429-6.827h9.71c2.335 0 4.229-1.825 4.229-4.076v-16.273c0-2.252-1.894-4.076-4.229-4.076zM28.538 19.403c0 1.5-1.262 2.717-2.819 2.717h-8.36l-0.076-0.070-0.076 0.070h-11.223c-1.557 0-2.819-1.217-2.819-2.717v-13.589c0-1.501 1.262-2.718 2.819-2.718h19.734c1.557 0 2.819-0.141 2.819 1.359v14.947zM9.206 10.557c-1.222 0-2.215 0.911-2.215 2.036s0.992 2.035 2.215 2.035c1.224 0 2.216-0.911 2.216-2.035s-0.992-2.036-2.216-2.036zM22.496 10.557c-1.224 0-2.215 0.911-2.215 2.036s0.991 2.035 2.215 2.035c1.224 0 2.215-0.911 2.215-2.035s-0.991-2.036-2.215-2.036zM15.852 10.557c-1.224 0-2.215 0.911-2.215 2.036s0.991 2.035 2.215 2.035c1.222 0 2.215-0.911 2.215-2.035s-0.992-2.036-2.215-2.036z"],
							"comment-off": ["0 0 32 32", "M27.090 0.131h-22.731c-2.354 0-4.262 1.839-4.262 4.109v16.401c0 2.269 1.908 4.109 4.262 4.109h4.262v-2.706h8.469l-8.853 8.135 1.579 1.451 7.487-6.88h9.787c2.353 0 4.262-1.84 4.262-4.109v-16.401c0-2.27-1.909-4.109-4.262-4.109v0zM28.511 19.304c0 1.512-1.272 2.738-2.841 2.738h-8.425l-0.076-0.070-0.076 0.070h-11.311c-1.569 0-2.841-1.226-2.841-2.738v-13.696c0-1.513 1.272-2.739 2.841-2.739h19.889c1.569 0 2.841-0.142 2.841 1.37v15.064z"],
							send: ["0 0 32 32", "M13.725 30l3.9-5.325-3.9-1.125v6.45zM0 17.5l11.050 3.35 13.6-11.55-10.55 12.425 11.8 3.65 6.1-23.375-32 15.5z"],
							menu: ["0 0 22 32", "M20.8 14.4q0.704 0 1.152 0.48t0.448 1.12-0.48 1.12-1.12 0.48h-19.2q-0.64 0-1.12-0.48t-0.48-1.12 0.448-1.12 1.152-0.48h19.2zM1.6 11.2q-0.64 0-1.12-0.48t-0.48-1.12 0.448-1.12 1.152-0.48h19.2q0.704 0 1.152 0.48t0.448 1.12-0.48 1.12-1.12 0.48h-19.2zM20.8 20.8q0.704 0 1.152 0.48t0.448 1.12-0.48 1.12-1.12 0.48h-19.2q-0.64 0-1.12-0.48t-0.48-1.12 0.448-1.12 1.152-0.48h19.2z"],
							camera: ["0 0 32 32", "M16 23c-3.309 0-6-2.691-6-6s2.691-6 6-6 6 2.691 6 6-2.691 6-6 6zM16 13c-2.206 0-4 1.794-4 4s1.794 4 4 4c2.206 0 4-1.794 4-4s-1.794-4-4-4zM27 28h-22c-1.654 0-3-1.346-3-3v-16c0-1.654 1.346-3 3-3h3c0.552 0 1 0.448 1 1s-0.448 1-1 1h-3c-0.551 0-1 0.449-1 1v16c0 0.552 0.449 1 1 1h22c0.552 0 1-0.448 1-1v-16c0-0.551-0.448-1-1-1h-11c-0.552 0-1-0.448-1-1s0.448-1 1-1h11c1.654 0 3 1.346 3 3v16c0 1.654-1.346 3-3 3zM24 10.5c0 0.828 0.672 1.5 1.5 1.5s1.5-0.672 1.5-1.5c0-0.828-0.672-1.5-1.5-1.5s-1.5 0.672-1.5 1.5zM15 4c0 0.552-0.448 1-1 1h-4c-0.552 0-1-0.448-1-1v0c0-0.552 0.448-1 1-1h4c0.552 0 1 0.448 1 1v0z"]
						};
						this.getSVG = function(e) {
							return '\n                <svg xmlns:xlink="http://www.w3.org/1999/xlink" height="100%" version="1.1" viewBox="' + o[e][0] + '" width="100%">\n                    <use xlink:href="#dplayer-' + e + '"></use>\n                    <path class="dplayer-fill" d="' + o[e][1] + '" id="dplayer-' + e + '"></path>\n                </svg>\n            '
						}, this.option = t;
						var s = /mobile/i.test(window.navigator.userAgent);
						s && (this.option.autoplay = !1);
						var i = {
							element: document.getElementsByClassName("dplayer")[0],
							autoplay: !1,
							theme: "#b7daff",
							loop: !1,
							lang: navigator.language.indexOf("zh") !== -1 ? "zh" : "en",
							screenshot: !1,
							hotkey: !0,
							preload: "auto"
						};
						for (var d in i) i.hasOwnProperty(d) && !this.option.hasOwnProperty(d) && (this.option[d] = i[d]);
						var p = {
								"Danmaku is loading": "弹幕加载中",
								Top: "顶部",
								Bottom: "底部",
								Rolling: "滚动",
								"Input danmaku, hit Enter": "输入弹幕，回车发送",
								"About author": "关于作者",
								"DPlayer feedback": "播放器意见反馈",
								"About DPlayer": "关于 DPlay 播放器",
								Loop: "洗脑循环",
								Speed: "速度",
								"Opacity for danmaku": "弹幕透明度",
								Normal: "正常",
								"Please input danmaku!": "要输入弹幕内容啊喂！",
								"Set danmaku color": "设置弹幕颜色",
								"Set danmaku type": "设置弹幕类型",
								Danmaku: "弹幕"
							},
							m = function(e) {
								return "en" === a.option.lang ? e : "zh" === a.option.lang ? p[e] : void 0
							};
						this.updateBar = function(e, t, a) {
							t = t > 0 ? t : 0, t = t < 1 ? t : 1, w[e + "Bar"].style[a] = 100 * t + "%"
						};
						var c = ["play", "pause", "canplay", "playing", "ended", "error"];
						this.event = {};
						for (var u = 0; u < c.length; u++) this.event[c[u]] = [];
						this.trigger = function(e) {
							for (var t = 0; t < a.event[e].length; t++) a.event[e][t]()
						}, this.element = this.option.element, this.option.danmaku || this.element.classList.add("dplayer-no-danmaku"), this.element.innerHTML = '\n            <div class="dplayer-mask"></div>\n            <div class="dplayer-video-wrap">\n                <video class="dplayer-video" ' + (this.option.video.pic ? 'poster="' + this.option.video.pic + '"' : "") + " webkit-playsinline " + (this.option.screenshot ? 'crossorigin="anonymous"' : "") + ' preload="' + this.option.preload + '" src="' + this.option.video.url + '"></video>\n                <div class="dplayer-danmaku">\n                    <div class="dplayer-danmaku-item dplayer-danmaku-item--demo"></div>\n                </div>\n                <div class="dplayer-bezel">\n                    <span class="dplayer-bezel-icon"></span>\n                    ' + (this.option.danmaku ? '<span class="dplayer-danloading">' + m("Danmaku is loading") + "</span>" : "") + '\n                    <span class="diplayer-loading-icon">\n                        <svg height="100%" version="1.1" viewBox="0 0 22 22" width="100%">\n                            <svg x="7" y="1">\n                                <circle class="diplayer-loading-dot diplayer-loading-dot-0" cx="4" cy="4" r="2"></circle>\n                            </svg>\n                            <svg x="11" y="3">\n                                <circle class="diplayer-loading-dot diplayer-loading-dot-1" cx="4" cy="4" r="2"></circle>\n                            </svg>\n                            <svg x="13" y="7">\n                                <circle class="diplayer-loading-dot diplayer-loading-dot-2" cx="4" cy="4" r="2"></circle>\n                            </svg>\n                            <svg x="11" y="11">\n                                <circle class="diplayer-loading-dot diplayer-loading-dot-3" cx="4" cy="4" r="2"></circle>\n                            </svg>\n                            <svg x="7" y="13">\n                                <circle class="diplayer-loading-dot diplayer-loading-dot-4" cx="4" cy="4" r="2"></circle>\n                            </svg>\n                            <svg x="3" y="11">\n                                <circle class="diplayer-loading-dot diplayer-loading-dot-5" cx="4" cy="4" r="2"></circle>\n                            </svg>\n                            <svg x="1" y="7">\n                                <circle class="diplayer-loading-dot diplayer-loading-dot-6" cx="4" cy="4" r="2"></circle>\n                            </svg>\n                            <svg x="3" y="3">\n                                <circle class="diplayer-loading-dot diplayer-loading-dot-7" cx="4" cy="4" r="2"></circle>\n                            </svg>\n                        </svg>\n                    </span>\n                </div>\n            </div>\n            <div class="dplayer-controller-mask"></div>\n            <div class="dplayer-controller">\n                <div class="dplayer-icons dplayer-icons-left">\n                    <button class="dplayer-icon dplayer-play-icon">' + this.getSVG("play") + ('     </button>\n                    <div class="dplayer-volume" ' + (s ? 'style="display: none;"' : "") + '>\n                        <button class="dplayer-icon dplayer-volume-icon">') + this.getSVG("volume-down") + ('         </button>\n                        <div class="dplayer-volume-bar-wrap">\n                            <div class="dplayer-volume-bar">\n                                <div class="dplayer-volume-bar-inner" style="width: 70%; background: ' + this.option.theme + ';">\n                                    <span class="dplayer-thumb" style="background: ' + this.option.theme + '"></span>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                    <span class="dplayer-time"><span class="dplayer-ptime">0:00</span> / <span class="dplayer-dtime">0:00</span></span>\n                </div>\n                <div class="dplayer-icons dplayer-icons-right">\n                    ' + (this.option.screenshot ? '\n                    <a href="#" class="dplayer-icon dplayer-camera-icon" ' + (s ? 'style="display: none;"' : "") + "dplayer-volume>" + this.getSVG("camera") + "     </a>\n                    " : "") + '\n                    <div class="dplayer-comment">\n                        <button class="dplayer-icon dplayer-comment-icon">') + this.getSVG("comment") + '         </button>\n                        <div class="dplayer-comment-box">\n                            <button class="dplayer-icon dplayer-comment-setting-icon">' + this.getSVG("menu") + ('             </button>\n                            <div class="dplayer-comment-setting-box">\n                                <div class="dplayer-comment-setting-color">\n                                   <div class="dplayer-comment-setting-title">' + m("Set danmaku color") + '</div>\n                                    <label>\n                                        <input type="radio" name="dplayer-danmaku-color-' + l + '" value="#fff" checked>\n                                        <span style="background: #fff; border: 1px solid rgba(0,0,0,.1);"></span>\n                                    </label>\n                                    <label>\n                                        <input type="radio" name="dplayer-danmaku-color-' + l + '" value="#e54256">\n                                        <span style="background: #e54256"></span>\n                                    </label>\n                                    <label>\n                                        <input type="radio" name="dplayer-danmaku-color-' + l + '" value="#ffe133">\n                                        <span style="background: #ffe133"></span>\n                                    </label>\n                                    <label>\n                                        <input type="radio" name="dplayer-danmaku-color-' + l + '" value="#64DD17">\n                                        <span style="background: #64DD17"></span>\n                                    </label>\n                                    <label>\n                                        <input type="radio" name="dplayer-danmaku-color-' + l + '" value="#39ccff">\n                                        <span style="background: #39ccff"></span>\n                                    </label>\n                                    <label>\n                                        <input type="radio" name="dplayer-danmaku-color-' + l + '" value="#D500F9">\n                                        <span style="background: #D500F9"></span>\n                                    </label>\n                                </div>\n                                <div class="dplayer-comment-setting-type">\n                                    <div class="dplayer-comment-setting-title">' + m("Set danmaku type") + '</div>\n                                    <label>\n                                        <input type="radio" name="dplayer-danmaku-type-' + l + '" value="top">\n                                        <span>' + m("Top") + '</span>\n                                    </label>\n                                    <label>\n                                        <input type="radio" name="dplayer-danmaku-type-' + l + '" value="right" checked>\n                                        <span>' + m("Rolling") + '</span>\n                                    </label>\n                                    <label>\n                                        <input type="radio" name="dplayer-danmaku-type-' + l + '" value="bottom">\n                                        <span>' + m("Bottom") + '</span>\n                                    </label>\n                                </div>\n                            </div>\n                            <input class="dplayer-comment-input" type="text" placeholder="' + m("Input danmaku, hit Enter") + '" maxlength="30">\n                            <button class="dplayer-icon dplayer-send-icon">') + this.getSVG("send") + '             </button>\n                        </div>\n                    </div>\n                    <div class="dplayer-setting">\n                        <button class="dplayer-icon dplayer-setting-icon">' + this.getSVG("setting") + '         </button>\n                        <div class="dplayer-setting-box"></div>\n                    </div>\n                    <button class="dplayer-icon dplayer-full-icon">' + this.getSVG("full") + ('     </button>\n                </div>\n                <div class="dplayer-bar-wrap">\n                    <div class="dplayer-bar">\n                        <div class="dplayer-loaded" style="width: 0;"></div>\n                        <div class="dplayer-played" style="width: 0; background: ' + this.option.theme + '">\n                            <span class="dplayer-thumb" style="background: ' + this.option.theme + '"></span>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <div class="dplayer-menu">\n                <div class="dplayer-menu-item"><span class="dplayer-menu-label"><a target="_blank" href="http://diygod.me/">' + m("About author") + '</a></span></div>\n                <div class="dplayer-menu-item"><span class="dplayer-menu-label"><a target="_blank" href="https://github.com/DIYgod/DPlayer/issues">' + m("DPlayer feedback") + '</a></span></div>\n                <div class="dplayer-menu-item"><span class="dplayer-menu-label"><a target="_blank" href="https://github.com/DIYgod/DPlayer">' + m("About DPlayer") + "</a></span></div>\n            </div>\n        ");
						var y = this.element.offsetWidth <= 500;
						if (y) {
							var g = document.createElement("style");
							g.innerHTML = ".dplayer .dplayer-danmaku{font-size:18px}", document.head.appendChild(g)
						}
						this.video = this.element.getElementsByClassName("dplayer-video")[0], this.option.video.url.match(/(m3u8)$/i) && Hls.isSupported() && ! function() {
							a.element.getElementsByClassName("dplayer-time")[0].style.display = "none";
							var e = new Hls;
							e.attachMedia(a.video), e.on(Hls.Events.MEDIA_ATTACHED, function() {
								e.loadSource(a.option.video.url), e.on(Hls.Events.MANIFEST_PARSED, function(e, t) {
									console.log("manifest loaded, found " + t.levels.length + " quality level")
								})
							})
						}(), this.bezel = this.element.getElementsByClassName("dplayer-bezel-icon")[0], this.bezel.addEventListener("animationend", function() {
							a.bezel.classList.remove("dplayer-bezel-transition")
						}), this.playButton = this.element.getElementsByClassName("dplayer-play-icon")[0], this.shouldpause = !0, this.playButton.addEventListener("click", function() {
							a.toggle()
						});
						var f = this.element.getElementsByClassName("dplayer-video-wrap")[0],
							h = this.element.getElementsByClassName("dplayer-controller-mask")[0];
						if (s) {
							var b = function() {
								a.element.classList.contains("dplayer-hide-controller") ? a.element.classList.remove("dplayer-hide-controller") : a.element.classList.add("dplayer-hide-controller")
							};
							f.addEventListener("click", b), h.addEventListener("click", b)
						} else f.addEventListener("click", function() {
							a.toggle()
						}), h.addEventListener("click", function() {
							a.toggle()
						});
						var x = function(e) {
								var t = function(e) {
										return e < 10 ? "0" + e : "" + e
									},
									a = parseInt(e / 60),
									n = parseInt(e - 60 * a);
								return t(a) + ":" + t(n)
							},
							v = function(e) {
								var t = e.offsetLeft,
									n = e.offsetParent,
									r = void 0;
								if (document.fullscreenElement || document.mozFullScreenElement || document.webkitFullscreenElement)
									for (; null !== n && n !== a.element;) t += n.offsetLeft, n = n.offsetParent;
								else
									for (; null !== n;) t += n.offsetLeft, n = n.offsetParent;
								return r = document.body.scrollLeft + document.documentElement.scrollLeft, t - r
							},
							w = {};
						w.playedBar = this.element.getElementsByClassName("dplayer-played")[0], w.loadedBar = this.element.getElementsByClassName("dplayer-loaded")[0];
						var k = this.element.getElementsByClassName("dplayer-bar-wrap")[0],
							Y = void 0;
						this.option.danmaku && this.video.addEventListener("seeking", function() {
							for (var e = 0; e < a.dan.length; e++) {
								if (a.dan[e].time >= a.video.currentTime) return void(a.danIndex = e);
								a.danIndex = a.dan.length
							}
						});
						var O = 0,
							E = 0,
							L = !1,
							B = void 0;
						this.setTime = function() {
							a.playedTime = setInterval(function() {
								E = a.video.currentTime, !L && E < O + .01 && !a.video.paused && (a.element.classList.add("dplayer-loading"), L = !0), L && E > O + .01 && !a.video.paused && (a.element.classList.remove("dplayer-loading"), L = !1), O = E, a.updateBar("played", a.video.currentTime / a.video.duration, "width"), a.element.getElementsByClassName("dplayer-ptime")[0].innerHTML = x(a.video.currentTime), a.trigger("playing")
							}, 100), a.option.danmaku && (B = setInterval(function() {
								for (var e = a.dan[a.danIndex]; e && a.video.currentTime >= parseFloat(e.time);) ne(e.text, e.color, e.type), e = a.dan[++a.danIndex]
							}, 0))
						}, this.clearTime = function() {
							clearInterval(a.playedTime), a.option.danmaku && clearInterval(B)
						}, k.addEventListener("click", function(e) {
							var t = e || window.event;
							Y = k.clientWidth;
							var n = (t.clientX - v(k)) / Y;
							n = n > 0 ? n : 0, n = n < 1 ? n : 1, a.updateBar("played", n, "width"), a.video.currentTime = parseFloat(w.playedBar.style.width) / 100 * a.video.duration
						});
						var C = function(e) {
								var t = e || window.event,
									n = (t.clientX - v(k)) / Y;
								n = n > 0 ? n : 0, n = n < 1 ? n : 1, a.updateBar("played", n, "width"), a.element.getElementsByClassName("dplayer-ptime")[0].innerHTML = x(n * a.video.duration)
							},
							T = function ve() {
								document.removeEventListener("mouseup", ve), document.removeEventListener("mousemove", C), a.video.currentTime = parseFloat(w.playedBar.style.width) / 100 * a.video.duration, a.setTime()
							};
						k.addEventListener("mousedown", function() {
							Y = k.clientWidth, a.clearTime(), document.addEventListener("mousemove", C), document.addEventListener("mouseup", T)
						}), w.volumeBar = this.element.getElementsByClassName("dplayer-volume-bar-inner")[0];
						var z = this.element.getElementsByClassName("dplayer-volume")[0],
							N = this.element.getElementsByClassName("dplayer-volume-bar-wrap")[0],
							S = this.element.getElementsByClassName("dplayer-volume-bar")[0],
							M = this.element.getElementsByClassName("dplayer-volume-icon")[0],
							A = 35;
						this.switchVolumeIcon = function() {
							var e = a.element.getElementsByClassName("dplayer-volume-icon")[0];
							a.video.volume >= .8 ? e.innerHTML = a.getSVG("volume-up") : a.video.volume > 0 ? e.innerHTML = a.getSVG("volume-down") : e.innerHTML = a.getSVG("volume-off")
						};
						var q = function(e) {
								var t = e || window.event,
									n = (t.clientX - v(S) - 5.5) / A;
								a.volume(n)
							},
							H = function we() {
								document.removeEventListener("mouseup", we), document.removeEventListener("mousemove", q), z.classList.remove("dplayer-volume-active")
							};
						N.addEventListener("click", function(e) {
							var t = e || window.event,
								n = (t.clientX - v(S) - 5.5) / A;
							a.volume(n)
						}), N.addEventListener("mousedown", function() {
							document.addEventListener("mousemove", q), document.addEventListener("mouseup", H), z.classList.add("dplayer-volume-active")
						}), M.addEventListener("click", function() {
							a.video.muted ? (a.video.muted = !1, a.switchVolumeIcon(), a.updateBar("volume", a.video.volume, "width")) : (a.video.muted = !0, M.innerHTML = a.getSVG("volume-off"), a.updateBar("volume", 0, "width"))
						});
						var I = 0;
						if (!s) {
							var D = function() {
								a.element.classList.remove("dplayer-hide-controller"), clearTimeout(I), I = setTimeout(function() {
									a.video.played.length && (a.element.classList.add("dplayer-hide-controller"), X(), ge())
								}, 2e3)
							};
							this.element.addEventListener("mousemove", D), this.element.addEventListener("click", D)
						}
						var R = localStorage.getItem("DPlayer-opacity") || .7,
							P = {
								original: '\n                    <div class="dplayer-setting-item dplayer-setting-speed">\n                        <span class="dplayer-label">' + m("Speed") + '</span>\n                        <div class="dplayer-toggle">' + this.getSVG("right") + ('     </div>\n                    </div>\n                    <div class="dplayer-setting-item dplayer-setting-loop">\n                        <span class="dplayer-label">' + m("Loop") + '</span>\n                        <div class="dplayer-toggle">\n                            <input class="dplayer-toggle-setting-input" type="checkbox" name="dplayer-toggle">\n                            <label for="dplayer-toggle"></label>\n                        </div>\n                    </div>\n                    <div class="dplayer-setting-item dplayer-setting-showdan">\n                        <span class="dplayer-label">' + m("Danmaku") + '</span>\n                        <div class="dplayer-toggle">\n                            <input class="dplayer-showdan-setting-input" type="checkbox" name="dplayer-toggle-dan">\n                            <label for="dplayer-toggle-dan"></label>\n                        </div>\n                    </div>\n                    <div class="dplayer-setting-item dplayer-setting-danmaku">\n                        <span class="dplayer-label">' + m("Opacity for danmaku") + '</span>\n                        <div class="dplayer-danmaku-bar-wrap">\n                            <div class="dplayer-danmaku-bar">\n                                <div class="dplayer-danmaku-bar-inner" style="width: ' + 100 * R + '%">\n                                    <span class="dplayer-thumb"></span>\n                                </div>\n                            </div>\n                        </div>\n                    </div>'),
								speed: '\n                    <div class="dplayer-setting-speed-item" data-speed="0.5">\n                        <span class="dplayer-label">0.5</span>\n                    </div>\n                    <div class="dplayer-setting-speed-item" data-speed="0.75">\n                        <span class="dplayer-label">0.75</span>\n                    </div>\n                    <div class="dplayer-setting-speed-item" data-speed="1">\n                        <span class="dplayer-label">' + m("Normal") + '</span>\n                    </div>\n                    <div class="dplayer-setting-speed-item" data-speed="1.25">\n                        <span class="dplayer-label">1.25</span>\n                    </div>\n                    <div class="dplayer-setting-speed-item" data-speed="1.5">\n                        <span class="dplayer-label">1.5</span>\n                    </div>\n                    <div class="dplayer-setting-speed-item" data-speed="2">\n                        <span class="dplayer-label">2</span>\n                    </div>'
							},
							F = this.element.getElementsByClassName("dplayer-setting-icon")[0],
							U = this.element.getElementsByClassName("dplayer-setting-box")[0],
							j = this.element.getElementsByClassName("dplayer-mask")[0];
						U.innerHTML = P.original;
						var X = function() {
								U.classList.contains("dplayer-setting-box-open") && (U.classList.remove("dplayer-setting-box-open"), j.classList.remove("dplayer-mask-show"), setTimeout(function() {
									U.classList.remove("dplayer-setting-box-narrow"), U.innerHTML = P.original, K()
								}, 300))
							},
							V = function() {
								U.classList.add("dplayer-setting-box-open"), j.classList.add("dplayer-mask-show")
							};
						j.addEventListener("click", function() {
							X()
						}), F.addEventListener("click", function() {
							V()
						});
						var G = this.option.loop,
							J = this.element.getElementsByClassName("dplayer-danmaku")[0],
							W = !0,
							K = function() {
								var e = a.element.getElementsByClassName("dplayer-setting-loop")[0],
									t = e.getElementsByClassName("dplayer-toggle-setting-input")[0];
								t.checked = G, e.addEventListener("click", function() {
									t.checked = !t.checked, t.checked ? (G = !0, a.video.loop = G) : (G = !1, a.video.loop = G), X()
								});
								var n = a.element.getElementsByClassName("dplayer-setting-showdan")[0],
									r = n.getElementsByClassName("dplayer-showdan-setting-input")[0];
								r.checked = W, n.addEventListener("click", function() {
									if (r.checked = !r.checked, r.checked) {
										if (W = !0, a.option.danmaku) {
											for (var e = 0; e < a.dan.length; e++) {
												if (a.dan[e].time >= a.video.currentTime) {
													a.danIndex = e;
													break
												}
												a.danIndex = a.dan.length
											}
											B = setInterval(function() {
												for (var e = a.dan[a.danIndex]; e && a.video.currentTime >= parseFloat(e.time);) ne(e.text, e.color, e.type), e = a.dan[++a.danIndex]
											}, 0)
										}
									} else W = !1, a.option.danmaku && (clearInterval(B), J.innerHTML = '<div class="dplayer-danmaku-item  dplayer-danmaku-item--demo"></div>', a.danTunnel = {
										right: {},
										top: {},
										bottom: {}
									}, a.itemDemo = a.element.getElementsByClassName("dplayer-danmaku-item")[0]);
									X()
								});
								var o = a.element.getElementsByClassName("dplayer-setting-speed")[0];
								o.addEventListener("click", function() {
									U.classList.add("dplayer-setting-box-narrow"), U.innerHTML = P.speed;
									for (var e = U.getElementsByClassName("dplayer-setting-speed-item"), t = function(t) {
											e[t].addEventListener("click", function() {
												a.video.playbackRate = e[t].dataset.speed, X()
											})
										}, n = 0; n < e.length; n++) t(n)
								}), a.option.danmaku && ! function() {
									w.danmakuBar = a.element.getElementsByClassName("dplayer-danmaku-bar-inner")[0];
									var e = a.element.getElementsByClassName("dplayer-danmaku-bar-wrap")[0],
										t = a.element.getElementsByClassName("dplayer-danmaku-bar")[0],
										n = a.element.getElementsByClassName("dplayer-setting-danmaku")[0],
										r = 130;
									a.updateBar("danmaku", R, "width");
									var o = function(e) {
											var n = e || window.event,
												o = (n.clientX - v(t)) / r;
											o = o > 0 ? o : 0, o = o < 1 ? o : 1, a.updateBar("danmaku", o, "width");
											for (var l = a.element.getElementsByClassName("dplayer-danmaku-item"), s = 0; s < l.length; s++) l[s].style.opacity = o;
											R = o, localStorage.setItem("DPlayer-opacity", R)
										},
										l = function s() {
											document.removeEventListener("mouseup", s), document.removeEventListener("mousemove", o), n.classList.remove("dplayer-setting-danmaku-active")
										};
									e.addEventListener("click", function(e) {
										var n = e || window.event,
											o = (n.clientX - v(t)) / r;
										o = o > 0 ? o : 0, o = o < 1 ? o : 1, a.updateBar("danmaku", o, "width");
										for (var l = a.element.getElementsByClassName("dplayer-danmaku-item"), s = 0; s < l.length; s++) l[s].style.opacity = o;
										R = o, localStorage.setItem("DPlayer-opacity", R)
									}), e.addEventListener("mousedown", function() {
										document.addEventListener("mousemove", o), document.addEventListener("mouseup", l), n.classList.add("dplayer-setting-danmaku-active")
									})
								}()
							};
						K(), this.video.addEventListener("durationchange", function() {
							1 !== a.video.duration && (a.element.getElementsByClassName("dplayer-dtime")[0].innerHTML = x(a.video.duration))
						}), this.video.addEventListener("progress", function() {
							var e = a.video.buffered.length ? a.video.buffered.end(a.video.buffered.length - 1) / a.video.duration : 0;
							a.updateBar("loaded", e, "width")
						}), this.video.addEventListener("error", function() {
							a.element.getElementsByClassName("dplayer-ptime")[0].innerHTML = "Error happens ╥﹏╥", a.trigger("pause")
						}), this.video.addEventListener("canplay", function() {
							a.trigger("canplay")
						}), this.ended = !1, this.video.addEventListener("ended", function() {
							a.updateBar("played", 1, "width"), G || (a.ended = !0, a.pause(), a.trigger("ended"))
						}), this.video.volume = parseInt(this.element.getElementsByClassName("dplayer-volume-bar-inner")[0].style.width) / 100, this.video.loop = G, 1 !== this.video.duration && (this.element.getElementsByClassName("dplayer-dtime")[0].innerHTML = this.video.duration ? x(this.video.duration) : "00:00");
						var Z = y ? 24 : 30,
							_ = void 0,
							Q = void 0,
							$ = void 0;
						this.danTunnel = {
							right: {},
							top: {},
							bottom: {}
						};
						var ee = function(e) {
								return J.getBoundingClientRect().right - e.getBoundingClientRect().right
							},
							te = function(e) {
								return (_ + e) / 5
							},
							ae = function(e, t, n) {
								for (var o = _ / te(n), l = function(n) {
										var r = a.danTunnel[t][n + ""];
										if (!r || !r.length) return a.danTunnel[t][n + ""] = [e], e.addEventListener("animationend", function() {
											a.danTunnel[t][n + ""].splice(0, 1)
										}), {
											v: n % $
										};
										for (var l = 0; l < r.length; l++) {
											var s = ee(r[l]) - 10;
											if (s <= _ - o * te(r[l].offsetWidth) || s <= 0) break;
											if (l === r.length - 1) return a.danTunnel[t][n + ""].push(e), e.addEventListener("animationend", function() {
												a.danTunnel[t][n + ""].splice(0, 1)
											}), {
												v: n % $
											}
										}
									}, s = 0;; s++) {
									var i = l(s);
									if ("object" === ("undefined" == typeof i ? "undefined" : r(i))) return i.v
								}
							};
						this.itemDemo = this.element.getElementsByClassName("dplayer-danmaku-item")[0];
						var ne = function(e, t, n) {
							_ = J.offsetWidth, Q = J.offsetHeight, $ = parseInt(Q / Z);
							var r = document.createElement("div");
							r.classList.add("dplayer-danmaku-item"), r.classList.add("dplayer-danmaku-" + n), r.innerHTML = e, r.style.opacity = R, r.style.color = t, r.addEventListener("animationend", function() {
								J.removeChild(r)
							}), a.itemDemo.innerHTML = e;
							var o = a.itemDemo.offsetWidth;
							switch (n) {
								case "right":
									r.style.top = Z * ae(r, n, o) + "px", r.style.width = o + 1 + "px", r.style.transform = "translateX(-" + _ + "px)";
									break;
								case "top":
									r.style.top = Z * ae(r, n) + "px";
									break;
								case "bottom":
									r.style.bottom = Z * ae(r, n) + "px";
									break;
								default:
									console.error("Can't handled danmaku type: " + n)
							}
							return J.appendChild(r), r.classList.add("dplayer-danmaku-move"), r
						};
						this.option.danmaku ? ! function() {
							a.danIndex = 0;
							var e = new XMLHttpRequest;
							e.onreadystatechange = function() {
								4 === e.readyState && (e.status >= 200 && e.status < 300 || 304 === e.status ? ! function() {
									var t = JSON.parse(e.responseText);
									1 !== t.code ? alert(t.msg) : a.option.danmaku.addition ? (e.onreadystatechange = function() {
										if (4 === e.readyState)
											if (e.status >= 200 && e.status < 300 || 304 === e.status) {
												var n = JSON.parse(e.responseText);
												1 !== n.code ? alert(n.msg) : (a.dan = t.danmaku.concat(n.danmaku).sort(function(e, t) {
													return e.time - t.time
												}), a.element.getElementsByClassName("dplayer-danloading")[0].style.display = "none", a.option.autoplay && !s ? a.play() : s && a.pause())
											} else console.log("Request was unsuccessful: " + e.status)
									}, e.open("get", a.option.danmaku.addition[0], !0), e.send(null)) : (a.dan = t.danmaku.sort(function(e, t) {
										return e.time - t.time
									}), a.element.getElementsByClassName("dplayer-danloading")[0].style.display = "none", a.option.autoplay && !s ? a.play() : s && a.pause())
								}() : console.log("Request was unsuccessful: " + e.status))
							};
							var t = void 0;
							t = a.option.danmaku.maximum ? a.option.danmaku.api + "?id=" + a.option.danmaku.id + "&max=" + a.option.danmaku.maximum : a.option.danmaku.api + "?id=" + a.option.danmaku.id, e.open("get", t, !0), e.send(null)
						}() : this.option.autoplay && !s ? this.play() : s && this.pause();
						var re = this.element.getElementsByClassName("dplayer-comment-input")[0],
							oe = this.element.getElementsByClassName("dplayer-comment-icon")[0],
							le = this.element.getElementsByClassName("dplayer-comment-box")[0],
							se = this.element.getElementsByClassName("dplayer-comment-setting-icon")[0],
							ie = this.element.getElementsByClassName("dplayer-comment-setting-box")[0],
							de = this.element.getElementsByClassName("dplayer-send-icon")[0],
							pe = function(e) {
								return e.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#x27;").replace(/\//g, "&#x2f;")
							},
							me = function() {
								if (re.blur(), !re.value.replace(/^\s+|\s+$/g, "")) return void alert(m("Please input danmaku!"));
								var e = {
										token: a.option.danmaku.token,
										player: a.option.danmaku.id,
										author: "DIYgod",
										time: a.video.currentTime,
										text: re.value,
										color: a.element.querySelector(".dplayer-comment-setting-color input:checked").value,
										type: a.element.querySelector(".dplayer-comment-setting-type input:checked").value
									},
									t = new XMLHttpRequest;
								t.onreadystatechange = function() {
									if (4 === t.readyState)
										if (t.status >= 200 && t.status < 300 || 304 === t.status) {
											var e = JSON.parse(t.responseText);
											1 !== e.code ? alert(e.msg) : console.log("Post danmaku: ", JSON.parse(t.responseText))
										} else console.log("Request was unsuccessful: " + t.status)
								}, t.open("post", a.option.danmaku.api, !0), t.send(JSON.stringify(e)), re.value = "", ge(), a.dan.splice(a.danIndex, 0, e), a.danIndex++;
								var n = ne(pe(e.text), e.color, e.type);
								n.style.border = "2px solid " + a.option.theme
							},
							ce = function() {
								ie.classList.contains("dplayer-comment-setting-open") && ie.classList.remove("dplayer-comment-setting-open")
							},
							ue = function() {
								ie.classList.contains("dplayer-comment-setting-open") ? ie.classList.remove("dplayer-comment-setting-open") : ie.classList.add("dplayer-comment-setting-open")
							},
							ye = 0,
							ge = function() {
								le.classList.contains("dplayer-comment-box-open") && (le.classList.remove("dplayer-comment-box-open"), j.classList.remove("dplayer-mask-show"), clearInterval(ye), a.element.classList.remove("dplayer-show-controller"), ce())
							},
							fe = function() {
								le.classList.add("dplayer-comment-box-open"), j.classList.add("dplayer-mask-show"), ye = setInterval(function() {
									clearTimeout(I)
								}, 1e3), a.element.classList.add("dplayer-show-controller")
							};
						j.addEventListener("click", function() {
							ge()
						}), oe.addEventListener("click", function() {
							fe(), setTimeout(function() {
								re.focus()
							}, 300)
						}), se.addEventListener("click", function() {
							ue()
						}), this.element.getElementsByClassName("dplayer-comment-setting-color")[0].addEventListener("click", function() {
							var e = a.element.querySelector('input[name="dplayer-danmaku-color-${index}"]:checked+span');
							e && (se.getElementsByClassName("dplayer-fill")[0].style.fill = a.element.querySelector('input[name="dplayer-danmaku-color-${index}"]:checked').value)
						}), re.addEventListener("click", function() {
							ce()
						}), re.addEventListener("keydown", function(e) {
							var t = e || window.event;
							13 === t.keyCode && me()
						}), de.addEventListener("click", me);
						var he = function() {
							_ = J.offsetWidth;
							for (var e = a.element.getElementsByClassName("dplayer-danmaku-item"), t = 0; t < e.length; t++) e[t].style.transform = "translateX(-" + _ + "px)"
						};
						this.element.addEventListener("fullscreenchange", function() {
							he(), console.log(J.offsetHeight)
						}), this.element.addEventListener("mozfullscreenchange", function() {
							he(), console.log(J.offsetHeight)
						}), this.element.addEventListener("webkitfullscreenchange", function() {
							he(), console.log(J.offsetHeight)
						}), this.element.getElementsByClassName("dplayer-full-icon")[0].addEventListener("click", function() {
							document.fullscreenElement || document.mozFullScreenElement || document.webkitFullscreenElement ? document.cancelFullScreen ? document.cancelFullScreen() : document.mozCancelFullScreen ? document.mozCancelFullScreen() : document.webkitCancelFullScreen && document.webkitCancelFullScreen() : a.element.requestFullscreen ? a.element.requestFullscreen() : a.element.mozRequestFullScreen ? a.element.mozRequestFullScreen() : a.element.webkitRequestFullscreen && a.element.webkitRequestFullscreen(), he()
						});
						var be = function(e) {
							var t = document.activeElement.tagName.toUpperCase(),
								n = document.activeElement.getAttribute("contenteditable");
							if ("INPUT" !== t && "TEXTAREA" !== t && "" !== n && "true" !== n) {
								var r = e || window.event,
									o = void 0;
								switch (r.keyCode) {
									case 32:
										r.preventDefault(), a.toggle();
										break;
									case 37:
										r.preventDefault(), a.video.currentTime = a.video.currentTime - 5;
										break;
									case 39:
										r.preventDefault(), a.video.currentTime = a.video.currentTime + 5;
										break;
									case 38:
										r.preventDefault(), o = a.video.volume + .1, a.volume(o);
										break;
									case 40:
										r.preventDefault(), o = a.video.volume - .1, a.volume(o)
								}
							}
						};
						this.option.hotkey && document.addEventListener("keydown", be);
						var xe = this.element.getElementsByClassName("dplayer-menu")[0];
						this.element.addEventListener("contextmenu", function(e) {
							var t = e || window.event;
							t.preventDefault(), xe.style.left = t.clientX - a.element.getBoundingClientRect().left + "px", xe.style.top = t.clientY - a.element.getBoundingClientRect().top + "px", xe.classList.add("dplayer-menu-show"), j.classList.add("dplayer-mask-show"), j.addEventListener("click", function() {
								j.classList.remove("dplayer-mask-show"), xe.classList.remove("dplayer-menu-show")
							})
						}), this.option.screenshot && ! function() {
							var e = a.element.getElementsByClassName("dplayer-camera-icon")[0];
							e.addEventListener("click", function() {
								var t = document.createElement("canvas");
								t.width = a.video.videoWidth, t.height = a.video.videoHeight, t.getContext("2d").drawImage(a.video, 0, 0, t.width, t.height), e.href = t.toDataURL(), e.download = "DPlayer.png"
							})
						}(), l++
					}
					return o(e, [{
						key: "play",
						value: function(e) {
							"[object Number]" === Object.prototype.toString.call(e) && (this.video.currentTime = e), this.video.paused && (this.shouldpause = !1, this.bezel.innerHTML = this.getSVG("play"), this.bezel.classList.add("dplayer-bezel-transition"), this.playButton.innerHTML = this.getSVG("pause"), this.video.play(), this.playedTime && this.clearTime(), this.setTime(), this.element.classList.add("dplayer-playing"), this.trigger("play"))
						}
					}, {
						key: "pause",
						value: function() {
							this.shouldpause && !this.ended || (this.shouldpause = !0, this.element.classList.remove("dplayer-loading"), this.bezel.innerHTML = this.getSVG("pause"), this.bezel.classList.add("dplayer-bezel-transition"), this.ended = !1, this.playButton.innerHTML = this.getSVG("play"), this.video.pause(), this.clearTime(), this.element.classList.remove("dplayer-playing"), this.trigger("pause"))
						}
					}, {
						key: "volume",
						value: function(e) {
							e = e > 0 ? e : 0, e = e < 1 ? e : 1, this.updateBar("volume", e, "width"), this.video.volume = e, this.video.muted && (this.video.muted = !1), this.switchVolumeIcon()
						}
					}, {
						key: "toggle",
						value: function() {
							this.video.paused ? this.play() : this.pause()
						}
					}, {
						key: "on",
						value: function(e, t) {
							"function" == typeof t && this.event[e].push(t)
						}
					}, {
						key: "switchVideo",
						value: function(e, t) {
							var a = this;
							this.video.src = e.url, this.video.poster = e.pic ? e.pic : "", this.video.currentTime = 0, this.pause(), t && ! function() {
								a.dan = [], a.danIndex = 0, a.element.getElementsByClassName("dplayer-danloading")[0].style.display = "block", a.updateBar("played", 0, "width"), a.updateBar("loaded", 0, "width"), a.element.getElementsByClassName("dplayer-ptime")[0].innerHTML = "00:00", a.element.getElementsByClassName("dplayer-danmaku")[0].innerHTML = '<div class="dplayer-danmaku-item  dplayer-danmaku-item--demo"></div>', a.danTunnel = {
									right: {},
									top: {},
									bottom: {}
								}, a.itemDemo = a.element.getElementsByClassName("dplayer-danmaku-item")[0];
								var e = /mobile/i.test(window.navigator.userAgent);
								a.option.danmaku = t;
								var n = new XMLHttpRequest;
								n.onreadystatechange = function() {
									4 === n.readyState && (n.status >= 200 && n.status < 300 || 304 === n.status ? ! function() {
										var t = JSON.parse(n.responseText);
										1 !== t.code ? alert(t.msg) : a.option.danmaku.addition ? (n.onreadystatechange = function() {
											if (4 === n.readyState)
												if (n.status >= 200 && n.status < 300 || 304 === n.status) {
													var r = JSON.parse(n.responseText);
													1 !== r.code ? alert(r.msg) : (a.danIndex = 0, a.dan = t.danmaku.concat(r.danmaku).sort(function(e, t) {
														return e.time - t.time
													}), a.element.getElementsByClassName("dplayer-danloading")[0].style.display = "none", a.option.autoplay && !e ? a.play() : e && a.pause())
												} else console.log("Request was unsuccessful: " + n.status)
										}, n.open("get", a.option.danmaku.addition[0], !0), n.send(null)) : (a.danIndex = 0, a.dan = t.danmaku.sort(function(e, t) {
											return e.time - t.time
										}), a.element.getElementsByClassName("dplayer-danloading")[0].style.display = "none", a.option.autoplay && !e ? a.play() : e && a.pause())
									}() : console.log("Request was unsuccessful: " + n.status))
								};
								var r = void 0;
								r = a.option.danmaku.maximum ? a.option.danmaku.api + "?id=" + a.option.danmaku.id + "&max=" + a.option.danmaku.maximum : a.option.danmaku.api + "?id=" + a.option.danmaku.id, n.open("get", r, !0), n.send(null)
							}()
						}
					}]), e
				}();
			e.exports = s
		}, function(e, t, a) {
			var n = a(2);
			"string" == typeof n && (n = [
				[e.id, n, ""]
			]), a(4)(n, {}), n.locals && (e.exports = n.locals)
		}, function(e, t, a) {
			t = e.exports = a(3)(), t.push([e.id, '.dplayer{position:relative;overflow:hidden;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;line-height:1}.dplayer:-webkit-full-screen{width:100%;height:100%;background:#000}.dplayer:-webkit-full-screen .dplayer-danmaku .dplayer-danmaku-bottom.dplayer-danmaku-move,.dplayer:-webkit-full-screen .dplayer-danmaku .dplayer-danmaku-top.dplayer-danmaku-move{-webkit-animation:danmaku-center 6s linear;animation:danmaku-center 6s linear;-webkit-animation-play-state:paused;animation-play-state:paused}.dplayer:-webkit-full-screen .dplayer-danmaku .dplayer-danmaku-right.dplayer-danmaku-move{-webkit-animation:danmaku 8s linear;animation:danmaku 8s linear;-webkit-animation-play-state:paused;animation-play-state:paused}.dplayer.dplayer-no-danmaku .dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-box{height:60px}.dplayer.dplayer-no-danmaku .dplayer-controller .dplayer-icons .dplayer-comment,.dplayer.dplayer-no-danmaku .dplayer-danmaku{display:none}.dplayer.dplayer-playing .dplayer-danmaku .dplayer-danmaku-move{-webkit-animation-play-state:running!important;animation-play-state:running!important}@media (min-width:900px){.dplayer.dplayer-playing .dplayer-controller,.dplayer.dplayer-playing .dplayer-controller-mask{opacity:0}.dplayer.dplayer-playing:hover .dplayer-controller,.dplayer.dplayer-playing:hover .dplayer-controller-mask{opacity:1}}.dplayer.dplayer-loading .dplayer-bezel .diplayer-loading-icon{display:block}.dplayer.dplayer-loading .dplayer-danmaku .dplayer-danmaku-move{-webkit-animation-play-state:paused!important;animation-play-state:paused!important}.dplayer.dplayer-hide-controller .dplayer-controller,.dplayer.dplayer-hide-controller .dplayer-controller-mask{opacity:0;-webkit-transform:translateY(100%);transform:translateY(100%)}.dplayer.dplayer-show-controller .dplayer-controller,.dplayer.dplayer-show-controller .dplayer-controller-mask{opacity:1}.dplayer .dplayer-mask{position:absolute;top:0;bottom:0;left:0;right:0;z-index:1;display:none}.dplayer .dplayer-mask.dplayer-mask-show{display:block}.dplayer .dplayer-video-wrap{position:relative;background:#000;font-size:0;width:100%;height:100%}.dplayer .dplayer-video-wrap .dplayer-video{width:100%;height:100%}.dplayer .dplayer-danmaku{position:absolute;left:0;right:0;top:0;bottom:0;font-size:22px;color:#fff}.dplayer .dplayer-danmaku .dplayer-danmaku-item{display:inline-block;pointer-events:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:default;white-space:nowrap;font-weight:bolder;text-shadow:.5px .5px .5px rgba(0,0,0,.5)}.dplayer .dplayer-danmaku .dplayer-danmaku-item--demo{position:absolute;visibility:hidden}.dplayer .dplayer-danmaku .dplayer-danmaku-right{position:absolute;right:0;-webkit-transform:translateX(100%);transform:translateX(100%)}.dplayer .dplayer-danmaku .dplayer-danmaku-right.dplayer-danmaku-move{will-change:transform;-webkit-animation:danmaku 5s linear;animation:danmaku 5s linear;-webkit-animation-play-state:paused;animation-play-state:paused}@-webkit-keyframes danmaku{0%{-webkit-transform:translateX(100%);transform:translateX(100%)}}@keyframes danmaku{0%{-webkit-transform:translateX(100%);transform:translateX(100%)}}.dplayer .dplayer-danmaku .dplayer-danmaku-bottom,.dplayer .dplayer-danmaku .dplayer-danmaku-top{position:absolute;width:100%;text-align:center;visibility:hidden}.dplayer .dplayer-danmaku .dplayer-danmaku-bottom.dplayer-danmaku-move,.dplayer .dplayer-danmaku .dplayer-danmaku-top.dplayer-danmaku-move{will-change:visibility;-webkit-animation:danmaku-center 4s linear;animation:danmaku-center 4s linear;-webkit-animation-play-state:paused;animation-play-state:paused}@-webkit-keyframes danmaku-center{0%{visibility:visible}to{visibility:visible}}@keyframes danmaku-center{0%{visibility:visible}to{visibility:visible}}.dplayer .dplayer-bezel{position:absolute;left:0;right:0;top:0;bottom:0;font-size:22px;color:#fff;pointer-events:none}.dplayer .dplayer-bezel .dplayer-fill{fill:hsla(0,0%,100%,.8)}.dplayer .dplayer-bezel .dplayer-bezel-icon{position:absolute;top:50%;left:50%;margin:-26px 0 0 -26px;height:52px;width:52px;padding:12px;box-sizing:border-box;background:rgba(0,0,0,.5);border-radius:50%;opacity:0;pointer-events:none}.dplayer .dplayer-bezel .dplayer-bezel-icon.dplayer-bezel-transition{-webkit-animation:bezel-hide .5s linear;animation:bezel-hide .5s linear}@-webkit-keyframes bezel-hide{0%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}to{opacity:0;-webkit-transform:scale(2);transform:scale(2)}}@keyframes bezel-hide{0%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}to{opacity:0;-webkit-transform:scale(2);transform:scale(2)}}.dplayer .dplayer-bezel .dplayer-danloading{position:absolute;top:50%;margin-top:-7px;width:100%;text-align:center;font-size:14px;line-height:14px;-webkit-animation:my-face 5s infinite ease-in-out;animation:my-face 5s infinite ease-in-out}.dplayer .dplayer-bezel .diplayer-loading-icon{display:none;position:absolute;top:50%;left:50%;margin:-18px 0 0 -18px;height:36px;width:36px;pointer-events:none}.dplayer .dplayer-bezel .diplayer-loading-icon .diplayer-loading-hide{display:none}.dplayer .dplayer-bezel .diplayer-loading-icon .diplayer-loading-dot{-webkit-animation:diplayer-loading-dot-fade .8s ease infinite;animation:diplayer-loading-dot-fade .8s ease infinite;opacity:0;fill:#fff;-webkit-transform-origin:4px 4px;transform-origin:4px 4px}.dplayer .dplayer-bezel .diplayer-loading-icon .diplayer-loading-dot.diplayer-loading-dot-7{-webkit-animation-delay:.7s;animation-delay:.7s}.dplayer .dplayer-bezel .diplayer-loading-icon .diplayer-loading-dot.diplayer-loading-dot-6{-webkit-animation-delay:.6s;animation-delay:.6s}.dplayer .dplayer-bezel .diplayer-loading-icon .diplayer-loading-dot.diplayer-loading-dot-5{-webkit-animation-delay:.5s;animation-delay:.5s}.dplayer .dplayer-bezel .diplayer-loading-icon .diplayer-loading-dot.diplayer-loading-dot-4{-webkit-animation-delay:.4s;animation-delay:.4s}.dplayer .dplayer-bezel .diplayer-loading-icon .diplayer-loading-dot.diplayer-loading-dot-3{-webkit-animation-delay:.3s;animation-delay:.3s}.dplayer .dplayer-bezel .diplayer-loading-icon .diplayer-loading-dot.diplayer-loading-dot-2{-webkit-animation-delay:.2s;animation-delay:.2s}.dplayer .dplayer-bezel .diplayer-loading-icon .diplayer-loading-dot.diplayer-loading-dot-1{-webkit-animation-delay:.1s;animation-delay:.1s}@-webkit-keyframes diplayer-loading-dot-fade{0%{opacity:.7;-webkit-transform:scale(1.2);transform:scale(1.2)}50%{opacity:.25;-webkit-transform:scale(.9);transform:scale(.9)}to{opacity:.25;-webkit-transform:scale(.85);transform:scale(.85)}}@keyframes diplayer-loading-dot-fade{0%{opacity:.7;-webkit-transform:scale(1.2);transform:scale(1.2)}50%{opacity:.25;-webkit-transform:scale(.9);transform:scale(.9)}to{opacity:.25;-webkit-transform:scale(.85);transform:scale(.85)}}.dplayer .dplayer-controller-mask{background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAADGCAYAAAAT+OqFAAAAdklEQVQoz42QQQ7AIAgEF/T/D+kbq/RWAlnQyyazA4aoAB4FsBSA/bFjuF1EOL7VbrIrBuusmrt4ZZORfb6ehbWdnRHEIiITaEUKa5EJqUakRSaEYBJSCY2dEstQY7AuxahwXFrvZmWl2rh4JZ07z9dLtesfNj5q0FU3A5ObbwAAAABJRU5ErkJggg==) repeat-x bottom;height:98px;width:100%}.dplayer .dplayer-controller,.dplayer .dplayer-controller-mask{position:absolute;bottom:0;-webkit-transition:all .3s ease;transition:all .3s ease}.dplayer .dplayer-controller{left:0;right:0;height:41px;padding:0 20px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.dplayer .dplayer-controller .dplayer-bar-wrap{padding:5px 0;cursor:pointer;position:absolute;bottom:33px;width:calc(100% - 40px);height:3px}.dplayer .dplayer-controller .dplayer-bar-wrap:hover .dplayer-thumb{-webkit-transform:scale(1)!important;transform:scale(1)!important}.dplayer .dplayer-controller .dplayer-bar-wrap .dplayer-bar{position:relative;height:3px;width:100%;background:hsla(0,0%,100%,.2);cursor:pointer!important}.dplayer .dplayer-controller .dplayer-bar-wrap .dplayer-bar .dplayer-loaded{position:absolute;left:0;top:0;bottom:0;background:hsla(0,0%,100%,.4);height:3px;-webkit-transition:all .5s ease;transition:all .5s ease;will-change:width}.dplayer .dplayer-controller .dplayer-bar-wrap .dplayer-bar .dplayer-played{position:absolute;left:0;top:0;bottom:0;height:3px;will-change:width}.dplayer .dplayer-controller .dplayer-bar-wrap .dplayer-bar .dplayer-played .dplayer-thumb{position:absolute;top:0;right:5px;margin-top:-4px;margin-right:-10px;height:11px;width:11px;border-radius:50%;cursor:pointer!important;-webkit-transition:all .3s ease-in-out;transition:all .3s ease-in-out;-webkit-transform:scale(0);transform:scale(0)}.dplayer .dplayer-controller .dplayer-icons{height:38px;position:absolute;bottom:0}.dplayer .dplayer-controller .dplayer-icons.dplayer-icons-left .dplayer-icon{padding:7px}.dplayer .dplayer-controller .dplayer-icons.dplayer-icons-right{right:20px}.dplayer .dplayer-controller .dplayer-icons.dplayer-icons-right .dplayer-icon{padding:8px}.dplayer .dplayer-controller .dplayer-icons #dplayer-menu{stroke:#ddd;stroke-width:1px}.dplayer .dplayer-controller .dplayer-icons .dplayer-time{line-height:38px;color:#eee;text-shadow:0 0 2px rgba(0,0,0,.5);vertical-align:middle;font-size:13px;cursor:default}.dplayer .dplayer-controller .dplayer-icons .dplayer-icon{width:46px;height:100%;border:none;background-color:transparent;outline:none;cursor:pointer;opacity:.8;-webkit-transition:all .2s ease-in-out;transition:all .2s ease-in-out;vertical-align:middle;box-sizing:border-box;display:inline-block}.dplayer .dplayer-controller .dplayer-icons .dplayer-icon:hover{opacity:1}.dplayer .dplayer-controller .dplayer-icons .dplayer-icon.dplayer-comment-icon{padding:10px 9px 9px}.dplayer .dplayer-controller .dplayer-icons .dplayer-icon.dplayer-setting-icon{padding-top:8.5px}.dplayer .dplayer-controller .dplayer-icons .dplayer-fill{fill:#fff}.dplayer .dplayer-controller .dplayer-icons .dplayer-volume{position:relative;display:inline-block;cursor:pointer!important;height:100%}.dplayer .dplayer-controller .dplayer-icons .dplayer-volume:hover .dplayer-volume-bar{width:45px!important}.dplayer .dplayer-controller .dplayer-icons .dplayer-volume:hover .dplayer-thumb{-webkit-transform:scale(1)!important;transform:scale(1)!important}.dplayer .dplayer-controller .dplayer-icons .dplayer-volume.dplayer-volume-active .dplayer-volume-bar{width:45px!important}.dplayer .dplayer-controller .dplayer-icons .dplayer-volume.dplayer-volume-active .dplayer-thumb{-webkit-transform:scale(1)!important;transform:scale(1)!important}.dplayer .dplayer-controller .dplayer-icons .dplayer-volume .dplayer-volume-bar-wrap{display:inline-block;margin:0 5px 0 -5px;vertical-align:middle;height:100%}.dplayer .dplayer-controller .dplayer-icons .dplayer-volume .dplayer-volume-bar-wrap .dplayer-volume-bar{position:relative;top:17px;width:0;height:3px;background:#aaa;-webkit-transition:all .3s ease-in-out;transition:all .3s ease-in-out}.dplayer .dplayer-controller .dplayer-icons .dplayer-volume .dplayer-volume-bar-wrap .dplayer-volume-bar .dplayer-volume-bar-inner{position:absolute;bottom:0;left:0;height:100%;-webkit-transition:all .1s ease;transition:all .1s ease;will-change:width}.dplayer .dplayer-controller .dplayer-icons .dplayer-volume .dplayer-volume-bar-wrap .dplayer-volume-bar .dplayer-volume-bar-inner .dplayer-thumb{position:absolute;top:0;right:5px;margin-top:-4px;margin-right:-10px;height:11px;width:11px;border-radius:50%;cursor:pointer!important;-webkit-transition:all .3s ease-in-out;transition:all .3s ease-in-out;-webkit-transform:scale(0);transform:scale(0)}.dplayer .dplayer-controller .dplayer-icons .dplayer-setting{display:inline-block;height:100%}.dplayer .dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-box{position:absolute;right:0;bottom:50px;-webkit-transform:translateX(170px);transform:translateX(170px);width:150px;height:120px;border-radius:2px;background:rgba(28,28,28,.9);padding:7px 0;-webkit-transition:all .3s ease-in-out;transition:all .3s ease-in-out;overflow:hidden;z-index:2}.dplayer .dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-box.dplayer-setting-box-open{-webkit-transform:translateX(0);transform:translateX(0)}.dplayer .dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-box.dplayer-setting-box-narrow{width:70px;height:180px;text-align:center}.dplayer .dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-item,.dplayer .dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-speed-item{height:30px;padding:5px 10px;box-sizing:border-box;cursor:pointer}.dplayer .dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-item:hover,.dplayer .dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-speed-item:hover{background-color:hsla(0,0%,100%,.1)}.dplayer .dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-danmaku{padding:5px 0}.dplayer .dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-danmaku .dplayer-label{padding:0 10px;display:inline}.dplayer .dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-danmaku:hover .dplayer-label{display:none}.dplayer .dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-danmaku:hover .dplayer-danmaku-bar-wrap{display:inline-block}.dplayer .dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-danmaku.dplayer-setting-danmaku-active .dplayer-label{display:none}.dplayer .dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-danmaku.dplayer-setting-danmaku-active .dplayer-danmaku-bar-wrap{display:inline-block}.dplayer .dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-danmaku .dplayer-danmaku-bar-wrap{padding:0 10px;box-sizing:border-box;display:none;vertical-align:middle;height:100%;width:100%}.dplayer .dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-danmaku .dplayer-danmaku-bar-wrap .dplayer-danmaku-bar{position:relative;top:8.5px;width:100%;height:3px;background:#fff;-webkit-transition:all .3s ease-in-out;transition:all .3s ease-in-out}.dplayer .dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-danmaku .dplayer-danmaku-bar-wrap .dplayer-danmaku-bar .dplayer-danmaku-bar-inner{position:absolute;bottom:0;left:0;height:100%;-webkit-transition:all .1s ease;transition:all .1s ease;background:#aaa;will-change:width}.dplayer .dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-danmaku .dplayer-danmaku-bar-wrap .dplayer-danmaku-bar .dplayer-danmaku-bar-inner .dplayer-thumb{position:absolute;top:0;right:5px;margin-top:-4px;margin-right:-10px;height:11px;width:11px;border-radius:50%;cursor:pointer!important;-webkit-transition:all .3s ease-in-out;transition:all .3s ease-in-out;background:#aaa}.dplayer .dplayer-controller .dplayer-icons .dplayer-comment{display:inline-block;height:100%}.dplayer .dplayer-controller .dplayer-icons .dplayer-comment .dplayer-comment-box{position:absolute;right:0;bottom:50px;-webkit-transform:translateX(382px);transform:translateX(382px);border-radius:2px;-webkit-transition:all .3s ease-in-out;transition:all .3s ease-in-out;z-index:2}.dplayer .dplayer-controller .dplayer-icons .dplayer-comment .dplayer-comment-box.dplayer-comment-box-open{-webkit-transform:translateX(0);transform:translateX(0)}.dplayer .dplayer-controller .dplayer-icons .dplayer-comment .dplayer-comment-box .dplayer-comment-setting-icon{height:24px;width:24px;position:absolute;top:5px;left:7px;padding:0;opacity:1}.dplayer .dplayer-controller .dplayer-icons .dplayer-comment .dplayer-comment-box .dplayer-comment-setting-icon:hover .dplayer-fill{fill:#aaa}.dplayer .dplayer-controller .dplayer-icons .dplayer-comment .dplayer-comment-box .dplayer-comment-setting-icon .dplayer-fill{-webkit-transition:all .2s ease-in-out;transition:all .2s ease-in-out;fill:#ddd}.dplayer .dplayer-controller .dplayer-icons .dplayer-comment .dplayer-comment-box .dplayer-comment-setting-box{position:absolute;background:#fff;bottom:40px;left:-93px;box-shadow:0 0 25px rgba(0,0,0,.3);border-radius:4px;padding:10px 10px 16px;font-size:14px;width:204px;-webkit-transition:all .3s ease-in-out;transition:all .3s ease-in-out;-webkit-transform:scale(0);transform:scale(0)}.dplayer .dplayer-controller .dplayer-icons .dplayer-comment .dplayer-comment-box .dplayer-comment-setting-box.dplayer-comment-setting-open{-webkit-transform:scale(1);transform:scale(1)}.dplayer .dplayer-controller .dplayer-icons .dplayer-comment .dplayer-comment-box .dplayer-comment-setting-box:after{content:\'\';position:absolute;top:100%;left:50%;margin-left:-12px;background:url(\'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 12"><path fill="#FFF" d="M23.7,0c-1.2,0-2.4,0.5-3.2,1.3l-7.7,7.8c-0.4,0.4-1.1,0.4-1.5,0L3.5,1.3C2.7,0.5,1.5,0,0.3,0"/></svg>\');width:24px;height:12px}.dplayer .dplayer-controller .dplayer-icons .dplayer-comment .dplayer-comment-box .dplayer-comment-setting-box input[type=radio]{display:none}.dplayer .dplayer-controller .dplayer-icons .dplayer-comment .dplayer-comment-box .dplayer-comment-setting-box label{cursor:pointer}.dplayer .dplayer-controller .dplayer-icons .dplayer-comment .dplayer-comment-box .dplayer-comment-setting-box .dplayer-comment-setting-title{font-size:14px;color:#555;padding:6px}.dplayer .dplayer-controller .dplayer-icons .dplayer-comment .dplayer-comment-box .dplayer-comment-setting-box .dplayer-comment-setting-type{font-size:0}.dplayer .dplayer-controller .dplayer-icons .dplayer-comment .dplayer-comment-box .dplayer-comment-setting-box .dplayer-comment-setting-type label:nth-child(2) span{border-radius:4px 0 0 4px}.dplayer .dplayer-controller .dplayer-icons .dplayer-comment .dplayer-comment-box .dplayer-comment-setting-box .dplayer-comment-setting-type label:nth-child(4) span{border-radius:0 4px 4px 0}.dplayer .dplayer-controller .dplayer-icons .dplayer-comment .dplayer-comment-box .dplayer-comment-setting-box .dplayer-comment-setting-type span{width:33%;padding:4px 6px;line-height:16px;display:inline-block;font-size:12px;color:#555;border:1px solid #e4e4e6;margin-right:-1px;box-sizing:border-box;text-align:center;cursor:pointer}.dplayer .dplayer-controller .dplayer-icons .dplayer-comment .dplayer-comment-box .dplayer-comment-setting-box .dplayer-comment-setting-type input:checked+span{background:#e4e4e6}.dplayer .dplayer-controller .dplayer-icons .dplayer-comment .dplayer-comment-box .dplayer-comment-setting-box .dplayer-comment-setting-color{font-size:0}.dplayer .dplayer-controller .dplayer-icons .dplayer-comment .dplayer-comment-box .dplayer-comment-setting-box .dplayer-comment-setting-color label{font-size:0;padding:6px;display:inline-block}.dplayer .dplayer-controller .dplayer-icons .dplayer-comment .dplayer-comment-box .dplayer-comment-setting-box .dplayer-comment-setting-color span{width:22px;height:22px;display:inline-block;border-radius:50%;box-sizing:border-box;cursor:pointer}.dplayer .dplayer-controller .dplayer-icons .dplayer-comment .dplayer-comment-box .dplayer-comment-setting-box .dplayer-comment-setting-color span:hover{-webkit-animation:my-face 5s infinite ease-in-out;animation:my-face 5s infinite ease-in-out;box-shadow:0 2px 2px 0 rgba(0,0,0,.14),0 3px 1px -2px rgba(0,0,0,.2),0 1px 5px 0 rgba(0,0,0,.12)}.dplayer .dplayer-controller .dplayer-icons .dplayer-comment .dplayer-comment-box .dplayer-comment-setting-box .dplayer-comment-setting-color input:checked+span{box-shadow:0 2px 2px 0 rgba(0,0,0,.14),0 3px 1px -2px rgba(0,0,0,.2),0 1px 5px 0 rgba(0,0,0,.12);border:none!important}.dplayer .dplayer-controller .dplayer-icons .dplayer-comment .dplayer-comment-box .dplayer-comment-input{outline:none;border:none;padding:8px 31px;font-size:14px;line-height:18px;text-align:center;border-radius:4px;width:300px;background:#fff;margin:0;height:auto}.dplayer .dplayer-controller .dplayer-icons .dplayer-comment .dplayer-comment-box .dplayer-send-icon{height:22px;width:22px;position:absolute;top:6px;right:7px;padding:0;opacity:1}.dplayer .dplayer-controller .dplayer-icons .dplayer-comment .dplayer-comment-box .dplayer-send-icon:hover .dplayer-fill{fill:#aaa}.dplayer .dplayer-controller .dplayer-icons .dplayer-comment .dplayer-comment-box .dplayer-send-icon .dplayer-fill{-webkit-transition:all .2s ease-in-out;transition:all .2s ease-in-out;fill:#ddd}.dplayer .dplayer-controller .dplayer-icons .dplayer-label{color:#eee;font-size:13px;display:inline-block;vertical-align:middle}.dplayer .dplayer-controller .dplayer-icons .dplayer-toggle{width:32px;height:100%;text-align:center;display:inline-block;font-size:0;vertical-align:middle;float:right}.dplayer .dplayer-controller .dplayer-icons .dplayer-toggle input{max-height:0;max-width:0;display:none}.dplayer .dplayer-controller .dplayer-icons .dplayer-toggle input+label{display:inline-block;position:relative;box-shadow:inset 0 0 0 0 #dfdfdf;border:1px solid #dfdfdf;height:20px;width:32px;border-radius:10px;box-sizing:border-box;cursor:pointer;-webkit-transition:.2s ease-in-out;transition:.2s ease-in-out}.dplayer .dplayer-controller .dplayer-icons .dplayer-toggle input+label:after,.dplayer .dplayer-controller .dplayer-icons .dplayer-toggle input+label:before{content:"";position:absolute;display:block;height:18px;width:18px;top:0;left:0;border-radius:15px;-webkit-transition:.2s ease-in-out;transition:.2s ease-in-out}.dplayer .dplayer-controller .dplayer-icons .dplayer-toggle input+label:after{background:#fff;box-shadow:0 1px 3px rgba(0,0,0,.4)}.dplayer .dplayer-controller .dplayer-icons .dplayer-toggle input:checked+label{border-color:hsla(0,0%,100%,.5)}.dplayer .dplayer-controller .dplayer-icons .dplayer-toggle input:checked+label:before{width:30px;background:hsla(0,0%,100%,.5)}.dplayer .dplayer-controller .dplayer-icons .dplayer-toggle input:checked+label:after{left:12px}.dplayer .dplayer-menu{position:absolute;width:150px;border-radius:2px;background:rgba(28,28,28,.9);padding:5px 0;overflow:hidden;z-index:3;display:none}.dplayer .dplayer-menu.dplayer-menu-show{display:block}.dplayer .dplayer-menu .dplayer-menu-item{height:30px;padding:5px 10px;box-sizing:border-box;cursor:pointer}.dplayer .dplayer-menu .dplayer-menu-item:hover{background-color:hsla(0,0%,100%,.1)}.dplayer .dplayer-menu .dplayer-menu-item .dplayer-menu-label a{color:#eee;font-size:13px;display:inline-block;vertical-align:middle}@-webkit-keyframes my-face{2%{-webkit-transform:translateY(1.5px) rotate(1.5deg);transform:translateY(1.5px) rotate(1.5deg)}4%{-webkit-transform:translateY(-1.5px) rotate(-.5deg);transform:translateY(-1.5px) rotate(-.5deg)}6%{-webkit-transform:translateY(1.5px) rotate(-1.5deg);transform:translateY(1.5px) rotate(-1.5deg)}8%{-webkit-transform:translateY(-1.5px) rotate(-1.5deg);transform:translateY(-1.5px) rotate(-1.5deg)}10%{-webkit-transform:translateY(2.5px) rotate(1.5deg);transform:translateY(2.5px) rotate(1.5deg)}12%{-webkit-transform:translateY(-.5px) rotate(1.5deg);transform:translateY(-.5px) rotate(1.5deg)}14%{-webkit-transform:translateY(-1.5px) rotate(1.5deg);transform:translateY(-1.5px) rotate(1.5deg)}16%{-webkit-transform:translateY(-.5px) rotate(-1.5deg);transform:translateY(-.5px) rotate(-1.5deg)}18%{-webkit-transform:translateY(.5px) rotate(-1.5deg);transform:translateY(.5px) rotate(-1.5deg)}20%{-webkit-transform:translateY(-1.5px) rotate(2.5deg);transform:translateY(-1.5px) rotate(2.5deg)}22%{-webkit-transform:translateY(.5px) rotate(-1.5deg);transform:translateY(.5px) rotate(-1.5deg)}24%{-webkit-transform:translateY(1.5px) rotate(1.5deg);transform:translateY(1.5px) rotate(1.5deg)}26%{-webkit-transform:translateY(.5px) rotate(.5deg);transform:translateY(.5px) rotate(.5deg)}28%{-webkit-transform:translateY(.5px) rotate(1.5deg);transform:translateY(.5px) rotate(1.5deg)}30%{-webkit-transform:translateY(-.5px) rotate(2.5deg);transform:translateY(-.5px) rotate(2.5deg)}32%{-webkit-transform:translateY(1.5px) rotate(-.5deg);transform:translateY(1.5px) rotate(-.5deg)}34%{-webkit-transform:translateY(1.5px) rotate(-.5deg);transform:translateY(1.5px) rotate(-.5deg)}36%{-webkit-transform:translateY(-1.5px) rotate(2.5deg);transform:translateY(-1.5px) rotate(2.5deg)}38%{-webkit-transform:translateY(1.5px) rotate(-1.5deg);transform:translateY(1.5px) rotate(-1.5deg)}40%{-webkit-transform:translateY(-.5px) rotate(2.5deg);transform:translateY(-.5px) rotate(2.5deg)}42%{-webkit-transform:translateY(2.5px) rotate(-1.5deg);transform:translateY(2.5px) rotate(-1.5deg)}44%{-webkit-transform:translateY(1.5px) rotate(.5deg);transform:translateY(1.5px) rotate(.5deg)}46%{-webkit-transform:translateY(-1.5px) rotate(2.5deg);transform:translateY(-1.5px) rotate(2.5deg)}48%{-webkit-transform:translateY(-.5px) rotate(.5deg);transform:translateY(-.5px) rotate(.5deg)}50%{-webkit-transform:translateY(.5px) rotate(.5deg);transform:translateY(.5px) rotate(.5deg)}52%{-webkit-transform:translateY(2.5px) rotate(2.5deg);transform:translateY(2.5px) rotate(2.5deg)}54%{-webkit-transform:translateY(-1.5px) rotate(1.5deg);transform:translateY(-1.5px) rotate(1.5deg)}56%{-webkit-transform:translateY(2.5px) rotate(2.5deg);transform:translateY(2.5px) rotate(2.5deg)}58%{-webkit-transform:translateY(.5px) rotate(2.5deg);transform:translateY(.5px) rotate(2.5deg)}60%{-webkit-transform:translateY(2.5px) rotate(2.5deg);transform:translateY(2.5px) rotate(2.5deg)}62%{-webkit-transform:translateY(-.5px) rotate(2.5deg);transform:translateY(-.5px) rotate(2.5deg)}64%{-webkit-transform:translateY(-.5px) rotate(1.5deg);transform:translateY(-.5px) rotate(1.5deg)}66%{-webkit-transform:translateY(1.5px) rotate(-.5deg);transform:translateY(1.5px) rotate(-.5deg)}68%{-webkit-transform:translateY(-1.5px) rotate(-.5deg);transform:translateY(-1.5px) rotate(-.5deg)}70%{-webkit-transform:translateY(1.5px) rotate(.5deg);transform:translateY(1.5px) rotate(.5deg)}72%{-webkit-transform:translateY(2.5px) rotate(1.5deg);transform:translateY(2.5px) rotate(1.5deg)}74%{-webkit-transform:translateY(-.5px) rotate(.5deg);transform:translateY(-.5px) rotate(.5deg)}76%{-webkit-transform:translateY(-.5px) rotate(2.5deg);transform:translateY(-.5px) rotate(2.5deg)}78%{-webkit-transform:translateY(-.5px) rotate(1.5deg);transform:translateY(-.5px) rotate(1.5deg)}80%{-webkit-transform:translateY(1.5px) rotate(1.5deg);transform:translateY(1.5px) rotate(1.5deg)}82%{-webkit-transform:translateY(-.5px) rotate(.5deg);transform:translateY(-.5px) rotate(.5deg)}84%{-webkit-transform:translateY(1.5px) rotate(2.5deg);transform:translateY(1.5px) rotate(2.5deg)}86%{-webkit-transform:translateY(-1.5px) rotate(-1.5deg);transform:translateY(-1.5px) rotate(-1.5deg)}88%{-webkit-transform:translateY(-.5px) rotate(2.5deg);transform:translateY(-.5px) rotate(2.5deg)}90%{-webkit-transform:translateY(2.5px) rotate(-.5deg);transform:translateY(2.5px) rotate(-.5deg)}92%{-webkit-transform:translateY(.5px) rotate(-.5deg);transform:translateY(.5px) rotate(-.5deg)}94%{-webkit-transform:translateY(2.5px) rotate(.5deg);transform:translateY(2.5px) rotate(.5deg)}96%{-webkit-transform:translateY(-.5px) rotate(1.5deg);transform:translateY(-.5px) rotate(1.5deg)}98%{-webkit-transform:translateY(-1.5px) rotate(-.5deg);transform:translateY(-1.5px) rotate(-.5deg)}0%,to{-webkit-transform:translate(0) rotate(0deg);transform:translate(0) rotate(0deg)}}@keyframes my-face{2%{-webkit-transform:translateY(1.5px) rotate(1.5deg);transform:translateY(1.5px) rotate(1.5deg)}4%{-webkit-transform:translateY(-1.5px) rotate(-.5deg);transform:translateY(-1.5px) rotate(-.5deg)}6%{-webkit-transform:translateY(1.5px) rotate(-1.5deg);transform:translateY(1.5px) rotate(-1.5deg)}8%{-webkit-transform:translateY(-1.5px) rotate(-1.5deg);transform:translateY(-1.5px) rotate(-1.5deg)}10%{-webkit-transform:translateY(2.5px) rotate(1.5deg);transform:translateY(2.5px) rotate(1.5deg)}12%{-webkit-transform:translateY(-.5px) rotate(1.5deg);transform:translateY(-.5px) rotate(1.5deg)}14%{-webkit-transform:translateY(-1.5px) rotate(1.5deg);transform:translateY(-1.5px) rotate(1.5deg)}16%{-webkit-transform:translateY(-.5px) rotate(-1.5deg);transform:translateY(-.5px) rotate(-1.5deg)}18%{-webkit-transform:translateY(.5px) rotate(-1.5deg);transform:translateY(.5px) rotate(-1.5deg)}20%{-webkit-transform:translateY(-1.5px) rotate(2.5deg);transform:translateY(-1.5px) rotate(2.5deg)}22%{-webkit-transform:translateY(.5px) rotate(-1.5deg);transform:translateY(.5px) rotate(-1.5deg)}24%{-webkit-transform:translateY(1.5px) rotate(1.5deg);transform:translateY(1.5px) rotate(1.5deg)}26%{-webkit-transform:translateY(.5px) rotate(.5deg);transform:translateY(.5px) rotate(.5deg)}28%{-webkit-transform:translateY(.5px) rotate(1.5deg);transform:translateY(.5px) rotate(1.5deg)}30%{-webkit-transform:translateY(-.5px) rotate(2.5deg);transform:translateY(-.5px) rotate(2.5deg)}32%{-webkit-transform:translateY(1.5px) rotate(-.5deg);transform:translateY(1.5px) rotate(-.5deg)}34%{-webkit-transform:translateY(1.5px) rotate(-.5deg);transform:translateY(1.5px) rotate(-.5deg)}36%{-webkit-transform:translateY(-1.5px) rotate(2.5deg);transform:translateY(-1.5px) rotate(2.5deg)}38%{-webkit-transform:translateY(1.5px) rotate(-1.5deg);transform:translateY(1.5px) rotate(-1.5deg)}40%{-webkit-transform:translateY(-.5px) rotate(2.5deg);transform:translateY(-.5px) rotate(2.5deg)}42%{-webkit-transform:translateY(2.5px) rotate(-1.5deg);transform:translateY(2.5px) rotate(-1.5deg)}44%{-webkit-transform:translateY(1.5px) rotate(.5deg);transform:translateY(1.5px) rotate(.5deg)}46%{-webkit-transform:translateY(-1.5px) rotate(2.5deg);transform:translateY(-1.5px) rotate(2.5deg)}48%{-webkit-transform:translateY(-.5px) rotate(.5deg);transform:translateY(-.5px) rotate(.5deg)}50%{-webkit-transform:translateY(.5px) rotate(.5deg);transform:translateY(.5px) rotate(.5deg)}52%{-webkit-transform:translateY(2.5px) rotate(2.5deg);transform:translateY(2.5px) rotate(2.5deg)}54%{-webkit-transform:translateY(-1.5px) rotate(1.5deg);transform:translateY(-1.5px) rotate(1.5deg)}56%{-webkit-transform:translateY(2.5px) rotate(2.5deg);transform:translateY(2.5px) rotate(2.5deg)}58%{-webkit-transform:translateY(.5px) rotate(2.5deg);transform:translateY(.5px) rotate(2.5deg)}60%{-webkit-transform:translateY(2.5px) rotate(2.5deg);transform:translateY(2.5px) rotate(2.5deg)}62%{-webkit-transform:translateY(-.5px) rotate(2.5deg);transform:translateY(-.5px) rotate(2.5deg)}64%{-webkit-transform:translateY(-.5px) rotate(1.5deg);transform:translateY(-.5px) rotate(1.5deg)}66%{-webkit-transform:translateY(1.5px) rotate(-.5deg);transform:translateY(1.5px) rotate(-.5deg)}68%{-webkit-transform:translateY(-1.5px) rotate(-.5deg);transform:translateY(-1.5px) rotate(-.5deg)}70%{-webkit-transform:translateY(1.5px) rotate(.5deg);transform:translateY(1.5px) rotate(.5deg)}72%{-webkit-transform:translateY(2.5px) rotate(1.5deg);transform:translateY(2.5px) rotate(1.5deg)}74%{-webkit-transform:translateY(-.5px) rotate(.5deg);transform:translateY(-.5px) rotate(.5deg)}76%{-webkit-transform:translateY(-.5px) rotate(2.5deg);transform:translateY(-.5px) rotate(2.5deg)}78%{-webkit-transform:translateY(-.5px) rotate(1.5deg);transform:translateY(-.5px) rotate(1.5deg)}80%{-webkit-transform:translateY(1.5px) rotate(1.5deg);transform:translateY(1.5px) rotate(1.5deg)}82%{-webkit-transform:translateY(-.5px) rotate(.5deg);transform:translateY(-.5px) rotate(.5deg)}84%{-webkit-transform:translateY(1.5px) rotate(2.5deg);transform:translateY(1.5px) rotate(2.5deg)}86%{-webkit-transform:translateY(-1.5px) rotate(-1.5deg);transform:translateY(-1.5px) rotate(-1.5deg)}88%{-webkit-transform:translateY(-.5px) rotate(2.5deg);transform:translateY(-.5px) rotate(2.5deg)}90%{-webkit-transform:translateY(2.5px) rotate(-.5deg);transform:translateY(2.5px) rotate(-.5deg)}92%{-webkit-transform:translateY(.5px) rotate(-.5deg);transform:translateY(.5px) rotate(-.5deg)}94%{-webkit-transform:translateY(2.5px) rotate(.5deg);transform:translateY(2.5px) rotate(.5deg)}96%{-webkit-transform:translateY(-.5px) rotate(1.5deg);transform:translateY(-.5px) rotate(1.5deg)}98%{-webkit-transform:translateY(-1.5px) rotate(-.5deg);transform:translateY(-1.5px) rotate(-.5deg)}0%,to{-webkit-transform:translate(0) rotate(0deg);transform:translate(0) rotate(0deg)}}', ""]);
		}, function(e, t) {
			e.exports = function() {
				var e = [];
				return e.toString = function() {
					for (var e = [], t = 0; t < this.length; t++) {
						var a = this[t];
						a[2] ? e.push("@media " + a[2] + "{" + a[1] + "}") : e.push(a[1])
					}
					return e.join("")
				}, e.i = function(t, a) {
					"string" == typeof t && (t = [
						[null, t, ""]
					]);
					for (var n = {}, r = 0; r < this.length; r++) {
						var o = this[r][0];
						"number" == typeof o && (n[o] = !0)
					}
					for (r = 0; r < t.length; r++) {
						var l = t[r];
						"number" == typeof l[0] && n[l[0]] || (a && !l[2] ? l[2] = a : a && (l[2] = "(" + l[2] + ") and (" + a + ")"), e.push(l))
					}
				}, e
			}
		}, function(e, t, a) {
			function n(e, t) {
				for (var a = 0; a < e.length; a++) {
					var n = e[a],
						r = u[n.id];
					if (r) {
						r.refs++;
						for (var o = 0; o < r.parts.length; o++) r.parts[o](n.parts[o]);
						for (; o < n.parts.length; o++) r.parts.push(d(n.parts[o], t))
					} else {
						for (var l = [], o = 0; o < n.parts.length; o++) l.push(d(n.parts[o], t));
						u[n.id] = {
							id: n.id,
							refs: 1,
							parts: l
						}
					}
				}
			}

			function r(e) {
				for (var t = [], a = {}, n = 0; n < e.length; n++) {
					var r = e[n],
						o = r[0],
						l = r[1],
						s = r[2],
						i = r[3],
						d = {
							css: l,
							media: s,
							sourceMap: i
						};
					a[o] ? a[o].parts.push(d) : t.push(a[o] = {
						id: o,
						parts: [d]
					})
				}
				return t
			}

			function o(e, t) {
				var a = f(),
					n = x[x.length - 1];
				if ("top" === e.insertAt) n ? n.nextSibling ? a.insertBefore(t, n.nextSibling) : a.appendChild(t) : a.insertBefore(t, a.firstChild), x.push(t);
				else {
					if ("bottom" !== e.insertAt) throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
					a.appendChild(t)
				}
			}

			function l(e) {
				e.parentNode.removeChild(e);
				var t = x.indexOf(e);
				t >= 0 && x.splice(t, 1)
			}

			function s(e) {
				var t = document.createElement("style");
				return t.type = "text/css", o(e, t), t
			}

			function i(e) {
				var t = document.createElement("link");
				return t.rel = "stylesheet", o(e, t), t
			}

			function d(e, t) {
				var a, n, r;
				if (t.singleton) {
					var o = b++;
					a = h || (h = s(t)), n = p.bind(null, a, o, !1), r = p.bind(null, a, o, !0)
				} else e.sourceMap && "function" == typeof URL && "function" == typeof URL.createObjectURL && "function" == typeof URL.revokeObjectURL && "function" == typeof Blob && "function" == typeof btoa ? (a = i(t), n = c.bind(null, a), r = function() {
					l(a), a.href && URL.revokeObjectURL(a.href)
				}) : (a = s(t), n = m.bind(null, a), r = function() {
					l(a)
				});
				return n(e),
					function(t) {
						if (t) {
							if (t.css === e.css && t.media === e.media && t.sourceMap === e.sourceMap) return;
							n(e = t)
						} else r()
					}
			}

			function p(e, t, a, n) {
				var r = a ? "" : n.css;
				if (e.styleSheet) e.styleSheet.cssText = v(t, r);
				else {
					var o = document.createTextNode(r),
						l = e.childNodes;
					l[t] && e.removeChild(l[t]), l.length ? e.insertBefore(o, l[t]) : e.appendChild(o)
				}
			}

			function m(e, t) {
				var a = t.css,
					n = t.media;
				if (n && e.setAttribute("media", n), e.styleSheet) e.styleSheet.cssText = a;
				else {
					for (; e.firstChild;) e.removeChild(e.firstChild);
					e.appendChild(document.createTextNode(a))
				}
			}

			function c(e, t) {
				var a = t.css,
					n = t.sourceMap;
				n && (a += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(n)))) + " */");
				var r = new Blob([a], {
						type: "text/css"
					}),
					o = e.href;
				e.href = URL.createObjectURL(r), o && URL.revokeObjectURL(o)
			}
			var u = {},
				y = function(e) {
					var t;
					return function() {
						return "undefined" == typeof t && (t = e.apply(this, arguments)), t
					}
				},
				g = y(function() {
					return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase())
				}),
				f = y(function() {
					return document.head || document.getElementsByTagName("head")[0]
				}),
				h = null,
				b = 0,
				x = [];
			e.exports = function(e, t) {
				t = t || {}, "undefined" == typeof t.singleton && (t.singleton = g()), "undefined" == typeof t.insertAt && (t.insertAt = "bottom");
				var a = r(e);
				return n(a, t),
					function(e) {
						for (var o = [], l = 0; l < a.length; l++) {
							var s = a[l],
								i = u[s.id];
							i.refs--, o.push(i)
						}
						if (e) {
							var d = r(e);
							n(d, t)
						}
						for (var l = 0; l < o.length; l++) {
							var i = o[l];
							if (0 === i.refs) {
								for (var p = 0; p < i.parts.length; p++) i.parts[p]();
								delete u[i.id]
							}
						}
					}
			};
			var v = function() {
				var e = [];
				return function(t, a) {
					return e[t] = a, e.filter(Boolean).join("\n")
				}
			}()
		}])
	})
}, function(e, t, a) {
	var n, r, o;
	/*!
	 * headroom.js v0.9.3 - Give your page some headroom. Hide your header until you need it
	 * Copyright (c) 2016 Nick Williams - http://wicky.nillia.ms/headroom.js
	 * License: MIT
	 */
	! function(a, l) {
		"use strict";
		r = [], n = l, o = "function" == typeof n ? n.apply(t, r) : n, !(void 0 !== o && (e.exports = o))
	}(this, function() {
		"use strict";

		function e(e) {
			this.callback = e, this.ticking = !1
		}

		function t(e) {
			return e && "undefined" != typeof window && (e === window || e.nodeType)
		}

		function a(e) {
			if (arguments.length <= 0) throw new Error("Missing arguments in extend function");
			var n, r, o = e || {};
			for (r = 1; r < arguments.length; r++) {
				var l = arguments[r] || {};
				for (n in l) "object" != typeof o[n] || t(o[n]) ? o[n] = o[n] || l[n] : o[n] = a(o[n], l[n])
			}
			return o
		}

		function n(e) {
			return e === Object(e) ? e : {
				down: e,
				up: e
			}
		}

		function r(e, t) {
			t = a(t, r.options), this.lastKnownScrollY = 0, this.elem = e, this.tolerance = n(t.tolerance), this.classes = t.classes, this.offset = t.offset, this.scroller = t.scroller, this.initialised = !1, this.onPin = t.onPin, this.onUnpin = t.onUnpin, this.onTop = t.onTop, this.onNotTop = t.onNotTop, this.onBottom = t.onBottom, this.onNotBottom = t.onNotBottom
		}
		var o = {
			bind: !! function() {}.bind,
			classList: "classList" in document.documentElement,
			rAF: !!(window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame)
		};
		return window.requestAnimationFrame = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame, e.prototype = {
			constructor: e,
			update: function() {
				this.callback && this.callback(), this.ticking = !1
			},
			requestTick: function() {
				this.ticking || (requestAnimationFrame(this.rafCallback || (this.rafCallback = this.update.bind(this))), this.ticking = !0)
			},
			handleEvent: function() {
				this.requestTick()
			}
		}, r.prototype = {
			constructor: r,
			init: function() {
				if (r.cutsTheMustard) return this.debouncer = new e(this.update.bind(this)), this.elem.classList.add(this.classes.initial), setTimeout(this.attachEvent.bind(this), 100), this
			},
			destroy: function() {
				var e = this.classes;
				this.initialised = !1, this.elem.classList.remove(e.unpinned, e.pinned, e.top, e.notTop, e.initial), this.scroller.removeEventListener("scroll", this.debouncer, !1)
			},
			attachEvent: function() {
				this.initialised || (this.lastKnownScrollY = this.getScrollY(), this.initialised = !0, this.scroller.addEventListener("scroll", this.debouncer, !1), this.debouncer.handleEvent())
			},
			unpin: function() {
				var e = this.elem.classList,
					t = this.classes;
				!e.contains(t.pinned) && e.contains(t.unpinned) || (e.add(t.unpinned), e.remove(t.pinned), this.onUnpin && this.onUnpin.call(this))
			},
			pin: function() {
				var e = this.elem.classList,
					t = this.classes;
				e.contains(t.unpinned) && (e.remove(t.unpinned), e.add(t.pinned), this.onPin && this.onPin.call(this))
			},
			top: function() {
				var e = this.elem.classList,
					t = this.classes;
				e.contains(t.top) || (e.add(t.top), e.remove(t.notTop), this.onTop && this.onTop.call(this))
			},
			notTop: function() {
				var e = this.elem.classList,
					t = this.classes;
				e.contains(t.notTop) || (e.add(t.notTop), e.remove(t.top), this.onNotTop && this.onNotTop.call(this))
			},
			bottom: function() {
				var e = this.elem.classList,
					t = this.classes;
				e.contains(t.bottom) || (e.add(t.bottom), e.remove(t.notBottom), this.onBottom && this.onBottom.call(this))
			},
			notBottom: function() {
				var e = this.elem.classList,
					t = this.classes;
				e.contains(t.notBottom) || (e.add(t.notBottom), e.remove(t.bottom), this.onNotBottom && this.onNotBottom.call(this))
			},
			getScrollY: function() {
				return void 0 !== this.scroller.pageYOffset ? this.scroller.pageYOffset : void 0 !== this.scroller.scrollTop ? this.scroller.scrollTop : (document.documentElement || document.body.parentNode || document.body).scrollTop
			},
			getViewportHeight: function() {
				return window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight
			},
			getElementPhysicalHeight: function(e) {
				return Math.max(e.offsetHeight, e.clientHeight)
			},
			getScrollerPhysicalHeight: function() {
				return this.scroller === window || this.scroller === document.body ? this.getViewportHeight() : this.getElementPhysicalHeight(this.scroller)
			},
			getDocumentHeight: function() {
				var e = document.body,
					t = document.documentElement;
				return Math.max(e.scrollHeight, t.scrollHeight, e.offsetHeight, t.offsetHeight, e.clientHeight, t.clientHeight)
			},
			getElementHeight: function(e) {
				return Math.max(e.scrollHeight, e.offsetHeight, e.clientHeight)
			},
			getScrollerHeight: function() {
				return this.scroller === window || this.scroller === document.body ? this.getDocumentHeight() : this.getElementHeight(this.scroller)
			},
			isOutOfBounds: function(e) {
				var t = e < 0,
					a = e + this.getScrollerPhysicalHeight() > this.getScrollerHeight();
				return t || a
			},
			toleranceExceeded: function(e, t) {
				return Math.abs(e - this.lastKnownScrollY) >= this.tolerance[t]
			},
			shouldUnpin: function(e, t) {
				var a = e > this.lastKnownScrollY,
					n = e >= this.offset;
				return a && n && t
			},
			shouldPin: function(e, t) {
				var a = e < this.lastKnownScrollY,
					n = e <= this.offset;
				return a && t || n
			},
			update: function() {
				var e = this.getScrollY(),
					t = e > this.lastKnownScrollY ? "down" : "up",
					a = this.toleranceExceeded(e, t);
				this.isOutOfBounds(e) || (e <= this.offset ? this.top() : this.notTop(), e + this.getViewportHeight() >= this.getScrollerHeight() ? this.bottom() : this.notBottom(), this.shouldUnpin(e, a) ? this.unpin() : this.shouldPin(e, a) && this.pin(), this.lastKnownScrollY = e)
			}
		}, r.options = {
			tolerance: {
				up: 0,
				down: 0
			},
			offset: 0,
			scroller: window,
			classes: {
				pinned: "headroom--pinned",
				unpinned: "headroom--unpinned",
				top: "headroom--top",
				notTop: "headroom--not-top",
				bottom: "headroom--bottom",
				notBottom: "headroom--not-bottom",
				initial: "headroom"
			}
		}, r.cutsTheMustard = "undefined" != typeof o && o.rAF && o.bind && o.classList, r
	})
}, function(e, t) {
	"use strict";

	function a(e, t) {
		if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
	}
	var n = function() {
		function e(e, t) {
			for (var a = 0; a < t.length; a++) {
				var n = t[a];
				n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
			}
		}
		return function(t, a, n) {
			return a && e(t.prototype, a), n && e(t, n), t
		}
	}();
	! function() {
		var t = function() {
			function e(t) {
				var n = this;
				a(this, e);
				var r = {
					logo: "OwO表情",
					container: document.getElementsByClassName("OwO")[0],
					target: document.getElementsByTagName("textarea")[0],
					position: "down",
					width: "100%",
					maxHeight: "250px",
					api: "https://api.anotherhome.net/OwO/OwO.json"
				};
				for (var o in r) r.hasOwnProperty(o) && !t.hasOwnProperty(o) && (t[o] = r[o]);
				this.container = t.container, this.target = t.target, "up" === t.position && this.container.classList.add("OwO-up");
				var l = new XMLHttpRequest;
				l.onreadystatechange = function() {
					4 === l.readyState && (l.status >= 200 && l.status < 300 || 304 === l.status ? (n.odata = JSON.parse(l.responseText), n.init(t)) : console.log("OwO data request was unsuccessful: " + l.status))
				}, l.open("get", t.api, !0), l.send(null)
			}
			return n(e, [{
				key: "init",
				value: function(e) {
					var t = this;
					this.area = e.target, this.packages = Object.keys(this.odata);
					for (var a = '\n            <div class="OwO-logo"><span>' + e.logo + '</span></div>\n            <div class="OwO-body" style="width: ' + e.width + '">', n = 0; n < this.packages.length; n++) {
						a += '\n                <ul class="OwO-items OwO-items-' + this.odata[this.packages[n]].type + '" style="max-height: ' + (parseInt(e.maxHeight) - 53 + "px") + ';">';
						for (var r = this.odata[this.packages[n]].container, o = 0; o < r.length; o++) a += '\n                    <li class="OwO-item" title="' + r[o].text + '">' + r[o].icon + "</li>";
						a += "\n                </ul>"
					}
					a += '\n                <div class="OwO-bar">\n                    <ul class="OwO-packages">';
					for (var l = 0; l < this.packages.length; l++) a += "\n                        <li><span>" + this.packages[l] + "</span></li>";
					a += "\n                    </ul>\n                </div>\n            </div>\n            ", this.container.innerHTML = a, this.logo = this.container.getElementsByClassName("OwO-logo")[0], this.logo.addEventListener("click", function() {
						t.toggle()
					}), this.container.getElementsByClassName("OwO-body")[0].addEventListener("click", function(e) {
						var a = null;
						if (e.target.classList.contains("OwO-item") ? a = e.target : e.target.parentNode.classList.contains("OwO-item") && (a = e.target.parentNode), a) {
							var n = t.area.selectionEnd,
								r = t.area.value;
							t.area.value = r.slice(0, n) + a.innerHTML + r.slice(n), t.area.focus(), t.toggle()
						}
					}), this.packagesEle = this.container.getElementsByClassName("OwO-packages")[0];
					for (var s = function(e) {
							! function(a) {
								t.packagesEle.children[e].addEventListener("click", function() {
									t.tab(a)
								})
							}(e)
						}, i = 0; i < this.packagesEle.children.length; i++) s(i);
					this.tab(0)
				}
			}, {
				key: "toggle",
				value: function() {
					this.container.classList.contains("OwO-open") ? this.container.classList.remove("OwO-open") : this.container.classList.add("OwO-open")
				}
			}, {
				key: "tab",
				value: function(e) {
					var t = this.container.getElementsByClassName("OwO-items-show")[0];
					t && t.classList.remove("OwO-items-show"), this.container.getElementsByClassName("OwO-items")[e].classList.add("OwO-items-show");
					var a = this.container.getElementsByClassName("OwO-package-active")[0];
					a && a.classList.remove("OwO-package-active"), this.packagesEle.getElementsByTagName("li")[e].classList.add("OwO-package-active")
				}
			}]), e
		}();
		"undefined" != typeof e && "undefined" != typeof e.exports ? e.exports = t : window.OwO = t
	}()
}]);
//# sourceMappingURL=main.js.map
