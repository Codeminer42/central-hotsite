// Import all scss to the project
import '../scss/styles.scss';

// Dummy imports to don't occur the error described on this issue:
// https://github.com/jantimon/html-webpack-plugin/issues/1709
import '../images/api.png';
import '../images/central-story.png';
import '../images/file-sharing.png';
import '../images/storyline-central.png';
import '../images/bell.png';
import '../images/charts.png';
import '../images/github-logo-white.png';
import '../images/tag-group.png';
import '../images/burn-up-chart.png';
import '../images/codeminer-logo-complete.png';
import '../images/tag-groups.png';
import '../images/central-16x16.png';
import '../images/codeminer42-logo-white.png';
import '../images/import.png';
import '../images/mattermost-icon.png';
import '../images/twitter-logo-white.png';
import '../images/central-32x32.png';
import '../images/cowork-dark.png';
import '../images/mentions.png';
import '../images/central-banner-top.jpg';
import '../images/discord-icon.png';
import '../images/sample-dashboard.png';
import '../images/central-banner.jpg';
import '../images/facebook-logo-white.png';
import '../images/slack-icon.png';

var year = new Date().getFullYear();

document.querySelector('.footer-copyright .copyright-year').innerHTML = year;
