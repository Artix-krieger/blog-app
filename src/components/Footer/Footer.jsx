import {Link} from 'react-router-dom';
import {Logo} from '../index';

const footerSections = [
    {
        title: 'Company',
        links: [
            {text: 'Features', to: '/'},
            {text: 'Pricing', to: '/'},
            {text: 'Affiliate Program', to: '/'},
            {text: 'Press Kit', to: '/'},
        ],
    },
    {
        title: 'Support',
        links: [
            {text: 'Account', to: '/'},
            {text: 'Help', to: '/'},
            {text: 'Contact Us', to: '/'},
            {text: 'Customer Support', to: '/'},
        ],
    },
    {
        title: 'Legals',
        links: [
            {text: 'Terms & Conditions', to: '/'},
            {text: 'Privacy Policy', to: '/'},
            {text: 'Licensing', to: '/'},
        ],
    },
];

export function Footer() {
    return (
        <section className="relative overflow-hidden py-10 bg-white border border-t-2 border-t-black">
            <div className="relative z-10 mx-auto max-w-7xl px-4">
                <div className="-m-6 flex flex-wrap">
                    <div className="w-full p-6 md:w-1/2 lg:w-5/12">
                        <div className="flex h-full flex-col justify-between">
                            <div className="mb-4 inline-flex items-center">
                                <Logo width="100px"/>
                            </div>
                            <div>
                                <p className="text-sm text-gray-600">
                                    &copy; Copyright 2023. All Rights Reserved by Artix.
                                </p>
                            </div>
                        </div>
                    </div>
                    {footerSections.map((section, index) => (
                        <div className="w-full p-6 md:w-1/2 lg:w-2/12" key={index}>
                            <div className="h-full">
                                <h3 className="tracking-px mb-9 text-indigo-700 font-bold">
                                    {section.title}
                                </h3>
                                <ul>
                                    {section.links.map((link, linkIndex) => (
                                        <li className="mb-4" key={linkIndex}>
                                            <Link
                                                className=" text-base font-medium text-gray-900 hover:text-gray-700"
                                                to={link.to}
                                            >
                                                {link.text}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}