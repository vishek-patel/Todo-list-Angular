import { Component } from '@angular/core';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent {

  temp:string = ""
  placeHolder:string = "Enter a todo..."
  isDisabled:boolean = false
  toShow:boolean = true
  inputValue:string = ""
  toDisplay:boolean = true
  names:string[] = []
  source:string = ""
  alternate:string = ""

  handleClick(event:any) {
    console.log(event);
    this.toShow = !this.toShow;
    // this.isDisabled = !this.isDisabled;
  }

  handleImage(){
    this.source = "https://www.freecodecamp.org/news/content/images/size/w1000/2020/10/461803-angular-JavaScript-HTML-1.jpg"
    this.alternate = "Angular Logo image"
  }

  handleInput(event:any){
    if(event.key === "Enter"){
      this.names.unshift(event.target.value)
      this.temp = ""
    }
    else {
      this.temp = event.target.value
      
    }
    // this.temp = event.target.value
  }
  addTodo(){
    this.temp.length>0 && this.names.unshift(this.temp)
    this.temp = ''
  }
  deleteTodo(){
    this.names.pop()
  }
  handleDisplay(){
    // console.log(event)
    // console.log(this.inputValue)
    this.names = this.inputValue.split(" ")

    console.log(this.names)


    // this.toDisplay = !this.toDisplay
    // this.names=(this.inputValue.split(" "))
  }

  ngOnInit():void {
    this.names = ["Have a ", "Nice", "Day! 🙂"]
  }

  ngOnDestroy():void{
    console.log("Destroyed")
  }

  deleteItem(index: number){
    this.names.splice(index, 1);
  }

  day:string = "1"
  switch(day:string){
    this.day = "Monday"
    this.day = "Sunday"

  }

}
