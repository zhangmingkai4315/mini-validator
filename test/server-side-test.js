var TestData="123456",
    TestData2="abcde",
    TestData3="abc123",
    TestData4="abc123_";
var urlData="http://www.jsmean.com",
    emailData="test@jsmean.com";
var assert=require('assert');
var validator=require('../mini-validator.js');
var should=require('should');

//RIGHT-INSTANCE TEST
should(validator.isMaxLength(TestData,10)).equal(true);
should(validator.isMinLength(TestData,4)).equal(true);
should(validator.isNumber(TestData)).equal(true);
should(validator.isAlpha(TestData2)).equal(true);
should(validator.isAlphaNumberWithDash(TestData4)).equal(true);
should(validator.isAlphaNumber(TestData3)).equal(true);
should(validator.isUrl(urlData)).equal(true);
should(validator.isEmail(emailData)).equal(true);

//WRONG-INSTANCE TEST
should(validator.isMaxLength("AAAAAA",2)).equal(false);
should(validator.isMinLength("he",4)).equal(false);
should(validator.isNumber("12345aaa")).equal(false);
should(validator.isAlpha("11111")).equal(false);
should(validator.isUrl("www.c")).equal(false);
should(validator.isEmail("hello@")).equal(false);
