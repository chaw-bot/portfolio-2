import conference from '../images/conference.png';
import covid from '../images/covid.png';
import leaderboard from '../images/leaderboard.png';
import library from '../images/library.png';
import tipcalculator from '../images/tipcalculator.png';
import Screenshot1 from '../images/Screenshot1.png';
import leaseAhome from '../images/lease-a-home.png';
import everyKwacha from '../images/everyKwacha.png';
import adviceGenerator from '../images/advice-generator.png';
import interactiveRating from '../images/interactiveRating.png';

const projects = [
  {
    name: 'Adivce Generator',
    description: 'This is an app that generates random advice and quotes from an API.',
    live_demo: 'https://chaw-bot.github.io/advice-generator/',
    source_code: 'https://github.com/chaw-bot/advice-generator/tree/development',
    image: adviceGenerator,
    languages: ['HTML', 'CSS', 'JavaScript'],
  },
  {
    name: 'Interactive Rating Component',
    description: 'This is a nice, small project to practice handling user interactions and updating the DOM.',
    live_demo: 'https://chaw-bot.github.io/interactive-rating-component/',
    source_code: 'https://github.com/chaw-bot/interactive-rating-component/tree/development',
    image: interactiveRating,
    languages: ['HTML', 'CSS', 'JavaScript'],
  },
  {
    name: 'Lease-a-home',
    description: 'This is an apartment webapp that allows a user to sign up, log in, and make leases on particular apartments.',
    live_demo: 'https://lease-a-home.herokuapp.com/',
    source_code: 'https://github.com/HENRYKC24/lease-a-home-frontend',
    image: leaseAhome,
    languages: ['ReactJS', 'Redux', 'CSS', 'BootStrap'],
  },
  {
    name: 'Tip Calculator',
    description: 'A bill calculator that takes in the total bill and tip percentage and divides the bill equally amongst the available people.',
    live_demo: 'https://tip-calculator-chaw-bot.vercel.app/',
    source_code: 'https://github.com/chaw-bot/TipCalculator',
    image: tipcalculator,
    languages: ['JavaScript', 'HTML5', 'CSS'],
  },
  {
    name: 'Literary Arts Conference',
    description: 'This is a conference page for a literary art conference to be held on 08th july 2021. In this project I built the page using a variety of CSS properties such us, Flex-box, Grid, media queries, animations and transitions. I have used DOM manipulation as well.',
    live_demo: 'https://chaw-bot.github.io/Portal-Capstone-Project/',
    source_code: 'https://github.com/chaw-bot/Portal-Capstone-Project',
    image: conference,
    languages: ['HTML5', 'CSS', 'JavaScript'],
  },
  {
    name: 'Leaderboard',
    description: 'The leaderboard website displays scores submitted by different players. It also allows you to submit your score. All data is preserved thanks to the external Leaderboard API service.',
    live_demo: 'https://chaw-bot.github.io/Leaderboard/dist/',
    source_code: 'https://github.com/chaw-bot/Leaderboard',
    image: leaderboard,
    languages: ['HTML5', 'CSS', 'JavaScript', 'Webpack'],
  },
  {
    name: 'OOP School Library',
    description: 'This app is a tool one can use in a library to record what books are in the library and who borrows them. This app will allow a you to: Add new students or teachers.Add new books. Save records of who borrowed a given book and when.',
    live_demo: '',
    source_code: 'https://github.com/chaw-bot/OOP-School-Libraby',
    image: library,
    languages: ['Ruby', 'RSpec'],
  },
  {
    name: 'CoviData Metrics',
    description: 'This project is a mobile web application used to check a list of COVID-19 metrics worldwide.',
    live_demo: 'https://covidataworldwide.netlify.app/',
    source_code: 'https://github.com/chaw-bot/react-capstone-project',
    image: covid,
    languages: ['ReactJS', 'Redux', 'CSS'],
  },
  {
    name: "Space Travelers' Hub",
    description: 'This web application is built for a company that provides commercial and scientific space travel services. The application allows users to book rockets and join selected space missions.',
    live_demo: 'https://duls-travelers-hub.herokuapp.com/',
    source_code: 'https://github.com/wuyepabdul/space-travelers-hub',
    image: Screenshot1,
    languages: ['ReactJS', 'CSS'],
  },
  {
    name: 'EveryKwacha',
    description: 'A mobile web application where you can manage your budget: you have a list of transactions associated with a category, so that you can see how much money you spent and on what.',
    live_demo: 'https://every-kwacha.herokuapp.com/',
    source_code: 'https://github.com/chaw-bot/every-kwacha',
    image: everyKwacha,
    languages: ['Ruby', 'RoR', 'CSS', 'BootStrap'],
  },
];

export default projects;
