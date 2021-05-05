import React, { useState } from 'react';
import styled from 'styled-components';


// Style
const Setting = styled.div`
  margin: 30px 0;
  dt {
    font-weight: bold;
    .css {
      font-weight: normal;
    }
  }
  dd {
    margin: 0 0 1em;
  }
  label {
    margin: 0 1em 0 0;
    display: inline-block;
    :hover {
      cursor: pointer;
    }
  }
  .widthValue {
    width: 4em;
  }
`;

const Example = styled.div`
  background: #eee;
  display: inline-block;
  border-radius: 10px;
  font-size: 14px;
  section {
    margin: 30px;
    line-height: 1.75em;
    h2 {
      color: #000;
      line-height: 1.25em;
      margin: 0 0 1em;
    }
    p {
      margin: 0 0 10px;
    }
  }
`;


// Component
function Inner() {
  const [lineLength, setLineLength] = useState(35);
  const [lineHeight, setLineHeight] = useState(1.75);
  const [jumpRate, setJumpRate] = useState(2);


  const useChangeValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    let changeValue: number = Number(e.target.value);
    return changeValue;
  };

  const ChangeLineLength = (e: React.ChangeEvent<HTMLInputElement>) => {
    const changeValue = useChangeValue(e);
    setLineLength(changeValue);
  };

  const ChangeLineHeight = (e: React.ChangeEvent<HTMLInputElement>) => {
    const changeValue = useChangeValue(e);
    setLineHeight(changeValue);
  };

  const ChangeJumpRate = (e: React.ChangeEvent<HTMLInputElement>) => {
    const changeValue = useChangeValue(e);
    setJumpRate(changeValue);
  };


  const pStyle = {
    lineHeight: lineHeight + 'em'
  };

  const sectionStyle = {
    maxWidth: lineLength + 'em'
  };

  const h2Style = {
    fontSize: jumpRate + 'em'
  };


  return (
    <div className="inner">
      <Setting>
        <dl>
          <dt>
            向き
          </dt>
          <dd>
            <label><input type="radio" name="direction" value="縦向き" defaultChecked />縦向き</label>
            <label><input type="radio" name="direction" value="横向き" />横向き</label>
          </dd>
          <dt>
            サイズ
          </dt>
          <dd>
            <label><input type="radio" name="size" value="相対値" defaultChecked />相対値(%)</label>
            <label><input type="radio" name="size" value="絶対値" />絶対値(px)</label>
            <div>幅：<input type="number" className="widthValue" defaultValue="100" min="1"　max="9999"　disabled /><span className="unit">%</span>、
            高さ：<span className="heightValue">100</span><span className="unit">%</span></div>
          </dd>
          <dt>
          主なアスペクト比
          </dt>
          <dd>
            <label><input type="radio" name="aspect" value="スクエア(1:1)" defaultChecked />スクエア(1:1)</label>
            <label><input type="radio" name="aspect" value="白銀比(1.414:1)" />白銀比(1.414:1)</label>
            <label><input type="radio" name="aspect" value="黄金比(1.618:1)" />黄金比(1.618:1)</label>
            <label><input type="radio" name="aspect" value="デジカメ4:3(1.333:1)" />デジカメ4:3(1.333:1)</label>
            <label><input type="radio" name="aspect" value="デジカメ3:2(1.5:1)" />デジカメ3:2(1.5:1)</label>
            <label><input type="radio" name="aspect" value="デジカメ16:9(1.777:1)" />デジカメ16:9(1.777:1)</label>
          </dd>
        </dl>
      </Setting>
      <Example>
        <section>
          <h2>スクエア(1:1)</h2>
          <p>CSS {'{'} width: 100%; height: 100%; {'}'}</p>
          <figure><img src="/kaidan.jpg"  style={sectionStyle}/></figure>
        </section>
      </Example>
    </div>
  );
}

export default Inner;
