app.factory('postsSvc', [function(){
  var o = [
    {
      title: 'google',
      link: 'google.com',
      upvotes: 6,
      comments: [
        {
          body: 'This site is awesome',
          author: 'Nguyen Quyet'
        },
        {
          body: 'This site is crap',
          author: 'Nguyen Huy'
        }
      ]
    },
    {
      title: 'youtube',
      link: 'youtube.com',
      upvotes: 5,
      comments: [
        {
          body: 'let\'s watch porn ',
          author: 'Nguyen Quyet'
        },
        {
          body: 'This site is fuckin awesome',
          author: 'Nguyen Huy'
        }
      ]
    }
  ];

  return o;
}]);