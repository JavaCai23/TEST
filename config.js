// 霸都丶傲天 2019年10月10日 https://github.com/AJLoveChina/birthday
var config = {
    // 句子的长度可以任意， 你可以写十句话， 二十句话都可以
    // 每句话尽量不要超过15个字,不然展示效果可能不太好
    texts: [
        "《致吾爱》",
        "五月的风轻拂，",
        "迎来了特别的 5.14，",
        "亲爱的你，在这一日降临，",
        "如梦幻的仙子，飘落凡尘。",
        "你的眼眸，似清澈的湖，",
        "倒映着星辰的璀璨。",
        "你的笑容，若春花绽放，",
        "芬芳了我的整个心房，",
        "放肆笑吧，在这特别的日子~",
        "时光的河静静流淌，",
        "我们携手走过的路，满是芬芳。",
        "在你的生日，我愿献上，",
        "所有的温柔与爱意绵长。",
        "愿你的每一天都如诗，",
        "充满浪漫的韵脚。",
        "愿你的每一刻都如画，",
        "晕染着幸福的色调。",
        "生日快乐，我的挚爱，",
        "永远在我怀中绽放光明。",
        "5.14，铭记这美好的日子，",
        "我们的爱，永不老去。",
    ],
    /**
     * imgs 可以不填, 但是如果要填写的话必须遵循下面的格式
     * "对应上面的文字, 要完全一样" : "图片地址, 可以把图片放在imgs文件夹中"
     * 例如
     * "心爱的小可爱": "./imgs/xiaokeai.jpg"
     *
     * 如果不要图片的话, 直接在每行开头写两个斜杠注释即可, 例如下面的 "今天是你的生日" 的图片就不会展示了:)
     * Tip: 图片最好用正方形or接近正方形, 看起来效果更好
     */
    imgs: {
        "心爱的小可爱": "./imgs/xiaokeai.png",
        // "今天是你的生日": "./imgs/birthday.jpg",
    },
    // 按钮文字描述, 以下是默认的按钮文字，英文的，您可以改成你喜欢的文字
    desc: {
        turn_on: "让我们开始庆祝吧~",
        play: "music~",
        bannar_coming: "灯光，亮起来~",
        balloons_flying: "好像少点东西",
        cake_fadein: "蛋糕？",
        light_candle: "蜡烛？",
        wish_message: "生日快乐",
        story: "A MESSAGE FOR YOU",
    }
};
