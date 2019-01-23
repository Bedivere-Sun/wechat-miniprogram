const app = getApp()

Page({
  data: {
    addrs: ['地址1','地址2'],
    recIsFinished: true,
  },
  gotoAdd: function(){
    this.setData({
      recIsFinished: false
    });
    wx.navigateTo({
      url: '../add/add',
    })
  },

  onShow: function(){
    let that = this;
    if(!this.data.recIsFinished){
      wx.showModal({
        title: '要放弃修改吗？',
        content: '如何选择？',
        cancelText: '放弃',
        confirmText: '返回编辑',
        cancelColor: 'red',
        success(res){
          if(res.confirm){
          wx.navigateTo({
            url: '../add/add?addr='+app.tmpAddr,
          });
          }else{
            app.tmpAddr = '';
            that.setData({
              recIsFinished: true
            });
          }
        }
      })
    }
  },

  onLoad: function () {
    console.log('代码片段是一种迷你、可分享的小程序或小游戏项目，可用于分享小程序和小游戏的开发经验、展示组件和 API 的使用、复现开发问题和 Bug 等。可点击以下链接查看代码片段的详细文档：')
    console.log('https://mp.weixin.qq.com/debug/wxadoc/dev/devtools/devtools.html')
  },
})
