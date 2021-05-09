import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Data from '../data/data.json';


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
  input[type='range'] {
    width: 100%;
    max-width: 600px;
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
    figure {
      overflow: scroll;
    }
    img {
      object-fit: cover;
    }
  }
`;


// Component
function Inner() {
  const data = Data.inner;
  const [step, setStep] = useState(data.step);
  const [imageSize, setImageSize] = useState(data.size);
  const [maxSize, setMaxSize] = useState(data.max);

  useEffect(() => {
    const windowWidth = document.body.clientWidth;
    if (900 > windowWidth) {
      setMaxSize(windowWidth - 120);
      setImageSize(windowWidth - 120);
    }
    console.log('windowWidth->' + windowWidth);
  }, []);

  const useChangeValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    let changeValue: number = Number(e.target.value);
    return changeValue;
  };

  const changeStep = (e: React.ChangeEvent<HTMLInputElement>) => {
    let changeValue = useChangeValue(e);
    setStep(changeValue);
  };

  const ChangeImageSize = (e: React.ChangeEvent<HTMLInputElement>) => {
    let changeValue = useChangeValue(e);
    setImageSize(changeValue);
  };

  const imgStyle = {
    width: imageSize + 'px',
    height: imageSize + 'px'
  }


  return (
    <div className="inner">
      <Setting>
        <dl>
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
          <dt>
            向き
          </dt>
          <dd>
            <label><input type="radio" name="direction" value="横向き" defaultChecked />横向き</label>
            <label><input type="radio" name="direction" value="縦向き" />縦向き</label>
          </dd>
          <dt>
            ステップ
          </dt>
          <dd>
            <label><input type="radio" name="step" value="1" onChange={changeStep} />1px</label>
            <label><input type="radio" name="step" value="5" onChange={changeStep} />5px</label>
            <label><input type="radio" name="step" value="10" defaultChecked onChange={changeStep} />10px</label>
          </dd>
          <dt>
            サイズ
          </dt>
          <dd>
            <input type="range" className="widthValue" min="10"　max={maxSize} step={step} defaultValue={imageSize} onChange={ChangeImageSize} />
            <p>幅：{imageSize}px、高さ：<span className="heightValue">{imageSize}</span>px</p>
          </dd>
        </dl>
      </Setting>
      <Example>
        <section>
          <h2>スクエア(1:1)</h2>
          <p>img {'{'} width: {imageSize}px; height: {imageSize}px; object-fit: cover; {'}'}</p>
          <figure><img src="/kaidan.jpg"  style={imgStyle}/></figure>
        </section>
      </Example>
    </div>
  );
}

export default Inner;
