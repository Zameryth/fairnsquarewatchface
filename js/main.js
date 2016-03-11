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

  if (localStorage.weather) {
    $hourTens.value = localStorage.hourTens;
    $hourOnes.value = localStorage.hourOnes;
    $minTens.value = localStorage.minTens;
    $minOnes.value = localStorage.minOnes;
    $topLeft.value = localStorage.topLeft;
    $topLeftType.value = localStorage.topLeftType;
    $botLeft.value = localStorage.botLeft;
    $botLeftType.value = localStorage.botLeftType;
    $topRight.value = localStorage.topRight;
    $topRightType.value = localStorage.topRightType;
    $botRight.value = localStorage.botRight;
    $botRightType.value = localStorage.botRightType;
    $bgcolor.value = localStorage.bgcolor;
    $datecolor.value = localStorage.datecolor;
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

  localStorage.hourTens = options.hourTens;
  localStorage.hourOnes = options.hourOnes;
  localStorage.minTens = options.minTens;
  localStorage.minOnes = options.minOnes;
  localStorage.topLeft = options.topLeft;
  localStorage.topLeftType = options.topLeftType;
  localStorage.botLeft = options.botLeft;
  localStorage.botLeftType = options.botLeftType;
  localStorage.topRight = options.topRight;
  localStorage.topRightType = options.topRightType;
  localStorage.botRight = options.botRight;
  localStorage.botRightType = options.botRightType;
  localStorage.bgcolor = options.bgcolor;
  localStorage.datecolor = options.datecolor;

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
