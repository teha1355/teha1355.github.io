let customName = document.getElementById('customname');
let randomize = document.querySelector('.randomize');
let story = document.querySelector('.story');

function randomValueFromArray(array){
  let random = Math.floor(Math.random()*array.length);
  return array[random];
}

let storyText ="It was 94 fahrenheit outside, so :insertx: decided to haunt the Willow Street House. When they got to :inserty:, they discovered that ghost hunters had begun their investigation of the house. The ghost hunters found evidence of the ghost using :insertz:. Bob realized the ghost was a poltergeist named :insertx: who weighs 300 pounds.";
let insertX = ["John Johnson", "Lisa Johnson", "Perry Johnson"];
let insertY = ["the basement", "the kitchen", "the living room"];
let insertZ = ["the emf detector", "the thermometer", "the spirit box"];

randomize.addEventListener('click', result);

function result() {

  newStory = storyText;
  let itemX= randomValueFromArray(insertX);
  let itemY= randomValueFromArray(insertY);
  let itemZ= randomValueFromArray(insertZ);
  newStory= newStory.replace(':insertx:', itemX);
  newStory= newStory.replace(':insertx:', itemX);
  newStory= newStory.replace(':inserty:', itemY);
  newStory= newStory.replace(':insertz:', itemZ);

  if(customName.value !== '') {
    let name = customName.value;
    newStory= newStory.replace('Bob', name);

  }

  if(document.getElementById("uk").checked) {
    let weight = Math.round(300/14) + ' stone';
    newStory=newStory.replace('300 pounds', weight);
    let temperature =  Math.round((94-32)*5/9) + ' centigrade';
    newStory= newStory.replace('94 fahrenheit', temperature);

  }


  story.textContent = newStory;
  story.style.visibility = 'visible';
}