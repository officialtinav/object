var ehu = {
  name:"ehu",
  age: 14,
  grade: 10,
  friends: [
    "charley",
    "tj",
    "tiger",
    "dennis"]
};

var kathreen = {
  name:"kathreen",
  age: 17,
  grade: 12,
  friends: [
    "tina",
    "jacinda",
    "annie"]
};
var people = [ehu,kathreen];
// . is bounding kathreen with friends and one represents jacinda
window.alert(people[1].friends[1])

