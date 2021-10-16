import { Logger, LogToConsole } from './logger'

class Calculator {
  private logger: Logger = new LogToConsole;
  private operators: { [key: string]: Function } = {
    '+': (x: number, y: number) => x + y,
    '-': (x: number, y: number) => x - y,
    '*': (x: number, y: number) => x * y,
    '/': (x: number, y: number) => x / y,
    '^': (x: number, y: number) => Math.pow(x, y),
    '%': (x: number, y: number) => x % y
  };
  private op_prior: { [key: string]: number } = {
    '(': 0, ')': 0,
    '+': 1, '-': 1,
    '*': 2, '/': 2, '%': 2,
    '^': 3
  }

  constructor(logger?: Logger) {
    if (logger != undefined) {
      this.logger = logger;
    }
  }

  public setLogger(logger: Logger) {
    this.logger = logger;
  }

  private toPRN(expr: string): string | undefined {
    if (expr[expr.length - 1] == ' ') {
      expr = expr.substring(0, expr.length - 1);
    }
    if (expr[0] == ' ') {
      expr = expr.substring(1, expr.length);
    }
    expr = expr.replace(/\s+/g, ' ').trim()

    let stack: string[] = [];
    let result: string = '';

    for (let token of expr.split(' ')) {
      if (token in this.op_prior) {
        switch (token) {
          case '(':
            stack.push(token);
            break;
          case ')':
            while (1) {
              let o = stack.pop();
              if (o == undefined) {
                return undefined;
              }
              if (o == '(') {
                break;
              }
              result += o + ' ';
            }
            break;
          default:
            while (1) {
              let o = stack.pop();
              if (o == undefined) {
                break;
              }
              if (this.op_prior[o] < this.op_prior[token]) {
                stack.push(o);
                break;
              }
              result += o + ' ';
            }
            stack.push(token);
            break;
        }
      }
      else {
        result += token + ' ';
      }
    }      

    while (1) {
      let token = stack.pop();
      if (token == undefined) {
        break;
      }
      if (!(token in this.operators)) {
        return undefined;
      }
      result += token + ' ';
    }

    result = result.substring(0, result.length - 1);

    return result;
  }

  private evalPNR(expr: string): number | undefined {
    let stack: number[] = [];

    expr.split(' ').forEach((token) => {
      if (token in this.operators) {
        let [y, x] = [stack.pop(), stack.pop()];
        stack.push(this.operators[token](x, y));
      } else {
        stack.push(parseFloat(token));
      }
    });

    return stack.pop();
  }

  public calc(expr: string): number | undefined {
    let prn: string | undefined = this.toPRN(expr);
    if (prn == undefined) {
      this.logger.log('Error: invalid expression.');
      return undefined;
    }

    let res: number | undefined = this.evalPNR(prn); 
    if (res == undefined || isNaN(res)) {
      this.logger.log('Error: can\'t evaluate prn expression.');
      return undefined;
    }

    return res;
  }
}

export default Calculator;