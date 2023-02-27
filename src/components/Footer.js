import React from "react"
import '../App.css';

const Footer = () => <footer className="page-footer font-small blue pt-4">
    <div className="container-fluid text-left text-md-left">
        <div className="row">
            <div className="col-md-4 mt-md-0 mt-3">
                <h5 className="text-uppercase">Investo LLC.</h5>
                <p>Dehradun, Uttarakhand, 248001</p>
            </div>

            <hr className="clearfix w-100 d-md-none pb-0"/>

            <div className="col-md-3 mb-md-0 mb-3">
                <h5 className="text-uppercase">Company</h5>
                <ul className="list-unstyled">
                    <li><a href="#!">About Us</a></li>
                    <li><a href="/contact">Contact Us</a></li>
                </ul>
            </div>

            <div className="col-md-3 mb-md-0 mb-3">
                <h5 className="text-uppercase">Services</h5>
                <ul className="list-unstyled">
                    <li><a href="#!" onClick={()=>{document.getElementById('search-inp').focus()}}>Ticker Search</a></li>
                    <li><a href="/signup">Trading Sessions</a></li>
                    <li><a href="/signup">Strategies</a></li>
                    <li><a href="/signup">Analytics</a></li>
                </ul>
            </div>

            <div className="col-md-2 mb-md-0 mb-3">
                <h5 className="text-uppercase">Social</h5>
                <ul className="list-unstyled">
                    <li><a href="#!">Facebook</a></li>
                    <li><a href="#!">Twitter</a></li>
                    <li><a href="#!">Telegram</a></li>
                    <li><a href="#!">Linkedin</a></li>
                </ul>
            </div>
        </div>
    </div>

    <div className="footer-copyright text-center mt-5 py-3">© 2020 Copyright
        Investo
    </div>

</footer>

export default Footer