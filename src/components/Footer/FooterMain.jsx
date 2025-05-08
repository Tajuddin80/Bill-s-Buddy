import React from 'react';
import { Link } from 'react-router';

const FooterMain = () => {
    return (
        <footer className="footer sm:footer-horizontal bg-black rounded-2xl text-white p-10 w-full">
        <nav>
          <h6 className="footer-title text-white underline text-2xl">Services</h6>
          <Link className="link link-hover">Branding</Link>
          <Link className="link link-hover">Design</Link>
          <Link className="link link-hover">Marketing</Link>
          <Link className="link link-hover">Advertisement</Link>
        </nav>
        <nav>
          <h6 className="footer-title text-white underline text-2xl">Company</h6>
          <Link className="link link-hover">About us</Link>
          <Link className="link link-hover">Contact</Link>
          <Link className="link link-hover">Jobs</Link>
          <Link className="link link-hover">Press kit</Link>
        </nav>
        <nav>
          <h6 className="footer-title  text-white underline text-2xl">Legal</h6>
          <Link className="link link-hover">Terms of use</Link>
          <Link className="link link-hover">Privacy policy</Link>
          <Link className="link link-hover">Cookie policy</Link>
        </nav>
        <div>
          <h6 className="footer-title text-white underline text-2xl">Newsletter</h6>
          <fieldset className="w-80">
            <label>Enter your email address</label>
            <div className="join">
              <input
                type="text"
                placeholder="username@site.com"
                className="input input-bordered join-item text-black" />
              <button className="btn bg-blue-800 text-white join-item">Subscribe</button>
            </div>
          </fieldset>
        </div>
      </footer>
    );
};

export default FooterMain;