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
            if (tempIndex == 3) {
              resdata_display[resdata_cn_index] = false
            }
            // if (tempIndex > 3) {
            //   console.log(tempIndex)
            //   if ((tempIndex - 3) % 2 == 0) {
            //     console.log('@@@' + tempIndex)
            //     resdata_cn_index++
            //     resdata_display[resdata_cn_index] = true
            //     resdata_cn[resdata_cn_index] = ''
            //   } else {
            //     console.log('###' + tempIndex)
            //     resdata_cn_index++
            //     resdata_display[resdata_cn_index] = false
            //     resdata_cn[resdata_cn_index] = ''
            //   }
            // }
          }
        }

        var count = resdata_cn.length + res.data.imgList.length

        that.setData({
          resData_image: res.data.imgList,
          resData_cn: resdata_cn,
          resDataCount: count,
          resData_display: resdata_display,

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