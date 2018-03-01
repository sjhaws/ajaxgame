var currentGame = {};
var showForm = false;

$(document).ready( function(){
  $(".game-item").on("click", function(){
    currentGame.id = this.dataset.id
    currentGame.name = this.dataset.name
    $.ajax({
      url: "/games/" + currentGame.id + "/characters",
      method: "GET",
      dateType: "JSON"
    }).done( function(characters){
      $("#game").text("Characters in " + currentGame.name)
      var list = $("#characters");
      list.empty()
      characters.forEach(function(char) {
        var li = "<li data-character-id='" + char.id + "'>" + char.name + " - " + char.power + "</li>"
        list.append(li)
      })
    })
  })

  $("")
})