import React, { Fragment, useMemo } from 'react'

import { Disclosure, Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon, XMarkIcon } from '@heroicons/react/20/solid'
import { HamburgerMenuIcon } from '@radix-ui/react-icons'
import { tx } from '@twind/core'

export type NavigationItem = {
  label: string
  to: string
  new?: boolean
  menus?: { label: string; to: string }[]
}

const navigation: Record<string, Array<NavigationItem>> = {
  home: [
    { label: 'Home', to: '#home' },
    { label: 'Schedule', to: '#event-schedule' },
    {
      label: 'Events',
      to: '',
      new: true,
      menus: [
        {
          label: 'TechLavya',
          to: '#tech-event'
        },
        {
          label: 'Esports',
          to: '#esport-event'
        },
        {
          label: 'Cultural',
          to: '#event-cultural'
        }
      ]
    },
    { label: 'Sponsers', to: '#partner-sponsor' },
    { label: 'Contact Us', to: '#contact-us' }
  ],
  auth: []
}

const Navbar = () => {
  const nav = useMemo(
    // If type is specified then show navigation based on type, but if not then show navigation based on user is logged state.
    () => navigation.home,
    []
  )

  return (
    <Disclosure
      as="nav"
      className={tx(
        'backdrop-filter backdrop-blur fixed top-0 w-full px-5 z-50 py-1'
      )}>
      {({ open, close }) => (
        <>
          <div className={tx('py-1 max-w-7xl mx-auto')}>
            <div className={'flex items-center justify-between w-full'}>
              <div className="flex items-center justify-between w-full">
                <a
                  href={'/'}
                  className="flex-shrink-0 text-xl font-bold focus:outline-none focus:ring px-3 py-2 rounded-sm">
                  Aikatan2.0
                </a>
                <div className="hidden md:block">
                  <div className="ml-10 flex items-center space-x-4">
                    {nav.map((item) =>
                      item.menus ? (
                        <Menu
                          key={item.label}
                          as="div"
                          className="relative inline-block text-left">
                          <div>
                            <Menu.Button className="flex items-center hover:bg-white hover:bg-opacity-10 text-white px-3 py-2 rounded-md text-base font-medium transition-colors focus:outline-none focus:ring">
                              <span>{item.label}</span>
                              <ChevronDownIcon className="w-4 h-4 text-white ml-2" />
                            </Menu.Button>
                          </div>

                          <Transition
                            as={Fragment}
                            enter="transition ease-out duration-100"
                            enterFrom="transform opacity-0 scale-95"
                            enterTo="transform opacity-100 scale-100"
                            leave="transition ease-in duration-75"
                            leaveFrom="transform opacity-100 scale-100"
                            leaveTo="transform opacity-0 scale-95">
                            <Menu.Items className="origin-top-left absolute left-0 mt-2 w-56 rounded-md shadow-lg bg-white focus:outline-none">
                              <div className="py-1">
                                {item.menus.map((item) => (
                                  <Menu.Item
                                    key={item.label}
                                    as="div"
                                    className="focus:ring">
                                    {({ active }) => {
                                      return (
                                        <a
                                          key={item.label}
                                          href={item.to}
                                          className={tx(
                                            'block relative bg-black  hover:bg-opacity-10 text-zinc-900 px-3 py-2 text-base transition-colors focus:outline-none',
                                            active
                                              ? 'bg-opacity-10'
                                              : 'bg-opacity-0'
                                          )}>
                                          {item.label}
                                        </a>
                                      )
                                    }}
                                  </Menu.Item>
                                ))}
                              </div>
                            </Menu.Items>
                          </Transition>
                        </Menu>
                      ) : (
                        <a
                          key={item.label}
                          href={item.to}
                          className="relative hover:bg-white hover:bg-opacity-10 text-white px-3 py-2 rounded-md text-base font-medium transition-colors focus:outline-none focus:ring">
                          {item.label}
                          {item.new && (
                            <span className="top-0 transform translate-x-1/2 -translate-y-1/2 text-xs px-1 right-0 absolute rounded-md bg-indigo-600">
                              NEW
                            </span>
                          )}
                        </a>
                      )
                    )}
                  </div>
                </div>
              </div>

              <div className="-mr-2 flex md:hidden">
                {/* Mobile menu button */}
                <Disclosure.Button className="bg-zinc-800 bg-opacity-50 inline-flex items-center justify-center p-2 rounded-md text-zinc-400 hover:text-white hover:bg-opacity-60 focus:outline-none">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <HamburgerMenuIcon
                      className="block h-6 w-6"
                      aria-hidden="true"
                    />
                  )}
                </Disclosure.Button>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="visible md:invisible">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {nav.map((item) =>
                item.menus ? (
                  <div key={item.label} className="m-2">
                    <div className="text-white text-base mb-1">
                      {item.label}
                    </div>

                    {item.menus.map((item) => (
                      <a
                        key={item.label}
                        href={item.to}
                        onClick={() => close()}
                        className="text-zinc-300 hover:bg-zinc-700 hover:bg-opacity-90 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                        {item.label}
                      </a>
                    ))}
                  </div>
                ) : (
                  <a
                    key={item.label}
                    href={item.to}
                    onClick={() => close()}
                    className="flex items-center text-zinc-300 hover:bg-zinc-700 hover:bg-opacity-90 hover:text-white px-3 py-2 rounded-md text-base font-medium">
                    <div className="flex-1">{item.label}</div>
                    {item.new && (
                      <div className="text-sm px-1 rounded-sm bg-indigo-600">
                        NEW
                      </div>
                    )}
                  </a>
                )
              )}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}

export default Navbar
