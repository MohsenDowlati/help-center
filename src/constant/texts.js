import {authenticate,bill,branch,contact,support,organ} from '../assets/index';
const home_data = [
    {
        id: 1,
        img: branch,
        title: 'Using Abstract',
        description: 'Abstract lets you manage, version, and document your designs in one place.',
        navigate :'/categories/abstract'
    } ,
    {
        id: 2,
        img: contact,
        title: 'Manage your account',
        description: 'Configure your account settings, such as your email, profile details, and password.',
        navigate: ''
    },
    {
        id:3,
        img: bill,
        title: 'Manage billing',
        description: 'Change subscriptions and payment details.',
        navigate: ''
    },
    {
        id: 4,
        img: authenticate,
        title: 'Authenticate to Abstract',
        description: 'Set up and configure SSO, SCIM, and Just-in-Time provisioning.',
        navigate: ''
    },
    {
        id: 5,
        img: support,
        title: 'Abstract support',
        description: 'Get in touch with a human.',
        navigate: ''
    } ,
    {
        id: 6,
        img: organ,
        title:'Manage organizations, teams, and projects',
        description:'Use Abstract organizations, teams, and projects to organize your people and your work.',
        navigate: ''
    }
]


const footer_menu = [
    {
        id: 1,
        category: 'Abstract',
        list: ['Start trial','Pricing','Download']
    },
    {
        id: 2,
        category: 'Resources',
        list: ['Blog','Help Center','Release Notes','Status']
    },
    {
        id: 3,
        category: 'Community',
        list: ['Twitter','LinkedIn','FaceBook','Dribble','Podcast']
    },
    {
        id: 4,
        category: 'Company',
        list: ['About Us','Careers','Legal']
    }
]
export {home_data , footer_menu};