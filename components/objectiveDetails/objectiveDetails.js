import React, { Component } from 'react'
import Objective from "./objective/objective.js";

export default class ObjectiveDetails extends Component {
    render() {
        return (
            <div>
		        <header className="clearfix">
		          <div className="user-info clearfix">
		            <div className="logo">
		              <img src="http://static1.squarespace.com/static/5432fb86e4b0a2c1da894800/t/54f8e985e4b0e3b41a3efe03/1425598853953/Avatar+%5Bcircle%5D.png" alt />
		            </div>
		            <div className="credentials">
		              <span className="name">John Doe</span><br />
		              <span className="field">CEO</span>
		            </div>
		          </div>
		        </header>
		        <aside id="navbar">
		          <nav>
		            <ul>
		              <li id="new-obj-btn"><a href>
		                  <i className="fa fa-plus-circle" aria-hidden="true" />
		                </a></li>
		              <li data-toggle="tooltip" data-placement="right" title="Home"><a href="#">
		                  <i className="fa fa-home fa-2x" aria-hidden="true" />
		                </a></li>
		              <li data-toggle="tooltip" data-placement="right" title="Users"><a href="#">
		                  <i className="fa fa-users fa-2x" aria-hidden="true" />
		                </a></li>
		              <li data-toggle="tooltip" data-placement="right" title="Plan"><a href="#">
		                  <i className="fa fa-calendar-o fa-2x" aria-hidden="true" />
		                </a></li>
		              <li data-toggle="tooltip" data-placement="right" title="History"><a href="#">
		                  <i className="fa fa-clock-o fa-2x" aria-hidden="true" />
		                </a></li>
		            </ul>
		          </nav>
		        </aside>
		        <aside id="inter-panel">
		        </aside>
		        <div id="central-window">
		          <div className="main-content">
		            <Objective />
		          </div>
		        </div>
      		</div>
        )
    }
}
