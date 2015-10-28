(function () {
  var validator={};
  //First we need get the Global object('window in brower','global in server-side' )
  var root= typeof self==='object' && self.self===self&&self ||
            typeof global ==='object' && global.global===global&& global||
            this;

   //Define the regex object
   var numberReg=/^[0-9]+$/,
       alphaReg=/^[a-z]+$/i,
       alphaNumbericReg=/^[a-z0-9]+/i,
       alphaNumbericWithDashReg=/^[a-z0-9_\-]+/i,
       emailReg=/^[\w.!#$%&'*+/=?^`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/i,
       urlReg=/^((http|https):\/\/(\w+:{0,1}\w*@)?(\S+)|)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?$/;

  //Define the validat functions
  validator.isNumber=function (string) {
    return numberReg.test(string);
  };

  validator.isAlpha=function (string) {
    return alphaReg.test(string);
  };

  validator.isAlphaNumber=function (string) {
    return alphaNumbericReg.test(string);
  };
  validator.isAlphaNumberWithDash=function (string) {
    return alphaNumbericWithDashReg.test(string);
  };

  validator.isEmail=function (string) {
    return emailReg.test(string);
  };
  validator.isUrl=function (string) {
    return urlReg.test(string);
  };

  validator.isSamePassword=function (password,password_confirm) {
    return password===password_confirm;
  };

  validator.isMinLength=function (string,min_length) {
    if(!numberReg.test(min_length)){
      //input argv error!
      console.error("min length must be a number");
      return false;
    }else{
      return (string.length>parseInt(min_length,10));
    }
  };
  validator.isExactLength=function (string,length) {
    if(!numberReg.test(min_length)){
      //input argv error!
      console.error("length must be a number");
      return false;
    }else{
      return (string.length===parseInt(length,10));
    }
  };

  validator.isMaxLength=function (string,max_length,min_length) {
    if(!this.isMinLength(string,min_length||0)) {
      console.log(min_length);
      return false;
    }
    if(!numberReg.test(max_length)){
      //input argv error!
      console.error("max length must be a number");
      return false;
    }else{
      return (string.length<parseInt(max_length,10));
    }
  };


  //if included in server-side(nodejs) with Commonjs
  if(typeof module==='object' && module.exports){
    module.exports=validator;
  }
  //if included using AMD!
  else if(typeof define === 'function' && define.amd){
    define([],function () {
      return validator;
    });
  // for front-end, we just added to global object
  }else{
    root.validator=validator;
  }
}());
