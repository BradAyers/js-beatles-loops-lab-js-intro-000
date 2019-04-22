// add solution here
function theBeatlesPlay(musicians, instruments) {
  var whoPlaysWhat = [];
  for (i = 0; i < musicians.length; i++) {
    whoPlaysWhat = [...whoPlaysWhat, `${musicians} plays ${instruments}`];
  }
  return whoPlaysWhat;
}