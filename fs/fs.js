import * as fs from "fs";

fs.readFile("file-0.txt", "utf-8", (error, data) => {
    if (error) {
        console.error(error)
        return
    }
    
    console.log(data)
})