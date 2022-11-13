const prompt = require('prompt-sync')({sigint: true});

const hat = '^';
const hole = 'O';
const fieldCharacter = '░';
const pathCharacter = '*';


class Field {
    
    constructor(ar, iploc){
        this.arr=ar
        this.ploc=iploc

      
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

}
    var myField = new Field([
        ['*', '░', 'O'],
        ['░', 'O', '░'],
        ['░', '^', '░'],
        ['░', '░', '░'],
    
      ],[0,0]);
      

myField.playGame()