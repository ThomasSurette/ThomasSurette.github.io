// List of all the scrabble tiles, how many there are at the beginning, how many are left, and their images
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

// The board object that stores the board slots and associated functions
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

// Makes the html for the board
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

// Given the index of a slot, returns the tile id of the tile in that slot
board.getTileIdFromSlot = function(index) {
    return board.slots[index].tileId;
  }

// Given the index of a slot, returns the letter of the tile in that slot
board.getLetterFromSlot = function(index) {
    return board.slots[index].letter;
}

// Returns whether a given slot is empty
board.isSlotEmpty = function(index) {
    return typeof(board.slots[index].tileId) === "undefined";
}

// Adds a tile with the given id and letter at the slot at the given index
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

// Removes the tile in the slot at the given index
board.deleteFromSlot = function(index) {
    delete board.slots[index].tileId;
    delete board.slots[index].letter;
  }

// Removes all the tiles on the board
board.clearBoard = function() { 
    $("#board img").remove();

      for (i = 0; i < 7; i++) {
        delete board.slots[i].tileId;
        delete board.slots[i].letter;
      }
  }  

// Returns the index of the slot that a tile is in given its id, or -1 if it's in the rack
board.findSlotFromTileId = function(tileId) {
      for (i = 0; i < 7; i++) {
        if (board.slots[i].tileId === tileId) {
          return i;
        }
      }
    return -1;
}

// Checks if a given slot is the leftmost valid slot
board.isLeftmostSlot = function(to, from){
    leftMost = 7;
    for(i = 6; i>=0; i--){
        if(board.isSlotEmpty(i) || (i === from)){
            leftMost = i
        }
    }
    return(to == leftMost);
}

score = {"totalScore": 0, "highestScore": 0};

// Calculates the current score
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

// Updates the score to reflect the current score of the board
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

// Resets the score to 0
score.reset = function() {
    score.totalScore = 0;
    $("#score").html(0);
    $("#highestScore").css("color", "#000000");
  }

// Adds the board score to the total score and updated the high score if necessary
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


// Gets a new random tile from the deck
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

// Returns the number of tiles still in the deck
function numTilesInDeck() {
    var numTotalTiles = 0;
  
    for (var key in ScrabbleTiles) {
      if (ScrabbleTiles.hasOwnProperty(key)) {
        numTotalTiles += ScrabbleTiles[key]["number-remaining"];
      }
    }
  
    return numTotalTiles;
  }
  
// Returns the number of tiles in the rack
function numTilesOnRack() {
    return $("#tileRack img").length;
}

// Changes the next word button to finish when the deck runs out
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

// Restarts the game
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

// Gets the next word
function nextWord() {
    var key, tileImageId, newTile;
    score.commit();
    board.clearBoard();
    newTiles = getFromDeck(7 - numTilesOnRack());
    // This loop adds new tiles to the rack
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

// Finishes the game
  function finish() {
    score.commit();
    document.getElementById("nextWordButton").disabled = true; 
    $(".tile").draggable("disable");
  }

// Generates an id for a tile
  function generateTileId() {
    var id;
    generateTileId.id = ++generateTileId.id || 1;
    id = "tile" + generateTileId.id.toString();
    return id;
  }
  
  // Returns a random integer
  function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  // Makes a set to use for the dictionary
  var dictionary = new Set();

  // Checks the dictionary for the given word
  function isDictionaryWord(possibleWord) {
    if (possibleWord.length > 0 && dictionary.has(possibleWord)) {
      return true;
    } 
    return false;
  }

  // Checks to see if a word meets all of the given criteria
  function validateWord() {
    var letter, errorCount, word = "";

    for (i = 0; i < 7; i++) {
        letter = board.getLetterFromSlot(i);
        if (typeof(letter) === "undefined") {
        // Dot character represents empty slots
        word += "\xB7";
        } else {
        word += letter;
        }
    }
    // Keeps track of number of errors
    errorCount = 0;

    // Makes sure word starts in the first slot
    if(word[0] === "\xB7") {
        checkFirstSlot(false);
        errorCount++;
    } else {
        checkFirstSlot(true);
    }

    // Removes trailing dots
    word = word.replace(/\xB7+$/, "");
  
    $("#word").html(word);

    // Makes sure that there's no gaps in the word
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
  
    // Makes sure the word has at least 2 letters
    if (word.length >= 2) {
      checkTwoLettersAndMore(true);
    } else {
      checkTwoLettersAndMore(false);
      ++errorCount;
    }

    // Makes sure the word is in the dictionary
    if (isDictionaryWord(word)) {
      checkDictionary(true);
    } else {
      checkDictionary(false);
      ++errorCount;
    }
  
    // Disables the next word button if there's errors
    if (errorCount) {
      document.getElementById("nextWordButton").disabled = true;
      $("#word").css("color", "#FF0000");
      return false;
    }
  
    $("#word").css("color", "#00FF00");
    document.getElementById("nextWordButton").disabled = false;
    return word;
  }

// Controls the error message for the word being 2 or more letters
function checkTwoLettersAndMore(check) {
    if (!check) {
        if($("#lengthError").html() === undefined)
            $("#errors").append("<div class=\"my-1\" id=\"lengthError\">Word must be 2 or more letters</div>")
    } else {
      $("#lengthError").remove()
    }
  }

// Controls the error message for the word starting at the first slot
function checkFirstSlot(check) {
    if (!check) {
        if($("#firstSlotError").html() === undefined)
            $("#errors").append("<div class=\"my-1\" id=\"firstSlotError\">Word must start at the first slot</div>")
    } else {
        $("#firstSlotError").remove()
    }
}  

// Controls the error message for not having spaces
function checkSingleWord(check) {
    if (!check) {
        if($("#spaceError").html() === undefined)
            $("#errors").append("<div class=\"my-1\" id=\"spaceError\">Must be a single word with no spaces</div>")
    } else {
        $("#spaceError").remove()
    }
}

// Controls the error messages for the word being in the dictionary
function checkDictionary(check) {
    if (!check) {
        if($("#dictionaryError").html() === undefined)
            $("#errors").append("<div class=\"my-1\" id=\"dictionaryError\">Word must be in the dictionary</div>")
    } else {
        $("#dictionaryError").remove()
    }
}

// Opens the modal for the blank tile
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
    // Contruct the board html
    board.constructBoard();

    // Populate the dictionary using the txt file
    $.ajax({
        url: "/hw5/doc/words.txt",
        success: function(result) {
          var words = result.split("\n");
          for (var i = 0; i < words.length; ++i) {
            dictionary.add(words[i].toUpperCase());
          }
        }
      });
    // Make the board slots droppable if they are valid slots
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
    // Makes the tile rack droppable
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
          // If the tile came from a board slot, remove it from the slot
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
// Start the game
restart();