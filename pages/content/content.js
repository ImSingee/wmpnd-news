import util from '../../utils/util'

Page({

  /**
   * 页面的初始数据
   */
  data: {
    id: null,
    title: '',
    source: '',
    time: '',
    readCount: 0,
    contents: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let id = options.id
    console.log(id)
    this.setData({id})
    this.getContent()
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
  
  },
  onTapBack(){
    wx.navigateBack()
  },
  getContent(){
    wx.request({
      url: 'https://test-miniprogram.com/api/news/detail',
      data: {
        id: this.data.id
      },
      success: res => {
        let result = res.data.result
        console.log(result)

        let date = new Date(result.date)

        this.setData({
          title: result.title,
          source: result.source + '   ',
          time: util.formatTime(date),
          readCount: result.readCount,
          contents: result.content
        })
      }
    })
  }
})