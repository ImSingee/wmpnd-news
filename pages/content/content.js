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