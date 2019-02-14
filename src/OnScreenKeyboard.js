import React, {Component} from 'react';

import './OnScreenKeyboard.css';

export default class OnScreenKeyboard extends Component {
  constructor(props) {
  	super(props);
  	this.state = {
      letters: true,
      value: '',
  	};
  }

  getKeys = () => {
    return {
      letters : [
        [
          {
            value: 'ㄱ',
          },
          {
            value: 'ㄴ',
          },
          {
            value: 'ㄷ',
          },
          {
            value: 'ㄹ',
          },
          {
            value: 'ㅁ',
          },
        ],
        [
          {
            value: 'ㅂ',
          },
          {
            value: 'ㅅ',
          },
          {
            value: 'ㅇ',
          },
          {
            value: 'ㅈ',
          },
          {
            value: 'ㅎ',
          },
        ],
        [
          {
            value: 'ㅏ',
          },
          {
            value: 'ㅓ',
          },
          {
            value: 'ㅗ',
          },
          {
            value: 'ㅜ',
          },
          {
            value: 'ㅣ',
          },
        ],
        [
          {
            value: '　',
            valueClass: 'punctuation',
          },
          {
            value: '、',
            valueClass: 'punctuation',
          },
          {
            value: '。',
            valueClass: 'punctuation',
          },
          {
            value: '？',
            valueClass: 'punctuation',
          },
          {
            value: '！',
            valueClass: 'punctuation',
          },
        ],
        [
          {
            value: '⌧',
            valueClass: 'control',
            colspan: 2,
          },
          {
            value: '⏎',
            valueClass: 'control',
            colspan: 2,
          },
          {
            value: '…',
            valueClass: 'switch',
            switch : true,
          },
        ],
      ],
      symbols : [
        [
          {
            value: '（',
          },
          {
            value: '）',
          },
          {
            value: '；',
          },
          {
            value: '：',
          },
          {
            value: '・',
          },          
        ],
        [
          {
            value: '【',
          },
          {
            value: '】',
          },
          {
            value: '—',
          },          
          {
            value: '〜',
          },
          {
            value: '＿',
          },
        ],
        [
          {
            value: '〔',
          },
          {
            value: '〕',
          },
          {
            value: '／',
          },
          {
            value: '　',
          },
          {
            value: '　',
          },          
        ],
        [
          {
            value: '﹁',
          },
          {
            value: '﹂',
          },
          {
            value: '　',
          },
          {
            value: '　',
          },
          {
            value: '　',
          },          
        ],
        [
          {
            value: '﹃',
          },
          {
            value: '﹄',
          },
          {
            value: '　',
          },
          {
            value: '　',
          },
          {
            value: 'ㄱ',
            valueClass: 'switch',
            switch : true,
          },          
        ],
      ],
    };
  };

  render() {
    if (this.state.letters) {
      return (
        <div className="OnScreenKeyboard">
          <input className="text-input" type="text" value={this.state.value} onKeyPress={e => {
            const oldValue = this.state.value;
            const code = e.which || e.keyCode;
            const c = String.fromCharCode(code);
            this.setState({...this.state, value: this.calculate(oldValue, c)});
          }}/>
          <table>
            {
              this.getKeys().letters.map((row => {
                return (
                  <tr>
                    {
                      row.map(cell => {
                        const classNames = cell.valueClass || null;
                        const colspan = cell.colspan || null;
                        const onClick = cell.switch ? (e) => {
                          this.setState(
                            {
                              letters: false,
                            }
                          )
                        } : (e) => {
                          const oldValue = this.state.value;
                          this.setState({
                            ...this.state,
                            value: this.calculate(oldValue, e.target.innerText)
                          });
                        };
                        return (
                          <td
                            className={classNames}
                            colSpan={colspan}
                            onClick={onClick}
                          >
                            {cell.value}
                          </td>
                        );
                      })
                    }
                  </tr>
                )
              }))
            }
          </table>
        </div>
      );
    } else {
      return (
        <div className="OnScreenKeyboard">
          <input className="text-input" type="text" value={this.state.value} onKeyPress={e => {
            const oldValue = this.state.value;
            const code = e.which || e.keyCode;
            const c = String.fromCharCode(code);
            this.setState({...this.state, value: this.calculate(oldValue, c)});
          }}/>
          <table className="punctuation">
            {
              this.getKeys().symbols.map((row => {
                return (
                  <tr>
                    {
                      row.map(cell => {
                        const classNames = cell.valueClass || null;
                        const colspan = cell.colspan || null;
                        const onClick = cell.switch ? (e) => {
                          this.setState(
                            {
                              letters: true,
                            }
                          )
                        } : (e) => {
                          const oldValue = this.state.value;
                          this.setState({...this.state, value: `${oldValue}${e.target.innerText}`});
                        };
                        return (
                          <td
                            className={classNames}
                            colSpan={colspan}
                            onClick={onClick}
                          >
                            {cell.value}
                          </td>
                        );
                      })
                    }
                  </tr>
                )
              }))
            }
          </table>
        </div>
      );
    }
  }

  calculate = (value, appended) => {
    value = `${value}${appended}`;
    value = value.replace(/a/gi, 'ㅏ');
    value = value.replace(/e/gi, 'ㅓ');
    value = value.replace(/o/gi, 'ㅗ');
    value = value.replace(/u/gi, 'ㅜ');
    value = value.replace(/i/gi, 'ㅣ');
    value = value.replace(/g/gi, 'ㄱ');
    value = value.replace(/k/gi, 'ㄱㄱ');
    value = value.replace(/n/gi, 'ㄴ');
    value = value.replace(/d/gi, 'ㄷ');
    value = value.replace(/t/gi, 'ㄷㄷ');
    value = value.replace(/r/gi, 'ㄹ');
    value = value.replace(/m/gi, 'ㅁ');
    value = value.replace(/b/gi, 'ㅂ');
    value = value.replace(/p/gi, 'ㅂㅂ');
    value = value.replace(/z/gi, 'ㅅ');
    value = value.replace(/s/gi, 'ㅅㅅ');
    value = value.replace(/y/gi, 'ㅇ');
    value = value.replace(/j/gi, 'ㅈ');
    value = value.replace(/c/gi, 'ㅈㅈ');
    value = value.replace(/w/gi, 'ㅎ');
    value = value.replace(/[fvlhqx]/gi, '');
    value = value.replace(/ /gi, '　');
    value = value.replace(/,/gi, '、');
    value = value.replace(/\./gi, '。');
    value = value.replace(/\?/gi, '？');
    value = value.replace(/!/gi, '！');
    value = value.replace(/\(/gi, '（');
    value = value.replace(/\)/gi, '）');
    value = value.replace(/\[/gi, '【');
    value = value.replace(/\]/gi, '】');
    value = value.replace(/\{/gi, '〔');
    value = value.replace(/\}/gi, '〕');
    value = value.replace(/.?\</gi, ''); // Workaround for Backspace
    value = value.replace(/\>/gi, "\u200B"); // Workaround for Zero-width Space
    value = value.replace(/[@#$%^&*+=]/gi, '');
    value = value.replace(/[0-9]/gi, '');
    value = value.replace(/'/gi, '﹁');
    value = value.replace(/\\/gi, '﹂');
    value = value.replace(/"/gi, '﹃');
    value = value.replace(/\|/gi, '﹄');
    value = value.replace(/;/gi, '；');
    value = value.replace(/:/gi, '：');
    value = value.replace(/\//gi, '／');
    value = value.replace(/-/gi, '—');    
    value = value.replace(/_/gi, '＿');    
    value = value.replace(/~/gi, '〜');    
    value = value.replace(/`/gi, '・');
    value = value.replace(/.*⏎/gi, '');
    value = value.replace(/.?⌧/gi, '');
    value = value.replace(/ㄱㄱㅏ/gi, '까');
    value = value.replace(/ㄱㄱㅓ/gi, '꺼');
    value = value.replace(/ㄱㄱㅗ/gi, '꼬');
    value = value.replace(/ㄱㄱㅜ/gi, '꾸');
    value = value.replace(/ㄱㅏ/gi, '가');
    value = value.replace(/ㄱㅓ/gi, '거');
    value = value.replace(/ㄱㅗ/gi, '고');
    value = value.replace(/ㄱㅜ/gi, '구');
    value = value.replace(/ㄴㅏ/gi, '나');
    value = value.replace(/ㄴㅓ/gi, '너');
    value = value.replace(/ㄴㅗ/gi, '노');
    value = value.replace(/ㄴㅜ/gi, '누');
    value = value.replace(/ㄴㅣ/gi, '니');
    value = value.replace(/ㄷㄷㅏ/gi, '따');
    value = value.replace(/ㄷㄷㅓ/gi, '떠');
    value = value.replace(/ㄷㄷㅗ/gi, '또');
    value = value.replace(/ㄷㄷㅜ/gi, '뚜');
    value = value.replace(/ㄷㅏ/gi, '다');
    value = value.replace(/ㄷㅓ/gi, '더');
    value = value.replace(/ㄷㅗ/gi, '도');
    value = value.replace(/ㄷㅜ/gi, '두');
    value = value.replace(/ㄹㅏ/gi, '라');
    value = value.replace(/ㄹㅓ/gi, '러');
    value = value.replace(/ㄹㅗ/gi, '로');
    value = value.replace(/ㄹㅜ/gi, '루');
    value = value.replace(/ㅁㅏ/gi, '마');
    value = value.replace(/ㅁㅓ/gi, '머');
    value = value.replace(/ㅁㅗ/gi, '모');
    value = value.replace(/ㅁㅜ/gi, '무');
    value = value.replace(/ㅁㅣ/gi, '미');
    value = value.replace(/ㅂㅂㅏ/gi, '빠');
    value = value.replace(/ㅂㅂㅓ/gi, '뻐');
    value = value.replace(/ㅂㅂㅗ/gi, '뽀');
    value = value.replace(/ㅂㅂㅜ/gi, '뿌');
    value = value.replace(/ㅂㅂㅣ/gi, '삐');
    value = value.replace(/ㅂㅏ/gi, '바');
    value = value.replace(/ㅂㅓ/gi, '버');
    value = value.replace(/ㅂㅗ/gi, '보');
    value = value.replace(/ㅂㅜ/gi, '부');
    value = value.replace(/ㅂㅣ/gi, '비');
    value = value.replace(/ㅅㅅㅏ/gi, '싸');
    value = value.replace(/ㅅㅅㅓ/gi, '써');
    value = value.replace(/ㅅㅅㅗ/gi, '쏘');
    value = value.replace(/ㅅㅅㅜ/gi, '쑤');
    value = value.replace(/ㅅㅅㅣ/gi, '씨');
    value = value.replace(/ㅅㅏ/gi, '사');
    value = value.replace(/ㅅㅓ/gi, '서');
    value = value.replace(/ㅅㅗ/gi, '소');
    value = value.replace(/ㅅㅜ/gi, '수');
    value = value.replace(/ㅅㅣ/gi, '시');
    value = value.replace(/ㅇㅏ/gi, '아');
    value = value.replace(/ㅇㅓ/gi, '어');
    value = value.replace(/ㅇㅗ/gi, '오');
    value = value.replace(/ㅇㅜ/gi, '우');
    value = value.replace(/ㅇㅣ/gi, '이');
    value = value.replace(/ㅈㅈㅏ/gi, '짜');
    value = value.replace(/ㅈㅈㅓ/gi, '쩌');
    value = value.replace(/ㅈㅈㅗ/gi, '쪼');
    value = value.replace(/ㅈㅈㅜ/gi, '쭈');
    value = value.replace(/ㅈㅈㅣ/gi, '찌');
    value = value.replace(/ㅈㅏ/gi, '자');
    value = value.replace(/ㅈㅓ/gi, '저');
    value = value.replace(/ㅈㅗ/gi, '조');
    value = value.replace(/ㅈㅜ/gi, '주');
    value = value.replace(/ㅈㅣ/gi, '지');
    value = value.replace(/ㅎㅏ/gi, '하');
    value = value.replace(/ㅎㅗ/gi, '호');
    value = value.replace(/ㅎㅜ/gi, '후');
    return value;
  };
}
