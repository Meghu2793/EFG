// Generated from text.g4 by ANTLR 4.7.1
// jshint ignore: start
var antlr4 = require('antlr4/index');
var textListener = require('./textListener').textListener;
var grammarFileName = "text.g4";

var serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964",
    "\u0003\tn\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004\t\u0004",
    "\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t\u0007\u0004\b",
    "\t\b\u0004\t\t\t\u0003\u0002\u0005\u0002\u0014\n\u0002\u0003\u0002\u0003",
    "\u0002\u0007\u0002\u0018\n\u0002\f\u0002\u000e\u0002\u001b\u000b\u0002",
    "\u0003\u0002\u0007\u0002\u001e\n\u0002\f\u0002\u000e\u0002!\u000b\u0002",
    "\u0003\u0002\u0007\u0002$\n\u0002\f\u0002\u000e\u0002\'\u000b\u0002",
    "\u0003\u0002\u0006\u0002*\n\u0002\r\u0002\u000e\u0002+\u0003\u0002\u0007",
    "\u0002/\n\u0002\f\u0002\u000e\u00022\u000b\u0002\u0003\u0002\u0007\u0002",
    "5\n\u0002\f\u0002\u000e\u00028\u000b\u0002\u0003\u0002\u0007\u0002;",
    "\n\u0002\f\u0002\u000e\u0002>\u000b\u0002\u0003\u0002\u0007\u0002A\n",
    "\u0002\f\u0002\u000e\u0002D\u000b\u0002\u0003\u0002\u0007\u0002G\n\u0002",
    "\f\u0002\u000e\u0002J\u000b\u0002\u0003\u0002\u0006\u0002M\n\u0002\r",
    "\u0002\u000e\u0002N\u0003\u0002\u0007\u0002R\n\u0002\f\u0002\u000e\u0002",
    "U\u000b\u0002\u0007\u0002W\n\u0002\f\u0002\u000e\u0002Z\u000b\u0002",
    "\u0003\u0002\u0003\u0002\u0005\u0002^\n\u0002\u0003\u0003\u0003\u0003",
    "\u0003\u0004\u0003\u0004\u0003\u0005\u0003\u0005\u0003\u0006\u0003\u0006",
    "\u0003\u0007\u0003\u0007\u0003\b\u0003\b\u0003\t\u0003\t\u0003\t\u0002",
    "\u0002\n\u0002\u0004\u0006\b\n\f\u000e\u0010\u0002\u0002\u0002s\u0002",
    "]\u0003\u0002\u0002\u0002\u0004_\u0003\u0002\u0002\u0002\u0006a\u0003",
    "\u0002\u0002\u0002\bc\u0003\u0002\u0002\u0002\ne\u0003\u0002\u0002\u0002",
    "\fg\u0003\u0002\u0002\u0002\u000ei\u0003\u0002\u0002\u0002\u0010k\u0003",
    "\u0002\u0002\u0002\u0012\u0014\u0005\f\u0007\u0002\u0013\u0012\u0003",
    "\u0002\u0002\u0002\u0013\u0014\u0003\u0002\u0002\u0002\u0014\u0015\u0003",
    "\u0002\u0002\u0002\u0015^\u0005\u0006\u0004\u0002\u0016\u0018\u0005",
    "\f\u0007\u0002\u0017\u0016\u0003\u0002\u0002\u0002\u0018\u001b\u0003",
    "\u0002\u0002\u0002\u0019\u0017\u0003\u0002\u0002\u0002\u0019\u001a\u0003",
    "\u0002\u0002\u0002\u001a\u001f\u0003\u0002\u0002\u0002\u001b\u0019\u0003",
    "\u0002\u0002\u0002\u001c\u001e\u0005\u000e\b\u0002\u001d\u001c\u0003",
    "\u0002\u0002\u0002\u001e!\u0003\u0002\u0002\u0002\u001f\u001d\u0003",
    "\u0002\u0002\u0002\u001f \u0003\u0002\u0002\u0002 %\u0003\u0002\u0002",
    "\u0002!\u001f\u0003\u0002\u0002\u0002\"$\u0005\f\u0007\u0002#\"\u0003",
    "\u0002\u0002\u0002$\'\u0003\u0002\u0002\u0002%#\u0003\u0002\u0002\u0002",
    "%&\u0003\u0002\u0002\u0002&)\u0003\u0002\u0002\u0002\'%\u0003\u0002",
    "\u0002\u0002(*\u0005\u0004\u0003\u0002)(\u0003\u0002\u0002\u0002*+\u0003",
    "\u0002\u0002\u0002+)\u0003\u0002\u0002\u0002+,\u0003\u0002\u0002\u0002",
    ",0\u0003\u0002\u0002\u0002-/\u0005\u0010\t\u0002.-\u0003\u0002\u0002",
    "\u0002/2\u0003\u0002\u0002\u00020.\u0003\u0002\u0002\u000201\u0003\u0002",
    "\u0002\u00021X\u0003\u0002\u0002\u000220\u0003\u0002\u0002\u000235\u0005",
    "\n\u0006\u000243\u0003\u0002\u0002\u000258\u0003\u0002\u0002\u00026",
    "4\u0003\u0002\u0002\u000267\u0003\u0002\u0002\u00027<\u0003\u0002\u0002",
    "\u000286\u0003\u0002\u0002\u00029;\u0005\f\u0007\u0002:9\u0003\u0002",
    "\u0002\u0002;>\u0003\u0002\u0002\u0002<:\u0003\u0002\u0002\u0002<=\u0003",
    "\u0002\u0002\u0002=B\u0003\u0002\u0002\u0002><\u0003\u0002\u0002\u0002",
    "?A\u0005\u000e\b\u0002@?\u0003\u0002\u0002\u0002AD\u0003\u0002\u0002",
    "\u0002B@\u0003\u0002\u0002\u0002BC\u0003\u0002\u0002\u0002CH\u0003\u0002",
    "\u0002\u0002DB\u0003\u0002\u0002\u0002EG\u0005\f\u0007\u0002FE\u0003",
    "\u0002\u0002\u0002GJ\u0003\u0002\u0002\u0002HF\u0003\u0002\u0002\u0002",
    "HI\u0003\u0002\u0002\u0002IL\u0003\u0002\u0002\u0002JH\u0003\u0002\u0002",
    "\u0002KM\u0005\u0004\u0003\u0002LK\u0003\u0002\u0002\u0002MN\u0003\u0002",
    "\u0002\u0002NL\u0003\u0002\u0002\u0002NO\u0003\u0002\u0002\u0002OS\u0003",
    "\u0002\u0002\u0002PR\u0005\u0010\t\u0002QP\u0003\u0002\u0002\u0002R",
    "U\u0003\u0002\u0002\u0002SQ\u0003\u0002\u0002\u0002ST\u0003\u0002\u0002",
    "\u0002TW\u0003\u0002\u0002\u0002US\u0003\u0002\u0002\u0002V6\u0003\u0002",
    "\u0002\u0002WZ\u0003\u0002\u0002\u0002XV\u0003\u0002\u0002\u0002XY\u0003",
    "\u0002\u0002\u0002Y[\u0003\u0002\u0002\u0002ZX\u0003\u0002\u0002\u0002",
    "[\\\u0007\u0002\u0002\u0003\\^\u0003\u0002\u0002\u0002]\u0013\u0003",
    "\u0002\u0002\u0002]\u0019\u0003\u0002\u0002\u0002^\u0003\u0003\u0002",
    "\u0002\u0002_`\u0007\u0003\u0002\u0002`\u0005\u0003\u0002\u0002\u0002",
    "ab\u0007\u0007\u0002\u0002b\u0007\u0003\u0002\u0002\u0002cd\u0007\u0006",
    "\u0002\u0002d\t\u0003\u0002\u0002\u0002ef\u0007\u0005\u0002\u0002f\u000b",
    "\u0003\u0002\u0002\u0002gh\u0007\u0004\u0002\u0002h\r\u0003\u0002\u0002",
    "\u0002ij\u0007\b\u0002\u0002j\u000f\u0003\u0002\u0002\u0002kl\u0007",
    "\t\u0002\u0002l\u0011\u0003\u0002\u0002\u0002\u0010\u0013\u0019\u001f",
    "%+06<BHNSX]"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

var sharedContextCache = new antlr4.PredictionContextCache();

var literalNames = [ null, null, null, null, "' '" ];

var symbolicNames = [ null, "CH", "NEGATION", "LOGICAL", "WHITESPACE", "EMPTYOPERATOR", 
                      "PARANTHESISOPEN", "PARANTHESISCLOSE" ];

var ruleNames =  [ "textFormat", "ch", "emptyoperator", "whitespace", "logical", 
                   "negation", "paranthesisopen", "paranthesisclose" ];

function textParser (input) {
	antlr4.Parser.call(this, input);
    this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
    this.ruleNames = ruleNames;
    this.literalNames = literalNames;
    this.symbolicNames = symbolicNames;
    return this;
}

textParser.prototype = Object.create(antlr4.Parser.prototype);
textParser.prototype.constructor = textParser;

Object.defineProperty(textParser.prototype, "atn", {
	get : function() {
		return atn;
	}
});

textParser.EOF = antlr4.Token.EOF;
textParser.CH = 1;
textParser.NEGATION = 2;
textParser.LOGICAL = 3;
textParser.WHITESPACE = 4;
textParser.EMPTYOPERATOR = 5;
textParser.PARANTHESISOPEN = 6;
textParser.PARANTHESISCLOSE = 7;

textParser.RULE_textFormat = 0;
textParser.RULE_ch = 1;
textParser.RULE_emptyoperator = 2;
textParser.RULE_whitespace = 3;
textParser.RULE_logical = 4;
textParser.RULE_negation = 5;
textParser.RULE_paranthesisopen = 6;
textParser.RULE_paranthesisclose = 7;

function TextFormatContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = textParser.RULE_textFormat;
    return this;
}

TextFormatContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
TextFormatContext.prototype.constructor = TextFormatContext;

TextFormatContext.prototype.emptyoperator = function() {
    return this.getTypedRuleContext(EmptyoperatorContext,0);
};

TextFormatContext.prototype.negation = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(NegationContext);
    } else {
        return this.getTypedRuleContext(NegationContext,i);
    }
};

TextFormatContext.prototype.EOF = function() {
    return this.getToken(textParser.EOF, 0);
};

TextFormatContext.prototype.paranthesisopen = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ParanthesisopenContext);
    } else {
        return this.getTypedRuleContext(ParanthesisopenContext,i);
    }
};

TextFormatContext.prototype.ch = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ChContext);
    } else {
        return this.getTypedRuleContext(ChContext,i);
    }
};

TextFormatContext.prototype.paranthesisclose = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ParanthesiscloseContext);
    } else {
        return this.getTypedRuleContext(ParanthesiscloseContext,i);
    }
};

TextFormatContext.prototype.logical = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(LogicalContext);
    } else {
        return this.getTypedRuleContext(LogicalContext,i);
    }
};

TextFormatContext.prototype.enterRule = function(listener) {
    if(listener instanceof textListener ) {
        listener.enterTextFormat(this);
	}
};

TextFormatContext.prototype.exitRule = function(listener) {
    if(listener instanceof textListener ) {
        listener.exitTextFormat(this);
	}
};




textParser.TextFormatContext = TextFormatContext;

textParser.prototype.textFormat = function() {

    var localctx = new TextFormatContext(this, this._ctx, this.state);
    this.enterRule(localctx, 0, textParser.RULE_textFormat);
    var _la = 0; // Token type
    try {
        this.state = 91;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,13,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 17;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if(_la===textParser.NEGATION) {
                this.state = 16;
                this.negation();
            }

            this.state = 19;
            this.emptyoperator();
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 23;
            this._errHandler.sync(this);
            var _alt = this._interp.adaptivePredict(this._input,1,this._ctx)
            while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
                if(_alt===1) {
                    this.state = 20;
                    this.negation(); 
                }
                this.state = 25;
                this._errHandler.sync(this);
                _alt = this._interp.adaptivePredict(this._input,1,this._ctx);
            }

            this.state = 29;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while(_la===textParser.PARANTHESISOPEN) {
                this.state = 26;
                this.paranthesisopen();
                this.state = 31;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            }
            this.state = 35;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while(_la===textParser.NEGATION) {
                this.state = 32;
                this.negation();
                this.state = 37;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            }
            this.state = 39; 
            this._errHandler.sync(this);
            var _alt = 1;
            do {
            	switch (_alt) {
            	case 1:
            		this.state = 38;
            		this.ch();
            		break;
            	default:
            		throw new antlr4.error.NoViableAltException(this);
            	}
            	this.state = 41; 
            	this._errHandler.sync(this);
            	_alt = this._interp.adaptivePredict(this._input,4, this._ctx);
            } while ( _alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER );
            this.state = 46;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while(_la===textParser.PARANTHESISCLOSE) {
                this.state = 43;
                this.paranthesisclose();
                this.state = 48;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            }
            this.state = 86;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << textParser.CH) | (1 << textParser.NEGATION) | (1 << textParser.LOGICAL) | (1 << textParser.PARANTHESISOPEN))) !== 0)) {
                this.state = 52;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while(_la===textParser.LOGICAL) {
                    this.state = 49;
                    this.logical();
                    this.state = 54;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 58;
                this._errHandler.sync(this);
                var _alt = this._interp.adaptivePredict(this._input,7,this._ctx)
                while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
                    if(_alt===1) {
                        this.state = 55;
                        this.negation(); 
                    }
                    this.state = 60;
                    this._errHandler.sync(this);
                    _alt = this._interp.adaptivePredict(this._input,7,this._ctx);
                }

                this.state = 64;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while(_la===textParser.PARANTHESISOPEN) {
                    this.state = 61;
                    this.paranthesisopen();
                    this.state = 66;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 70;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while(_la===textParser.NEGATION) {
                    this.state = 67;
                    this.negation();
                    this.state = 72;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 74; 
                this._errHandler.sync(this);
                var _alt = 1;
                do {
                	switch (_alt) {
                	case 1:
                		this.state = 73;
                		this.ch();
                		break;
                	default:
                		throw new antlr4.error.NoViableAltException(this);
                	}
                	this.state = 76; 
                	this._errHandler.sync(this);
                	_alt = this._interp.adaptivePredict(this._input,10, this._ctx);
                } while ( _alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER );
                this.state = 81;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while(_la===textParser.PARANTHESISCLOSE) {
                    this.state = 78;
                    this.paranthesisclose();
                    this.state = 83;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 88;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            }
            this.state = 89;
            this.match(textParser.EOF);
            break;

        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function ChContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = textParser.RULE_ch;
    return this;
}

ChContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ChContext.prototype.constructor = ChContext;

ChContext.prototype.CH = function() {
    return this.getToken(textParser.CH, 0);
};

ChContext.prototype.enterRule = function(listener) {
    if(listener instanceof textListener ) {
        listener.enterCh(this);
	}
};

ChContext.prototype.exitRule = function(listener) {
    if(listener instanceof textListener ) {
        listener.exitCh(this);
	}
};




textParser.ChContext = ChContext;

textParser.prototype.ch = function() {

    var localctx = new ChContext(this, this._ctx, this.state);
    this.enterRule(localctx, 2, textParser.RULE_ch);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 93;
        this.match(textParser.CH);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function EmptyoperatorContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = textParser.RULE_emptyoperator;
    return this;
}

EmptyoperatorContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
EmptyoperatorContext.prototype.constructor = EmptyoperatorContext;

EmptyoperatorContext.prototype.EMPTYOPERATOR = function() {
    return this.getToken(textParser.EMPTYOPERATOR, 0);
};

EmptyoperatorContext.prototype.enterRule = function(listener) {
    if(listener instanceof textListener ) {
        listener.enterEmptyoperator(this);
	}
};

EmptyoperatorContext.prototype.exitRule = function(listener) {
    if(listener instanceof textListener ) {
        listener.exitEmptyoperator(this);
	}
};




textParser.EmptyoperatorContext = EmptyoperatorContext;

textParser.prototype.emptyoperator = function() {

    var localctx = new EmptyoperatorContext(this, this._ctx, this.state);
    this.enterRule(localctx, 4, textParser.RULE_emptyoperator);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 95;
        this.match(textParser.EMPTYOPERATOR);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function WhitespaceContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = textParser.RULE_whitespace;
    return this;
}

WhitespaceContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
WhitespaceContext.prototype.constructor = WhitespaceContext;

WhitespaceContext.prototype.WHITESPACE = function() {
    return this.getToken(textParser.WHITESPACE, 0);
};

WhitespaceContext.prototype.enterRule = function(listener) {
    if(listener instanceof textListener ) {
        listener.enterWhitespace(this);
	}
};

WhitespaceContext.prototype.exitRule = function(listener) {
    if(listener instanceof textListener ) {
        listener.exitWhitespace(this);
	}
};




textParser.WhitespaceContext = WhitespaceContext;

textParser.prototype.whitespace = function() {

    var localctx = new WhitespaceContext(this, this._ctx, this.state);
    this.enterRule(localctx, 6, textParser.RULE_whitespace);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 97;
        this.match(textParser.WHITESPACE);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function LogicalContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = textParser.RULE_logical;
    return this;
}

LogicalContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
LogicalContext.prototype.constructor = LogicalContext;

LogicalContext.prototype.LOGICAL = function() {
    return this.getToken(textParser.LOGICAL, 0);
};

LogicalContext.prototype.enterRule = function(listener) {
    if(listener instanceof textListener ) {
        listener.enterLogical(this);
	}
};

LogicalContext.prototype.exitRule = function(listener) {
    if(listener instanceof textListener ) {
        listener.exitLogical(this);
	}
};




textParser.LogicalContext = LogicalContext;

textParser.prototype.logical = function() {

    var localctx = new LogicalContext(this, this._ctx, this.state);
    this.enterRule(localctx, 8, textParser.RULE_logical);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 99;
        this.match(textParser.LOGICAL);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function NegationContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = textParser.RULE_negation;
    return this;
}

NegationContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
NegationContext.prototype.constructor = NegationContext;

NegationContext.prototype.NEGATION = function() {
    return this.getToken(textParser.NEGATION, 0);
};

NegationContext.prototype.enterRule = function(listener) {
    if(listener instanceof textListener ) {
        listener.enterNegation(this);
	}
};

NegationContext.prototype.exitRule = function(listener) {
    if(listener instanceof textListener ) {
        listener.exitNegation(this);
	}
};




textParser.NegationContext = NegationContext;

textParser.prototype.negation = function() {

    var localctx = new NegationContext(this, this._ctx, this.state);
    this.enterRule(localctx, 10, textParser.RULE_negation);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 101;
        this.match(textParser.NEGATION);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function ParanthesisopenContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = textParser.RULE_paranthesisopen;
    return this;
}

ParanthesisopenContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ParanthesisopenContext.prototype.constructor = ParanthesisopenContext;

ParanthesisopenContext.prototype.PARANTHESISOPEN = function() {
    return this.getToken(textParser.PARANTHESISOPEN, 0);
};

ParanthesisopenContext.prototype.enterRule = function(listener) {
    if(listener instanceof textListener ) {
        listener.enterParanthesisopen(this);
	}
};

ParanthesisopenContext.prototype.exitRule = function(listener) {
    if(listener instanceof textListener ) {
        listener.exitParanthesisopen(this);
	}
};




textParser.ParanthesisopenContext = ParanthesisopenContext;

textParser.prototype.paranthesisopen = function() {

    var localctx = new ParanthesisopenContext(this, this._ctx, this.state);
    this.enterRule(localctx, 12, textParser.RULE_paranthesisopen);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 103;
        this.match(textParser.PARANTHESISOPEN);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function ParanthesiscloseContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = textParser.RULE_paranthesisclose;
    return this;
}

ParanthesiscloseContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ParanthesiscloseContext.prototype.constructor = ParanthesiscloseContext;

ParanthesiscloseContext.prototype.PARANTHESISCLOSE = function() {
    return this.getToken(textParser.PARANTHESISCLOSE, 0);
};

ParanthesiscloseContext.prototype.enterRule = function(listener) {
    if(listener instanceof textListener ) {
        listener.enterParanthesisclose(this);
	}
};

ParanthesiscloseContext.prototype.exitRule = function(listener) {
    if(listener instanceof textListener ) {
        listener.exitParanthesisclose(this);
	}
};




textParser.ParanthesiscloseContext = ParanthesiscloseContext;

textParser.prototype.paranthesisclose = function() {

    var localctx = new ParanthesiscloseContext(this, this._ctx, this.state);
    this.enterRule(localctx, 14, textParser.RULE_paranthesisclose);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 105;
        this.match(textParser.PARANTHESISCLOSE);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


exports.textParser = textParser;
