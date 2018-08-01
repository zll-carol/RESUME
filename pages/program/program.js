// pages/program/program.js
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
          text: "【兴趣是最好的老师】"
        }]
      },
      {
        name: "p",
        attrs: {
          class: "p1",
        },
        children: [{
          type: 'text',
          text: "做&nbsp;自&nbsp;己&nbsp;喜&nbsp;欢&nbsp;做&nbsp;的&nbsp;事&nbsp;情&nbsp;可&nbsp;以&nbsp;事&nbsp;半&nbsp;功&nbsp;倍"
        }]
      },
      {
        name: "p",
        attrs: {
          class: "p2",
        },
        children: [{
          type: 'text',
          text: "例&nbsp;如&nbsp;：&nbsp;编&nbsp;程"
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