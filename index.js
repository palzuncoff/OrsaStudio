import listView from './src/ListView'
import dataList from './src/DataList'
import graphQLSource from './src/GraphQLSource'
import dataTable from './src/DataTable'
import dataView from './src/DataView'

listView.setTable('Posts')
listView.sortData('down').then(data => console.log(data))
