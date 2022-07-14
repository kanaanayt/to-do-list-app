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
    li.addClass("strike");
  });

  let crossOutButton = document.createElement("crossOutButton");
  let x = document.createTextNode("X");
  crossOutButton.appendChild(x);
  li.append(crossOutButton);

  li.on('click', function()
  {
    li.addClass("delete");
  });

  $('#list').sortable();
}
