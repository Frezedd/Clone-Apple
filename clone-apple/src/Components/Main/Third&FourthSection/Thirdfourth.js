import React, { Component } from 'react'
import Links from '../../Links'

class Thirdfourth extends Component {
  render() {
    return (
      <div>
        <section class="third-hightlight-wrapper">
		<div class="container">
			<div class="title-wraper bold">
				iPhone 11 Pro 
			</div> 

			<div class="description-wrapper">
				Pro cameras. Pro display. Pro performance.
			</div>

			<div class="price-wrapper">
				From $24.95/mo. or $599 with trade‑in.
			</div>

			<div class="links-wrapper">
				<ul>
                <Links linkName='Learn more' linkUrl='/#'/>
                <Links linkName='Buy' linkUrl='/#'/>

				</ul> 
			</div>
		</div>
	</section>
    <section class="fourth-heghlight-wrapper">
		<div class="container-fluid">
			<div class="row">
				<div class="left-side-wrapper col-sm-12 col-md-6">
					<div class="left-side-container">
						<div class="title-wraper">
							iPhone 11 
						</div> 
						<div class="description-wraper">
							Just the right amount of everything.
						</div>
						<div class="price-wrapper">
							From $18.70/mo. or $499 with trade‑in.<sup>1</sup>
						</div>

						<div class="links-wrapper">
							<ul>
                            <Links linkName='Learn more' linkUrl='/#'/>
                            <Links linkName='Apply now' linkUrl='/#'/>
							</ul> 
						</div>
					</div>
				</div>
				<div class="right-side-wrapper col-sm-12 col-md-6">
					<div class="right-side-container">
						<div class="title-wraper white">
							Get the latest CDC response to COVID-19. 
						</div> 

						<div class="links-wrapper white">
							<ul>
								<Links linkName='Watch the PSA' linkUrl='/#'/>
							</ul> 
						</div>
					</div>
				</div>					
			</div>
		</div> 
	</section>
      </div>
    )
  }
}
export default Thirdfourth