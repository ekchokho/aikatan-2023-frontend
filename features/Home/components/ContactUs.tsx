import React from 'react'

import Gobinda from '@/assets/members/govindo.jpg'
import Pallab from '@/assets/members/pallab.png'
import Puspal from '@/assets/members/puspal.jpg'
import { UserProfileCard } from '@/components'

export const MembersData = {
  lead: [
    {
      id: '1',
      title: 'President',
      name: { fistName: 'Pallab', lastName: 'Maji' },
      contact_no: '7908613364',
      imgSrc: Pallab.src
      // social: [
      //   {
      //     id: 'facebook',
      //     link: 'https://www.facebook.com/ipallabmaji'
      //   },
      //   {
      //     id: 'linkedin',
      //     link: 'https://www.linkedin.com/in/pallab-m-0214a3164/'
      //   }
      // ]
    },
    {
      id: '2',
      title: 'Convener',
      name: { fistName: 'Puspal', lastName: 'Dey' },
      contact_no: '9382102816',
      imgSrc: Puspal.src
      // social: [
      //   {
      //     id: 'facebook',
      //     link: 'https://www.facebook.com/Ardentgroup/'
      //   },
      //   {
      //     id: 'linkedin',
      //     link: 'https://www.linkedin.com/company/ardentinternships/'
      //   }
      // ]
    },
    // {
    //   id: '3',
    //   title: 'Sponsorship T. Head',
    //   name: { fistName: 'P', lastName: 'Sagar' },
    //   contact_no: '9883596147',
    //   imgSrc:
    //     'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?cs=srgb&dl=pexels-pixabay-220453.jpg&fm=jpg',
    //   social: [
    //     {
    //       id: 'facebook',
    //       link: 'https://www.facebook.com/Ardentgroup/'
    //     },
    //     {
    //       id: 'linkedin',
    //       link: 'https://www.linkedin.com/company/ardentinternships/'
    //     }
    //   ]
    // },
    // {
    //   id: '4',
    //   title: 'Sponsorship T. Conv.',
    //   name: { fistName: 'Snigdha', lastName: 'Aditya' },
    //   contact_no: '8585024537',
    //   imgSrc:
    //     'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?cs=srgb&dl=pexels-pixabay-220453.jpg&fm=jpg',
    //   social: [
    //     {
    //       id: 'facebook',
    //       link: 'https://www.facebook.com/Ardentgroup/'
    //     },
    //     {
    //       id: 'linkedin',
    //       link: 'https://www.linkedin.com/company/ardentinternships/'
    //     }
    //   ]
    // },
    // {
    //   id: '5',
    //   title: 'Sponsorship T. Conv.',
    //   name: { fistName: 'Amisha', lastName: 'Kumari' },
    //   contact_no: '8637823225',
    //   imgSrc:
    //     'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?cs=srgb&dl=pexels-pixabay-220453.jpg&fm=jpg',
    //   social: [
    //     {
    //       id: 'facebook',
    //       link: 'https://www.facebook.com/Ardentgroup/'
    //     },
    //     {
    //       id: 'linkedin',
    //       link: 'https://www.linkedin.com/company/ardentinternships/'
    //     }
    //   ]
    // },
    // {
    //   id: '6',
    //   title: 'Social Media',
    //   name: { fistName: 'Sankhadeep', lastName: 'Paul' },
    //   contact_no: '7407991983',
    //   imgSrc:
    //     'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?cs=srgb&dl=pexels-pixabay-220453.jpg&fm=jpg',
    //   social: [
    //     {
    //       id: 'facebook',
    //       link: 'https://www.facebook.com/Ardentgroup/'
    //     },
    //     {
    //       id: 'linkedin',
    //       link: 'https://www.linkedin.com/company/ardentinternships/'
    //     }
    //   ]
    // },
    {
      id: '7',
      title: 'Social Media',
      name: { fistName: 'Gobinda', lastName: 'Gorai' },
      contact_no: '7407991983',
      imgSrc: Gobinda.src
      // social: [
      //   {
      //     id: 'facebook',
      //     link: 'https://www.facebook.com/gobindagorai20/'
      //   },
      //   {
      //     id: 'linkedin',
      //     link: 'https://www.linkedin.com/in/gobinda-gorai/'
      //   }
      // ]
    }
  ]
} as const

const ContactUs = () => {
  return (
    <section
      className={'flex flex-col gap-2 items-center pt-10'}
      id={'contact-us'}>
      <a href="#contact-us">
        <h2
          className={
            'font-extrabold uppercase text-4xl 2xl:text-5xl sm:text-center my-10 text-content'
          }>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-400 to-red-500">
            Contact{' '}
          </span>
          Us
        </h2>
      </a>
      <div className="flex flex-wrap gap-4 justify-center">
        {MembersData.lead.map((mem) => (
          <UserProfileCard key={mem.id} {...mem} />
        ))}
      </div>
    </section>
  )
}

export default ContactUs
