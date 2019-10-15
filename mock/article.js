import Mock from 'mockjs'

const List = []
const count = 100

const baseContent = '<p>I am testing data, I am testing data.</p><p><img src="https://wpimg.wallstcn.com/4c69009c-0fd4-4153-b112-6cb53d1cf943"></p>'
const image_uri = 'https://wpimg.wallstcn.com/e4558086-631c-425c-9430-56ffb46e70b3'

for (let i = 0; i < count; i++) {
  List.push(Mock.mock({
    id: '@increment',
    timestamp: +Mock.Random.date('T'),
    author: '@first',
    reviewer: '@first',
    title: '@title(5, 10)',
    content_short: 'mock data',
    content: baseContent,
    forecast: '@float(0, 100, 2, 2)',
    importance: '@integer(1, 3)',
    'status|1': ['published', 'draft', 'deleted'],
    display_time: '@datetime',
    comment_disabled: true,
    pageviews: '@integer(300, 5000)',
    image_uri,
    platforms: ['a-platform'],
    name: '@first',
    province: '@province',
    city: '@city',
    'type|1': ['MODIS', 'GF-1', 'GF-2', 'GF-3', 'LANDSAT-5', 'LANDSAT-8'],
    bands: '@integer(3, 1000)',
    rgb: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
    tp: {
      para1: 6,
      para2: 6,
      resultPicture: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
    },
    tn: {
      para1: 6,
      para2: 6,
      resultPicture: 'https://uss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
    },
    chla: {
      para1: 6,
      para2: 6,
      resultPicture: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
    },
    tss: {
      para1: 6,
      para2: 6,
      resultPicture: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
    },
    cod: {
      para1: 6,
      para2: 6,
      resultPicture: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
    },
    nh: {
      para1: 6,
      para2: 6,
    },
    evalute:{
      'single': '1',
      'multi': '2',
      'svr': '3',
    }
  }))
}

export default [
  {
    url: '/article/list',
    type: 'get',
    response: config => {
      const { type, name, page = 1, limit = 20, sort, id, dateRange  } = config.query

      let mockList = List.filter(item => {
        if (type && item.type !== type) return false
        if (name && item.name.indexOf(name) < 0) return false
        if (id && item.id != id) return false
        if (dateRange && (item.timestamp < dateRange[0] || item.timestamp > dateRange[1])) return false
        return true
      })

      if (sort === '-id') {
        mockList = mockList.reverse()
      }

      const pageList = mockList.filter((item, index) => index < limit * page && index >= limit * (page - 1))

      return {
        code: 20000,
        data: {
          total: mockList.length,
          items: pageList
        }
      }
    }
  },

  {
    url: '/article/unique',
    type: 'get',
    response: config => {
      const { type, name, province, city, id, dateRange } = config.query
      const uniqueList = List.filter(item => {
        if (type && item.type !== type) return false
        if (name && item.name.indexOf(name) < 0) return false
        if (id && item.id != id) return false
        if (province && item.province != province) return false
        if (city && item.city != city) return false
        if (dateRange && (item.timestamp < dateRange[0] || item.timestamp > dateRange[1])) return false
        return true
      })
      let provinceUnique = []
      let provinceNunique = 0
      let pictureUnique = []
      let pictureNunique = 0
      let nameUnique = []
      let nameNunique = 0
      let typeUnique = []
      let typeNunique = []
      let startDate = 75988343730300000
      let endDate = 759883437303

      for (let i = 0; i < uniqueList.length; i++) {
        provinceUnique.push(uniqueList[i].province)
        pictureUnique.push(uniqueList[i].picture)
        nameUnique.push(uniqueList[i].name)
        typeUnique.push(uniqueList[i].type)
        startDate = Math.min(startDate, uniqueList[i].timestamp)
        endDate = Math.max(endDate, uniqueList[i].timestamp)
      }

      provinceUnique = Array.from(new Set(provinceUnique))
      provinceNunique = provinceUnique.length
      pictureUnique = Array.from(new Set(pictureUnique))
      pictureNunique = pictureUnique.length
      nameUnique = Array.from(new Set(nameUnique))
      nameNunique = nameUnique.length
      typeUnique = Array.from(new Set(typeUnique))
      typeNunique = typeUnique.length

      return {
        code: 20000,
        data: {
          provinceUnique,
          provinceNunique,
          pictureUnique,
          pictureNunique,
          nameUnique,
          nameNunique,
          typeUnique,
          typeNunique,
          startDate,
          endDate
        }
      }
    }
  },

  {
    url: '/article/detail',
    type: 'get',
    response: config => {
      const { id } = config.query
      for (const article of List) {
        if (article.id === +id) {
          return {
            code: 20000,
            data: article
          }
        }
      }
    }
  },

  {
    url: '/article/pv',
    type: 'get',
    response: _ => {
      return {
        code: 20000,
        data: {
          pvData: [
            { key: 'PC', pv: 1024 },
            { key: 'mobile', pv: 1024 },
            { key: 'ios', pv: 1024 },
            { key: 'android', pv: 1024 }
          ]
        }
      }
    }
  },

  {
    url: '/article/create',
    type: 'post',
    response: _ => {
      return {
        code: 20000,
        data: 'success'
      }
    }
  },

  {
    url: '/article/update',
    type: 'post',
    response: config => {
      // const { type, name, page = 1, limit = 20, sort, id, dateRange  } = config.query

      // let mockList = List.filter(item => {
      //   if (type && item.type !== type) return false
      //   if (name && item.name.indexOf(name) < 0) return false
      //   if (id && item.id != id) return false
      //   if (dateRange && (item.timestamp < dateRange[0] || item.timestamp > dateRange[1])) return false
      //   return true
      // })


      // for (const v of this.list) {
      //   if (v.id === this.temp.id) {
      //     const index = this.list.indexOf(v)
      //     this.list.splice(index, 1, this.temp)
      //     break
      //   }
      // }
      return {
        code: 20000,
        data: 'success'
      }
    }
  }
]

