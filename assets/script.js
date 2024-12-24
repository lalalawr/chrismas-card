const passwords = {
   "王宝英": "wangbaoying.jpg",
   "王冉": "wangran.jpg",
   "吴玥": "wuyue.jpg",
   "李若然": "liruoran.jpg",
   "肖桐": "xiaotong.jpg",
   "王雨欣": "wangyuxin.jpg",
   "江秋荣": "jiangqiurong.jpg",
   "余懿凡": "yuyifan.jpg",
   "王新惠": "wangxinhui.jpg",
   "刘怿宇": "liuyiyu.jpg",
   "郑建月": "zhengjianyue.jpg"
};

function unlockCard() {
    const passwordInput = document.getElementById('password').value.trim();
    const card = document.getElementById('card');
    const cardImage = document.getElementById('cardImage');

    // 调试信息，检查输入的密码
    console.log("输入的密码:", passwordInput);

    // 验证密码并加载图片
    if (passwords[passwordInput]) {
        card.classList.remove('hidden');
        cardImage.src = `images/${passwords[passwordInput]}`;
        card.style.opacity = 1;
    } else {
        alert("密码错误，请重新输入！");
    }
}
