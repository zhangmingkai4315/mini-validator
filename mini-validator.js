(function () {
  var validator={};
  //First we need get the Global object('window in brower','global in server-side' )
  var root= typeof self==='object' && self.self===self&&self ||
            typeof global ==='object' && global.global===global&& global||
            this;

   //Define the regex object
   var RegexObject={};
   RegexObject.numberReg=/^[0-9]+$/;
   RegexObject.alphaReg=/^[a-z]+$/i;
   RegexObject.alphaNumbericReg=/^[a-z0-9]+/i;
   RegexObject.alphaNumbericWithDashReg=/^[a-z0-9_\-]+/i;
   RegexObject.emailReg=/^[\w.!#$%&'*+/=?^`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/i;
   RegexObject.urlReg=/^((http|https):\/\/(\w+:{0,1}\w*@)?(\S+)|)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?$/;

  //Define the validat functions
  validator.isNumber=function (string) {
    return RegexObject.numberReg.test(string);
  };

  validator.isAlpha=function (string) {
    return RegexObject.alphaReg.test(string);
  };

  validator.isAlphaNumber=function (string) {
    return RegexObject.alphaNumbericReg.test(string);
  };
  validator.isAlphaNumberWithDash=function (string) {
    return RegexObject.alphaNumbericWithDashReg.test(string);
  };

  validator.isEmail=function (string) {
    return RegexObject.emailReg.test(string);
  };
  validator.isUrl=function (string) {
    return RegexObject.urlReg.test(string);
  };

  validator.isSamePassword=function (password,password_confirm) {
    return password===password_confirm;
  };

  validator.isMinLength=function (string,min_length) {
    if(!validator.isNumber.test(min_length)){
      //input argv error!
      console.error("min length must be a number");
      return false;
    }else{
      return (string.length>parseInt(min_length,10));
    }
  };
  validator.isExactLength=function (string,length) {
    if(!validator.isNumber.test(min_length)){
      //input argv error!
      console.error("length must be a number");
      return false;
    }else{
      return (string.length===parseInt(length,10));
    }
  };

  validator.isMaxLength=function (string,max_length,min_length) {
    if(min_length==='undefined'){
     min_length=0;
    }
    if(!validator.isMinLength(string,min_length)) {
      return false;
    }
    if(!validator.isNumber.test(max_length)){
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
