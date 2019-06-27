import React, { Component } from 'react'
import { AgGridReact } from 'ag-grid-react'
import { Button } from 'antd'
import 'ag-grid-enterprise'
import './Grid.scss'

export default class Grid extends Component {
  constructor(props) {
    super(props)
    this.state = {
      columnDefs: [
        {
          field: "class",
          // active click detail 
          cellRenderer: "agGroupCellRenderer"
        },
        { field: "teacher" },
        { field: "amount" },
        { field: "manage" }
      ],
      detailCellRendererParams: {
        detailGridOptions: {
          columnDefs: [
            { field: "name" },
            { field: "date" },
            { field: "daysoff" },
            { field: "accepted" }
          ],
          onFirstDataRendered(params) {
            params.api.sizeColumnsToFit();
          }
        },
        getDetailRowData: function (params) {
          params.successCallback(params.data.students);
          console.log(params)
        }
      },
      rowData: [
        {
          "class": "S-1",
          "teacher": "Alex",
          "amount": 2,
          "students": [
            {
              "id": "eddd899d-82fd-4b5b-8743-6bd53056d8a3",
              "name": "Kaile",
              "class": "S-1",
              "date": "04/26/1993",
              "daysoff": 9,
              "accepted": 10,
            }, {
              "id": "f4e43b20-5e6e-4fc0-9082-69b89bb3ca39",
              "name": "Manon",
              "class": "S-1",
              "date": "10/15/1993",
              "daysoff": 10,
              "accepted": 0,
            }, {
              "id": "eddd899d-82fd-4b5b-8743-6bd53056d8a3",
              "name": "Kaile",
              "class": "S-1",
              "date": "04/26/1993",
              "daysoff": 9,
              "accepted": 10,
            }, {
              "id": "f4e43b20-5e6e-4fc0-9082-69b89bb3ca39",
              "name": "Manon",
              "class": "S-1",
              "date": "10/15/1993",
              "daysoff": 10,
              "accepted": 0,
            }, {
              "id": "eddd899d-82fd-4b5b-8743-6bd53056d8a3",
              "name": "Kaile",
              "class": "S-1",
              "date": "04/26/1993",
              "daysoff": 9,
              "accepted": 10,
            }, {
              "id": "f4e43b20-5e6e-4fc0-9082-69b89bb3ca39",
              "name": "Manon",
              "class": "S-1",
              "date": "10/15/1993",
              "daysoff": 10,
              "accepted": 0,
            }, {
              "id": "eddd899d-82fd-4b5b-8743-6bd53056d8a3",
              "name": "Kaile",
              "class": "S-1",
              "date": "04/26/1993",
              "daysoff": 9,
              "accepted": 10,
            }, {
              "id": "f4e43b20-5e6e-4fc0-9082-69b89bb3ca39",
              "name": "Manon",
              "class": "S-1",
              "date": "10/15/1993",
              "daysoff": 10,
              "accepted": 0,
            }, {
              "id": "eddd899d-82fd-4b5b-8743-6bd53056d8a3",
              "name": "Kaile",
              "class": "S-1",
              "date": "04/26/1993",
              "daysoff": 9,
              "accepted": 10,
            }
          ]
        },
        {
          "class": "S-2",
          "teacher": "Chelo",
          "amount": 3,
          "students": [
            {
              "id": "d3565f95-813c-495d-8cd3-76d287413749",
              "name": "Ann-marie",
              "class": "S-2",
              "date": "08/12/1997",
              "daysoff": 2,
              "accepted": 9,
            }, {
              "id": "22511281-bbcd-4c82-bda4-79fb9a0321b6",
              "name": "Ravid",
              "class": "S-2",
              "date": "03/30/2000",
              "daysoff": 4,
              "accepted": 5,
            }, {
              "id": "1a3fded0-fb97-41bd-8fca-229e17844b6d",
              "name": "Karrah",
              "class": "S-2",
              "date": "01/09/1993",
              "daysoff": 1,
              "accepted": 2,
            }
          ]
        }
      ]
    }
  }
  onGridReady = params => {
    this.gridApi = params.api;
    params.api.sizeColumnsToFit();
    this.gridColumnApi = params.columnApi;

    // const httpRequest = new XMLHttpRequest();
    // const updateData = data => {
    //   this.setState({ rowData: data });
    // };

    // httpRequest.open(
    //   "GET",
    //   "https://raw.githubusercontent.com/ag-grid/ag-grid-docs/latest/src/javascript-grid-master-detail/simple/data/data.json"
    // );
    // httpRequest.send();
    // httpRequest.onreadystatechange = () => {
    //   if (httpRequest.readyState === 4 && httpRequest.status === 200) {
    //     updateData(JSON.parse(httpRequest.responseText));
    //   }
    // };

    // setTimeout(function () {
    //   var rowCount = 0;
    //   params.api.forEachNode(function (node) {
    //     node.setExpanded(rowCount++ === 1);
    //   });
    // }, 500);
  }
  onButtonClick = () => {
    const selectedNodes = this.gridApi.getSelectedNodes()
    const selectedData = selectedNodes.map(node => node.data)
    const selectedDataStringPresentation = selectedData.map(node => node.make + ' ' + node.model).join(', ')
  }
  render() {
    const multiple = 'multiple'
    return (
      <div
        className='ag-theme-balham'
        style={{
          height: '500px',
          width: '100%'
        }}>
        <Button onClick={this.onButtonClick} type="primary">Get selected rows</Button>
        <AgGridReact
          columnDefs={this.state.columnDefs}
          rowSelection={multiple}

          masterDetail={true}
          // specifies the detailGridOptions to use and getDetailRowData extracts the data for the detail row.
          detailCellRendererParams={this.state.detailCellRendererParams}
          onGridReady={this.onGridReady}
          rowData={this.state.rowData}
        />
      </div>
    )
  }
}
