for(let i = 0; i < 10 ; i++){
    console.log("Hello from my very first node script file")
}


/*
executing a code in node type: node and the filename like: node firstScript.js

Process:
process object is a global that provides information about, and control over the current node.js process. 
As a global it's always available to node.js applications without using require().
it can also be explicitly accessed using require().


process.cwd()
this is a method what shows the current path that i'm working in.




Argv:

The process.argv property returns an array containing the command-line arguments passed when the Node.js process was launched. 
The first element will be process.execPath. See process.argv0 if access to the original value of argv[0] is needed. 
The second element will be the path to the JavaScript file being executed. The remaining elements will be any additional command-line arguments.
*/



const args = process.argv.slice(2);
for(let arg of args){
    console.log(`Hi there, ${arg}`)
}