
Page({
  data: {
    resData: []
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
        session_token: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIzYTE4OWM0NDZhOWNlMzQ0M2NjMDQ1YmQyZTM4ZDA4YyIsImlzcyI6Imh0dHBzOi8vYXBpLmlmbGFiLm9yZy9hcGkvdjIvdXNlci9zZXNzaW9uIiwiaWF0IjoxNTE1NTAzNzg1LCJleHAiOjE1MTU1OTAxODUsIm5iZiI6MTUxNTUwMzc4NSwianRpIjoiS1A1d3EzbXdtSVVMaGdxUCIsInVzZXJfaWQiOjQyLCJmb3JldmVyIjpmYWxzZX0.j9uU1czLTx7aWDl7-b1Nf5vVbMtcWWsJgadf7v251DA'
      },
      success: function (res) {
        // console.log(res)
        that.setData({
          resData : res.data
        })
        console.log(res.data)
      }, fail: function (res) {

      }, complete: function () {

      }
    }) 
  }
})
