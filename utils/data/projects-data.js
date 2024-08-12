import ayla from '/public/image/ayla.jpg';
import crefin from '/public/image/crefin.jpg';
import realEstate from '/public/image/real-estate.jpg';
import travel from '/public/image/travel.jpg';

export const projectsData = [
    {
        id: 1,
        name: 'AI Powered Health Tracker',
        description: "My team and I are in the process of building an AI Powered health tracking app that will allow for exercise tracking, heartrate monitoring, supplement and prescription reminders, all by incorporating AI based assistant like systems.",
        tools: ['IN PROGRESS'],
        role: 'Software Engineer',
        code: '',
        demo: '',
        image: crefin,
    },
    {
        id: 2,
        name: 'Recipe Sharing Platform',
        description: 'Developed a full-stack Recipe Sharing Platform using the MERN stack, allowing users to share and manage recipes. Implemented and tested RESTful API endpoints for recipe operations, ensuring robust backend functionality and seamless MongoDB integration. Designed a responsive front-end with ReactJS for an intuitive user experience.',
        tools: ['MongoDB', 'Express', 'React', 'Node.js', 'Postman API'],
        role: 'Full-stack Developer',
        code: '',
        demo: '',
        image: travel,
    },
    {
        id: 3,
        name: 'AI Powered Rate My Professor',
        description: 'Coming soon!.',
        tools: ['IN PROGRESS'],
        code: '',
        role: 'Software Engineer',
        demo: '',
        image: realEstate,
    },
    {
        id: 4,
        name: 'AI Flashcards',
        description: "Coming soon!.",
        tools: ['IN PROGRESSS'],
        code: '',
        demo: '',
        image: ayla,
        role: 'Software Engineer',
    },
    {
        id: 5,
        name: 'AI Customer Support',
        description: "Coming soon!.",
        tools: ['IN PROGRESSS'],
        code: '',
        demo: '',
        image: ayla,
        role: 'Software Engineer',
    },
    {
        id: 6,
        name: 'Food Management',
        description: "Coming soon!.",
        tools: ['React', 'Material-UI', 'Firebase', 'Next.js', 'Node.js'],
        code: '',
        demo: '',
        image: ayla,
        role: 'Software Engineer',
    }
];
