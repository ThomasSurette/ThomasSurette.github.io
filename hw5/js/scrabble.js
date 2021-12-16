var ScrabbleTiles = [] ;
ScrabbleTiles["A"] = { "value" : 1,  "original-distribution" : 9,  "number-remaining" : 9, "image" : "/hw5/graphics_data/Scrabble_Tiles/Scrabble_Tile_A.jpg" } ;
ScrabbleTiles["B"] = { "value" : 3,  "original-distribution" : 2,  "number-remaining" : 2, "image" : "/hw5/graphics_data/Scrabble_Tiles/Scrabble_Tile_B.jpg" } ;
ScrabbleTiles["C"] = { "value" : 3,  "original-distribution" : 2,  "number-remaining" : 2, "image" : "/hw5/graphics_data/Scrabble_Tiles/Scrabble_Tile_C.jpg" } ;
ScrabbleTiles["D"] = { "value" : 2,  "original-distribution" : 4,  "number-remaining" : 4, "image" : "/hw5/graphics_data/Scrabble_Tiles/Scrabble_Tile_D.jpg" } ;
ScrabbleTiles["E"] = { "value" : 1,  "original-distribution" : 12, "number-remaining" : 1, "image" : "/hw5/graphics_data/Scrabble_Tiles/Scrabble_Tile_E.jpg" } ;
ScrabbleTiles["F"] = { "value" : 4,  "original-distribution" : 2,  "number-remaining" : 2, "image" : "/hw5/graphics_data/Scrabble_Tiles/Scrabble_Tile_F.jpg" } ;
ScrabbleTiles["G"] = { "value" : 2,  "original-distribution" : 3,  "number-remaining" : 3, "image" : "/hw5/graphics_data/Scrabble_Tiles/Scrabble_Tile_G.jpg" } ;
ScrabbleTiles["H"] = { "value" : 4,  "original-distribution" : 2,  "number-remaining" : 2, "image" : "/hw5/graphics_data/Scrabble_Tiles/Scrabble_Tile_H.jpg" } ;
ScrabbleTiles["I"] = { "value" : 1,  "original-distribution" : 9,  "number-remaining" : 9, "image" : "/hw5/graphics_data/Scrabble_Tiles/Scrabble_Tile_I.jpg" } ;
ScrabbleTiles["J"] = { "value" : 8,  "original-distribution" : 1,  "number-remaining" : 1, "image" : "/hw5/graphics_data/Scrabble_Tiles/Scrabble_Tile_J.jpg" } ;
ScrabbleTiles["K"] = { "value" : 5,  "original-distribution" : 1,  "number-remaining" : 1, "image" : "/hw5/graphics_data/Scrabble_Tiles/Scrabble_Tile_K.jpg" } ;
ScrabbleTiles["L"] = { "value" : 1,  "original-distribution" : 4,  "number-remaining" : 4, "image" : "/hw5/graphics_data/Scrabble_Tiles/Scrabble_Tile_L.jpg" } ;
ScrabbleTiles["M"] = { "value" : 3,  "original-distribution" : 2,  "number-remaining" : 2, "image" : "/hw5/graphics_data/Scrabble_Tiles/Scrabble_Tile_M.jpg" } ;
ScrabbleTiles["N"] = { "value" : 1,  "original-distribution" : 6,  "number-remaining" : 6, "image" : "/hw5/graphics_data/Scrabble_Tiles/Scrabble_Tile_N.jpg" } ;
ScrabbleTiles["O"] = { "value" : 1,  "original-distribution" : 8,  "number-remaining" : 8, "image" : "/hw5/graphics_data/Scrabble_Tiles/Scrabble_Tile_O.jpg" } ;
ScrabbleTiles["P"] = { "value" : 3,  "original-distribution" : 2,  "number-remaining" : 2, "image" : "/hw5/graphics_data/Scrabble_Tiles/Scrabble_Tile_P.jpg" } ;
ScrabbleTiles["Q"] = { "value" : 10, "original-distribution" : 1,  "number-remaining" : 1, "image" : "/hw5/graphics_data/Scrabble_Tiles/Scrabble_Tile_Q.jpg" } ;
ScrabbleTiles["R"] = { "value" : 1,  "original-distribution" : 6,  "number-remaining" : 6, "image" : "/hw5/graphics_data/Scrabble_Tiles/Scrabble_Tile_R.jpg" } ;
ScrabbleTiles["S"] = { "value" : 1,  "original-distribution" : 4,  "number-remaining" : 4, "image" : "/hw5/graphics_data/Scrabble_Tiles/Scrabble_Tile_S.jpg" } ;
ScrabbleTiles["T"] = { "value" : 1,  "original-distribution" : 6,  "number-remaining" : 6, "image" : "/hw5/graphics_data/Scrabble_Tiles/Scrabble_Tile_T.jpg" } ;
ScrabbleTiles["U"] = { "value" : 1,  "original-distribution" : 4,  "number-remaining" : 4, "image" : "/hw5/graphics_data/Scrabble_Tiles/Scrabble_Tile_U.jpg" } ;
ScrabbleTiles["V"] = { "value" : 4,  "original-distribution" : 2,  "number-remaining" : 2, "image" : "/hw5/graphics_data/Scrabble_Tiles/Scrabble_Tile_V.jpg" } ;
ScrabbleTiles["W"] = { "value" : 4,  "original-distribution" : 2,  "number-remaining" : 2, "image" : "/hw5/graphics_data/Scrabble_Tiles/Scrabble_Tile_W.jpg" } ;
ScrabbleTiles["X"] = { "value" : 8,  "original-distribution" : 1,  "number-remaining" : 1, "image" : "/hw5/graphics_data/Scrabble_Tiles/Scrabble_Tile_X.jpg" } ;
ScrabbleTiles["Y"] = { "value" : 4,  "original-distribution" : 2,  "number-remaining" : 2, "image" : "/hw5/graphics_data/Scrabble_Tiles/Scrabble_Tile_Y.jpg" } ;
ScrabbleTiles["Z"] = { "value" : 10, "original-distribution" : 1,  "number-remaining" : 1, "image" : "/hw5/graphics_data/Scrabble_Tiles/Scrabble_Tile_Z.jpg" } ;
ScrabbleTiles["_"] = { "value" : 0,  "original-distribution" : 2,  "number-remaining" : 2, "image" : "/hw5/graphics_data/Scrabble_Tiles/Scrabble_Tile_Blank.jpg" } ;

board = {}
board.slots = [
    {"wordMult" : 1},
    {"wordMult" : 2},
    {"wordMult" : 1},
    {"wordMult" : 1},
    {"wordMult" : 1},
    {"wordMult" : 2},
    {"wordMult" : 1},
];

board.constructBoard = function(){
    for(i = 0; i<7; i++){
        bgImage = ""
        if(i == 1 || i == 5){
            bgImage = "url('/hw5/graphics_data/doubleword.png')"
        }
        slot = $(`<div class="boardSlot" style="background-image: ${bgImage}; background-size: contain;" index="${i}"></div>`)
        $("#board").append(slot)
    }
}

board.getTileIdFromSlot = function(index) {
    return board.slots[index].tileId;
  }
  
  board.getLetterFromSlot = function(index) {
    return board.slots[index].letter;
  }

board.isSlotEmpty = function(index) {
    return typeof(board.slots[index].tileId) === "undefined";
}

board.addToSlot = function(tileId, letter, index) {
    for (i = 0; i < 7; i++) {
        if (board.slots[i].tileId === tileId) {
            delete board.slots[i].tileId;
            delete board.slots[i].letter;
        }
    }
    board.slots[index].letter = letter;
    board.slots[index].tileId = tileId;
}

board.deleteFromSlot = function(i) {
    delete board.slots[i].tileId;
    delete board.slots[i].letter;
  }

board.clearBoard = function() { 
    $("#board img").remove();

      for (i = 0; i < 7; i++) {
        delete board.slots[i].tileId;
        delete board.slots[i].letter;
      }
  }  

board.clearSlot = function(i) {
    delete board.slots[i].tileId;
    delete board.slots[i].letter;
}

board.findSlotFromTileId = function(tileId) {
      for (i = 0; i < 7; i++) {
        if (board.slots[i].tileId === tileId) {
          return i;
        }
      }
    return -1;
}

score = {"totalScore": 0, "highestScore": 0};

score.calculateScore = function() {
    var multiplier = 1, boardScore = 0;
    if (!validateWord()) {
      return 0;
    }
    for (i = 0; i < 7; i++) {
        letter = board.slots[i].letter;
        if (letter) {
            boardScore += ScrabbleTiles[letter].value;
            multiplier *= board.slots[i].wordMult;
        }
    }
    return boardScore *= multiplier;
}

score.refresh = function() {
    boardScore = score.calculateScore();
  
    $("#score").css("color", "#000000");
    $("#score").html(score.totalScore + " (+<span id='boardScore'>" + boardScore + "</span>)");
    if (boardScore > 0) {
      $("#boardScore").css("color", "#00FF00");
    } else {
      $("#boardScore").css("color", "#FF0000");
    }
  
    $("#highestScore").html(score.highestScore);
}

score.reset = function() {
    score.totalScore = 0;
    $("#score").html(0);
    $("#highestScore").css("color", "#000000");
  }

score.commit = function() {
    boardScore = score.calculateScore();
    score.totalScore += boardScore;
    $("#score").html(score.totalScore);
    if (score.totalScore > 0) {
        $("#score").css("color", "#00FF00");
    }

    if (score.totalScore > score.highestScore) {
        score.highestScore = score.totalScore;
        $("#highestScore").html(score.totalScore);
        $("#highestScore").css("color", "#00FF00");
    }
}

board.isLeftmostSlot = function(to, from){
    leftMost = 7;
    for(i = 6; i>=0; i--){
        if(board.isSlotEmpty(i) || (i === from)){
            leftMost = i
        }
    }
    return(to == leftMost);
}

function getFromDeck(n) {
    var hand = [];
    var allTiles = [];
  
    for (var key in ScrabbleTiles) {
      if (ScrabbleTiles.hasOwnProperty(key)) {
        var remaining = ScrabbleTiles[key]["number-remaining"];
        for (var i = 0; i < remaining; i++) {
          allTiles.push(key);
        }
      }
    }
  
    for (var i = 0; i < n; ++i) {
      if (allTiles.length) {
        var randomIndex = getRandomInt(0, Object.keys(allTiles).length - 1);
        var randomLetter = allTiles[randomIndex];
        hand.push(randomLetter);
        ScrabbleTiles[randomLetter]["number-remaining"]--;
        allTiles.splice(randomIndex, 1);
      }
    }
  
    $("#remainingTiles").html(allTiles.length);
  
    return hand;
  }

function numTilesInDeck() {
    var numTotalTiles = 0;
  
    for (var key in ScrabbleTiles) {
      if (ScrabbleTiles.hasOwnProperty(key)) {
        numTotalTiles += ScrabbleTiles[key]["number-remaining"];
      }
    }
  
    return numTotalTiles;
  }
  

  function numTilesOnRack() {
    return $("#tileRack img").length;
  }
  

  function toggleFinishButton(toFinishButton) {
    var nextWordButton = document.getElementById("nextWordButton");
    if (toFinishButton) {
      nextWordButton.innerHTML = "Finish";
      nextWordButton.onclick = function(event) {
        finish();
      }
    } else {
      nextWordButton.innerHTML = "Next Word";
      nextWordButton.onclick = function(event) {
        nextWord();
      }
    }
  }

function restart() {
    $("#tileRack img").remove();
    board.clearBoard();
    for (var key in ScrabbleTiles) {
      if (ScrabbleTiles.hasOwnProperty(key)) {
        ScrabbleTiles[key]["number-remaining"] = ScrabbleTiles[key]["original-distribution"];
      }
    }
    toggleFinishButton(false);
    score.reset();
    nextWord();
  }

function nextWord() {
    var key, tileImageId, newTile;
    score.commit();
    board.clearBoard();
    newTiles = getFromDeck(7 - numTilesOnRack());
    for (i = 0; i < newTiles.length; ++i) {
      key = newTiles[i];
      tileImageId = generateTileId();
      newTile = $(`<img id="${tileImageId}" src="${ScrabbleTiles[key]["image"]}" class="tile" letter="${key}">`);
      if (key == "_") {
        newTile.addClass("blankTile");
      }
      $("#tileRack").append(newTile);
      newTile.addClass("tileInRack");
      newTile.draggable({
        revertDuration: 200,
        start: function(event, ui) {
          $(this).css("z-index", 99);
          $(this).draggable("option", "revert", "invalid");
        },
        stop: function() {
          $(this).css("z-index", "");
        }
      });
    }
    $("#word").html("");
    checkSingleWord(false);
    checkTwoLettersAndMore(false);
    checkDictionary(false);
  
    if (numTilesInDeck() == 0) {
      toggleFinishButton(true);
      document.getElementById("nextWordButton").disabled = false;
    } else {
      document.getElementById("nextWordButton").disabled = true;
    }
  }

  function finish() {
    score.commit();
    document.getElementById("nextWordButton").disabled = true; 
    $(".tile").draggable("disable");
  }
  
  function generateTileId() {
    var id;
    generateTileId.id = ++generateTileId.id || 1;
    id = "tile" + generateTileId.id.toString();
    return id;
  }
  
  function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  var dictionary = new Set();

  function isDictionaryWord(possibleWord) {
    if (possibleWord.length > 0 && dictionary.has(possibleWord+'\r')) {
      return true;
    } 
    return false;
  }

  function validateWord() {
    var letter, errorCount, word = "";

    for (i = 0; i < 7; i++) {
        letter = board.getLetterFromSlot(i);
        if (typeof(letter) === "undefined") {
        word += "\xB7";
        } else {
        word += letter;
        }
    }
    errorCount = 0;
    if(word[0] === "\xB7") {
        checkFirstSlot(false);
        errorCount++;
    } else {
        checkFirstSlot(true);
    }
    word = word.replace(/\xB7+$/, "");
  
    $("#word").html(word);

    if (word == "") {
      checkSingleWord(false);
      errorCount++;
    } else {
      var rgxDisconnectedWord = new RegExp("[A-Z_]\xB7+[A-Z_]");
      if (rgxDisconnectedWord.test(word)) {
        checkSingleWord(false);
        errorCount++;
      } else {
        checkSingleWord(true);
      }
    }
  
    if (word.length >= 2) {
      checkTwoLettersAndMore(true);
    } else {
      checkTwoLettersAndMore(false);
      ++errorCount;
    }
    if (isDictionaryWord(word)) {
      checkDictionary(true);
    } else {
      checkDictionary(false);
      ++errorCount;
    }
  
    if (errorCount) {
      document.getElementById("nextWordButton").disabled = true;
      $("#word").css("color", "#FF0000");
      return false;
    }
  
    $("#word").css("color", "#00FF00");
    document.getElementById("nextWordButton").disabled = false;
    return word;
  }

function checkTwoLettersAndMore(check) {
    if (!check) {
        if($("#lengthError").html() === undefined)
            $("#errors").append("<div class=\"my-1\" id=\"lengthError\">Word must be 2 or more letters</div>")
    } else {
      $("#lengthError").remove()
    }
  }

function checkFirstSlot(check) {
    if (!check) {
        if($("#firstSlotError").html() === undefined)
            $("#errors").append("<div class=\"my-1\" id=\"firstSlotError\">Word must start at the first slot</div>")
    } else {
        $("#firstSlotError").remove()
    }
}  

function checkSingleWord(check) {
    if (!check) {
        if($("#spaceError").html() === undefined)
            $("#errors").append("<div class=\"my-1\" id=\"spaceError\">Must be a single word with no spaces</div>")
    } else {
        $("#spaceError").remove()
    }
}

function checkDictionary(check) {
    if (!check) {
        if($("#dictionaryError").html() === undefined)
            $("#errors").append("<div class=\"my-1\" id=\"dictionaryError\">Word must be in the dictionary</div>")
    } else {
        $("#dictionaryError").remove()
    }
}

function openBlankTileDialog(blankTileDraggable, tileId, index) {
    var tileSelectorDialog = $("<div id='blankTileDialog'></div>");
    var letterKey, newTile;
    for (letterKey in ScrabbleTiles) {
      if (letterKey != "_") {
        newTile = $("<img src='" + ScrabbleTiles[letterKey]["image"] + "' class='tileInDialog' letter='" + letterKey + "'>");
  
        newTile.click(function() {
          var newLetter = $(this).attr("letter");
  
          blankTileDraggable.attr("letter", newLetter);
          blankTileDraggable.attr("src", ScrabbleTiles[newLetter]["image"]);

          tileId = blankTileDraggable.attr("id");
          board.addToSlot(tileId, newLetter, index);

          validateWord();

          score.refresh();
  
          tileSelectorDialog.dialog("close");
        });
        tileSelectorDialog.append(newTile);
      }
    }
    tileSelectorDialog.css("z-index", 100);
    tileSelectorDialog.dialog({
      modal: true,
      draggable: false,
      resizable: false,
      minWidth: 200
    });
  }


$(function () {
    board.constructBoard();
    $.ajax({
        url: "/hw5/doc/words.txt",
        success: function(result) {
          var words = result.split("\n");
          for (var i = 0; i < words.length; ++i) {
            dictionary.add(words[i].toUpperCase());
          }
        }
      });
    $(".boardSlot").droppable({
        accept: function(draggable) {      
            index = $(this).attr("index");
            from = board.findSlotFromTileId(draggable.attr("id"));
            return(board.isLeftmostSlot(index, from));
          },
          activeClass: "dragHighlight",
          hoverClass: "hoverHighlight",
        drop: function(event, ui) {
        var index, letter, word, tileId, prev;
        ui.draggable.removeClass("tileInRack");
        ui.draggable.addClass("tileOnBoard");  
        index = $(this).attr("index");
        letter = ui.draggable.attr("letter");
        tileId = ui.draggable.attr("id");
        $(ui.draggable).css("top", "");
        $(ui.draggable).css("left", "");
        $(this).append(ui.draggable);
        previousPosition = board.findSlotFromTileId(tileId);
        if ($(ui.draggable).hasClass("blankTile") && previousPosition === -1) {
            openBlankTileDialog($(ui.draggable), tileId, index);
        } else {
            board.addToSlot(tileId, letter, index);
            validateWord();
            score.refresh();
        }}
        });
    $("#tileRack").droppable({
        activeClass: "dragHighlight",
        hoverClass: "hoverHighlight",
        tolerance: "touch",
        drop: function(event, ui) {
          var tileId, word, pos;
          ui.draggable.removeClass("tileOnBoard");
          ui.draggable.addClass("tileInRack");
          if ($(ui.draggable).hasClass("blankTile")) {
            $(ui.draggable).attr("src", ScrabbleTiles["_"]["image"]);
          }
    
          tileId = ui.draggable.attr("id");
          pos = board.findSlotFromTileId(tileId);
          if (pos >= 0) {
            board.deleteFromSlot(pos);
            $(this).append(ui.draggable);
            ui.draggable.css({"position": "relative", "top": "", "left": ""});
            word = validateWord();
            score.refresh();
          } else {
            ui.draggable.draggable("option", "revert", true);
          }
        }
      });
});

restart();