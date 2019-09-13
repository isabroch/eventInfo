let x1, y1, x2, y2;

    document.addEventListener('mousedown', function (e) {
      [x1, y1] = [e.x, e.y];
    });

    document.addEventListener('mouseup', function (e) {
      [x2, y2] = [e.x, e.y];

      let drag = checkForDrag(x1, y1, x2, y2);

      console.log(drag);
    });

    function checkForDrag(x1, y1, x2, y2, marginOfError = 5) {

      let pos1 = {x: x1, y:y1},
          pos2 = {x: x2, y:y2},
          isDragging = false,
          dragDistance = {x: 0, y: 0, total: 0},
          dragDirection = {x: 0, y: 0};


        dragDistance.x = Math.pow((pos2.x - pos1.x), 2);
        dragDistance.y = Math.pow((pos2.y - pos1.y), 2);
        dragDistance.total = Math.sqrt(dragDistance.x + dragDistance.y);


        dragDistance.total < marginOfError //if statement ? is true : else is false;
        ? isDragging = false
        : isDragging = true;


        if(isDragging) {
          [dragDirection.x, dragDirection.y] = [pos2.x - pos1.x, pos2.y - pos1.y];

          if (dragDistance.x < dragDistance.y) {
            //motion was primarily vertical

            if (dragDirection.y < 0) {
              //motion was primarily upwards
              return {direction: 'up', distance: Math.sqrt(dragDistance.y)};

            } else if (dragDirection.y > 0) {
              //motion was primarily downwards
              return {direction: 'down', distance: Math.sqrt(dragDistance.y)};

            }

          } else if (dragDistance.x > dragDistance.y) {
            //motion was primarily horizontal

            if (dragDirection.x < 0) {
              //motion was primarily to left
              return {direction: 'left', distance: Math.sqrt(dragDistance.x)};

            } else if (dragDirection.x > 0) {
              //motion was primarily to right
              return {direction: 'right', distance: Math.sqrt(dragDistance.x)};

            }

          }

        } else {
          return {direction: null, distance: dragDistance.total};
        }

      };
