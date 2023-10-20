const RegExUrl = /^https?:\/\/(?:www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b(?:[-a-zA-Z0-9()@:%_\+.~#?&\/=]*)$/i;
const RegExPassword = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$/;

const ResponseMessages = {
  200: {
    users: {
      loggedOut: 'User Is Logged Out',
    },
  },
  401: {
    users: {
      wrongEmailPassword: 'Wrong email or password',
      invalidId: 'Invalid User ID',
    },
  },
  403: {
    movies: {
      accessDenied: 'Access Denied',
    },
  },
  404: {
    page: {
      notFound: 'Page Not Found',
    },
  },
  409: {
    users: {
      emailIsTaken: 'Email is Already Taken',
    },
  },
};

module.exports = {
  RegExUrl,
  RegExPassword,
  ResponseMessages,
};
