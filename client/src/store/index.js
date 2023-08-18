import { proxy } from 'valtio';
import { models } from '../config/models';

const state = proxy({
  intro: true,
  color: '#304F72',
  isLogoTexture: true,
  isFullTexture: false,
  currentModel: 0,
  model: models[0],
  logoDecal: './icon.png',
  fullDecal: './texture.jpg',
});

export default state;
