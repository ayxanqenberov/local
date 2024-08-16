// 3 dene function quracaqsiz bir function usersleri adlandiran
// function olacaq yeni dinamik olaraq usernameler vereceksiz
// o functionda localeStoragede onu users keyine value olaraq
// Array seklinde elave edecek
// 2ci function dinamik olaraq username qebul edib localeStorageden
// hemin usernameni silecek
// 3 cu function ise umumi localestoragedeki users arrayini pars
// olunmus halini logda daima gosderecek
// const added = (name) =>{
//     let check = JSON.parse(localStorage.getItem("user")) || [];
//     try{
//         if(check.length == 0){
//             check.push(name)
//         }else{
//             check.filter(item => {
//                 if(item == name){
//                     throw new Error("bu sexs artiq movcuddur")
//                 }else{
//                     check.push(name)
//                 }
//             })
//         }
//         localStorage.setItem("users",JSON.stringify(check))
//     }catch(err){
//         console.log(err.message);

//     }
// }
// added("ayxan")

// const deleted = (name) => {
//     let check = JSON.parse(localStorage.getItem("user")) || [];
//     try{
//         check.forEach((item,index) => {
//             if (item === name) {
//                 check.splice(index,1)
//             } else {
//                 throw new Error("bu sexs artiq movcuddur")
//             }
//         });
//         localStorage.setItem("users",JSON.stringify(check))
//     }catch(err){
//         console.log(err.message);
        
//     }
// }    
// deleted("ayxan")


// let current = () =>console.log("current data:",JSON.parse(localStorage.getItem("check")));
// current()