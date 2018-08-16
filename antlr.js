const antlr4 = require('antlr4/index');
const textLexer = require('./textLexer');
const textParser = require('./textParser');
const HtmlDateListener = require('./HtmlDateListener').HtmlDateListener;

var errors = [];

var ErrorListener = function (errors) {
    antlr4.error.ErrorListener.call(this);
    this.errors = errors;
    return this;
};

ErrorListener.prototype = Object.create(antlr4.error.ErrorListener.prototype);
ErrorListener.prototype.constructor = ErrorListener;
ErrorListener.prototype.syntaxError = function (rec, sym, line, col, msg, e) {
    this.errors.push(msg);
    // this.errors.push(rec);
    // this.errors.push(sym);
    // this.errors.push(line);
    // this.errors.push(col);
    this.errors.push(e);
};

function grammarTextFormat(input, record1) {

    var date_array = [], count = 0;

    var chars = new antlr4.InputStream(input);
    var lexer = new textLexer.textLexer(chars);
    var tokens = new antlr4.CommonTokenStream(lexer);
    var parser = new textParser.textParser(tokens);
    parser.buildParseTrees = true;
    var listener = new ErrorListener(errors);
    parser.removeErrorListeners();
    parser.addErrorListener(listener);
    console.log(errors);
    var tree = parser.textFormat();
    if (errors.length == 0) {
        var htmlDate = new HtmlDateListener(date_array);
        antlr4.tree.ParseTreeWalker.DEFAULT.walk(htmlDate, tree);

        String.prototype.replaceAll = function (search, replacement) {
            var target = this;
            return target.replace(new RegExp(search, 'g'), replacement);
        };

        console.log(date_array.toString());

        if (date_array == "/empty") {
            console.log("result is false");
        }
        else if (date_array.toString().replaceAll(",", "") == "~/empty") {
            console.log("result is true");
        }
        else {
            date_array = date_array.toString().replaceAll(",", "");
            console.log("first iteration ", date_array);

            date_array = date_array.toString().split(" ");

            console.log("second iteration ", date_array);

            var intermediate = [], j = 0, unop, temp = "";
            var obj = date_array.toString().replaceAll(",", "");

            // var input = "( ~ mab &&(my name || is))";
            for (var i = 0; i < date_array.length; i++) {
                for (var k = 0; k < date_array[i].length;) {
                    if (date_array[i][k] == "(") {
                        // console.log("(");
                        intermediate[j++] = date_array[i][k];
                        // console.log("Intermediate ",intermediate);
                        k++;
                    }
                    else if (date_array[i][k] == ")") {
                        // console.log(")");
                        intermediate[j++] = date_array[i][k];
                        // console.log("Intermediate ",intermediate);
                        k++;
                    }
                    else if (date_array[i][k] == "&") {
                        if (k < date_array[i].length && date_array[i][k + 1] == "&") {
                            console.log("Invalid input");
                            return;
                        } else {
                            // console.log("&");
                            intermediate[j++] = date_array[i][k];
                        }
                        // console.log("Intermediate ",intermediate);
                        k++;
                    }
                    else if (date_array[i][k] == "|") {
                        if (k < date_array[i].length && date_array[i][k + 1] == "|") {
                            console.log("Invalid input");
                            break;
                        } else {
                            // console.log("|");
                            intermediate[j++] = date_array[i][k];
                            // console.log("Intermediate ",intermediate);
                        }
                        k++;
                    }
                    else if (date_array[i][k] == "~") {
                        if (k + 1 < date_array[i].length && date_array[i][k + 1] == "(") {
                            // console.log("~ (");
                            intermediate[j++] = date_array[i][k];
                            k++;
                            // console.log("Intermediate ",intermediate);
                        } else if (k + 1 < date_array[i].length && date_array[i][k + 1] == "~") {
                            // console.log("~");
                            unop = null;
                            k = k + 2;
                            // console.log("Intermediate ",intermediate);
                        }
                        else {
                            unop = date_array[i][k];
                            k++;
                        }
                    }
                    else {
                        // console.log("chara");
                        while (k < date_array[i].length && date_array[i][k] != "&" && date_array[i][k] != "|" && date_array[i][k] != "(" && date_array[i][k] != ")" && date_array[i][k] != "~") {
                            temp = temp + date_array[i][k];
                            // console.log("temp = ",temp);
                            k++;
                        }
                        if (unop != null) {
                            // console.log("unop date_arrya 1  ",unop,date_array[i][k]);
                            var result = evaluate1(temp, record1);
                            // console.log("result ",result);
                            unop = null;
                        }
                        else {
                            // console.log("unop date_arrya 2 ",unop,date_array[i][k]);
                            var result = evaluate2(temp, record1);
                            // console.log("result ",result);
                        }
                        temp = "";
                        intermediate[j++] = result;
                        // console.log("Intermediate ",intermediate);
                    }
                }
            }

            function evaluate1(temp, record1) {
                // console.log("1 ")
                // console.log("temp ",temp);
                // console.log("record1 ",record1);
                return !record1.toLowerCase().includes(temp.toLowerCase());
            }

            function evaluate2(temp, record1) {
                // console.log("2 ")
                // console.log("temp ",temp);
                // console.log("record1 ",record1);
                // console.log(record1.includes("is"),"  check this");
                return record1.toLowerCase().includes(temp.toLowerCase());
            }

            console.log("Intermediate  ", intermediate);

            //Stack part

            //funtion for logical operators && ||
            function equate(op1, op2, op) {
                if (op == "&") {
                    // console.log("operands ",op1,op2,"operator ",op,"result ",op1 && op2);
                    return op1 && op2;
                }
                else if (op == "|") {
                    // console.log("operands ",op1,op2,"operator ",op,"result ",op1 || op2);
                    return op1 || op2;
                }
            }

            //funtion for logical operators ~ !
            function equate1(op1) {
                return !op1;
            }

            var intermediate1 = [];
            var operand = [];
            var operator = [];
            var unop1 = null;
            for (let i = 0; i < intermediate.length; i++) {

                if (intermediate[i] == "~") {
                    console.log("~ operator is being pushed ", intermediate[i]);
                    operator.push(intermediate[i]);
                }
                else if (intermediate[i] == "(") {
                    console.log("( operator is being pushed ", intermediate[i]);
                    operator.push(intermediate[i]);
                }
                else if (intermediate[i] == true || intermediate[i] == false) {
                    console.log("true operand is being pushed ", intermediate[i]);
                    operand.push(intermediate[i]);
                    if (unop1 == true || unop1 == false) {
                        operator.push("&");
                        console.log("operator is being pushed  ********    ", operator);
                    }
                    unop1 = intermediate[i];
                }
                else if (intermediate[i] == "&" || intermediate[i] == "|") {
                    console.log("& or | operator is being pushed ", intermediate[i]);
                    operator.push(intermediate[i]);
                    unop1 = intermediate[i];
                }

                else if (intermediate[i] == ")") {
                    console.log(") operator is found ", intermediate[i]);
                    // console.log("operands ")
                    var temp = operator.pop();
                    console.log("temp ", temp);
                    while (temp != "(") {
                        var operand1 = operand.pop();
                        var operand2 = operand.pop();
                        console.log("operand1 and operand2 ", operand1, operand2);
                        var result = equate(operand1, operand2, temp)
                        console.log("operand ", result);
                        operand.push(result);
                        temp = operator.pop();
                    }
                    temp = operator.pop();
                    if (temp == "~" || temp == "!") {
                        op = operand.pop();
                        result = equate1(op);
                        console.log("operand for unary and the operator ", op, temp);
                        console.log("result ", result);
                        console.log("operand ??", op);
                        operand.push(result);
                    }
                    else {
                        console.log("& is expected ********** ", temp);
                        operator.push(temp);
                    }
                }
            }
            console.log("operator before while loop ", operator);
            console.log("operand before while loop ", operand);
            while (!operator.length == 0) {
                temp = operator.pop();
                op = temp;
                operand1 = operand.pop();
                operand2 = operand.pop();
                result = equate(operand1, operand2, op)
                operand.push(result);
            }
            console.log("text box input:\t record:", record1);
            console.log("The Final Result is ", operand.pop());
            console.log("\n");
        }
    }
    else {
        console.log("Wrong Input");
    }
}

//Test Records
var record1 = "Run 5 samples with Remodulin 1 mg/mL. Occlusion will be created 61 cm from the CASSETTE. SW 1.1.2 Pump HW: AAA/AB Remote HW: J,K,L";
var record2 = "Get test from dry run ready folder. See Nate for details. Run at 16 ul/h with 1 mg/ml remodulin.";
var record3 = "UT-2369";
var record4 = "Get the record from the dry run ready folder. This test will be done in the chamber at 40C. 3 samples UT-2106";


var input = "~(run & ~~(will | 5 samples))";

grammarTextFormat(input, record1);
grammarTextFormat(input, record2);
grammarTextFormat(input, record3);
grammarTextFormat(input, record4);


var input1 = "~/empty";

grammarTextFormat(input1, record1);
grammarTextFormat(input1, record2);
grammarTextFormat(input1, record3);
grammarTextFormat(input1, record4);


var input2 ="~(Get & the (face | from))";

grammarTextFormat(input2, record1);
grammarTextFormat(input2, record2);
grammarTextFormat(input2, record3);
grammarTextFormat(input2, record4);

var input3 = "( ~ mab &(my name | is))";

grammarTextFormat(input3, record1);
grammarTextFormat(input3, record2);
grammarTextFormat(input3, record3);
grammarTextFormat(input3, record4);
