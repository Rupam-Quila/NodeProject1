//First way to create own module
/*exports.mydatemod=function(){
    return Date();
};*/


//Second way to create own module
function mydatemod(){
    return Date();
};


function sum(a,b){
    return a+b;
}

exports.sum=sum;
exports.mydatemod=mydatemod;