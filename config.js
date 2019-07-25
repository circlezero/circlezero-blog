'use strict';

module.exports = {
  url: 'https://circlezeroblog.netlify.com/',
  pathPrefix: '/',
  title: 'circlezero dev blog',
  subtitle: 'Front-End Dev Blog',
  copyright: '© 2019-CircleZero(Cho WonYeong) All rights reserved.',
  disqusShortname: 'circlezeroblog',
  postsPerPage: 4,
  googleAnalyticsId: 'UA-143694818-1',
  menu: [
    {
      label: 'Articles',
      path: '/'
    },
    {
      label: 'About me',
      path: '/pages/about'
    },
    {
      label: 'Contact me',
      path: '/pages/contacts'
    }
  ],
  author: {
    name: 'CircleZero',
    photo: '/photo.jpg',
    bio: '쉽게 읽히고 전달이 잘 되는 글을 작성하고자 노력하고 있습니다',
    contacts: {
      email: 'jwy0565@gmail.com',
      github: 'circlezero',
    }
  }
};
