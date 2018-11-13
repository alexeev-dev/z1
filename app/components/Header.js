import React, {Component} from 'react'

class Header extends Component {
	render() {
		return (
			<div className="wr-header">
				<div className="container">
					<div className="header">
						<div className="contacts">
							<a href="#"><i className="fas fa-phone"></i>+7 (495) 666-55-44</a>
							<p>Москва</p>
						</div>
						<ul>
							{/*
							<li>
								<a href="#">ВЫБРАТЬ СВОЙ ЗАЙМ</a>							
							</li>
							*/}
							<li>
								<a href="#">ОФОРМИТЬ СЕЙЧАС</a>
							</li>
						</ul>
					</div>
				</div>
			</div>
		)
	}
}

export default Header