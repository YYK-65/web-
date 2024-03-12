// pages/good/good.js
Page({

  data: {
     list:[],
     productList:[]
  },
    getlist(){
        wx.request({
            url: 'http://127.0.0.1/classify',
          method:'GET',
          success:(res)=>{
            console.log(res);
           this.setData({
             list: res.data
           })
           console.log(this.data.list);
          }
        })
      },

    getproductList(){
          wx.request({
              url: 'http://127.0.0.1/product',
            method:'GET',
            success:(res)=>{
              console.log(res);
             this.setData({
                 productList: res.data
             })
             console.log(this.data.productList);
            }
          })
        },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    this.getlist()
    this.getproductList() 
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})