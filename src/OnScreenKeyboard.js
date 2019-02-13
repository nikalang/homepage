import React, {Component} from 'react';

import './OnScreenKeyboard.css';

export default class OnScreenKeyboard extends Component {
  constructor(props) {
  	super(props);
  	this.state = {
  	  symbols: false,
  	};
  }

  render() {
  	if (!this.state.symbols) {
  	  return (

  <div className="OnScreenKeyboard">
    <table>
      <tr>
        <td>가</td>
        <td>까</td>
        <td>나</td>
        <td>다</td>
        <td>따</td>
        <td>라</td>
        <td>마</td>
        <td>바</td>
        <td>빠</td>
        <td>사</td>
        <td>싸</td>
        <td>아</td>
        <td>자</td>
        <td>짜</td>
        <td>하</td>
      </tr>
      <tr>
        <td>거</td>
        <td>꺼</td>
        <td>너</td>
        <td>더</td>
        <td>떠</td>
        <td>러</td>
        <td>머</td>
        <td>버</td>
        <td>뻐</td>
        <td>서</td>
        <td>써</td>
        <td>어</td>
        <td>저</td>
        <td>쩌</td>
        <td class="punctuation">・</td>
      </tr>
      <tr>
        <td>고</td>
        <td>꼬</td>
        <td>노</td>
        <td>도</td>
        <td>또</td>
        <td>로</td>
        <td>모</td>
        <td>보</td>
        <td>뽀</td>
        <td>소</td>
        <td>쏘</td>
        <td>오</td>
        <td>조</td>
        <td>쪼</td>
        <td>호</td>
      </tr>
      <tr>
        <td>구</td>
        <td>꾸</td>
        <td>누</td>
        <td>두</td>
        <td>뚜</td>
        <td>루</td>
        <td>무</td>
        <td>부</td>
        <td>뿌</td>
        <td>수</td>
        <td>쑤</td>
        <td>우</td>
        <td>주</td>
        <td>쭈</td>
        <td>후</td>
      </tr>
      <tr>
        <td class="punctuation" />
        <td class="punctuation">、</td>
        <td>니</td>
        <td class="punctuation">。</td>
        <td class="punctuation">？</td>
        <td class="punctuation">！</td>
        <td>미</td>
        <td>비</td>
        <td>삐</td>
        <td>시</td>
        <td>씨</td>
        <td>이</td>
        <td>지</td>
        <td>찌</td>
        <td class="symbols" onClick={(e) => {this.setState({symbols: true,})}}>、</td>
      </tr>
    </table>
  </div>

  	);
  } else {
  	return (
  	  <div className="OnScreenKeyboard">
    <table className="punctuation">
    <tr>
        <td />
        <td>、</td>
        <td>。</td>
        <td>？</td>
        <td>！</td>
        <td>・</td>
        <td>‥</td>
        <td>…</td>
        <td>；</td>
        <td>：</td>
        <td>〜</td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
      </tr>      
      <tr>
        <td>（</td>
        <td>）</td>
        <td>［</td>
        <td>］</td>
        <td>｛</td>
        <td>｝</td>
        <td>〔</td>
        <td>〕</td>
        <td>〘</td>
        <td>〙</td>
        <td>【</td>
        <td>】</td>
        <td>〖</td>
        <td>〗</td>
        <td></td>
      </tr>
      <tr>
        <td>﹁</td>
        <td>﹂</td>
        <td>﹃</td>
        <td>﹄</td>
        <td>〈</td>
        <td>〉</td>
        <td>《</td>
        <td>》</td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
      </tr>       
      <tr>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
      </tr>     
      <tr>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td class="symbols" onClick={(e) => {this.setState({symbols: false,})}}>가</td>
      </tr>     
    </table>
  </div>
  	  );
    }
  }
}
