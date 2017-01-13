var SoundCloudAPI = {};
SoundCloudAPI.init= function(){
SC.initialize({
  client_id: 'cd9be64eeb32d1741c17cb39e41d254d'
});
};
SoundCloudAPI.init();
// find all sounds of buskers licensed under 'creative commons share alike'

SoundCloudAPI.getTrack = function(tracks){
SC.get('/tracks', {
  q: 'buskers', license: 'cc-by-sa'
}).then(function(tracks) {
  console.log(tracks);
  SoundCloudAPI.renderTrack(tracks);
});
};
SoundCloudAPI.getTrack();
SoundCloudAPI.renderTrack = function(tracks){
    console.log(tracks);
    tracks.forEach(function(track){
      console.log("I am each track",track.artwork_url, track.user.avatar_url);

     var card  = document.createElement('div');
     card.classList.add("card");

     var image = document.createElement('div');
     image.classList.add("image");

     var img = document.createElement('img');
     img.classList.add("image_img");
     img.src = track.artwork_url || 'http://lorempixel.com/100/100/';

     image.appendChild(img);


     var content = document.createElement('div');
     content.classList.add("content");

     var header = document.createElement('div');
     header.classList.add('header');
     content.appendChild(header);

     var atag = document.createElement('a');
     atag.href = track.permalink_url;
     atag.innerHTML = track.title;
     atag.target ="_blank";

     header.appendChild(atag);//a tag in content

     var lastdiv = document.createElement('div');
     lastdiv.classList.add('ui','bottom', 'attached','button','js-button');

     var itag = document.createElement('i');
     itag.classList.add('add','icon');
     var span = document.createElement('span');
     span.innerHTML = "Add to PlayList";
     lastdiv.appendChild(itag);
     lastdiv.appendChild(span);

     var serachResult = document.querySelector(".js-search-results");
     serachResult.appendChild(card);

    card.appendChild(image);//image div
     card.appendChild(content);//content div
     card.appendChild(lastdiv); // lastdiv div
     });
};
