let state  = 'html';

exports.set = function setState(pstate) {
    state = pstate
    return this;
}

exports.say = function sayState() {
    console.log(state);
};


console.log('00-app: ' , module);

if (module.id === '.') {
    console.log('only me')
}