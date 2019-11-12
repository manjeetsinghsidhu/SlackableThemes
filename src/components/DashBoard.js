import React, { useState } from 'react';
import '../styles/dashboard.scss';
import PresetThemes from './PresetThemes';
import ImageUpload from './ImageUpload';
import ColorPicker from './ColorPicker';
import ColorInput from './ColorInput';
import presetThemes from '../data/preset-themes'

const DashBoard = props => {
  const theme = props.theme;
  const themes = JSON.parse(JSON.stringify(presetThemes)); 
  const [ columnBg, menuBgHover, activeItem, activeItemText, hoverItem, textColor, activePresence, mentionBadge ] = theme;
  const [ color, setColor ] = useState('#00ffff');

  const [presetThemeColors, setPresetThemeColors] = useState(themes[0].themeColor);
  let renderThemes = (theme) => {
    return theme.map(t => (
        <PresetThemes 
          key={t.id}
          theme={t.theme}
          image={t.image}
          themeColors={t.themeColor}
          setPresetThemeColors={setPresetThemeColors}
        />
      )
    )
  }

  const onColorChange = (newColor, position, e) =>  {
    setColor(newColor);
    var newTheme = theme;
    newTheme[position] = newColor;
    props.setTheme(newTheme);
  }

  return (
    <div className='dashboard'>
      {renderThemes(themes)}
      <ImageUpload />
      <div className="colorpickers-container">
        <ColorPicker color={columnBg} onChange={(newColor, position, e) => onColorChange(newColor, 0, e)} />
        <ColorPicker color={menuBgHover} onChange={(newColor, position, e) => onColorChange(newColor, 1, e)}/>
        <ColorPicker color={activeItem} onChange={(newColor, position, e) => onColorChange(newColor, 2, e)}/>
        <ColorPicker color={activeItemText} onChange={(newColor, position, e) => onColorChange(newColor, 3, e)}/>
        <ColorPicker color={hoverItem} onChange={(newColor, position, e) => onColorChange(newColor, 4, e)}/>
        <ColorPicker color={textColor} onChange={(newColor, position, e) => onColorChange(newColor, 5, e)}/>
        <ColorPicker color={activePresence} onChange={(newColor, position, e) => onColorChange(newColor, 6, e)}/>
        <ColorPicker color={mentionBadge} onChange={(newColor, position, e) => onColorChange(newColor, 7, e)}/>
      </div>
      <ColorInput />
    </div>
  );
}

export default DashBoard;