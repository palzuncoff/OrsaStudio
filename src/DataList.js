import dataView from './DataView'

class DataList {
  table = ''

  error = null

  setTable = table => {
    this.table = table
  }

  getDataValueAtIndex = (index) =>{
    dataView.setViewRange(0, Infinity)

    return dataView.getDataValuesInViewRange(this.table)
      .then(data => data[index])
      .catch(error => this.error = error)
  }

  getDataValuesInRange = (index, length) => {
    dataView.setViewRange(index, length)

    return dataView.getDataValuesInViewRange(this.table)
      .catch(error => this.error = error)
  }

  setDataValueAtIndex = (index, value) => {
    dataView.setViewRange(0, Infinity)

    return dataView.getDataValuesInViewRange(this.table)
      .then(data => {
        const nextData = [ ...data ]
        nextData[index] = value
        return nextData
      })
      .catch(error => this.error = error)
  }

  sortUp = () => {
    dataView.setViewRange(0, Infinity)

    return dataView.getDataValuesInViewRange(this.table)
      .catch(error => this.error = error)
  }

  sortDown = () => {
    dataView.setViewRange(0, Infinity)
    return dataView.getDataValuesInViewRange(this.table)
      .then(data => {
        const revertData = [ ...data ]

        return revertData.reverse()
      })
      .catch(error => this.error = error)
  }
}

export default new DataList()
