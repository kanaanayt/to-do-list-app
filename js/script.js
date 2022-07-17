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

  // let crossOutButton = document.createElement("crossOutButton");
  // let x = document.createTextNode("X");
  // crossOutButton.appendChild(x);
  // li.append(crossOutButton);

  let crossOutButton = $('<crossOutButton></crossOutButton>');
  crossOutButton.append(document.createTextNode('X'));
  li.append(crossOutButton);

  // crossOutButton.on('click', function func()
  // {
  //   li.addClass("delete");
  // });

  crossOutButton.on("click", deleteListItem);
  function deleteListItem(){
    li.addClass("delete")
  }

  $('#list').sortable();
}
