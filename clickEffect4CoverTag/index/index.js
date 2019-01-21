const app = getApp()

const buttonIcons = {
  normal: '../images/photo.png',
  clicked: '../images/photoClicked.png'
};

Page({
  data: {
    switchBtnIcon: buttonIcons.normal,
    pos: "back"
  },

  //切换前后摄像头
  switchCamera: function () {
    this.setData({
      pos: this.data.pos === 'back' ? 'font' : 'back'
    });
  },

  //点击后变换按钮样式
  chBtnIcon: function(){
    let that = this;
    
    //先把图标换成点击后的
    this.setData({
      switchBtnIcon: buttonIcons.clicked
    });

    //然后异步经过700毫秒切换回原来的图标
    setInterval(function(){
      that.setData({
        switchBtnIcon: buttonIcons.normal
      });
    }, 700);

    //之后再执行后面的逻辑
    this.switchCamera();
  },

  onLoad: function () {
    console.log('代码片段是一种迷你、可分享的小程序或小游戏项目，可用于分享小程序和小游戏的开发经验、展示组件和 API 的使用、复现开发问题和 Bug 等。可点击以下链接查看代码片段的详细文档：')
    console.log('https://mp.weixin.qq.com/debug/wxadoc/dev/devtools/devtools.html')
  },
})
