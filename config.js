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
    bio: '쉽게 이해하지 못하고 긴 설명글을 좋아하지 않는 나와 같은 분들을 위해서 시행착오를 줄여줄 수 있는 글을 작성하자',
    contacts: {
      email: 'jwy0565@gmail.com',
      github: 'circlezero',
    }
  }
};
