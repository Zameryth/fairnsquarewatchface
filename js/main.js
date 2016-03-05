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

  if (localStorage.weather) {
    $hourTens.value = localStorage.hourTens;
    $hourOnes.value = localStorage.hourOnes;
    $minTens.value = localStorage.minTens;
    $minOnes.value = localStorage.minOnes;
  }
}

function getAndStoreConfigData() {
  var $hourTens = document.getElementById('hourTens');
  var $hourOnes = document.getElementById('hourOnes');
  var $minTens = document.getElementById('minTens');
  var $minOnes = document.getElementById('minOnes');

  var options = {
    hourTens: $hourTens.value,
    hourOnes: $hourOnes.value,
    minTens: $minTens.value,
    minOnes: $minOnes.value,
  };

  localStorage.hourTens = options.hourTens;
  localStorage.hourOnes = options.hourOnes;
  localStorage.minTens = options.minTens;
  localStorage.minOnes = options.minOnes;

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
