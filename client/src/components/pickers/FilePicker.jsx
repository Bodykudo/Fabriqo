import { useEffect, useRef, useState } from 'react';
import { useSnapshot } from 'valtio';

import state from '../../store';
import { adjustColor, hexToRgba } from '../../utils/colorUtils';
import { validImageTypes } from '../../config/constants';
import Button from '../Button';

function FilePicker({ file, setFile, readFile }) {
  const dropArea = useRef();
  const snap = useSnapshot(state);
  const [isDragging, setIsDragging] = useState(false);

  useEffect(() => {
    const dropAreaElement = dropArea.current;

    if (dropAreaElement) {
      dropAreaElement.addEventListener('dragover', handleDragOver);
      dropAreaElement.addEventListener('dragleave', handleDragLeave);
      dropAreaElement.addEventListener('drop', handleDrop);
    }

    return () => {
      if (dropAreaElement) {
        dropAreaElement.removeEventListener('dragover', handleDragOver);
        dropAreaElement.removeEventListener('dragleave', handleDragLeave);
        dropAreaElement.removeEventListener('drop', handleDrop);
      }
    };
  }, []);

  const handleDragOver = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(true);
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
    const { files } = e.dataTransfer;
    if (files?.length && validImageTypes.includes(files[0].type)) {
      setFile(files[0]);
    }
  };

  return (
    <div className="glassmorphism absolute left-full ml-3 flex h-[16rem] w-[19rem] flex-col rounded-md p-3">
      <div className="flex flex-1 flex-col">
        <label
          htmlFor="file-upload"
          className="flex flex-1 cursor-pointer flex-col items-center justify-center border-[3px] border-dotted transition-all duration-200"
          ref={dropArea}
          style={{
            borderColor: adjustColor(snap.color),
            backgroundColor: isDragging
              ? hexToRgba(snap.color, 0.1)
              : 'transparent',
          }}
        >
          Upload File or Drag & Drop
          <input
            id="file-upload"
            className="h-0 w-0"
            type="file"
            accept=".png, .jpg, .jpeg, .svg .gif .tiff"
            onChange={(e) => setFile(e.target.files[0])}
          />
        </label>

        <p className="mt-8 truncate text-xs text-gray-500">
          {file === '' ? 'No file selected' : file.name}
        </p>

        <div className="mt-6 flex flex-wrap gap-3">
          <Button
            type="outline"
            title="Logo"
            handleClick={() => readFile('logo')}
            styles="text-xs"
          />

          <Button
            type="filled"
            title="Full"
            handleClick={() => readFile('full')}
            styles="text-xs"
          />
        </div>
      </div>
    </div>
  );
}

export default FilePicker;
