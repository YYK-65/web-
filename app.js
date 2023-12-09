//app.js
App({
  onLaunch: function () {
    
    if (!wx.cloud) {
      console.error('请使用 2.2.3 或以上的基础库以使用云能力')
    } else {
      wx.cloud.init({
        env: 'voyz-cloud-86f82a',
        traceUser: true,
      })
    }

    this.globalData = {
      cloudRoot : "cloud1-0ge3zjupb513b93c",
      carts:[],  //购物车
      tmpNum: 0,
      tempFilePaths: "",
      admin:["Mr.Voyz"],
      openId: null
    }
  },

  // --------------常用----------------

  // 判断购物车中是否有重复后添加购物车
  isNotRepeteToCart: function (newCartItem) {
    var self = this
    var isRepete = function() {
      var p = new Promise((resolve, reject) => {
        var flag = false
        self.globalData.carts.forEach((v) => {
          if (v._id === newCartItem._id) {
            flag = true
          }
        })
        resolve(flag)
      })
      return p
    }
    isRepete().then((flag) => {
      if(flag) {
        wx.showToast({
          title: '已经添加过了~',
        })
      }
      else{
        this.globalData.carts.push(newCartItem)
      }
    })
  },


  // --------------数据库操作----------------

  // 向集合内新增记录(集合名，要添加的数据对象，回调函数)
  addRowToSet: function(setName,infoObject,callback){
    const db = wx.cloud.database()
    db.collection(setName).add({
      data: infoObject,
      success:callback,
      fail: console.error
    })
  },

  // 从集合中取出数据
  getInfoFromSet: function (setName,selectConditionSet,callBack){
    const db = wx.cloud.database()
    db.collection(setName).where(selectConditionSet).get({
      success:callBack
    })
  },

  // 从集合中筛选数据
  getInfoWhere: function (setName,ruleObj,callback) {
    const db = wx.cloud.database()
    db.collection(setName).where(ruleObj)
      .get({
        success: callback,
        fail: console.error
      })
  },

  // 排序后取出数据
  getInfoByOrder: function (setName, ruleItem, orderFuc,callback) {
    const db = wx.cloud.database()
    db.collection(setName)
      .orderBy(ruleItem, orderFuc)
      .get()
      .then(callback)
      .catch(console.error)
  },

  // 删除集合中的数据
  deleteInfoFromSet: function (setName,fruitId) {
    const db = wx.cloud.database()
      db.collection(setName).doc(fruitId).remove({
      success: e=>{
        wx.showToast({
          title: '删除成功',
        })
        console.log(e)
      },
      fail: console.error
    })
  },

  // 选择本地图片上传至云端
  selectImgUpToC: function (imgName,tmpUrlCallback) {
    const self = this
    // 获取图片临时地址
    new Promise((resolve,reject)=>{
      wx.chooseImage({
        count: 1,
        sizeType: ['original', 'compressed'],
        sourceType: ['album', 'camera'],
        success(res) {
          // tempFilePath可以作为img标签的src属性显示图片
          resolve(res.tempFilePaths["0"])
        }
      })
    }).then(e => self.upToClound("imgSwiper", imgName, e, tmpUrlCallback))
  },

  // 上传图片到云端（云端文件夹，云端文件名，文件临时地址）
  upToClound: (imgFolder, imgName, myFilePath,fileIDCallback) => {
    wx.cloud.uploadFile({
      cloudPath: imgFolder + "/" + imgName, // 上传至云端的路径
      filePath: myFilePath, // 小程序临时文件路径
      success: res => {
        // 返回文件 ID
        wx.showToast({
          title: '图片已上传',
        })
        fileIDCallback(res.fileID)

      },
      fail: console.error
    })
  },

  // 获取云端文件tmpUrl
  getTmpUrl: (imgFolder, imgName,currentData)=>{
    wx.cloud.getTempFileURL({
      fileList: [getApp().globalData.cloudRoot+imgFolder + "/" + imgName],
      success: res => {
        // console.log(res.fileList["0"].tempFileURL)
        getCurrentPages().setData({
          currentData: res.fileList["0"].tempFileURL
        })
      },
      fail: console.error
    })
  }
})