import { swatch, fileIcon, ai, logoShirt, stylishShirt } from '../assets';

export const EditorTabs = [
  {
    name: 'colorpicker',
    icon: swatch,
  },
  {
    name: 'filepicker',
    icon: fileIcon,
  },
  {
    name: 'aipicker',
    icon: ai,
  },
];

export const FilterTabs = [
  {
    name: 'logo',
    icon: logoShirt,
  },
  {
    name: 'texture',
    icon: stylishShirt,
  },
];

export const DecalTypes = {
  logo: {
    stateProperty: 'logoDecal',
    filterTab: 'logo',
  },
  full: {
    stateProperty: 'fullDecal',
    filterTab: 'texture',
  },
};

export const validImageTypes = [
  'image/png',
  'image/jpg',
  'image/jpeg',
  'image/svg',
  'image/gif',
  'image/tiff',
];

export const presetColors = [
  '#001F3F',
  '#BDBDBD',
  '#800020',
  '#808000',
  '#6A5ACD',
  '#008080',
  '#D8A7B1',
  '#FFDB58',
  '#228B22',
  '#D2691E',
  '#9370DB',
  '#2E8B57',
  '#FF1493',
  '#1E90FF',
  '#7CFC00',
  '#FF4500',
];
