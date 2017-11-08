const requestUrl = "https://www.fc18.com.cn/aiaf/sgw/v1/products/hospitaldepartment?deviceId=09424EF34854484880777852162367D0"
const duration = 2000

Page({
  data: {
    areaIndex: 0,
    area: ['北京', '广州', '上海', '深圳']
  },

  bindPickerChange: function (e) {
    this.setData({
      areaIndex: e.detail.value
    })
  } ,
  redirectMain:function(){
    wx.navigateTo({
      url: '../main/main'
    })
  },
  onReady:function(){
    
  },
 
})
