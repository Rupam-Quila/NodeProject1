//All modules exports at a time
module.exports={
    multi: function(a, b){
        return a*b;
    },
    minus: function(a,b){
        if(a>b){
            return a-b;
        }
        else{
            return b-a;
        }
    },
    mystr: "Hello Rupam"
}