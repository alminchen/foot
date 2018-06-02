// pages/detail/detail.js
const app = getApp();
const appkey = "795e92ad440a18e09a238ced51e57ad2";
const httpUrl = "https://way.jd.com/jisuapi";
const http = require('../../utils/util.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    dataList:[],
    materList:[],
    finaList:[],
    dataShow:null,
    loadingHide:false,
    id:"",
    title:''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    var id = options.id;
    // console.log(id)
    http.request(httpUrl +'/detail',{
      "appkey":appkey,
      "id":id
    },function(res){
      that.setData({
        materList: res.material,
        finaList:res.process,
        dataShow:res,
        loadingHide:true,
        id:id,
        title:res.name
      })
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
    var that = this;
    return {
      title: that.data.title,
      path: '/pages/detail/detail?id='+that.data.id
    }
  }
})