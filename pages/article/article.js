// pages/article/article.js
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
          text: "【用文字取暖，与文字相拥】"
        }]
      },
      {
        name: "p",
        attrs: {
          class: "p1",
        },
        children: [{
          type: 'text',
          text: "文&nbsp;字&nbsp;总&nbsp;是&nbsp;那&nbsp;么&nbsp;神&nbsp;奇，把&nbsp;想&nbsp;说&nbsp;的&nbsp;不&nbsp;想&nbsp;说&nbsp;的&nbsp;通&nbsp;通&nbsp;都&nbsp;表&nbsp;达&nbsp;出&nbsp;来&nbsp;。"
        }]
      },
      {
        name: "p",
        attrs: {
          class: "p2",
        },
        children: [{
          type: 'text',
          text: "就&nbsp;像&nbsp;春&nbsp;雨&nbsp;沐&nbsp;浴&nbsp;了&nbsp;新&nbsp;芽&nbsp;却&nbsp;又&nbsp;不&nbsp;留&nbsp;下&nbsp;一&nbsp;丝&nbsp;痕&nbsp;迹，而&nbsp;草&nbsp;长&nbsp;莺&nbsp;飞&nbsp;也&nbsp;无&nbsp;声&nbsp;。"
        }]
      }
    ]
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