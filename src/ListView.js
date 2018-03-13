import dataList from './DataList'

class ListView {
  setTable = table => dataList.setTable(table)


  filterData = (criteria) => {}

  sortData = (type) => {
    if (type === 'down') {
      return dataList.sortDown()
    }
    return dataList.sortUp()
  }
}

export default new ListView()
