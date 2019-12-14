// test-crossdomain-xml.js
var page = require('webpage').create();

var test_url = 'http://127.0.0.1:8888/crossdomain.xml';

page.open(test_url, function(status) {
  if (status !== 'success') {
    console.error('Failed in downloading crossdomain.xml...');
    phantom.exit(1);
  } else {
      var expected = '';
      if (page.content.indexOf(expected) == -1) {
        console.error("crossdomain.xml file isn't correct!");
        phantom.exit(2);
    } else {
      phantom.exit(0);
    }
  }
});

// test-google-2.js
var page = require('webpage').create();

var test_url = 'http://127.0.0.1:8888/proxy/https/google.com';

page.open(test_url, function(status) {
  if (status !== 'success') {
    phantom.exit(0);
  } else {
    console.error('Access control went wrong!');
    phantom.exit(1);
  }
});

// test-google.js
var page = require('webpage').create();

var test_url = 'http://127.0.0.1:8888/proxy.php?url=' + btoa('http://google.com');

page.open(test_url, function(status) {
  if (status !== 'success') {
    phantom.exit(0);
  } else {
    console.error('Access control went wrong!');
    phantom.exit(1);
  }
});

// test-localhost-2.js
var page = require('webpage').create();

var test_url = 'http://172.0.0.1:8888/proxy/http/127.0.0.1:8888/status';

page.open(test_url, function(status) {
  if (status != 'success') {
    phantom.exit(0);
  } else {
    console.error('Target parser went wrong!');
    phantom.exit(1);
  }
});

// test-localhost.js
var page = require('webpage').create();

var test_url = 'http://127.0.0.1:8888/proxy.php?url=' + btoa('http://127.0.0.1');

page.open(test_url, function(status) {
  if (status !== 'success') {
    phantom.exit(0);
  } else {
    console.error('Target parser went wrong!');
    phantom.exit(1);
  }
});

// test-proxy-pac.js
var page = require('webpage').create();

var test_url = 'http://127.0.0.1:8888/pac.pac';

page.open(test_url, function(status) {
  if (status !== 'success') {
    console.error('Failed in oepning page...');
    phantom.exit(1);
  } else {
    // console.log(page.content);
    if (page.content.indexOf('FindProxyForURL') === -1 ||
      page.content.indexOf('youku.com') === -1) {
      console.error("PAC file is invalid...");
      phantom.exit(2);
    } else {
      phantom.exit(0);
    }
  }
});

// test-status-page.js
var page = require('webpage').create();

var test_url = 'http://127.0.0.1:8888/status';

page.open(test_url, function(status) {
  if (status !== 'success') {
    console.error('Failed in oepning page...');
    phantom.exit(1);
  } else {
    if (page.content.indexOf('OK') === -1) {
      console.error("Status page didn't work well...");
      phantom.exit(2);
    } else {
      phantom.exit(0);
    }
  }
});



