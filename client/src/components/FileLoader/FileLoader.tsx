import React, {ChangeEvent, useState} from 'react';
import styles from './FileLoader.module.scss'
import AttachFileIcon from '@mui/icons-material/AttachFile';
import FileList from '../FileList/FileList';

type FileLoaderProps = {
  hint?: string
  multiple?: boolean
}

const DEFAULT_HINT = 'Нажмите, чтобы загрузить файл'

const FileLoader: React.FC<FileLoaderProps> = ({
  multiple = true,
  hint = DEFAULT_HINT
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
          <div>{hint}</div>
        </label>
        <input className={styles.fileInput} id="files" type="file" onChange={uploadFile} multiple={multiple}/>
      </div>
      <FileList files={files}/>
    </div>
  );
};

export default FileLoader;
