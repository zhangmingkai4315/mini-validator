# mini-validator
Mini-validator is a mini size validator for user login information validation. include username,password,email, data string validation and so on...

##Usage

###Install
```
  npm install mini-validator
  bower install mini-validator
```

#### Server

```
  var validator=require("mini-validator");

```

#### Browser
```
  <script type="text/javascript" src="path/mini-validator.min.js"></script>
```

##API

In server side ,if you define like "var validator=require("mini-validator");", you need use validator.isMaxLength(...); But in front-end side ,validator is a global object ,just validator.isMaxLength(...) is enough!

All return value is bool type:true for validate pass!

1. isMaxLength(TestData,max_length,min_length=0)
2. isMinLength(TestData,min_length)
3. isNumber(TestData)
4. isAlpha(TestData);
5. isAlphaNumberWithDash(TestData);
6. isAlphaNumber(TestData);
7. isUrl(TestData);
8. isEmail(TestData);
