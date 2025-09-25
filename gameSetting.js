window.g = {

    // 預設語言
    defaultLang: 'tw',

    // 客服 url
    openCSPage: 'https://jlw.kctest.co/chat.html?l=ct',

    // api proxy url, listen 3760
    apiUrl: 'https://kaibo-proxy.kctest.co',

    // ip fetcher proxy url，listen 9800
    IpProxyUrl: 'https://ipproxy.kctest.co',

    // 版本 -> 中文版 cn, 越南版 vi
    mode: 'cn',

    // 下注紀錄大類別
    /*
    "SX": "視訊",
    "DZ": "電子",
    "TY": "體育",
    "CP": "彩票",
    "QP": "棋牌",
    "BY": "捕魚",
     */
    BetRecordType: ['SX', 'DZ', 'TY', 'CP', 'QP'],

	// 下注紀錄大類別
	BetRecordPlatform: [
		{
			"android": "",
			"downloadurl": "",
			"gamecode": "",
			"gamename": "DG真人",
			"gametype": "DreamGame",
			"h5": "",
			"ischoice": false,
			"iso": "",
			"picid": "",
			"sort": 1
		},
		{
			"android": "",
			"downloadurl": "",
			"gamecode": "",
			"gamename": "歐博真人",
			"gametype": "AllbetGame",
			"h5": "",
			"ischoice": false,
			"iso": "",
			"picid": "",
			"sort": 1
		},
		{
			"android": "",
			"downloadurl": "",
			"gamecode": "",
			"gamename": "SA真人",
			"gametype": "SAGame",
			"h5": "",
			"ischoice": false,
			"iso": "",
			"picid": "",
			"sort": 1
		},
		{
			"android": "",
			"downloadurl": "",
			"gamecode": "",
			"gamename": "AV真人",
			"gametype": "AVSXGame",
			"h5": "",
			"ischoice": false,
			"iso": "",
			"picid": "",
			"sort": 1
		},
		{
			"android": "",
			"downloadurl": "",
			"gamecode": "",
			"gamename": "RTG電子/捕魚",
			"gametype": "RTGGame",
			"h5": "",
			"ischoice": false,
			"iso": "",
			"picid": "",
			"sort": 1
		},
		{
			"android": "",
			"downloadurl": "",
			"gamecode": "",
			"gamename": "DG電子",
			"gametype": "DragonGame",
			"h5": "",
			"ischoice": false,
			"iso": "",
			"picid": "",
			"sort": 1
		},
		{
			"android": "",
			"downloadurl": "",
			"gamecode": "",
			"gamename": "RSG電子",
			"gametype": "RSGGame",
			"h5": "",
			"ischoice": false,
			"iso": "",
			"picid": "",
			"sort": 1
		},
		{
			"android": "",
			"downloadurl": "",
			"gamecode": "",
			"gamename": "真泳棋牌",
			"gametype": "ZYGame",
			"h5": "",
			"ischoice": false,
			"iso": "",
			"picid": "",
			"sort": 1
		},
		{
			"android": "",
			"downloadurl": "",
			"gamecode": "",
			"gamename": "博樂棋牌",
			"gametype": "BLGame",
			"h5": "",
			"ischoice": false,
			"iso": "",
			"picid": "",
			"sort": 1
		},
		{
			"android": "",
			"downloadurl": "",
			"gamecode": "",
			"gamename": "GR棋牌",
			"gametype": "GRGame",
			"h5": "",
			"ischoice": false,
			"iso": "",
			"picid": "",
			"sort": 1
		},
		{
			"android": "",
			"downloadurl": "",
			"gamecode": "",
			"gamename": "4PK棋牌",
			"gametype": "FPKGame",
			"h5": "",
			"ischoice": false,
			"iso": "",
			"picid": "",
			"sort": 1
		},
		{
			"android": "",
			"downloadurl": "",
			"gamecode": "",
			"gamename": "Super體育",
			"gametype": "SuperGame",
			"h5": "",
			"ischoice": false,
			"iso": "",
			"picid": "",
			"sort": 1
		},
		{
			"android": "",
			"downloadurl": "",
			"gamecode": "",
			"gamename": "方程式彩票",
			"gametype": "KCGame",
			"h5": "",
			"ischoice": false,
			"iso": "",
			"picid": "",
			"sort": 1
		},
		{
			"android": "",
			"downloadurl": "",
			"gamecode": "",
			"gamename": "GTR彩票",
			"gametype": "GTRGame",
			"h5": "",
			"ischoice": false,
			"iso": "",
			"picid": "",
			"sort": 1
		},
		{
			"android": "",
			"downloadurl": "",
			"gamecode": "",
			"gamename": "OB體育",
			"gametype": "ObgtyGame",
			"h5": "",
			"ischoice": false,
			"iso": "",
			"picid": "",
			"sort": 1
		},
	],
	
    // game_type : toIconicGame, toRTGGame
    // 首頁遊戲
    gameArray: [
    	{
            game_type: 'SuperNewGame',
            play_type: 'TY',
            img_key: 'super_sport',
            // text_key: 'Super體育',
            text_key: '',
            is_list: false,
        },
        /*{
            game_type: 'ObgtyGame',
            play_type: 'TY',
            img_key: 'ob_sport',
            // text_key: 'OB體育',
            text_key: '',
            is_list: false,
        },*/
        /*{
            game_type: 'YSBGame',
            play_type: 'TY',
            img_key: 'ysb_sport',
            // text_key: '易勝博體育',
            text_key: '',
            is_list: false,
        },*/
        {
            game_type: 'DreamGame',
            play_type: 'SX',
            img_key: 'dg_live',
            // text_key: 'DG真人',
            text_key: '',
            is_list: false,
        },
        /*{
            game_type: 'DreamGame',
            play_type: 'SX',
            img_key: 'dg_live_try',
            text_key: 'DG試玩',
            is_list: false,
            is_try: true,
        },*/
        {
            game_type: 'AllbetGame',
            play_type: 'SX',
            img_key: 'ab_live',
            // text_key: '歐博真人',
            text_key: '',
            is_list: false,
        },
        /*{
            game_type: 'AllbetGame',
            play_type: 'SX',
            img_key: 'ab_live_try',
            text_key: '歐博試玩',
            is_list: false,
            is_try: true,
        },*/
        {
            game_type: 'SAGame',
            play_type: 'SX',
            img_key: 'sa_live',
            // text_key: 'SA真人',
            text_key: '',
            is_list: false,
        },
        {
            game_type: 'AVSXGame',
            play_type: 'SX',
            img_key: 'av_live',
            // text_key: 'AV真人',
            text_key: '',
            is_list: false,
        },
        {
            game_type: 'WMGame',
            play_type: 'SX',
            img_key: 'wm_live',
            // text_key: 'AV真人',
            text_key: '',
            is_list: false,
        },
        /*{
            game_type: 'toRTGGame',
            play_type: 'DZ',
            img_key: 'rtg_slot',
            text_key: 'RTG電子',
            is_list: true,
        },*/
        {
            game_type: 'DragonGame',
            play_type: 'DZ',
            img_key: 'dragongame_slot',
            // text_key: 'DG電子',
            text_key: '',
            is_list: true,
        },
        {
            game_type: 'RSGGame',
            play_type: 'DZ',
            img_key: 'rsg_slot',
            // text_key: 'RSG電子',
            text_key: '',
            is_list: false,
        },
        /*{
            game_type: 'RTGGame',
            play_type: '2162689',
            img_key: 'rtg_fishing',
            text_key: 'RTG捕魚',
            is_list: false,
        },
        {
            game_type: 'ZYGame',
            play_type: 'QP',
            img_key: 'zy_chess',
            text_key: '真泳棋牌',
            is_list: false,
        },*/
        {
            game_type: 'BLGame',
            play_type: 'QP',
            img_key: 'bl_chess',
            text_key: '',
            is_list: false,
        },
        {
            game_type: 'GRGame',
            play_type: '0',
            img_key: 'gr_chess',
            text_key: '',
            is_list: false,
        },
        {
            game_type: 'GRGame',
            play_type: '10017',
            img_key: 'gr_ml_chess',
            text_key: '',
            is_list: false,
        },
        /*{
            game_type: 'FPKGame',
            play_type: 'QP',
            img_key: '4pk_chess',
            // text_key: '4PK棋牌',
            text_key: '',
            is_list: false,
        },*/
        {
            game_type: 'KCGame',
            play_type: 'CP',
            img_key: 'kc_lottery',
            // text_key: '方程式彩票',
            text_key: '',
            is_list: false,
        },
        {
            game_type: 'GTRGame',
            play_type: 'CP',
            img_key: 'gtr_lottery',
            // text_key: '方程式彩票',
            text_key: '',
            is_list: false,
        },
        {
            game_type: 'GAGame',
            play_type: 'SX',
            img_key: 'kc_live',
            // text_key: 'KC真人',
            text_key: '',
            is_list: false,
        },
        /*{
            game_type: '',
            play_type: '',
            img_key: 'comingsoon',
            text_key: '即將推出',
            is_list: false,
        },*/
    ],

    // 充值金額設定
    chargeMoneyArray: ['100', '200', '500', '1000', '2000', '5000', '10000','20000'],
   
    // 銀行卡鎖定訊息
    edit_bank_card_locked_msg: '若需修改或更換請聯繫客服',

    // 首頁footer
    isFooter: true,
    
    // 首頁會員中心 footer
    isMemFooter: false,
    
    // 最新活動 url
    openEventPage: '/promotion/promotion.html',

    // 跑馬燈速度
    msgSpeed: 40,

    // banner輪播的速度
    carouselSpeed: 5000,

    // 首頁上方最近活動url
    openEventPageHome: '/promotion/promotion.html',

    // 禁止下注 game_type 陣列 ex: ['BGGame', 'BGGame', 'BGGame']
    disable_wallet: undefined,

    // 個人資料開關
    isQQ: false, //QQ開關
    isWechat: false, //微信開關
    isLine: true, //line開關
    isSkype: true, //skype開關
    isMail: false, //email開關
    isPhone: true, //手機開關

    // 側欄開關
    isBankCard: false, //銀行卡開關
    isCharge: false, //充值開關
    isWithdraw: false, //取款開關
    isAccountDetail: true, //帳戶明細開關
    isFundPassword: false, //支付密碼修改開關

    // 是否為方程式娛樂城的版型
    is_formula: true,

    // 設定背景顏色
    bg_color: '#FFFFFF',

    // 開啟/關閉註冊
    registerEnable: false,

    // 上方遊戲，試玩顯示開關
    navGameTryEnable: false,


    // DragonGame 電子遊戲
    DragonGame: [
        {
			"game_type": "DragonGame",
			"gamecode": '1101',
            "img": '01-The_Deffenders.jpg',            
            "tw": '捍衛者',
            "cn": '捍卫者',
            "en": 'Deffenders',
        },
        {
			"game_type": "DragonGame",
			"gamecode": '1072',
            "img": '02-Empire_Of_Riches.jpg',            
            "tw": '財富帝國',
            "cn": '财富帝国',
            "en": 'Empire of Riches',
        },
        {
			"game_type": "DragonGame",
			"gamecode": '1052',
            "img": '03-Macau.jpg',            
            "tw": '贏在澳門',
            "cn": '赢在澳门',
            "en": 'Macau',
        },
        {
			"game_type": "DragonGame",
			"gamecode": '1062',
            "img": '04-Mythical_Creatures.jpg',            
            "tw": '神秘動物',
            "cn": '神秘动物',
            "en": 'Mythical Creatures',
        },
        {
			"game_type": "DragonGame",
			"gamecode": '1061',
            "img": '05-Gold_Heist.jpg',            
            "tw": '黃金之爭',
            "cn": '黃金之爭',
            "en": 'Gold Heist',
        },
        {
			"game_type": "DragonGame",
			"gamecode": '1032',
            "img": '06-Twin_Dragon.jpg',            
            "tw": '雙龍傳奇',
            "cn": '双龙传奇',
            "en": 'Twin Dragon',
        },
        {
			"game_type": "DragonGame",
			"gamecode": '1051',
            "img": '07-Winning_Vegas.jpg',            
            "tw": '拉斯維加斯',
            "cn": '拉斯維加斯',
            "en": 'Winning Vegas',
        },
        {
			"game_type": "DragonGame",
			"gamecode": '1042',
            "img": '08-Panda_Playtime.jpg',            
            "tw": '熊貓世界',
            "cn": '熊貓世界',
            "en": 'Panda Playtime',
        },
        {
			"game_type": "DragonGame",
			"gamecode": '1043',
            "img": '09-Fruity_Feast.jpg',            
            "tw": '水果盛宴',
            "cn": '水果盛宴',
            "en": 'Fruity Feast',
        },
        {
			"game_type": "DragonGame",
			"gamecode": '1081',
            "img": '10-Cleopatras_Fortune.jpg',            
            "tw": '克羅巴特拉命運',
            "cn": '克娄巴特拉命运',
            "en": 'Cleopatras Fortune',
        },
        {
			"game_type": "DragonGame",
			"gamecode": '1073',
            "img": '11-Wilderness-Wins.jpg',            
            "tw": '動物森林',
            "cn": '动物森林',
            "en": 'Wilderness Wins',
        },
        {
			"game_type": "DragonGame",
			"gamecode": '1083',
            "img": '12-El_Mariachi.jpg',            
            "tw": '墨西哥樂隊',
            "cn": '墨西哥乐队',
            "en": 'El Mariachi',
        },
        {
			"game_type": "DragonGame",
			"gamecode": '1041',
            "img": '13-I_Scream.jpg',            
            "tw": '萬聖之夜',
            "cn": '万圣之夜',
            "en": 'I Scream',
        },
        {
			"game_type": "DragonGame",
			"gamecode": '1102',
            "img": '14-Buffalo.jpg',            
            "tw": '布法羅賞金',
            "cn": '布法罗赏金',
            "en": 'Buffalo',
        },
        {
			"game_type": "DragonGame",
			"gamecode": '1141',
            "img": '15-LOH.jpg',            
            "tw": '埃及守護神',
            "cn": '埃及守护神',
            "en": 'Legend of Horus',
        },
        {
			"game_type": "DragonGame",
			"gamecode": '1031',
            "img": '16-Safari_Stampede.jpg',            
            "tw": '野生動物園',
            "cn": '野生动物园',
            "en": 'Safari Stampede',
        },
        {
			"game_type": "DragonGame",
			"gamecode": '1063',
            "img": '17-Seirei_Academy.jpg',            
            "tw": '神靈守護著',
            "cn": '神灵守护着',
            "en": 'Seirei Academy',
        },
        {
			"game_type": "DragonGame",
			"gamecode": '1103',
            "img": '18-Hero.jpg',            
            "tw": '英雄學校',
            "cn": '英雄学校',
            "en": 'Hero',
        },
        {
			"game_type": "DragonGame",
			"gamecode": '1111',
            "img": '19-Witches.jpg',            
            "tw": '三大女巫',
            "cn": '三大女巫',
            "en": 'Witches',
        },
        {
			"game_type": "DragonGame",
			"gamecode": '1121',
            "img": '20-Basketball.jpg',            
            "tw": '籃球傳奇',
            "cn": '篮球传奇',
            "en": 'Basketball',
        },
        {
			"game_type": "DragonGame",
			"gamecode": '1192',
            "img": '21-Shinobi_Wars.jpg',            
            "tw": '忍者之戰',
            "cn": '忍者之战',
            "en": 'Shinobi Wars',
        },
        {
			"game_type": "DragonGame",
			"gamecode": '1122',
            "img": '22-Ingot_Ox.jpg',            
            "tw": '牛批轟轟',
            "cn": '牛批轰轰',
            "en": 'Ingot Ox',
        },
        {
			"game_type": "DragonGame",
			"gamecode": '1193',
            "img": '23-Saiyan_Warriors.jpg',            
            "tw": '塞亞戰士',
            "cn": '赛亚战士',
            "en": 'Saiyan Warriors',
        },
        {
			"game_type": "DragonGame",
			"gamecode": '1112',
            "img": '24-Play_With_Cleo.jpg',            
            "tw": '埃及艷后',
            "cn": '埃及艳后',
            "en": 'Play With Cleo',
        },
        {
			"game_type": "DragonGame",
			"gamecode": '1191',
            "img": '25-Rise_Of_The_Titans.jpg',            
            "tw": '希臘神話',
            "cn": '希腊神话',
            "en": 'Rise Of The Titans',
        },
        {
			"game_type": "DragonGame",
			"gamecode": '1194',
            "img": '26-Fortune_Frog.jpg',            
            "tw": '財富蛙',
            "cn": '财富蛙',
            "en": 'Fortune Frog',
        },
        {
			"game_type": "DragonGame",
			"gamecode": '1196',
            "img": '27-The_Bank_Hesit.jpg',            
            "tw": '洗劫銀行',
            "cn": '洗劫银行',
            "en": 'The Bank Hesit',
        },
        {
			"game_type": "DragonGame",
			"gamecode": '1142',
            "img": '28-Aztec_Warrior.jpg',            
            "tw": '阿茲特克勇士',
            "cn": '阿茲特克勇士',
            "en": 'Aztec Warrior',
        },
        {
			"game_type": "DragonGame",
			"gamecode": '1197',
            "img": '29-Pirates_Of_The_Grand_Line.jpg',            
            "tw": '海賊王',
            "cn": '海贼王',
            "en": 'Pirates Of The Grand Line',
        },
        {
			"game_type": "DragonGame",
			"gamecode": '1198',
            "img": '30-The_Wild_Show.jpg',            
            "tw": '狂野之秀',
            "cn": '狂野之秀',
            "en": 'The Wild Show',
        },
        /*{
			"game_type": "DragonGame",
			"gamecode": '',
            "img": '31-Prosperous_Blooms.jpg',            
            "tw": '花開富貴',
            "cn": '花开富贵',
            "en": 'Prosperous Blooms',
        },
        */
        {
			"game_type": "DragonGame",
			"gamecode": '1203',
            "img": '32-Sea_Treasures.jpg',            
            "tw": '海洋寶藏',
            "cn": '海洋宝藏',
            "en": 'Sea Treasures',
        },
        {
			"game_type": "DragonGame",
			"gamecode": '1205',
            "img": '35-Gifts_From_Santa.jpg',            
            "tw": '聖誕禮物',
            "cn": '圣诞礼物',
            "en": 'Gifts From Santa',
        },
        {
			"game_type": "DragonGame",
			"gamecode": '1161',
            "img": 'AmericanRoulette.jpg',            
            "tw": '美國輪盤',
            "cn": '美国轮盘',
            "en": 'American Roulette',
        },
        {
			"game_type": "DragonGame",
			"gamecode": '1151',
            "img": 'EuropeanRoulette.jpg',            
            "tw": '歐洲輪盤',
            "cn": '欧洲轮盘',
            "en": 'European Roulette',
        },
        /*{
			"game_type": "DragonGame",
			"gamecode": '',
            "img": 'EuropeanRoulette-Delux.jpg',            
            "tw": '歐洲輪盤尊貴版',
            "cn": '欧洲轮盘尊贵版',
            "en": 'European Roulette Delux',
        },*/
        {
			"game_type": "DragonGame",
			"gamecode": '1171',
            "img": 'BlackJack.jpg',            
            "tw": '21點',
            "cn": '21点',
            "en": 'Black Jack',
        },
        {
			"game_type": "DragonGame",
			"gamecode": '1195',
            "img": 'BlackJack-Delux.jpg',            
            "tw": '21點尊貴版',
            "cn": '21点尊贵版',
            "en": 'Black Jack Delux',
        },
    ],


    // RTG 電子遊戲
    RTGGameConfig: [
        {
            "img": 'baoni8.jpg',
            "gamecode": '1179912',
			"tw": '包你發',
            "cn": '包你发',
            "en": 'BAO NI 8'
        },
        {
            "img": 'rtg777.jpg',
            "gamecode": '1179882',
			"tw": 'RTG 777',
            "cn": 'RTG 777',
            "en": 'RTG 777'
        },
        {
            "img": 'emperorpanda.jpg',
            "gamecode": '1179909',
			"tw": '熊貓帝國',
            "cn": '熊猫帝国',
            "en": 'Emperor Panda'
        },
        {
            "img": 'plentifultreasure.jpg',
            "gamecode": '1179881',
			"tw": '奇珍異寶',
            "cn": '奇珍异宝',
            "en": 'Plentiful Treasure'
        },
        {
            "img": 'pigwinner.jpg',
            "gamecode": '1179893',
			"tw": '豬滿冠',
            "cn": '猪满冠',
            "en": 'Pig Winner'
        },
        {
            "img": 'wuzetian.jpg',
            "gamecode": '1179889',
			"tw": '武則天',
            "cn": '武则天',
            "en": 'Wu Zetian'
        },
        {
            "img": 'dragonorb.jpg',
            "gamecode": '1179841',
			"tw": '龍珠',
            "cn": '龙珠',
            "en": 'Dragon Orb'
        },
        {
            "img": 'enchantedgardenii.jpg',
            "gamecode": '1179672',
			"tw": '夢幻花園',
            "cn": '梦幻花园',
            "en": 'Enchanted Garden'
        },
		{
            "img": 'fuchi.jpg',
            "gamecode": '1179868',
			"tw": '福氣',
            "cn": '福气',
            "en": 'Fu Chi'
        },
		{
            "img": 'nova7s.jpg',
            "gamecode": '1179825',
			"tw": '夢幻之星',
            "cn": '梦幻之星',
            "en": 'Nova 7s'
        },
		{
            "img": 'fatcatcafe.jpg',
            "gamecode": '1179904',
			"tw": '肥貓咖啡',
            "cn": '肥猫咖啡',
            "en": 'Fat Cat Café'
        },
		{
            "img": 'sweet16.jpg',
            "gamecode": '1179830',
			"tw": '甜蜜 16 歲',
            "cn": '甜蜜 16 岁',
            "en": 'Sweet 16'
        },
		{
            "img": 'apeking.jpg',
            "gamecode": '1179905',
			"tw": '猩猩王',
            "cn": '猩猩王',
            "en": 'Ape King'
        },
		{
            "img": 'pandasgold.jpg',
            "gamecode": '1179876',
			"tw": '熊貓黃金',
            "cn": '熊貓黃金',
            "en": 'Panda\'s Gold'
        },
		{
            "img": 'trexii.jpg',
            "gamecode": '1179897',
			"tw": '暴龍 2',
            "cn": '暴龙 2',
            "en": 'T-REX 2'
        },
		{
            "img": 'shadowgods.jpg',
            "gamecode": '1179913',
			"tw": '暗影諸神',
            "cn": '暗影诸神',
            "en": 'Shadow Gods'
        },
		{
            "img": 'izombie.jpg',
            "gamecode": '1179880',
			"tw": '僵屍',
            "cn": '僵尸',
            "en": 'I, Zombie'
        },
		{
            "img": 'luckyrat.jpg',
            "gamecode": '1179906',
			"tw": '鼠來寶',
            "cn": '鼠来宝',
            "en": 'Lucky Rat'
        },
		{
            "img": 'stormlords.jpg',
            "gamecode": '1179899',
			"tw": '王者風暴',
            "cn": '王者风暴',
            "en": 'Storm Lords'
        },
		{
            "img": 'footballfortunes.jpg',
            "gamecode": '1179898',
			"tw": '幸運足球',
            "cn": '幸运足球',
            "en": 'Football Fortunes'
        },
		{
            "img": 'firedragon.jpg',
            "gamecode": '1179883',
			"tw": '火龍特務',
            "cn": '火龙特务',
            "en": 'Fire Dragon'
        },
		{
            "img": 'triggerhappy.jpg',
            "gamecode": '1179895',
			"tw": '西部喜雙逢',
            "cn": '西部喜双逢',
            "en": 'Trigger Happy'
        },
		{
            "img": 'sanguozhengba.jpg',
            "gamecode": '1179885',
			"tw": '三國爭霸',
            "cn": '三国争霸',
            "en": 'Three Kingdom Wars'
        },
		{
            "img": 'ancientgods.jpg',
            "gamecode": '1179887',
			"tw": '遠古神獸',
            "cn": '远古神兽',
            "en": 'Ancient Gods'
        },
		{
            "img": 'super6.jpg',
            "gamecode": '1179811',
			"tw": '超級 6',
            "cn": '超级 6',
            "en": 'Super 6'
        },
		{
            "img": 'heavenlytreasures.jpg',
            "gamecode": '1179803',
			"tw": '天官賜寶',
            "cn": '天官赐宝',
            "en": 'Heavenly Treasure'
        },
		{
            "img": 'fucanglong.jpg',
            "gamecode": '1179837',
			"tw": '伏藏龍',
            "cn": '伏藏龙',
            "en": 'Fucanglong'
        },
		{
            "img": 'themariachi5.jpg',
            "gamecode": '1179901',
			"tw": '開心鬼派對',
            "cn": '开心鬼派对',
            "en": 'The Mariachi 5'
        },
		{
            "img": 'secretsymbol.jpg',
            "gamecode": '1179838',
			"tw": '秘密符號',
            "cn": '秘密符号',
            "en": 'Secret Symbol'
        },
		{
            "img": 'caihong.jpg',
            "gamecode": '1179879',
			"tw": '彩虹',
            "cn": '彩虹',
            "en": 'Cai Hong'
        },
		{
            "img": 'popiata.jpg',
            "gamecode": '1179839',
			"tw": '皮納塔狂歡',
            "cn": '皮纳塔狂欢',
            "en": 'Popiñata'
        },
		{
            "img": 'fortunefrog.jpg',
            "gamecode": '1179907',
			"tw": '幸運蛙',
            "cn": '幸运蛙',
            "en": 'Fortune Frog'
        },
		{
            "img": 'luchalibre2.jpg',
            "gamecode": '1179874',
			"tw": '墨西哥摔角2',
            "cn": '墨西哥摔角2',
            "en": 'Lucha Libre 2'
        },
		{
            "img": 'mermaidspearls.jpg',
            "gamecode": '1179894',
			"tw": '雪碧人魚失落之寶藏',
            "cn": '雪碧人鱼失落之宝藏',
            "en": 'Mermaid\'s Pearls'
        },
		{
            "img": 'bubblebubble2.jpg',
            "gamecode": '1179848',
			"tw": '女巫溫妮 2',
            "cn": '女巫温妮 2',
            "en": 'Bubble Bubble 2'
        },
		{
            "img": 'cashbandits2.jpg',
            "gamecode": '1179846',
			"tw": '警匪追逐2',
            "cn": '警匪追逐2',
            "en": 'Cash Bandits 2'
        },
		{
            "img": 'scubafishing.jpg',
            "gamecode": '1179888',
			"tw": '漁民樂',
            "cn": '渔民乐',
            "en": 'Scuba Fishing'
        },
		{
            "img": 'stardust.jpg',
            "gamecode": '1179884',
			"tw": '星塵',
            "cn": '星尘',
            "en": 'Stardust'
        },
		{
            "img": 'naughtyorniceiii.jpg',
            "gamecode": '1179890',
			"tw": '頑皮女孩或漂亮女孩 III',
            "cn": '顽皮女孩或漂亮女孩 III',
            "en": 'Naughty Or Nice III'
        },
		{
            "img": 'shanghailights.jpg',
            "gamecode": '1179870',
			"tw": '霓虹上海',
            "cn": '霓虹上海',
            "en": 'Shanghai Lights'
        },
		{
            "img": 'tiandiyuansu.jpg',
            "gamecode": '1179886',
			"tw": '天地元素',
            "cn": '天地元素',
            "en": 'Gods of Nature'
        },
		{
            "img": 'fantasymissionforce.jpg',
            "gamecode": '1179871',
			"tw": '迷你特攻隊',
            "cn": '迷你特攻队',
            "en": 'Fantasy Mission Force'
        },
		{
            "img": 'cubee.jpg',
            "gamecode": '1179892',
			"tw": '毛毛大冒險',
            "cn": '毛毛大冒险',
            "en": 'Cubee'
        },
		{
            "img": 'eternallove.jpg',
            "gamecode": '1179816',
			"tw": '永恆的愛',
            "cn": '永恒的爱',
            "en": 'Eternal Love'
        },
		{
            "img": 'pandamagic.jpg',
            "gamecode": '1179822',
			"tw": '魔幻貓熊',
            "cn": '魔幻猫熊',
            "en": 'Panda Magic'
        },
		{
            "img": 'enchantedgardenii.jpg',
            "gamecode": '1179821',
			"tw": '夢幻花園 II',
            "cn": '梦幻花园 II',
            "en": 'Enchanted Garden II'
        },
		{
            "img": 'bubblebubble.jpg',
            "gamecode": '1179813',
			"tw": '女巫溫妮',
            "cn": '女巫温妮',
            "en": 'Bubble Bubble'
        },
		{
            "img": 'sambasunset.jpg',
            "gamecode": '1179823',
			"tw": '桑巴日落',
            "cn": '桑巴日落',
            "en": 'Samba Sunset'
        },
		{
            "img": 'secretjungle.jpg',
            "gamecode": '1179877',
			"tw": '秘密叢林',
            "cn": '秘密丛林',
            "en": 'Secret Jungle'
        },
		{
            "img": 'witchsbrew.jpg',
            "gamecode": '1179826',
			"tw": '女巫的秘方',
            "cn": '女巫的秘方',
            "en": 'Witch\'s Brew'
        },
		{
            "img": 'eagleshadowfist.jpg',
            "gamecode": '1179872',
			"tw": '北派功夫',
            "cn": '北派功夫',
            "en": 'Eagle Shadow Fist'
        },
		{
            "img": 'purrfectpets.jpg',
            "gamecode": '1179843',
			"tw": '完美寵物',
            "cn": '完美宠物',
            "en": 'Purrfect Pets'
        },
		{
            "img": 'ritchievalenslabamba.jpg',
            "gamecode": '1179873',
			"tw": '里奇·瓦倫斯',
            "cn": '里奇·瓦伦斯',
            "en": 'Ritchie Valens™ La Bamba'
        },
		{
            "img": 'thebigbopper.jpg',
            "gamecode": '1179818',
			"tw": 'The Big Bopper',
            "cn": 'The Big Bopper',
            "en": 'The Big Bopper®'
        },		
    ],

}

