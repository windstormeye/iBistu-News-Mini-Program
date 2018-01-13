var p = 0

var GetList = function (that) {
  wx.request({
    url: 'https://api.iflab.org/api/v2/newsapi/newslist',
    method: 'GET',
    data: {
      category: 'zhxw',
      page: p,
      api_key: getApp().globalData.api_key,
      session_token: getApp().globalData.session_token
    },
    success: function (res) {
      wx.hideLoading()
      var l = that.data.resData
      for (var i = 0; i < res.data.length; i++) {
        l.push(res.data[i])
      }
      that.setData({
        resData: l
      }); 
      p++;  
    }, fail: function (res) {
    }, complete: function () {
    }
  })
}

Page({
  data: {
    resData: [],
    titleData_en: ['zhxw', 'tpxw', 'rcpy', 'jxky', 'whhd', 'xyrw', 'jlhz', 'shfw', 'mtgz'],
    titleData_cn: ['综合新闻', '图片新闻', '人才培养', '教学科研', '文化活动', '校园人物', '交流合作', '社会服务', '媒体关注'],
    titleIsHiddens: [false, true, true, true, true, true, true, true, true, true, true],
    titleIndex: 0,
  },

  onLoad: function () {
    var that = this
    GetList(that) 
    wx.showLoading({
      title: '加载中',
    })
  },

  titleHeadViewTapClick: function (event) {
    var that = this

    wx.showLoading({
      title: '加载中',
    })

    that.data.titleIndex = event.currentTarget.id
    this.setData({
      titleIndex: this.data.titleIndex
    })
    wx.request({
      url: 'https://api.iflab.org/api/v2/newsapi/newslist',
      method: 'GET',
      data: {
        category: this.data.titleData_en[event.currentTarget.id],
        page: 0,
        api_key: getApp().globalData.api_key,
        session_token: getApp().globalData.session_token
      },
      success: function (res) {
        wx.hideLoading()

        that.setData({
          resData: res.data
        })
        console.log(res)
      }, fail: function (res) {
      }, complete: function () {
      }
    })
  },

  contentViewTapClick: function(event) {
    var link = this.data.resData[event.currentTarget.id].newsLink
    wx.navigateTo({
      url: '../content/content?link=' + link,
    })
  },
  onReachBottom: function () {
    //上拉  
    var that = this
    GetList(that)
  }  
})
