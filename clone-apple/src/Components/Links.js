import React, { Component } from 'react'

class Links extends Component {
  render() {
    return (
        <>
        <li class="nav-item">
            <a class="nav-link 
                js-scroll-trigger" href={this.props.Url}>{this.props.linkName}
            </a>
        </li>
  </>
    )
  }
}
export default Links