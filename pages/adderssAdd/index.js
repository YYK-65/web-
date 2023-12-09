// pages/addressAdd/index.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    region: ['上海市', '上海市', '浦东新区'],
    customItem: '全部',
    name:'',
    mobile:'',
    detailed:'',
    addressIs:true,
    _id:null
  },
  bindRegionChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    console.log(e.detail.value)
    this.setData({
      region: e.detail.value
    })
  },
  bindKeyName: function (e) {
    this.setData({
      name: e.detail.value
    })
  },
  bindKeyMobile: function (e) {
    this.setData({
      mobile: e.detail.value
    })
  },
  bindKeyDetailed: function (e) {
    this.setData({
      detailed: e.detail.value
    })
  },
  submitFun: function () {  
    // 将数据存储在本地存储中  
    wx.setStorage({  
      key: "addressData",  
      data: {  
        name: this.data.name,  
        mobile: this.data.mobile,  
        detailed: this.data.detailed,  
        city: this.data.region,  
        _id: this.data._id  
      }  
    });  
    
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    if (options.id){
      this.setData({
          region: options.city.split(','),
          name: options.name,
          mobile: options.mobile,
          detailed: options.detailed,
          _id: options.id,
          addressIs:false
      })
    }
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