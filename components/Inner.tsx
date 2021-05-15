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
  const [aspectName, setAspectName] = useState(data.aspect.square.name);
  const [aspectRatio, setAspectRatio] = useState(data.aspect.square.ratio);
  const [direction, setDirection] = useState(data.direction.horizontal);
  const [step, setStep] = useState(data.step);
  const [width, setWidth] = useState(data.size);
  const [height, setHeight] = useState(data.size);
  const [maxSize, setMaxSize] = useState(data.max);


  useEffect(() => {
    const windowWidth = document.body.clientWidth;
    if (900 > windowWidth) {
      const resultSize = windowWidth - 120;
      setMaxSize(resultSize);
      setWidth(resultSize);
      setHeight(resultSize);
    }
  }, []);


  const useGetNumber = (e: React.ChangeEvent<HTMLInputElement>) => {
    const getValue: number = Number(e.target.value);
    return getValue;
  };


  const useGetHeight = (width: number, ratio: number, direction: string) => {
    if (direction === '横') {
      return Math.floor(width / ratio);
    } else if (direction === '縦') {
      return Math.floor(width * ratio);
    }
  };

  const changeDirection = (e: React.ChangeEvent<HTMLInputElement>) => {
    const getValue = e.target.value;
    const changeDirection = data.direction[getValue];
    const changeHeight = useGetHeight(width, aspectRatio, changeDirection);
    setDirection(changeDirection);
    setHeight(changeHeight);
  };


  const changeAspect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const getValue = e.target.value;
    const changeName = data.aspect[getValue].name;
    const changeRatio = data.aspect[getValue].ratio;
    const changeHeight = useGetHeight(width, changeRatio, direction);
    setAspectRatio(changeRatio);
    setAspectName(changeName);
    setHeight(changeHeight);
  };


  const changeStep = (e: React.ChangeEvent<HTMLInputElement>) => {
    const getValue = useGetNumber(e);
    setStep(getValue);
  };


  const ChangeImageSize = (e: React.ChangeEvent<HTMLInputElement>) => {
    const getValue = useGetNumber(e);
    const changeHeight = useGetHeight(getValue, aspectRatio, direction);
    setWidth(getValue);
    setHeight(changeHeight);
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
            <label><input type="radio" name="aspect" value="square" onChange={changeAspect} defaultChecked />スクエア(1:1)</label>
            <label><input type="radio" name="aspect" value="silverRatio" onChange={changeAspect} />白銀比(1.414:1)</label>
            <label><input type="radio" name="aspect" value="goldenRatio" onChange={changeAspect} />黄金比(1.618:1)</label>
            <label><input type="radio" name="aspect" value="camera4_3" onChange={changeAspect} />デジカメ4:3(1.333:1)</label>
            <label><input type="radio" name="aspect" value="camera3_2" onChange={changeAspect} />デジカメ3:2(1.5:1)</label>
            <label><input type="radio" name="aspect" value="camera16_9" onChange={changeAspect} />デジカメ16:9(1.777:1)</label>
          </dd>
          <dt>
            画像の向き
          </dt>
          <dd>
            <label><input type="radio" name="direction" value="horizontal" onChange={changeDirection} defaultChecked />横向き</label>
            <label><input type="radio" name="direction" value="vertical" onChange={changeDirection} />縦向き</label>
          </dd>
          <dt>
            画像サイズ
          </dt>
          <dd>
            <input type="range" className="widthValue" min="10"　max={maxSize} step={step} defaultValue={width} onChange={ChangeImageSize} />
            <p>幅：{width}px、高さ：{height}px</p>
          </dd>
          <dt>
            サイズ(幅)の刻み
          </dt>
          <dd>
            <label><input type="radio" name="step" value="1" onChange={changeStep} />1px</label>
            <label><input type="radio" name="step" value="5" onChange={changeStep} />5px</label>
            <label><input type="radio" name="step" value="10" onChange={changeStep} defaultChecked />10px</label>
          </dd>
        </dl>
      </Setting>
      <Example>
        <section>
          <h2>{aspectName + "(1:" + aspectRatio + " " + direction + "向き)"}</h2>
          <p>img {'{'} width: {width}px; height: {height}px; object-fit: cover; {'}'}</p>
          <figure><img src="/kaidan.jpg"  style={imgStyle}/></figure>
        </section>
      </Example>
    </div>
  );
}

export default Inner;
