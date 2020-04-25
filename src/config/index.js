require('dotenv').config();

const config = {
  TOKEN: process.env.TOKEN || '',
  HOOK: process.env.HOOK || '',
  githubUrl: process.env.GITHUB_URL || 'https://github.com/',
};

module.exports = { config };
