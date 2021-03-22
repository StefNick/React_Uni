import React from 'react';
import './Footer.css';
import { Button } from '../../Button';
import { Link } from 'react-router-dom';
import {
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaTwitter,
  FaLinkedin
} from 'react-icons/fa';
import { MdFingerprint } from 'react-icons/md';
import { DiCodeBadge } from 'react-icons/di';

function Footer() {
  return (
    <div className='footer-container'>
      <section className='footer-subscription'>
        <p className='footer-subscription-heading'>
          Înscriete la cel mai ciotkii Newsletter pentru studenți din cadrul UTM.
        </p>
        <p className='footer-subscription-text'>
          Dezabonarea poți face oricând.
        </p>
        <div className='input-areas'>
          <form>
            <input
              className='footer-input'
              name='email'
              type='email'
              placeholder='Your Email'
            />
            <Button buttonStyle='btn--outline'>Subscribe</Button>
          </form>
        </div>
      </section>
      
      <section className='social-media'>
        <div className='social-media-wrap'>
          <div className='footer-logo'>
            <Link to='/' className='social-logo'>
              <DiCodeBadge className='navbar-icon' />
              BEST Chișinău
            </Link>
          </div>
          <small className='website-rights'>BEST Chișinău © 2021</small>
          <div className='social-icons'>
            <Link className='social-icon-link' to={'//www.facebook.com/BEST.Chisinau'} target='_blank' aria-label='Facebook'><FaFacebook /></Link>
            
            <Link className='social-icon-link' to={'//www.instagram.com/best_chisinau/'} target='_blank' aria-label='Instagram'><FaInstagram /></Link>
            
            <Link className='social-icon-link' to={'//www.youtube.com/channel/UCsKsymTY_4BYR-wytLjex7A?view_as=subscriber'} target='_blank' aria-label='Youtube'><FaYoutube /></Link>
            
            <Link className='social-icon-link' to='/' target='_blank' aria-label='Twitter'><FaTwitter /></Link>
            
            <Link className='social-icon-link' to={'//www.linkedin.com/company/best-chisinau'} target='_blank' aria-label='LinkedIn'><FaLinkedin /></Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;