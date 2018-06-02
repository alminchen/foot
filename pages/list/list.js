// pages/list/list.js
const app = getApp();
const appkey = "795e92ad440a18e09a238ced51e57ad2";
const httpUrl = "https://way.jd.com/jisuapi";
const http = require('../../utils/util.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    footList:[],
    loadingHide: false,
    hideFooter: false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    var classId = getApp().classId;
    if(classId == 'undefined' || classId == '' || classId ==null){
      classId = 2;
    }
    http.request(httpUrl + '/byclass', {
      'appkey': appkey,
      'classid': classId,
      'start': "0",
      'num': '10'
    }, function (data) {
      
      that.setData({
        footList: data.list,
        loadingHide:true
      });
      getApp().classId = ""
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
    var that = this;
    var classId = getApp().classId;
    if(classId){
      http.request(httpUrl + '/byclass', {
        'appkey': appkey,
        'classid': classId,
        'start': "0",
        'num': '10'
      }, function (data) {
        console.log(data)
        that.setData({
          footList: data.list,
          loadingHide: true
        });
        getApp().classId = ""
      })
    }
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