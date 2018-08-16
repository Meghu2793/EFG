// Generated from text.g4 by ANTLR 4.7.1
// jshint ignore: start
var antlr4 = require('antlr4/index');

// This class defines a complete listener for a parse tree produced by textParser.
function textListener() {
	antlr4.tree.ParseTreeListener.call(this);
	return this;
}

textListener.prototype = Object.create(antlr4.tree.ParseTreeListener.prototype);
textListener.prototype.constructor = textListener;

// Enter a parse tree produced by textParser#textFormat.
textListener.prototype.enterTextFormat = function(ctx) {
};

// Exit a parse tree produced by textParser#textFormat.
textListener.prototype.exitTextFormat = function(ctx) {
};


// Enter a parse tree produced by textParser#ch.
textListener.prototype.enterCh = function(ctx) {
};

// Exit a parse tree produced by textParser#ch.
textListener.prototype.exitCh = function(ctx) {
};


// Enter a parse tree produced by textParser#emptyoperator.
textListener.prototype.enterEmptyoperator = function(ctx) {
};

// Exit a parse tree produced by textParser#emptyoperator.
textListener.prototype.exitEmptyoperator = function(ctx) {
};


// Enter a parse tree produced by textParser#whitespace.
textListener.prototype.enterWhitespace = function(ctx) {
};

// Exit a parse tree produced by textParser#whitespace.
textListener.prototype.exitWhitespace = function(ctx) {
};


// Enter a parse tree produced by textParser#logical.
textListener.prototype.enterLogical = function(ctx) {
};

// Exit a parse tree produced by textParser#logical.
textListener.prototype.exitLogical = function(ctx) {
};


// Enter a parse tree produced by textParser#negation.
textListener.prototype.enterNegation = function(ctx) {
};

// Exit a parse tree produced by textParser#negation.
textListener.prototype.exitNegation = function(ctx) {
};


// Enter a parse tree produced by textParser#paranthesisopen.
textListener.prototype.enterParanthesisopen = function(ctx) {
};

// Exit a parse tree produced by textParser#paranthesisopen.
textListener.prototype.exitParanthesisopen = function(ctx) {
};


// Enter a parse tree produced by textParser#paranthesisclose.
textListener.prototype.enterParanthesisclose = function(ctx) {
};

// Exit a parse tree produced by textParser#paranthesisclose.
textListener.prototype.exitParanthesisclose = function(ctx) {
};



exports.textListener = textListener;