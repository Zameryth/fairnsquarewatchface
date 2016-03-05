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
  var $topRight = document.getElementById('topRight');
  var $botLeft = document.getElementById('botLeft');
  var $botRight = document.getElementById('botRight');

  if (localStorage.weather) {
    $hourTens.value = localStorage.hourTens;
    $hourOnes.value = localStorage.hourOnes;
    $minTens.value = localStorage.minTens;
    $minOnes.value = localStorage.minOnes;
    $topLeft.value = localStorage.topLeft;
    $botLeft.value = localStorage.botLeft;
    $topRight.value = localStorage.topRight;
    $botRight.value = localStorage.botRight;
  }
}

function getAndStoreConfigData() {
  var $hourTens = document.getElementById('hourTens');
  var $hourOnes = document.getElementById('hourOnes');
  var $minTens = document.getElementById('minTens');
  var $minOnes = document.getElementById('minOnes');
  var $topLeft = document.getElementById('topLeft');
  var $topRight = document.getElementById('topRight');
  var $botLeft = document.getElementById('botLeft');
  var $botRight = document.getElementById('botRight');

  var options = {
    hourTens: $hourTens.value,
    hourOnes: $hourOnes.value,
    minTens: $minTens.value,
    minOnes: $minOnes.value,
    topRight: $topRight.value,
    botRight: $botRight.value,
    topLeft: $topLeft.value,
    botLeft: $botLeft.value,
  };

  localStorage.hourTens = options.hourTens;
  localStorage.hourOnes = options.hourOnes;
  localStorage.minTens = options.minTens;
  localStorage.minOnes = options.minOnes;
  localStorage.topLeft = options.topLeft;
  localStorage.botLeft = options.botLeft;
  localStorage.topRight = options.topRight;
  localStorage.botRight = options.botRight;

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
