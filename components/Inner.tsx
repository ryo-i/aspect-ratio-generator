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
  const [aspect, setAspect] = useState(data.square[1]);
  const [aspectName, setAspectName] = useState(data.aspectName);
  const [direction, setDirection] = useState(data.direction);
  const [step, setStep] = useState(data.step);
  const [width, setWidth] = useState(data.size);
  const [height, setHeight] = useState(data.size);
  const [maxSize, setMaxSize] = useState(data.max);


  useEffect(() => {
    const windowWidth = document.body.clientWidth;
    console.log('windowWidth->' + windowWidth);
    if (900 > windowWidth) {
      const resultSize = windowWidth - 120;
      setMaxSize(resultSize);
      setWidth(resultSize);
      setHeight(resultSize);
    }
  }, []);


  const useChangeValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    let changeValue: number = Number(e.target.value);
    return changeValue;
  };


  const changeDirection = (e: React.ChangeEvent<HTMLInputElement>) => {
    let changeValue = useChangeValue(e);
    console.log(changeValue);
    setDirection(changeValue);
    setWidth(width);
    setHeight(Math.floor( width * aspect));
  };


  const changeAspect = (e: React.ChangeEvent<HTMLInputElement>) => {
    let changeValue = e.target.value;
    let changeName = e.target.dataset.label;
    let getValue = data[changeValue][direction];
    console.log(getValue);
    setAspect(getValue);
    setAspectName(changeName);
    setWidth(width);
    setHeight(Math.floor( width * aspect));
  };


  const changeStep = (e: React.ChangeEvent<HTMLInputElement>) => {
    let changeValue = useChangeValue(e);
    setStep(changeValue);
  };


  const ChangeImageSize = (e: React.ChangeEvent<HTMLInputElement>) => {
    let changeValue = useChangeValue(e);
    setWidth(changeValue);
    setHeight(Math.floor( width * aspect));
  };


  const imgStyle = {
    width: width + 'px',
    height: height + 'px'
  }


  return (
    <div className="inner">
      <Setting>
        <dl>
        <dt>
          主なアスペクト比
          </dt>
          <dd>
            <label><input type="radio" name="aspect" value="square" data-label="スクエア(1:1)" onChange={changeAspect} defaultChecked />スクエア(1:1)</label>
            <label><input type="radio" name="aspect" value="silverRatio" data-label="白銀比(1.414:1)" onChange={changeAspect} />白銀比(1.414:1)</label>
            <label><input type="radio" name="aspect" value="goldenRatio" data-label="黄金比(1.618:1)" onChange={changeAspect} />黄金比(1.618:1)</label>
            <label><input type="radio" name="aspect" value="camera4_3" data-label="デジカメ4:3(1.333:1)" onChange={changeAspect} />デジカメ4:3(1.333:1)</label>
            <label><input type="radio" name="aspect" value="camera3_2" data-label="デジカメ3:2(1.5:1)" onChange={changeAspect} />デジカメ3:2(1.5:1)</label>
            <label><input type="radio" name="aspect" value="camera16_9" data-label="デジカメ16:9(1.777:1)" onChange={changeAspect} />デジカメ16:9(1.777:1)</label>
          </dd>
          <dt>
            向き
          </dt>
          <dd>
            <label><input type="radio" name="direction" value="0" onChange={changeDirection} defaultChecked />横向き</label>
            <label><input type="radio" name="direction" value="1" onChange={changeDirection} />縦向き</label>
          </dd>
          <dt>
            ステップ
          </dt>
          <dd>
            <label><input type="radio" name="step" value="1" onChange={changeStep} />1px</label>
            <label><input type="radio" name="step" value="5" onChange={changeStep} />5px</label>
            <label><input type="radio" name="step" value="10" onChange={changeStep} defaultChecked />10px</label>
          </dd>
          <dt>
            サイズ
          </dt>
          <dd>
            <input type="range" className="widthValue" min="10"　max={maxSize} step={step} defaultValue={width} onChange={ChangeImageSize} />
            <p>幅：{width}px、高さ：{height}px</p>
          </dd>
        </dl>
      </Setting>
      <Example>
        <section>
          <h2>{aspectName}</h2>
          <p>img {'{'} width: {width}px; height: {height}px; object-fit: cover; {'}'}</p>
          <figure><img src="/kaidan.jpg"  style={imgStyle}/></figure>
        </section>
      </Example>
    </div>
  );
}

export default Inner;
