Page({

  /**
   * 页面的初始数据
   */
  data: {
    resData_cn: [],
    resData_image: [],
    resData_display: [],
    resDataCount: 0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this
    wx.request({
      url: 'http://api.iflab.org/api/v2/newsapi/newsdetail',
      method: 'GET',
      data: {
        link: options.link,
        api_key: getApp().globalData.api_key,
        session_token: getApp().globalData.session_token
      },
      success: function (res) {
        console.log(res)
        wx.hideLoading()
        var resString = res.data.article.split('\n')
        var resdata_cn = []
        var resdata_cn_index = -1
        var resdata_display = []
        var tempIndex = 0
        for (var i = 0; i < resString.length; i++) {
          // 判断是否含有中文，若不含有中文则为图片
          if (/.*[\u4e00-\u9fa5]+.*$/.test(resString[i])) {
            tempIndex = 0
            resdata_cn_index++
            resdata_cn[resdata_cn_index] = resString[i]
            resdata_display[resdata_cn_index] = true
          } else {
            tempIndex++
            // 这么搞新闻图片加载不全
            if (tempIndex == 3) {
              resdata_display[resdata_cn_index] = false
            }
          }
        }

        var count = resdata_cn.length + res.data.imgList.length

        var displayArr = []
        var displayIndex = 0
        for (var j = 0; j < resdata_display.length; j++) {
          if (resdata_display[j]) {
            displayArr[j] = ""
          } else {
            displayArr[j] = res.data.imgList[displayIndex]
            displayIndex ++
          }
        }

        that.setData({
          resData_image: displayArr,
          resData_cn: resdata_cn,
          resDataCount: count,
          resData_display: resdata_display,
        })
        console.log(that.data.resData_cn)
        console.log(that.data.resDataCount)
        console.log(that.data.resData_image)
        console.log(that.data.resData_display)
      }, fail: function (res) {
      }, complete: function () {
      }
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