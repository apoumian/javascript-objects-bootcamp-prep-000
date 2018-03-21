var playlist = { ["Michael Jackson"]: "Bad"};

function updatePlaylist(obj, artist, song) {
  obj[artist] = song;
  return obj;
}

function removeFromPlaylist(obj, artist) {
  delete obj[artist];
  return obj;
}
