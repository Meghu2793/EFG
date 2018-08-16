grammar text;

//textFormat : (whitespace)* (negation)* (whitespace)* (paranthesisopen)* (whitespace)* (negation)* (whitespace)* start (whitespace)* (paranthesisclose)* (whitespace)* ( ((whitespace)+ (logical) (whitespace)+) (whitespace)* (negation)* (paranthesisopen)* (whitespace)* (negation)* (whitespace)* start (whitespace)* (paranthesisclose)* (whitespace)*)* EOF;

// textFormat : (text1)+ (logical text1)*; 

// text1 : (whitespace)* (negation)* (whitespace)* (paranthesisopen)* (whitespace)* (negation)* (start)+ (whitespace)* (paranthesisclose)* (whitespace)*;

textFormat : (negation)? emptyoperator | (negation)* (paranthesisopen)* (negation)* ch+ (paranthesisclose)* ((logical)* (negation)* (paranthesisopen)*  (negation)* ch+ (paranthesisclose)*)* EOF;

ch : CH;

emptyoperator : EMPTYOPERATOR;

whitespace : WHITESPACE;

logical: LOGICAL;

negation : NEGATION;

paranthesisopen : PARANTHESISOPEN;

paranthesisclose : PARANTHESISCLOSE;

CH :  ('\u0022'..'\u0027'  
     | '\u0030'..'\u007B'            
     | '\u007D'
     | '\u0020' 
     | '\u002D'       
     ) 
     ;

// CH : [\u0020-\u00FF];
NEGATION : ('~' | '!');
LOGICAL : ('&' | '|' );
WHITESPACE : ' ';
EMPTYOPERATOR : ('/empty'); 
PARANTHESISOPEN : ('('); 
PARANTHESISCLOSE : (')'); 