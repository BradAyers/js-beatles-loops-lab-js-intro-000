// add solution here
function theBeatlesPlay(musicians, instruments) {
  var whoPlaysWhat = [];
  for (var i = 0; i < musicians.length; i++) {
    whoPlaysWhat = [...whoPlaysWhat, `${musicians[i]} plays ${instruments[i]}`];
  }
  return whoPlaysWhat;
}
