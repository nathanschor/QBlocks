function Not(x, y, width, height){
  this.x = x;
  this.y = y;
  this.width = width;
  this.height = height;

  this.run = function not(objectList){
    let object = objectList[0];

    if(object.constructor.name === 'Ball'){
      object.color = Math.abs(object.color - 1);

      object.y += 2 * this.height;
      return [object];
    } else if(object.constructor.name === 'Mist'){
      // TODO: handle mist
      return [object]
    } else {
      console.log("Else in Not, something went wrong");
      console.log(object.toString());
      return [object];
    }
  };

  this.toString = function toString(){
    return 'Not-Gate';
  };
}
