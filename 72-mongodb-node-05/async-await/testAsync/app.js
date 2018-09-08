// https://javascript.info/async-await#async-functions

// the keyword await makes JavaScript wait until that promise settles and returns its result.
// Here’s example with a promise that resolves in 1 second:
// The function execution “pauses” at the line (*) and resumes when the promise settles, with result becoming its result. So the code above shows “done!” in one second.
// Let’s emphasize: await literally makes JavaScript wait until the promise settles, and then go on with the result. That doesn’t cost any CPU resources, because the engine can do other jobs meanwhile: execute other scripts, handle events et
//
async function f() {
    let promise = new Promise( function(resolve , reject ) {
        setTimeout( () => resolve('done!!!!'),1000);
    });
    
    //It’s just a more elegant syntax of getting the promise result than promise.then,
    // easier to read and write.
    let result = await promise;
    
    console.log(result);
}

f();