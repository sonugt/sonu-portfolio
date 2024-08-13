import ayla from '/public/image/ayla.jpg';
import crefin from '/public/image/crefin.jpg';
import realEstate from '/public/image/real-estate.jpg';
import travel from '/public/image/travel.jpg';

export const projectsData = [
    {
        id: 1,
        name: 'AI Powered Health Tracker',
        description: "My team and I are in the process of building an AI-powered health tracking app that will allow for exercise tracking, heart rate monitoring, supplement and prescription reminders, all by incorporating AI-based assistant-like systems.",
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
        name: 'Wordle+',
        description: 'Co-led a team of 5 student developers to design and build the next generation of the Wordle game application, integrating features of both Wordle and Hangman. Leveraged Python, Pygame, Git, and Object-Oriented Design to create an advanced and engaging gameplay experience. Spearheaded the development of a unique feature using the OpenAI API, enabling users to learn a new word at the end of each game, thereby enhancing the educational value of the gaming experience.',
        tools: ['Pygame', 'Python', 'Git', 'Figma'],
        role: 'Co-Lead Developer',
        code: '',
        demo: '',
        image: travel,
    },
    {
        id: 4,
        name: 'Trendi',
        description: 'Engineered a mobile app for exploring trending movies by implementing REST API calls with AsyncHTTPClient, and led a team of three in developing a scalable, responsive UI/UX using Glide, ConstraintLayout, RecyclerView, and XML.',
        tools: ['Kotlin', 'XML', 'JSON', 'Gradle', 'Android Studio'],
        role: 'Android Engineer',
        code: '',
        demo: '',
        image: travel,
    },
];
