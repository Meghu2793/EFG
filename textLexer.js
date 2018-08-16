// Generated from text.g4 by ANTLR 4.7.1
// jshint ignore: start
var antlr4 = require('antlr4/index');


var serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964",
    "\u0002\t$\b\u0001\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004",
    "\t\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t\u0007",
    "\u0004\b\t\b\u0003\u0002\u0003\u0002\u0003\u0003\u0003\u0003\u0003\u0004",
    "\u0003\u0004\u0003\u0005\u0003\u0005\u0003\u0006\u0003\u0006\u0003\u0006",
    "\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0007\u0003\u0007",
    "\u0003\b\u0003\b\u0002\u0002\t\u0003\u0003\u0005\u0004\u0007\u0005\t",
    "\u0006\u000b\u0007\r\b\u000f\t\u0003\u0002\u0005\u0007\u0002\"\"$)/",
    "/2}\u007f\u007f\u0004\u0002##\u0080\u0080\u0004\u0002((~~\u0002#\u0002",
    "\u0003\u0003\u0002\u0002\u0002\u0002\u0005\u0003\u0002\u0002\u0002\u0002",
    "\u0007\u0003\u0002\u0002\u0002\u0002\t\u0003\u0002\u0002\u0002\u0002",
    "\u000b\u0003\u0002\u0002\u0002\u0002\r\u0003\u0002\u0002\u0002\u0002",
    "\u000f\u0003\u0002\u0002\u0002\u0003\u0011\u0003\u0002\u0002\u0002\u0005",
    "\u0013\u0003\u0002\u0002\u0002\u0007\u0015\u0003\u0002\u0002\u0002\t",
    "\u0017\u0003\u0002\u0002\u0002\u000b\u0019\u0003\u0002\u0002\u0002\r",
    " \u0003\u0002\u0002\u0002\u000f\"\u0003\u0002\u0002\u0002\u0011\u0012",
    "\t\u0002\u0002\u0002\u0012\u0004\u0003\u0002\u0002\u0002\u0013\u0014",
    "\t\u0003\u0002\u0002\u0014\u0006\u0003\u0002\u0002\u0002\u0015\u0016",
    "\t\u0004\u0002\u0002\u0016\b\u0003\u0002\u0002\u0002\u0017\u0018\u0007",
    "\"\u0002\u0002\u0018\n\u0003\u0002\u0002\u0002\u0019\u001a\u00071\u0002",
    "\u0002\u001a\u001b\u0007g\u0002\u0002\u001b\u001c\u0007o\u0002\u0002",
    "\u001c\u001d\u0007r\u0002\u0002\u001d\u001e\u0007v\u0002\u0002\u001e",
    "\u001f\u0007{\u0002\u0002\u001f\f\u0003\u0002\u0002\u0002 !\u0007*\u0002",
    "\u0002!\u000e\u0003\u0002\u0002\u0002\"#\u0007+\u0002\u0002#\u0010\u0003",
    "\u0002\u0002\u0002\u0003\u0002\u0002"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

function textLexer(input) {
	antlr4.Lexer.call(this, input);
    this._interp = new antlr4.atn.LexerATNSimulator(this, atn, decisionsToDFA, new antlr4.PredictionContextCache());
    return this;
}

textLexer.prototype = Object.create(antlr4.Lexer.prototype);
textLexer.prototype.constructor = textLexer;

Object.defineProperty(textLexer.prototype, "atn", {
        get : function() {
                return atn;
        }
});

textLexer.EOF = antlr4.Token.EOF;
textLexer.CH = 1;
textLexer.NEGATION = 2;
textLexer.LOGICAL = 3;
textLexer.WHITESPACE = 4;
textLexer.EMPTYOPERATOR = 5;
textLexer.PARANTHESISOPEN = 6;
textLexer.PARANTHESISCLOSE = 7;

textLexer.prototype.channelNames = [ "DEFAULT_TOKEN_CHANNEL", "HIDDEN" ];

textLexer.prototype.modeNames = [ "DEFAULT_MODE" ];

textLexer.prototype.literalNames = [ null, null, null, null, "' '" ];

textLexer.prototype.symbolicNames = [ null, "CH", "NEGATION", "LOGICAL", 
                                      "WHITESPACE", "EMPTYOPERATOR", "PARANTHESISOPEN", 
                                      "PARANTHESISCLOSE" ];

textLexer.prototype.ruleNames = [ "CH", "NEGATION", "LOGICAL", "WHITESPACE", 
                                  "EMPTYOPERATOR", "PARANTHESISOPEN", "PARANTHESISCLOSE" ];

textLexer.prototype.grammarFileName = "text.g4";



exports.textLexer = textLexer;

