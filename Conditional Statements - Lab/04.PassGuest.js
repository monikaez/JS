function passwordGuess(value){
   //"s3cr3t!P@ssw0rd"
   let pass = value[0]
   
   pass=== 's3cr3t!P@ssw0rd' ? console.log(`Welcome`) : console.log(`Wrong password!`);;
} 
passwordGuess(["qwerty"]);