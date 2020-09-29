import React, { Component } from 'react';
<<<<<<< HEAD
import Cell from "./Cell";
=======
import Cell from "./Cell.js";
>>>>>>> d9c760f3bd49d7a0888ee3c613034cf1e50dbad6

export default class Matrix extends Component {
  
  genRow = (vals) => {
    return vals.map((val,index) => <Cell value={val} />) // replace me and render a cell component instead!
  }
  
  genMatrix = () => {
    return this.props.values.map((rowVals, index) => <div key={index} className="row">{this.genRow(rowVals)}</div>)
  }
  
  render() {
    return (
      <div id="matrix">
        {this.genMatrix()}
      </div>
    )
  }
  
}

Matrix.defaultProps = {
    values: (new Array(10).fill(new Array(10).fill('#F00')))
}
