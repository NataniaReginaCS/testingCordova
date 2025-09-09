var exec = require('cordova/exec');

exports.showToast = (message, duration, successCallback, errorCallback) => {
  exec(successCallback, errorCallback, 'OSPlugin', 'showToast', [
    message,
    duration,
  ]);
};
