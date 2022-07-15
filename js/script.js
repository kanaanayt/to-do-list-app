function newItem()
{

  let li = $('<li></li>');

  let inputValue = $('input').val();
  let text = document.createTextNode(inputValue);
  li.append(text);

  if(inputValue.length < 1) {
    alert('too short')
  }
  else {
    $('#list').append(li);
  }

  li.on('dblclick', function()
  {
    li.toggleClass("strike");
  });

  let crossOutButton = document.createElement("crossOutButton");
  let x = document.createTextNode("X");
  crossOutButton.append(x);
  li.append(crossOutButton);

  crossOutButton.on('click', function func()
  {
    li.addClass("delete");
  });

  $('#list').sortable();
}
