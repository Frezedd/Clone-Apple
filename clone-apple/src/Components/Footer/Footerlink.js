import React, { Component } from 'react'

class Footerlink extends Component {
  render() {
    return (
      <>
        	<li class="footer-links">
                <a class="links-wrapper" href={this.props.Url}>{this.props.linkName}
                </a>
            </li>
      </>
    )
  }
}
export default Footerlink