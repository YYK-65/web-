Page({  
  data: {
    latitude: 0, //首次加载维度
    longitude: 0, //首次加载的经度
    mapName: "", //选点的位置
},
moveToLocation() {
    let that = this;//防止this指向问题
    wx.chooseLocation({
        success: function (res) {
            console.log(res.name);
            //赋值给data中的mapName
            that.setData({
                mapName: res.name
            })
        },
        //错误信息
        fail: function (err) {
            console.log(err);
        }
    })
},
  switchTabgood: function() {  
    wx.switchTabPage1({  
      url: '/pages/home/home'  
    });  
  },  
  switchTabPage2: function() {  
    wx.switchTab({  
      url: '/pages/good/good'  
    });  
  },  
  switchTabPage3: function() {  
    wx.switchTab({  
      url: '/pages/message/message'  
    });  
  },  
  switchTabPage4: function() {  
    wx.switchTab({  
      url: '/pages/contact/contact'  
    });  
  },  
  onTapAbout: function () {  
    wx.navigateTo({  
      url: '/pages/about/about'  
    });  
  }  
})
