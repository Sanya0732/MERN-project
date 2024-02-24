const sayhello = (name,greeting)=> console.log(greeting + " " + name);
sayhello("sanya","morning")

const x = {
    name: "sanya",
    role : "js ",
    age : 19,
    show : function() {
        console.log(`the name is  ${this.name}`);
    }


}
x.show();