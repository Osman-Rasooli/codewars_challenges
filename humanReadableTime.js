// Write a function, which takes a non-negative integer (seconds) as input and returns the time in a human-readable format (HH:MM:SS)

// HH = hours, padded to 2 digits, range: 00 - 99
// MM = minutes, padded to 2 digits, range: 00 - 59
// SS = seconds, padded to 2 digits, range: 00 - 59
// The maximum time never exceeds 359999 (99:59:59)

// humanReadable(0), '00:00:00')
// humanReadable(90), '00:01:30')



function humanReadable(seconds) {
  return [seconds / 3600, seconds % 3600 / 60, seconds % 60].map(function(v) {
    v = Math.floor(v).toString();
    return v.length == 1 ? '0' + v : v;
  }).join(':');
}

// OR

function humanReadable (seconds) {
  let sec = 0, min = 0, hr = 0, rem = 0;
  hr = Math.floor(seconds / 3600); if(hr < 10) hr = '0' + hr;
  min = Math.floor((seconds - hr*3600) / 60); if(min < 10) min = '0' + min;
  sec = seconds - hr*3600 - min*60; if(sec < 10) sec = '0' + sec;
  return hr + ':' + min + ':' + sec;
}
