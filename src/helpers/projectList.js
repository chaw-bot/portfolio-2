import conference from '../images/conference.png';
import covid from '../images/covid.png';
import leaderboard from '../images/leaderboard.png';
import library from '../images/library.png';
import tipcalculator from '../images/tipcalculator.png';
import Screenshot1 from '../images/Screenshot1.png';

const projects = [
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
];

export default projects;
