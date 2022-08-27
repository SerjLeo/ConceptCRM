import React, {ChangeEvent, useState} from 'react';
import styles from './FileLoader.module.scss'
import AttachFileIcon from '@mui/icons-material/AttachFile';
import FileList from '../FileList/FileList';

type FileLoaderProps = {
  multiple?: boolean
}

const FileLoader: React.FC<FileLoaderProps> = ({
  multiple = true
}) => {
  const [files, setFiles] = useState<File[]>([])

  const uploadFile = (e: ChangeEvent<HTMLInputElement>) => {
    if(!e.target.files || !e.target.files.length) {
      setFiles([])
      return
    }

    setFiles([...e.target.files])
  }

  return (
    <div>
      <div>
        <label className={styles.loaderWrap} htmlFor="files">
          <AttachFileIcon/>
          <div>Загрузите файл</div>
        </label>
        <input className={styles.fileInput} id="files" type="file" onChange={uploadFile} multiple={multiple}/>
      </div>
      <FileList files={files}/>
    </div>
  );
};

export default FileLoader;
