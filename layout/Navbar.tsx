import { Link } from 'components'
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
    { label: 'Home', to: '/' },
    { label: 'Schedule', to: '/#event-schedule' },
    {
      label: 'Events',
      to: '',
      new: true,
      menus: [
        {
          label: 'TechLavya',
          to: '/#tech-event'
        },
        {
          label: 'Esports',
          to: '/#esport-event'
        },
        {
          label: 'Cultural',
          to: '/#event-cultural'
        }
      ]
    },
    { label: 'Sponsers', to: '/#sponser' },
    { label: 'Contact Us', to: '/contact' }
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
        'shadow backdrop-filter backdrop-blur bg-gray-900 bg-opacity-70 sticky top-0 w-full px-5 z-50'
      )}>
      {({ open, close }) => (
        <>
          <div className={tx('py-1 max-w-7xl mx-auto')}>
            <div className={'flex items-center justify-between h-14'}>
              <div className="flex items-center">
                <Link
                  prefetch={false}
                  href={'/'}
                  className="flex-shrink-0 text-xl font-bold focus:outline-none focus:ring px-3 py-2 rounded-sm">
                  Aikatan
                </Link>
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
                                        <Link
                                          key={item.label}
                                          href={item.to}
                                          scroll={true}
                                          className={tx(
                                            'block relative bg-black  hover:bg-opacity-10 text-zinc-900 px-3 py-2 text-base transition-colors focus:outline-none',
                                            active
                                              ? 'bg-opacity-10'
                                              : 'bg-opacity-0'
                                          )}>
                                          {item.label}
                                        </Link>
                                      )
                                    }}
                                  </Menu.Item>
                                ))}
                              </div>
                            </Menu.Items>
                          </Transition>
                        </Menu>
                      ) : (
                        <Link
                          key={item.label}
                          href={item.to}
                          scroll={true}
                          activeClassName="bg-white bg-opacity-10"
                          className="relative hover:bg-white hover:bg-opacity-10 text-white px-3 py-2 rounded-md text-base font-medium transition-colors focus:outline-none focus:ring">
                          {item.label}
                          {item.new && (
                            <span className="top-0 transform translate-x-1/2 -translate-y-1/2 text-xs px-1 right-0 absolute rounded-md bg-indigo-600">
                              NEW
                            </span>
                          )}
                        </Link>
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
                      <Link
                        key={item.label}
                        href={item.to}
                        scroll={true}
                        onClick={() => close()}
                        activeClassName="bg-zinc-700 bg-opacity-60 text-white"
                        className="text-zinc-300 hover:bg-zinc-700 hover:bg-opacity-90 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                        {item.label}
                      </Link>
                    ))}
                  </div>
                ) : (
                  <Link
                    scroll={true}
                    key={item.label}
                    href={item.to}
                    onClick={() => close()}
                    activeClassName="bg-zinc-700 bg-opacity-60 text-white"
                    className="flex items-center text-zinc-300 hover:bg-zinc-700 hover:bg-opacity-90 hover:text-white px-3 py-2 rounded-md text-base font-medium">
                    <div className="flex-1">{item.label}</div>
                    {item.new && (
                      <div className="text-sm px-1 rounded-sm bg-indigo-600">
                        NEW
                      </div>
                    )}
                  </Link>
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
