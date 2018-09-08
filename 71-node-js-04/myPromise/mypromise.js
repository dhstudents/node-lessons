'use strict'
class MyPromise {
    constructor(asyncFn) {
        this.state = 'pending';
        //this.store ={};
        this.thenCb = null;
        this.catchCb = null;
        this.that = this
        asyncFn(this.resolve.bind(this) , this.reject.bind(this));
    }

    resolve(data) {
        this.state = 'fullfilled'
        //this.store.data = data;
        this.thenCb(data);
    }

    reject(err) {
        this.state = 'rejected'
        //this.store.error = err;
        this.catchCb(err);
    }

    then( cb ) {
        this.thenCb = cb
        return this
    }    
    
    catch( cb ) {
        this.catchCb = cb;
    }
}

let p = new MyPromise( function(resolve , reject , obj) {
    setTimeout( function() {
        let n = Math.random() * 10;
        if (n < 5) {
            resolve(n)
        } else {
            reject( { error : 'bad data' , value : n});
        }
    }, 2000);
})

p.then( function(data) {
    console.log(data);
})
.catch( function(err) {
    console.log(err);
})