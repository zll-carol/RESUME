// pages/travel/travel.js

Page({

  onReady: function (e) {
    // 使用 wx.createAudioContext 获取 audio 上下文 context
    this.audioCtx = wx.createAudioContext('myAudio')
  },
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
          text: "【用探索的目光去发现全新的自己】"
        }]
      },
      {
        name: "p",
        attrs: {
          class: "p1",
        },
        children: [{
          type: 'text',
          text: "不&nbsp;一&nbsp;样&nbsp;的&nbsp;旅&nbsp;行&nbsp;不&nbsp;一&nbsp;样&nbsp;的&nbsp;发&nbsp;现"
        }]
      },
      {
        name: "p",
        attrs: {
          class: "p2",
        },
        children: [{
          type: 'text',
          text: "下&nbsp;面&nbsp;是&nbsp;部&nbsp;分&nbsp;旅&nbsp;行&nbsp;时&nbsp;的&nbsp;图&nbsp;片&nbsp;:"
        }]
      }
    ],
    imgUrls: [
      "http://pcq93ptij.bkt.clouddn.com/66.jpg",
      "http://pcq93ptij.bkt.clouddn.com/11.jpg",
      "http://pcq93ptij.bkt.clouddn.com/103.jpg",
      "http://pcq93ptij.bkt.clouddn.com/22.JPG",
      "http://pcq93ptij.bkt.clouddn.com/33.jpg",
      "http://pcq93ptij.bkt.clouddn.com/55.JPG",
      "http://pcq93ptij.bkt.clouddn.com/77.JPG",
      "http://pcq93ptij.bkt.clouddn.com/88.jpg",
      "http://pcq93ptij.bkt.clouddn.com/99.jpg",
      "http://pcq93ptij.bkt.clouddn.com/100.JPG"
    ],
    indicatorDots: true,
    autoplay: true,
    interval: 5000,
    duration: 1000,
    circular:true,
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