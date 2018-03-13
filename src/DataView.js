import dataTable from './DataTable'

class DataView {
  error = null

  ViewRange = {
    startIndex: 0,
    length: Infinity
  }

  setViewRange = (startIndex, length) => {
    this.ViewRange = {
      startIndex,
      length
    }
  }

  getDataValuesInViewRange = (table) => {
    const { startIndex, length } = this.ViewRange
    const to = startIndex + length
    return dataTable[table]().then(data => data.slice(startIndex, to))
      .catch(error => this.error = error)
  }

}

export default new DataView()
