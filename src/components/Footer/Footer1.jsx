import React from 'react'
import {
  Footer,
  FooterCopyright,
  FooterLink,
  FooterLinkGroup,
} from 'flowbite-react'
import logo from '../../assets/logo3.png'
import { FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa'

const Footer1 = () => {
  return (
    <>
      <div
        className='divider divider-horizontal'
      ></div>

      <footer style={{paddingTop:'0rem',paddingBottom:'2rem'}} className='bg-transparent rounded-lg  dark:bg-gray-800'>
        <div className='w-full mx-auto max-w-screen-xl p-4 flex items-center justify-between md:flex md:items-center md:justify-between'>
          {/* Logo on the extreme left */}
          <div className='flex items-center'>
            <img src={logo} alt='Logo' className='w-13 h-8 mr-4' />
          </div>

          {/* Social media icons on the extreme right */}
          <ul
            className='flex items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0 md:ml-auto'
            style={{ justifyContent: 'end' }}
          >
            <li className='me-4'>
              <a href='#' className='hover:underline'>
                <FaInstagram
                  size={24}
                  color='#E4405F'
                  style={{ verticalAlign: 'middle' }}
                />
              </a>
            </li>
            <li className='me-4'>
              <a href='#' className='hover:underline'>
                <FaTwitter
                  size={24}
                  color='#1DA1F2'
                  style={{ verticalAlign: 'middle' }}
                />
              </a>
            </li>
            <li>
              <a href='#' className='hover:underline'>
                <FaYoutube
                  size={24}
                  color='#FF0000'
                  style={{ verticalAlign: 'middle' }}
                />
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </>
  )
}

export default Footer1
