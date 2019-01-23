const app = getApp();

Page({

  /**
   * 页面的初始数据
   */
  data: {
    addr: undefined
  },

  chInput: function(e){
    app.tmpAddr = e.detail.value;
  },

  submit: function(e){
    let pages = getCurrentPages();
    let father = pages[pages.length - 2];
    let arr = father.data.addrs;
    arr.push(e.detail.value.addr);
    father.setData({
      addrs: arr,
      recIsFinished: true
    });
    app.tmpAddr = '';
    wx.navigateBack({
      delta: 1,
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      addr: options.addr || ''
    });
  },
})