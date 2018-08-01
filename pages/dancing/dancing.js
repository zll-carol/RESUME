// pages/dancing/dancing.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    nodes: [
      {
        name: "h3",
        attrs: {
          class: "h3",
        },
        children: [{
          type: 'text',
          text: "【永远十八岁啦啦啦啦】"
        }]
      },
      {
        name: "p",
        attrs: {
          class: "p1",
        },
        children: [{
          type: 'text',
          text: "不&nbsp;一&nbsp;样&nbsp;的&nbsp;舞&nbsp;蹈&nbsp;不&nbsp;一&nbsp;样&nbsp;的&nbsp;心&nbsp;情"
        }]
      },
      {
        name: "p",
        attrs: {
          class: "p2",
        },
        children: [{
          type: 'text',
          text: "但&nbsp;总&nbsp;归&nbsp;而&nbsp;言&nbsp;都&nbsp;是&nbsp;愉&nbsp;悦&nbsp;的"
        }]
      }
    ],
    imgUrls: [
      "http://pcq93ptij.bkt.clouddn.com/dancing4.jpg",
      "http://pcq93ptij.bkt.clouddn.com/dancing9.jpg",
      "http://pcq93ptij.bkt.clouddn.com/dancing5.jpg",
      "http://pcq93ptij.bkt.clouddn.com/dancing3.jpg",
      "http://pcq93ptij.bkt.clouddn.com/dancing7.jpg"  
    ],
    indicatorDots: true,
    autoplay: true,
    interval: 5000,
    duration: 1000,
    circular: true
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
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