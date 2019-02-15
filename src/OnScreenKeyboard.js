import React, {Component} from 'react';

import './OnScreenKeyboard.css';

export default class OnScreenKeyboard extends Component {
  constructor(props) {
  	super(props);
  	this.state = {
      layer: 'letters',
      value: '',
  	};
  }

  getKeys = () => {
    return {
      letters : [
        [
          {
            value: 'ㄱ',
            valueClass: ['letter', 'consonant', 'initial'],

          },
          {
            value: 'ㄴ',
            valueClass: ['letter', 'consonant', 'initial'],
          },
          {
            value: 'ㄷ',
            valueClass: ['letter', 'consonant', 'initial'],
          },
          {
            value: 'ㄹ',
            valueClass: ['letter', 'consonant', 'initial'],
          },
          {
            value: 'ㅁ',
            valueClass: ['letter', 'consonant', 'initial'],
          },
        ],
        [
          {
            value: 'ㅂ',
            valueClass: ['letter', 'consonant', 'initial'],
          },
          {
            value: 'ㅅ',
            valueClass: ['letter', 'consonant', 'initial'],
          },
          {
            value: 'ㅇ',
            valueClass: ['letter', 'consonant', 'initial'],
          },
          {
            value: 'ㅈ',
            valueClass: ['letter', 'consonant', 'initial'],
          },
          {
            value: 'ㅎ',
            valueClass: ['letter', 'consonant', 'initial'],
          },
        ],
        [
          {
            value: 'ㅏ',
            valueClass: ['letter', 'vowel', 'final'],
          },
          {
            value: 'ㅓ',
            valueClass: ['letter', 'vowel', 'final'],
          },
          {
            value: 'ㅗ',
            valueClass: ['letter', 'vowel', 'final'],
          },
          {
            value: 'ㅜ',
            valueClass: ['letter', 'vowel', 'final'],
          },
          {
            value: 'ㅣ',
            valueClass: ['letter', 'vowel', 'final'],
          },
        ],
        [
          {
            value: '　',
            valueClass: ['punctuation'],
          },
          {
            value: '、',
            valueClass: ['punctuation'],
          },
          {
            value: '。',
            valueClass: ['punctuation'],
          },
          {
            value: '？',
            valueClass: ['punctuation'],
          },
          {
            value: '！',
            valueClass: ['punctuation'],
          },
        ],
        [
          {
            value: '⌫',
            valueClass: ['control'],
            colspan: 2,
          },
          {
            value: '⏎',
            valueClass: ['control'],
            colspan: 2,
          },
          {
            value: '⋯',
            valueClass: ['link'],
            link: 'symbols',
          },
        ],
      ],
      symbols : [
        [
          {
            value: '（',
            valueClass: ['punctuation'],
          },
          {
            value: '）',
            valueClass: ['punctuation'],
          },
          {
            value: '【',
            valueClass: ['punctuation'],
          },
          {
            value: '】',
            valueClass: ['punctuation'],
          },
          {
            value: '・',
            valueClass: ['punctuation'],
          },          
        ],
        [
          {
            value: '﹁',
            valueClass: ['punctuation'],
          },
          {
            value: '﹂',
            valueClass: ['punctuation'],
          },
          {
            value: '〔',
            valueClass: ['punctuation'],
          },          
          {
            value: '〕',
            valueClass: ['punctuation'],
          },
          {
            value: '⋯',
            valueClass: ['punctuation'],
          },
        ],
        [
          {
            value: '﹃',
            valueClass: ['punctuation'],
          },
          {
            value: '﹄',
            valueClass: ['punctuation'],
          },
          {
            value: '／',
            valueClass: ['punctuation'],
          },
          {
            value: '—',
            valueClass: ['punctuation'],
          },
          {
            value: '＿',
            valueClass: ['punctuation'],
          },          
        ],
        [
          {
            value: '＊',
            valueClass: ['punctuation'],
          },
          {
            value: '；',
            valueClass: ['punctuation'],
          },
          {
            value: '：',
            valueClass: ['punctuation'],
          },
          {
            value: '〜',
            valueClass: ['punctuation'],
          },
          {
            value: '﹏',
            valueClass: ['punctuation'],
          },          
        ],
        [
          {
            valueClass: ['inactive'],
          },
          {
            valueClass: ['inactive'],
          },
          {
            valueClass: ['inactive'],
          },
          {
            valueClass: ['inactive'],
          },
          {
            value: '가',
            valueClass: ['link'],
            link : 'letters',
          },          
        ],
      ],
    };
  };

  render() {
    return (
      <div className="OnScreenKeyboard">
        <textarea className="text-input" type="text" value={this.state.value} onKeyPress={e => {
          const oldValue = this.state.value;
          const code = e.which || e.keyCode;
          const c = String.fromCharCode(code);
          this.setState({...this.state, value: this.calculate(oldValue, c)});
        }}/>
        <table>
          {
            this.getKeys()[this.state.layer].map((row => {
              return (
                <tr>
                  {
                    row.map(cell => {
                      const classNames = cell.valueClass ?
                          cell.valueClass.reduce((previousValue, currentValue) => 
                              `${previousValue} ${currentValue}`) :
                          null;
                      const colspan = cell.colspan || null;
                      let onClick = null;
                      if (cell.link) {
                        onClick = (e) => {
                          this.setState(
                            {
                              layer: cell.link,
                            }
                          )
                        };
                      } else if (cell.value) {
                        onClick = (e) => {
                          const oldValue = this.state.value;
                          if (e.target.innerText === '⌫') {
                            this.setState({
                              ...this.state,
                              value: oldValue.substring(0, oldValue.length - 1),
                            });
                          } else if (e.target.innerText === '⏎') {
                            this.setState({
                              ...this.state,
                              value: `${oldValue}\n`,
                            });

                          } else {
                            this.setState({
                              ...this.state,
                              value: this.calculate(oldValue, e.target.innerText)
                            });
                          }
                        };
                      }
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

  calculate = (value, appended) => {
    value = `${value}${appended}`;
    value = value.replace(/a/gi, 'ㅏ');
    value = value.replace(/e/gi, 'ㅓ');
    value = value.replace(/o/gi, 'ㅗ');
    value = value.replace(/u/gi, 'ㅜ');
    value = value.replace(/i/gi, 'ㅣ');
    value = value.replace(/g/gi, 'ㄱ');
    value = value.replace(/k/gi, 'ㄲ');
    value = value.replace(/n/gi, 'ㄴ');
    value = value.replace(/d/gi, 'ㄷ');
    value = value.replace(/t/gi, 'ㄸ');
    value = value.replace(/r/gi, 'ㄹ');
    value = value.replace(/m/gi, 'ㅁ');
    value = value.replace(/b/gi, 'ㅂ');
    value = value.replace(/p/gi, 'ㅃ');
    value = value.replace(/z/gi, 'ㅅ');
    value = value.replace(/s/gi, 'ㅆ');
    value = value.replace(/y/gi, 'ㅇ');
    value = value.replace(/j/gi, 'ㅈ');
    value = value.replace(/c/gi, 'ㅉ');
    value = value.replace(/w/gi, 'ㅎ');
    value = value.replace(/[fvlhqx]/gi, '');
    value = value.replace(/ /gi, '　');
    value = value.replace(/,/gi, '、');
    value = value.replace(/\./gi, '。');
    value = value.replace(/\//gi, '／');
    value = value.replace(/</gi, '；');
    value = value.replace(/>/gi, '：');
    value = value.replace(/\?/gi, '？');
    value = value.replace(/;/gi, '﹁');
    value = value.replace(/'/gi, '﹂');
    value = value.replace(/:/gi, '﹃');
    value = value.replace(/"/gi, '﹄');
    value = value.replace(/\[/gi, '【');
    value = value.replace(/\]/gi, '】');
    value = value.replace(/\{/gi, '〔');
    value = value.replace(/\}/gi, '〕');
    value = value.replace(/\\/gi, '');
    value = value.replace(/\|/gi, '');
    value = value.replace(/-/gi, '—');    
    value = value.replace(/=/gi, '〜');    
    value = value.replace(/_/gi, '＿');    
    value = value.replace(/\+/gi, '﹏');    
    value = value.replace(/!/gi, '！');
    value = value.replace(/\*/gi, '＊');
    value = value.replace(/\(/gi, '（');
    value = value.replace(/\)/gi, '）');
    value = value.replace(/[0-9]/gi, '');
    value = value.replace(/[@#$%^&]/gi, '');
    value = value.replace(/~/gi, '⋯');    
    value = value.replace(/`/gi, '・');
    value = value.replace(/ㄱㄱ/gi, 'ㄲ');
    value = value.replace(/ㄲㅏ/gi, '까');
    value = value.replace(/ㄲㅓ/gi, '꺼');
    value = value.replace(/ㄲㅗ/gi, '꼬');
    value = value.replace(/ㄲㅜ/gi, '꾸');
    value = value.replace(/ㄱㅏ/gi, '가');
    value = value.replace(/ㄱㅓ/gi, '거');
    value = value.replace(/ㄱㅗ/gi, '고');
    value = value.replace(/ㄱㅜ/gi, '구');
    value = value.replace(/ㄴㅏ/gi, '나');
    value = value.replace(/ㄴㅓ/gi, '너');
    value = value.replace(/ㄴㅗ/gi, '노');
    value = value.replace(/ㄴㅜ/gi, '누');
    value = value.replace(/ㄴㅣ/gi, '니');
    value = value.replace(/ㄷㄷ/gi, 'ㄸ');
    value = value.replace(/ㄸㅏ/gi, '따');
    value = value.replace(/ㄸㅓ/gi, '떠');
    value = value.replace(/ㄸㅗ/gi, '또');
    value = value.replace(/ㄸㅜ/gi, '뚜');
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
    value = value.replace(/ㅂㅂ/gi, 'ㅃ');
    value = value.replace(/ㅃㅏ/gi, '빠');
    value = value.replace(/ㅃㅓ/gi, '뻐');
    value = value.replace(/ㅃㅗ/gi, '뽀');
    value = value.replace(/ㅃㅜ/gi, '뿌');
    value = value.replace(/ㅃㅣ/gi, '삐');
    value = value.replace(/ㅂㅏ/gi, '바');
    value = value.replace(/ㅂㅓ/gi, '버');
    value = value.replace(/ㅂㅗ/gi, '보');
    value = value.replace(/ㅂㅜ/gi, '부');
    value = value.replace(/ㅂㅣ/gi, '비');
    value = value.replace(/ㅅㅅ/gi, 'ㅆ');
    value = value.replace(/ㅆㅏ/gi, '싸');
    value = value.replace(/ㅆㅓ/gi, '써');
    value = value.replace(/ㅆㅗ/gi, '쏘');
    value = value.replace(/ㅆㅜ/gi, '쑤');
    value = value.replace(/ㅆㅣ/gi, '씨');
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
    value = value.replace(/ㅈㅈ/gi, 'ㅉ');
    value = value.replace(/ㅉㅏ/gi, '짜');
    value = value.replace(/ㅉㅓ/gi, '쩌');
    value = value.replace(/ㅉㅗ/gi, '쪼');
    value = value.replace(/ㅉㅜ/gi, '쭈');
    value = value.replace(/ㅉㅣ/gi, '찌');
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
