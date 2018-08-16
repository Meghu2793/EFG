const antlr4 = require('antlr4/index');
const textLexer = require('./textLexer');
const textParser = require('./textParser');
var textListener = require('./textListener').textListener;

HtmlDateListener = function(res) {
    this.Res = res;
    textListener.call(this); // inherit default listener
    return this;
};

// inherit default listener
HtmlDateListener.prototype = Object.create(textListener.prototype);
HtmlDateListener.prototype.constructor = HtmlDateListener;

// Enter a parse tree produced by textParser#textFormat.
HtmlDateListener.prototype.enterTextFormat = function(ctx) {
};

// Exit a parse tree produced by textParser#textFormat.
HtmlDateListener.prototype.exitTextFormat = function(ctx) {
};


// Enter a parse tree produced by textParser#whitespace.
HtmlDateListener.prototype.enterWhitespace = function(ctx) {
};

// Exit a parse tree produced by textParser#whitespace.
HtmlDateListener.prototype.exitWhitespace = function(ctx) {
    this.Res.push(ctx.getText());
};


// Enter a parse tree produced by textParser#logical.
HtmlDateListener.prototype.enterLogical = function(ctx) {
};

// Exit a parse tree produced by textParser#logical.
HtmlDateListener.prototype.exitLogical = function(ctx) {
    this.Res.push(ctx.getText());
};


// Enter a parse tree produced by textParser#negation.
HtmlDateListener.prototype.enterNegation = function(ctx) {
};

// Exit a parse tree produced by textParser#negation.
HtmlDateListener.prototype.exitNegation = function(ctx) {
    this.Res.push(ctx.getText());
};

// Enter a parse tree produced by textParser#ch.
HtmlDateListener.prototype.enterCh = function(ctx) {
};

// Exit a parse tree produced by textParser#ch.
HtmlDateListener.prototype.exitCh = function(ctx) {
    this.Res.push(ctx.getText());
};

// Enter a parse tree produced by textParser#paranthesisopen.
HtmlDateListener.prototype.enterParanthesisopen = function(ctx) {
    
};

// Exit a parse tree produced by textParser#paranthesisopen.
HtmlDateListener.prototype.exitParanthesisopen = function(ctx) {
    this.Res.push(ctx.getText());
};

// Enter a parse tree produced by textParser#paranthesisclose.
HtmlDateListener.prototype.enterParanthesisclose = function(ctx) {
};

// Exit a parse tree produced by textParser#paranthesisclose.
HtmlDateListener.prototype.exitParanthesisclose = function(ctx) {
    this.Res.push(ctx.getText());
};

// Enter a parse tree produced by textParser#emptyoperator.
HtmlDateListener.prototype.enterEmptyoperator = function(ctx) {
};

// Exit a parse tree produced by textParser#emptyoperator.
HtmlDateListener.prototype.exitEmptyoperator = function(ctx) {
    this.Res.push(ctx.getText());
};

exports.HtmlDateListener = HtmlDateListener;
