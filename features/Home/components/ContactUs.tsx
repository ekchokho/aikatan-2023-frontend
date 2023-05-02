import React from 'react'

import Bivas from '@/assets/members/bivas.png'
import Gobinda from '@/assets/members/govindo.jpg'
import Pallab from '@/assets/members/pallab.png'
import Puspal from '@/assets/members/puspal.jpg'
import Sagar from '@/assets/members/sagar.png'
import Sankhadeep from '@/assets/members/sankhadeep.png'
import Snigdha from '@/assets/members/snigdha.png'
import { UserProfileCard } from '@/components'

export const MembersData = {
  lead: [
    {
      id: '1',
      title: 'President',
      name: { fistName: 'Pallab', lastName: 'Maji' },
      contact_no: '7908613364',
      imgSrc: Pallab.src,
      social: [
        {
          id: 'facebook',
          link: 'https://www.facebook.com/ipallabmaji'
        },
        {
          id: 'linkedin',
          link: 'https://www.linkedin.com/in/pallab-m-0214a3164/'
        }
      ]
    },
    {
      id: '2',
      title: 'Convener',
      name: { fistName: 'Puspal', lastName: 'Dey' },
      contact_no: '9382102816',
      imgSrc: Puspal.src,
      social: [
        {
          id: 'instagram',
          link: 'https://instagram.com/puspal_dey_stark45?igshid=ZDdkNTZiNTM='
        },
        {
          id: 'linkedin',
          link: 'https://www.linkedin.com/in/puspal-dey-49a56020a'
        }
      ]
    },
    {
      id: '3',
      title: 'Sponsorship Head',
      name: { fistName: 'P', lastName: 'Sagar' },
      contact_no: '9883596147',
      imgSrc: Sagar.src,
      social: [
        {
          id: 'instagram',
          link: 'https://www.instagram.com/_absolutely.not.dwight_'
        },
        {
          id: 'linkedin',
          link: 'https://www.linkedin.com/in/sagar-puppala-937825206'
        }
      ]
    },
    {
      id: '4',
      title: 'Sponsorship',
      name: { fistName: 'Snigdha', lastName: 'Aditya' },
      contact_no: '8585024537',
      imgSrc: Snigdha.src,
      social: [
        {
          id: 'linkedin',
          link: 'https://www.linkedin.com/in/snigdha-aditya-3152681b0/'
        },
        {
          id: 'instagram',
          link: 'https://www.instagram.com/snigdha_aditya/'
        }
      ]
    },
    // {
    //   id: '5',
    //   title: 'Sponsorship',
    //   name: { fistName: 'Amisha', lastName: 'Kumari' },
    //   contact_no: '8637823225',
    //   imgSrc: Amisha.src,
    //   social: [
    //     {
    //       id: 'facebook',
    //       link: 'https://www.facebook.com/profile.php?id=100060742081634'
    //     },
    //     {
    //       id: 'linkedin',
    //       link: 'https://www.linkedin.com/in/amisha-kumari-36049421a/'
    //     }
    //   ]
    // },
    {
      id: '6',
      title: 'Social Media',
      name: { fistName: 'Sankhadeep', lastName: 'Paul' },
      contact_no: '7407991983',
      imgSrc: Sankhadeep.src,
      social: [
        {
          id: 'instagram',
          link: 'https://www.instagram.com/a_bong_traveller/'
        },
        {
          id: 'facebook',
          link: 'https://www.facebook.com/sankhadeep.paul.129'
        },
        {
          id: 'linkedin',
          link: 'https://www.linkedin.com/in/sankhadeep-paul-1aa2681a1/'
        },
        {
          id: 'youtube',
          link: 'https://www.youtube.com/channel/UCHNZawwGNFJLxBGQfqC2viQ'
        }
      ]
    },
    {
      id: '7',
      title: 'Social Media & Design',
      name: { fistName: 'Gobinda', lastName: 'Gorai' },
      contact_no: '9907260741',
      imgSrc: Gobinda.src,
      social: [
        {
          id: 'facebook',
          link: 'https://www.facebook.com/gobindagorai20/'
        },
        {
          id: 'linkedin',
          link: 'https://www.linkedin.com/in/gobinda-gorai/'
        }
      ]
    },
    {
      id: '8',
      title: 'Web',
      name: { fistName: 'Bivas', lastName: 'Biswas' },
      contact_no: '9331646032',
      imgSrc: Bivas.src,
      social: [
        {
          id: 'github',
          link: 'https://github.com/Bivas-Biswas'
        },
        {
          id: 'linkedin',
          link: 'https://github.com/Bivas-Biswas'
        },
        {
          id: 'twitter',
          link: 'https://twitter.com/bivasbiswas99'
        },
        {
          id: 'website',
          link: 'https://bivasbiswas.super.site/'
        }
      ]
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
