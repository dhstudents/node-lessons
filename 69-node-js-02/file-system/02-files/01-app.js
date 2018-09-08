const fs = require('fs');

//fs.open(path , flag , [mode] , callback)
//fs.openSync(path , flag , [mode] , callback)

fs.open( "myfile.txt" , "r+" ,  (error , file_description) => {
    if (error) {
        console.log('error', error);
    } else {
        // read 
        // write (r+)
        console.log(file_description);
       
        fs.close(file_description , (error) => {
            console.log('file has been closed');
        })
    }

} )