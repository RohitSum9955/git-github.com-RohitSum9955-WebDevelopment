//question of freecode camp for practice with some modification
let recordCollection = {
    2548: {
      albumTitle: 'Slippery When Wet',
      artist: 'Bon Jovi',
      tracks: ['Let It Rock', 'You Give Love a Bad Name']
    },
    2468: {
      albumTitle: '1999',
      artist: 'Prince',
      tracks: ['1999', 'Little Red Corvette']
    },
    1245: {
      artist: 'Robert Palmer',
      tracks: []
    },
    5439: {
      albumTitle: 'ABBA Gold'
    }
  };


  function getvalues(recordCollection, id, prop){
    console.log(recordCollection[id][prop]);// they run for any id aur titte which are avilable
  }
  getvalues(recordCollection, 5439, "albumTitle");
  getvalues(recordCollection, 2468, "tracks");