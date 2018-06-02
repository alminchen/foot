// pages/search/search.js
const app = getApp();
const appkey = "795e92ad440a18e09a238ced51e57ad2";
const httpUrl = "https://way.jd.com/jisuapi";
const http = require('../../utils/util.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    input_val:"",
    seacrhFoot:[]
  },
  searchInput:function(e){
    this.setData({
      input_val: e.detail.value,
      seacrhFoot:[]
    })
  },
  tapSearch:function(){
    if( this.data.input_val == null || this.data.input_val.length == 0 || this.data.input_val == ""){
      return 
    }
    var that = this;
    http.request(httpUrl +'/search',{
      'appkey':appkey,
      "keyword":that.data.input_val,
      "num":"10"
    },function(data){
      console.log(data)
      if( data.list.length > 0 ){
        that.setData({
          seacrhFoot:data.list
        })
      }
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
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