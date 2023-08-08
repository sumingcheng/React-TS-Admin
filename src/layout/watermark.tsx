import React, {useMemo} from 'react'

// 基本样式移出了组件
const basicWatermarkStyle: React.CSSProperties = {
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  zIndex: 9999,
  pointerEvents: 'none',
  backgroundRepeat: 'repeat',
  display: 'none',
}

interface WatermarkProps {
  text?: string;
  width?: number;
  height?: number;
  fontSize?: number;
  textX?: number;
  textY?: number;
  visible?: boolean;  // 控制显示/隐藏的新属性
}

const Watermark: React.FC<WatermarkProps> = (
    {
      text = '水印内容',
      width = 300,
      height = 200,
      fontSize = 14,
      textX = 0,
      textY = 150,
      visible = true,
    }) => {
  const backgroundImage = useMemo(() => {
    return `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='${width}' height='${height}'%3E%3Ctext x='${textX}' y='${textY}' font-size='${fontSize}px' transform='rotate(-40)' fill='%23aaa'%3E${text}%3C/text%3E%3C/svg%3E")`
  }, [text, width, height, fontSize, textX, textY])

  const watermarkStyle = {
    ...basicWatermarkStyle,
    backgroundImage,
    display: visible ? 'block' : 'none',
  }

  return <div style={watermarkStyle}></div>
}

export default Watermark
