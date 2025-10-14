window.g = {

    // 預設語言
    defaultLang: 'tw',

    // 客服 url
    isCS: false,
    openCSPage: '',

    // api proxy url
    apiUrl: 'http://kctest.co:3759',
    //apiUrl: 'http://proxy.jl888.co:3759/',


    //正式站
    // apiUrl:"http://proxy.bet9888.net:3759",

    // 版本 -> 中文版 cn, 越南版 vi
    mode: 'cn',

    // game_type : toIconicGame, toRTGGame
    // 首頁遊戲
    gameArray: [
        {
            game_type: 'DreamGame',
            play_type: 'SX',
            img_key: 'DGLIVE',
            text_key: 'indexGame1',
            is_list: false,
            /// 試玩遊戲
            is_try: true
        },
        {
            game_type: 'DreamGame',
            play_type: 'SX',
            img_key: 'DGLIVE',
            text_key: 'indexGame1',
            is_list: false,
        },
        {
            game_type: 'DreamGame',
            play_type: 'SX',
            img_key: 'DGLIVE',
            text_key: 'indexGame1',
            is_list: false,
        },
        {
            game_type: 'DreamGame',
            play_type: 'SX',
            img_key: 'DGLIVE',
            text_key: 'indexGame1',
            is_list: false,
        },
        {
            game_type: 'DreamGame',
            play_type: 'SX',
            img_key: 'DGLIVE',
            text_key: 'indexGame1',
            is_list: false,
        },
        {
            game_type: 'BGGame',
            play_type: 'CP',
            img_key: 'OBLIVE',
            text_key: 'indexGame2',
            is_list: false,
        },
        {
            game_type: 'toRTGGame',
            play_type: 'toRTGGame',
            img_key: 'RTGSLOT',
            text_key: 'indexGame3',
            is_list: false,
        },
        {
            game_type: 'ZYGame',
            play_type: 'QP',
            img_key: 'RTGFISH',
            text_key: 'indexGame4',
            is_list: false,
        },
        {
            game_type: 'SingbetGame',
            play_type: 'TY',
            img_key: 'poker',
            text_key: 'indexGame5',
            is_list: false,
        },
        {
            game_type: 'BGGame',
            play_type: 'BY',
            img_key: 'SBSPORT',
            text_key: 'indexGame6',
            is_list: false,
        },
        {
            game_type: 'sample',// 對應下方 [動態電子遊戲範例 同名 array]
            // /img/icons/electronicGame/sample/banner/banner.png 新增 banner 圖檔
            // /img/icons/electronicGame/sample/[cn/tw/en] 新增相關遊戲 icon 圖檔
            play_type: '',
            img_key: 'DGLIVE',
            text_key: 'indexGame7',
            is_list: true, // 動態電子遊戲 要設 true
        },
        /* {
         game_type: 'AceKingGame',
         play_type: 'DZ',
         img_key: 'kc-comingsoon',
         text_key: 'indexGame8',
         is_list: false,
         },
         {
         game_type: '',
         play_type: '',
         img_key: 'kc-comingsoon',
         text_key: 'indexGame9',
         is_list: false,
         }*/
    ],

    /// 禁止下注 game_type 陣列 ex: ['BGGame', 'BGGame', 'BGGame']
    disable_wallet: undefined,

    // 個人資料開關
    isQQ: false, //QQ開關
    isWechat: false, //微信開關
    isLine: true, //line開關
    isSkype: true, //skype開關
    isMail: false, // email開關
    isPhone: true, // 手機開關

    // 側欄開關
    isBankCard: true, //銀行卡開關
    isCharge: true, //充值開關
    isWithdraw: true, //取款開關
    isAccountDetail: true, //帳戶明細開關
    isFundPassword: true, //支付密碼修改開關

    // 動態電子遊戲範例~start
    sample: [
        {
            "game_type": 'game_type',
            "gamecode": "1179901",
            "img": "1.jpg",// 對應圖檔[img/icons/electronicGame/sample/[en/tw/cn]/xxx...]
            "en": "The Mariachi 5",
            "tw": "開心鬼派對",
            "cn": "开心鬼派对",
        },
        {
            "game_type": 'game_type',
            "gamecode": "1179895",
            "img": "1.jpg",
            "en": "Trigger Happy",
            "tw": "西部喜雙逢",
            "cn": "西部喜双逢",
        }
    ],
    // 動態電子遊戲範例~end

    // RTG 遊戲
    RTGGameConfig: [
        {
            "gamecode": "1179901",
            "img": "1.jpg",
            "en": "The Mariachi 5",
            "tw": "開心鬼派對",
            "cn": "开心鬼派对",
        },
        {
            "gamecode": "1179895",
            "img": "1.jpg",
            "en": "Trigger Happy",
            "tw": "西部喜雙逢",
            "cn": "西部喜双逢",
        }
    ],
    chargeMoneyArray: ['100', '200', '500', '1000', '2000', '5000', '10000', '20000'],
    edit_bank_card_locked_msg: '銀行卡未解鎖訊息改這邊',

    //首頁footer
    isFooter: true,

    //首頁會員中心 footer
    isMemFooter: false,

    // 最新活動 url
    openEventPage: 'https://www.youtube.com/',

    // 跑馬燈速度
    msgSpeed: 25,

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

    // 下注紀錄遊戲平台選項
    /*
     {
     android: "",
     downloadurl: "",
     gamecode: "",
     gamename: "RTG ASIA",
     gametype: "RTGGame",
     h5: "",
     ischoice: false,
     iso: "",
     picid: "",
     sort: 1
     }
     */
    BetRecordPlatform: [
        {
            "android": "",
            "downloadurl": "",
            "gamecode": "",
            "gamename": "DreamGame",
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
            "gamename": "RTG ASIA",
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
            "gamename": "AllBet真人",
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
            "gamename": "Kingco彩票",
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
            "gamename": "OB體育",
            "gametype": "ObgtyGame",
            "h5": "",
            "ischoice": false,
            "iso": "",
            "picid": "",
            "sort": 1
        }
    ],

    // ip proxy url
    IpProxyUrl: 'http://proxy.jl888.co:9800',

    // 提款上下限
    minLimit: "1000",
    maxLimit: "100000",

    // banner 輪播的速度
    carouselSpeed: 1000,

    // 首頁上方 最新活動 url
    openEventPageHome: 'https://www.youtube.com/',

    // 開啟/關閉註冊
    registerEnable: true,
    // 上方遊戲，試玩顯示開關
    navGameTryEnable: true,

    // 註冊頁，同意條款，自動打勾
    registerAgreeEnable: false,
    // 設定背景色
    bg_color: '#000',
    // 方程式風格：隱藏九宮格遊戲文字、隱藏上方 nav 遊戲文字、隱藏客服、隱藏熱門遊戲標題、隱藏版footer版權圖、隱藏最新活動、背景淺色
    is_formula: false,

    // 新新金來旺風格：隱藏會員中心、上方 nav、熱門遊戲title、忘記密碼
    is_kclive: true
}

