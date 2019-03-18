// Controller to handle all login/* routes
/* eslint-disable no-console */
import Users from '../Models/Users.model';
import Tokens from '../Models/Tokens.model';

const mongoose = require('mongoose');

exports.confirm = (request, response) => {
  console.log(request.params.token);
  Tokens.findOne({ token: request.params.token }).exec((err, token) => {
    console.log(token);
    if (err) console.log(err.message);
    if (token) {
      // eslint-disable-next-line no-underscore-dangle
      Users.findById(token.userId).exec((errUser, user) => {
        console.log(user);
        if (errUser) console.log('An error cooured while verifying');
        if (user) {
          // eslint-disable-next-line no-param-reassign
          user.isVerified = true;
          // eslint-disable-next-line consistent-return
          user.save((err1) => {
            if (err1) {
              return response.status(500).send({ msg: err.message });
            }
            response.status(200).send('The account has been verified. Please log in.');
          });
        }
      });
    }
  });
};
// gnbmjdmlsstwnotf;
