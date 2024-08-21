class obj {
    constructor(email,password){
        this.email = email
        this.password = password
    }

    get email(){        // we get email as a method by default or password also
        return `${this._email.toUpperCase()} wow `    // we use getter to show this value to the user we use _email so that it does not throw error
    }

    set email(val){
        this._email = val     // if we use getter then we need to use setter also
    }

}

let anik = new obj("aniket@gmail.com", "woww")

console.log('anik email', anik.email);
