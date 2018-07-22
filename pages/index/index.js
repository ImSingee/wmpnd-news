import util from '../../utils/util'

const types = [
  {
    id: 0,
    type: 'gn',
    name: '国内'
  },
  {
    id: 1,
    type: 'gj',
    name: '国际'
  },
  {
    id: 2,
    type: 'cj',
    name: '财经'
  },
  {
    id: 3,
    type: 'yl',
    name: '娱乐'
  },
  {
    id: 4,
    type: 'js',
    name: '军事'
  },
  {
    id: 5,
    type: 'ty',
    name: '体育'
  },
  {
    id: 6,
    type: 'other',
    name: '其他'
  }
]
Page({

  /**
   * 页面的初始数据
   */
  data: {
    types,
    typeItemId: 0,
    newsList: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getAllArticles()
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    this.getAllArticles(() => {
      wx.stopPullDownRefresh()
    })
  },

  getAllArticles(callback){
    wx.request({
      url: 'https://test-miniprogram.com/api/news/list',
      data: {
        type: types[this.data.typeItemId].type
      },
      success: res => {
        let result = res.data.result
        console.log(result)
        for(let i in result) {
          let datetime = new Date(result[i].date)
          result[i].source += '   '
          result[i].time = util.formatTime(datetime)
        }
        this.setData({
          newsList: result
        })
      },
      complete: () => {
        callback && callback();
      }
    })
  },
  onTapTypeChoose(source) {
    console.log(source)
    let typeItemId = source.currentTarget.dataset.id
    this.setData({
      typeItemId
    })
    this.getAllArticles()
  },
  onTapNews(source) {
    let id = source.currentTarget.dataset.id
    wx.navigateTo({
      url: `/pages/content/content?id=${id}`,
    })
  }
})