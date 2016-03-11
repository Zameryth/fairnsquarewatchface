(function() {
  loadOptions();
  submitHandler();
})();

function submitHandler() {
  var $submitButton = $('#submitButton');

  $submitButton.on('click', function() {
    console.log('Submit');

    var return_to = getQueryParam('return_to', 'pebblejs://close#');
    document.location = return_to + encodeURIComponent(JSON.stringify(getAndStoreConfigData()));
  });
}

function loadOptions() {
  var $hourTens = document.getElementById('hourTens');
  var $hourOnes = document.getElementById('hourOnes');
  var $minTens = document.getElementById('minTens');
  var $minOnes = document.getElementById('minOnes');
  var $topLeft = document.getElementById('topLeft');
  var $topLeftType = document.getElementById('topLeftType');
  var $topRight = document.getElementById('topRight');
  var $topRightType = document.getElementById('topRightType');
  var $botLeft = document.getElementById('botLeft');
  var $botLeftType = document.getElementById('botLeftType');
  var $botRight = document.getElementById('botRight');
  var $botRightType = document.getElementById('botRightType');
  var $bgcolor = document.getElementById('bgcolor');
  var $datecolor = document.getElementById('datecolor');

  if (window.localStorage.hourTens) {
    $hourTens.value = window.localStorage.hourTens;
    $hourOnes.value = window.localStorage.hourOnes;
    $minTens.value = window.localStorage.minTens;
    $minOnes.value = window.localStorage.minOnes;
    $topLeft.value = window.localStorage.topLeft;
    $topLeftType.value = window.localStorage.topLeftType;
    $botLeft.value = window.localStorage.botLeft;
    $botLeftType.value = window.localStorage.botLeftType;
    $topRight.value = window.localStorage.topRight;
    $topRightType.value = window.localStorage.topRightType;
    $botRight.value = window.localStorage.botRight;
    $botRightType.value = window.localStorage.botRightType;
    $bgcolor.value = window.localStorage.bgcolor;
    $datecolor.value = window.localStorage.datecolor;
  }
}

function getAndStoreConfigData() {
  var $hourTens = document.getElementById('hourTens');
  var $hourOnes = document.getElementById('hourOnes');
  var $minTens = document.getElementById('minTens');
  var $minOnes = document.getElementById('minOnes');
  var $topLeft = document.getElementById('topLeft');
  var $topLeftType = document.getElementById('topLeftType');
  var $topRight = document.getElementById('topRight');
  var $topRightType = document.getElementById('topRightType');
  var $botLeft = document.getElementById('botLeft');
  var $botLeftType = document.getElementById('botLeftType');
  var $botRight = document.getElementById('botRight');
  var $botRightType = document.getElementById('botRightType');
  var $bgcolor = document.getElementById('bgcolor');
  var $datecolor = document.getElementById('datecolor');

  var options = {
    hourTens: $hourTens.value,
    hourOnes: $hourOnes.value,
    minTens: $minTens.value,
    minOnes: $minOnes.value,
    topRight: $topRight.value,
    topRightType: $topRightType.value,
    botRight: $botRight.value,
    botRightType: $botRightType.value,
    topLeft: $topLeft.value,
    topLeftType: $topLeftType.value,
    botLeft: $botLeft.value,
    botLeftType: $botLeftType.value,
    bgcolor: $bgcolor.value,
    datecolor: $datecolor.value,
  };

  window.localStorage.hourTens = options.hourTens;
  window.localStorage.hourOnes = options.hourOnes;
  window.localStorage.minTens = options.minTens;
  window.localStorage.minOnes = options.minOnes;
  window.localStorage.topLeft = options.topLeft;
  window.localStorage.topLeftType = options.topLeftType;
  window.localStorage.botLeft = options.botLeft;
  window.localStorage.botLeftType = options.botLeftType;
  window.localStorage.topRight = options.topRight;
  window.localStorage.topRightType = options.topRightType;
  window.localStorage.botRight = options.botRight;
  window.localStorage.botRightType = options.botRightType;
  window.localStorage.bgcolor = options.bgcolor;
  window.localStorage.datecolor = options.datecolor;

  console.log('Got options: ' + JSON.stringify(options));
  return options;
}

function getQueryParam(variable, defaultValue) {
  var query = location.search.substring(1);
  var vars = query.split('&');
  for (var i = 0; i < vars.length; i++) {
    var pair = vars[i].split('=');
    if (pair[0] === variable) {
      return decodeURIComponent(pair[1]);
    }
  }
  return defaultValue || false;
}
