const prompt = require('prompt-sync')({sigint: true});

const hat = '^';
const hole = 'O';
const fieldCharacter = '░';
const pathCharacter = '*';

class Field {
    
    constructor(wi, hi,per){
        this.width=wi
        this.height=hi
        this.ploc=[0,0]
        this.arr=[]
        this.generateRandom()
        this.per=per
        this.holes=Math.floor((per/100)*wi*hi)
     
    }
    updateLoc(){
        
      var key = prompt('Enter your movement (a,s,w,z):');
      key=key.toLowerCase().trim()
      switch (key) {
          
          case 'a':
              
              this.ploc[1]--
          break
          case 's':
            this.ploc[1]++  
          break            
          case 'w':
            this.ploc[0]--
          break
          case 'z':
            this.ploc[0]++
          break
          default:
              process.stdout.write('bad key\n')
          break
   
      }  
         
          if (this.ploc[0]==this.arr.length ||this.ploc[1]==this.arr[0].length){return -1}
          if (this.ploc[0]==-1 ||this.ploc[1]==-1){return -1}
          var cha=this.arr[this.ploc[0]][this.ploc[1]] 
          if(cha==hole){return -1}
           else if (cha==hat) {return 1}
           else if (cha==pathCharacter) {return -1}
         
          return 0
  }
  print() {

    for (var i= 0;i <this.arr.length;i++)
  
    {  
       
        for (var j= 0;j <this.arr[0].length;j++)

        {
            process.stdout.write(this.arr[i][j].toString())

        }

        process.stdout.write('\n')
    }
  
    
  }

  playGame() {
    var res=0
    while (res===0) {
        myField.print()
        res=myField.updateLoc()
        if (res===0){this.arr[this.ploc[0]][this.ploc[1]] ='*'}
      }
    if (res===-1) { console.log("You lost!")} 
    else if (res===1) { console.log("You won!")}
   }


  generateRandom() {
    
    for (var i=0;i<this.height;i++)
    {

      var file=[]
      for (var j=0;j<this.width;j++){
        file.push(fieldCharacter);
      }
      this.arr.push(file)
    }
    this.arr[0][0]=pathCharacter
   var rx
   var ry
   var cont
    
   cont=0
   while(cont==0){
    ry=Math.floor(Math.random()*this.height)
    rx=Math.floor(Math.random()*this.width)
    if (this.arr[ry][rx]==fieldCharacter) {
      cont=1
      this.arr[ry][rx]=hat
    }
   }
   cont=0
   while(cont==0){
    ry=Math.floor(Math.random()*this.height)
    rx=Math.floor(Math.random()*this.width)
    if (this.arr[ry][rx]==fieldCharacter) {
      cont=1
      this.arr[ry][rx]=hole
    }
   }
   cont=0

   while(cont==0){
    ry=Math.floor(Math.random()*this.height)
    rx=Math.floor(Math.random()*this.width)
    if (this.arr[ry][rx]==fieldCharacter) {
      cont=1
      this.arr[ry][rx]=hole
    }
   }
  }
}

var y = prompt('Enter the width:');
var x = prompt('Enter the height:');
var per = prompt('Enter the percentage of holes:');
var myField = new Field(y,x,per);
      
myField.playGame()
