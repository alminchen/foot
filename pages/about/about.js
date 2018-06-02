// pages/about/about.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
  
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
  },
  showMy:function(){
    wx.showToast({
      title: '一个无聊的人喜欢煮饭，无聊的时间做个无聊的事',
      icon:"none",
      duration:2000,
      mask:true,
    })
  },
  dataShow:function(){
    wx.showToast({
      title: '数据来源于网络，请求次数只有1000次，请你慢点点击',
      icon:'none',
      duration:3000,
      mask:true
    })
  },
  person:function(){
    wx.showToast({
      title: '公众号:梅州小哥',
      icon:'none',
      duration:5000,
      mask:true
    })
  },
  noopen:function(){
    wx.showToast({
      title: '暂未开放此功能',
      icon:'loading',
      duration:1500,
      mask:true
    })
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})