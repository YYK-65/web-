// pages/addressList/index.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list:[],
    id:'',
    state:null,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {  
    // 从本地存储中获取数据  
    wx.getStorage({  
      key: 'addressData',  
      success: res => {  
        this.setData({  
          id: res._id,  
          name: res.name,  
          mobile: res.mobile,  
          detailed: res.detailed,  
          city: res.city,  
          state: options ? options.type : null  
        });  
      }  
    });  
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
    app.http('v1/user/cityList', {
      openid: app.globalData.openid
    })
      .then(res => {
        this.setData({
          list: res.data
        })
      })
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