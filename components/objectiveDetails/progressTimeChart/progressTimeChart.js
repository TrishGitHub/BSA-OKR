import React from 'react';
import './progressTimeChart.css';

export default class ProgressTimeChart extends React.Component {

    render() {
        
        return (
         <div className="progressTimeChart">
	        <table id="q-graph">
	          <caption>Quarterly Results</caption>
	          <tbody>
	            <tr className="qtr" id="q1">
	              <th scope="row">Q1</th>
	              <td className="progress bar" style={{height: 111}}><p>38%</p></td>
	              <td className="regress bar" style={{height: 99}}><p>35%</p></td>
	            </tr>
	            <tr className="qtr" id="q2">
	              <th scope="row">Q2</th>
	              <td className="progress bar" style={{height: 206}}><p>71%</p></td>
	              <td className="regress bar" style={{height: 194}}><p>66%</p></td>
	            </tr>
	            <tr className="qtr" id="q3">
	              <th scope="row">Q3</th>
	              <td className="progress bar" style={{height: 259}}><p>84%</p></td>
	              <td className="regress bar" style={{height: 193}}><p>63%</p></td>
	            </tr>
	            <tr className="qtr" id="q4">
	              <th scope="row">Q4</th>
	              <td className="progress bar" style={{height: 300}}><p>98%</p></td>
	              <td className="regress bar" style={{height: 210}}><p>$71%</p></td>
	            </tr>
	          </tbody>
	        </table>
	        <div id="ticks">
	          <div className="tick" style={{height: 59}}><p>100%</p></div>
	          <div className="tick" style={{height: 59}}><p>$80%</p></div>
	          <div className="tick" style={{height: 59}}><p>60%</p></div>
	          <div className="tick" style={{height: 59}}><p>40%</p></div>
	          <div className="tick" style={{height: 59}}><p>20%</p></div>
	        </div>
      </div>
        )
    }
}
