
Page({
  data: {
    resData: [],
    titleData_en: ['zhxw', 'tpxw', 'rcpy', 'jxky', 'whhd', 'xyrw', 'jlhz', 'shfw', 'mtgz'],
    titleData_cn: ['综合新闻', '图片新闻', '人才培养', '教学科研', '文化活动', '校园人物', '交流合作', '社会服务', '媒体关注'],
    titleIsHiddens: [false, true, true, true, true, true, true, true, true, true, true],
    titleIndex: 0
  },

  onLoad: function () {
    var that = this
    wx.request({
      url: 'https://api.iflab.org/api/v2/newsapi/newslist',
      method: 'GET',
      data: {
        category: 'zhxw',
        page: 0,
        api_key: '3528bd808dde403b83b456e986ce1632d513f7a06c19f5a582058be87be0d8c2',
        session_token: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIzYTE4OWM0NDZhOWNlMzQ0M2NjMDQ1YmQyZTM4ZDA4YyIsImlzcyI6Imh0dHBzOi8vYXBpLmlmbGFiLm9yZy9hcGkvdjIvdXNlci9zZXNzaW9uIiwiaWF0IjoxNTE1NTQzMjc0LCJleHAiOjE1MTU2Mjk2NzQsIm5iZiI6MTUxNTU0MzI3NCwianRpIjoiekpvY04xT211MEwwT3RSUCIsInVzZXJfaWQiOjQyLCJmb3JldmVyIjpmYWxzZX0.GMnfmQPEr2FnUPrK9oBocV63CS8kSwKC1HhYuuKqz_4'
      },
      success: function (res) {
        that.setData({
          resData: res.data
        })

        console.log(res.data)
      }, fail: function (res) {

      }, complete: function () {

      }
    })
  },

  titleHeadViewTapClick: function (event) {
    var that = this
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
        api_key: '3528bd808dde403b83b456e986ce1632d513f7a06c19f5a582058be87be0d8c2',
        session_token: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIzYTE4OWM0NDZhOWNlMzQ0M2NjMDQ1YmQyZTM4ZDA4YyIsImlzcyI6Imh0dHBzOi8vYXBpLmlmbGFiLm9yZy9hcGkvdjIvdXNlci9zZXNzaW9uIiwiaWF0IjoxNTE1NTQzMjc0LCJleHAiOjE1MTU2Mjk2NzQsIm5iZiI6MTUxNTU0MzI3NCwianRpIjoiekpvY04xT211MEwwT3RSUCIsInVzZXJfaWQiOjQyLCJmb3JldmVyIjpmYWxzZX0.GMnfmQPEr2FnUPrK9oBocV63CS8kSwKC1HhYuuKqz_4'
      },
      success: function (res) {
        that.setData({
          resData: res.data
        })
        console.log(res)
      }, fail: function (res) {

      }, complete: function () {

      }
    })
  }

})
