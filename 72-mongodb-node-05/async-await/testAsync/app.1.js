// https://javascript.info/async-await#async-functions

//The word “async” before a function means one simple thing:
// a function always returns a promise. 
// If the code has return <non-promise> in it,
// then JavaScript automatically wraps it into a resolved promise with that value.

async function asf() {
    return 1;
}
async function asfp() {
    return Promise.resolve(100);
}

asf().then( function(data) {
    console.log(data);
});


asfp().then( function(data) {
    console.log(data)
})

