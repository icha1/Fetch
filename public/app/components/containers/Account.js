var React = require('react');


var Account = React.createClass({

	render: function(){
		return (
			<div>
		        <section id="content" style={{background: '#f9f9f9'}}>

		            <div className="content-wrap">

		                <div className="container clearfix">
							<h4>With Border</h4>
							<div className="tabs tabs-bordered clearfix" id="tab-2">

								<ul className="tab-nav clearfix">
									<li><a href="#tabs-6">Account</a></li>
									<li><a href="#tabs-7">Order History</a></li>
									<li className="hidden-phone">
										<a href="#tabs-8">Place Order</a>
									</li>
								</ul>

								<div className="tab-container" style={{background:'#fff'}}>

									<div className="tab-content clearfix" id="tabs-6">

										<div className="col_two_third nobottommargin">

											<div className="well well-lg nobottommargin">
												<form id="login-form" name="login-form" className="nobottommargin" action="#" method="post">

													<h3>Manage your Account</h3>

													<div className="col_full">
														<label for="login-form-username">First Name:</label>
														<input type="text" id="login-form-username" name="login-form-username" value="" className="form-control" />
													</div>

													<div className="col_full">
														<label for="login-form-username">Last Name:</label>
														<input type="text" id="login-form-username" name="login-form-username" value="" className="form-control" />
													</div>

													<div className="col_full">
														<label for="login-form-password">Password:</label>
														<input type="password" id="login-form-password" name="login-form-password" value="" className="form-control" />
													</div>

													<div className="col_full nobottommargin">
														<button className="button button-3d nomargin" id="login-form-submit" name="login-form-submit" value="update">Update</button>
													</div>

												</form>
											</div>

										</div>

									</div>
									<div className="tab-content clearfix" id="tabs-7">
										<p>Mauris eleifend est et turpis. Duis id erat. Suspendisse potenti. Aliquam vulputate, pede vel vehicula accumsan, mi neque rutrum erat, eu congue orci lorem eget lorem. Vestibulum non ante. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Fusce sodales. Quisque eu urna vel enim commodo pellentesque. Praesent eu risus hendrerit ligula tempus pretium. Curabitur lorem enim, pretium nec, feugiat nec, luctus a, lacus.</p>
										Duis cursus. Maecenas ligula eros, blandit nec, pharetra at, semper at, magna. Nullam ac lacus. Nulla facilisi. Praesent viverra justo vitae neque. Praesent blandit adipiscing velit. Suspendisse potenti. Donec mattis, pede vel pharetra blandit, magna ligula faucibus eros, id euismod lacus dolor eget odio. Nam scelerisque. Donec non libero sed nulla mattis commodo. Ut sagittis. Donec nisi lectus, feugiat porttitor, tempor ac, tempor vitae, pede. Aenean vehicula velit eu tellus interdum rutrum. Maecenas commodo. Pellentesque nec elit. Fusce in lacus. Vivamus a libero vitae lectus hendrerit hendrerit.
									</div>
									<div className="tab-content clearfix" id="tabs-8">
										Praesent in eros vestibulum mi adipiscing adipiscing. Morbi facilisis. Curabitur ornare consequat nunc. Aenean vel metus. Ut posuere viverra nulla. Aliquam erat volutpat. Pellentesque convallis. Maecenas feugiat, tellus pellentesque pretium posuere, felis lorem euismod felis, eu ornare leo nisi vel felis. Mauris consectetur tortor et purus.
									</div>

								</div>

							</div>


		                </div>
		            </div>
		        </section> 

			</div>
		);
	}

});

module.exports = Account;