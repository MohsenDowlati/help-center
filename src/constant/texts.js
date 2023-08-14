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
        navigate: '/categories/Manage-account'
    },
    {
        id:3,
        img: bill,
        title: 'Manage billing',
        description: 'Change subscriptions and payment details.',
        navigate: '/categories/Manage-billing'
    },
    {
        id: 4,
        img: authenticate,
        title: 'Authenticate to Abstract',
        description: 'Set up and configure SSO, SCIM, and Just-in-Time provisioning.',
        navigate: '/categories/authenticate'
    },
    {
        id: 5,
        img: support,
        title: 'Abstract support',
        description: 'Get in touch with a human.',
        navigate: '/categories/support'
    } ,
    {
        id: 6,
        img: organ,
        title:'Manage organizations, teams, and projects',
        description:'Use Abstract organizations, teams, and projects to organize your people and your work.',
        navigate: '/categories/Manage-projects'
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

const abstract_articles = [
    {
        id: 1,
        title: 'Get started in Abstract',
        articles: ['Try out Abstract','The Abstract Design Workflow','Start Working In Abstract','Practice Abstract workflow','Glossary']
    },
    {
        id: 2,
        title: 'Using the Abstract Desktop App',
        articles: ['Update to the newest version of Abstract','Backup Abstract','System requirements','Downloading the Abstract Desktop Application','The Abstract plugin','Keyboard shortcuts']
    } ,
    {
        id: 3,
        title: 'Working in Projects',
        articles: ['Name your project','Add files to your project','Create a branch','Open untracked vs. creating a branch','Change branch status','Rename a branch']
    },
    {
        id: 4,
        title: 'Commit your work',
        articles: ['A guide to commits','Committing changes in a branch','Commit history','Troubleshoot your commits']
    },
    {
        id: 5,
        title: 'Merge your work',
        articles: ['A guide to merging','Merging to the main branch','Resolve conflicts','Restore to previous commit','Merge restrictions']
    },
    {
        id: 6,
        title: 'Work with libraries',
        articles: ['Libraries overview','Add a library','Link a library','Update a library','Work with dependencies','Manage your libraries']
    },
    {
        id: 7,
        title: 'Collaborate in projects',
        articles: ['Share your designs','Request a design review','Use collections','Sections within collections','Leave comments and annotations', 'Assets']
    },
    {
        id: 8,
        title: 'Troubleshooting Abstract',
        articles: ['General Troubleshooting','Troubleshoot sync errors','Resolve a pending commit','Resolve diverged branches','Previews and asset generation','Sync library components in Sketch']
    }
]

const abstract_practice = [
    {
        id: 1,
        title: 'Main',
        practices: ['Define the main branch']
    },
    {
        id: 2,
        title: 'Branching',
        practices: ['Set up a new branch','Working in a branch','Prepare your branch for merging']
    },
    {
        id: 3,
        title: 'Committing',
        practices: ['When to commit','Committing — Part 2']
    },
    {
        id: 4,
        title: 'Update from the main branch before merging',
        practices: ['Resolve merge conflicts','Resolve merge conflicts','Clean up your branch before merging']
    },
    {
        id: 5,
        title: 'Design systems',
        practices: ['Libraries']
    }
]

const manage_projects = [
    {
        id:1,
        title: 'Manage your organization',
        articles: ['How to create a new organization (for existing users)','Organization overview','Joining an organization','Send an invitation','Understand seat and role types','Manage user permissions and access']
    },
    {
        id: 2,
        title: 'Manage your teams',
        articles: ['Create and manage teams']
    },
    {
        id: 3,
        title: 'Manage your projects',
        articles: ['Create a project','Project permissions','Organize your projects with sections','Archive or delete a project','Duplicate a project','Transfer a project']
    }
]

const manage_account = ['Change your email settings','Change account settings','Delete your account','Troubleshooting login issues','Domains officially associated with Abstract']

const manage_billing = ['Change your subscription','Manage billing details','View your billing details and invoices']

const authentication = ['Understand single sign-on','Configure single sign-on using ADFS','Configure single sign-on using Amazon Web Services','Configure single sign-on using Azure AD','Configure single sign-on using Google SAML','Configure single sign-on using Okta']

export {home_data , footer_menu , abstract_articles , abstract_practice , manage_account , manage_projects , manage_billing , authentication};