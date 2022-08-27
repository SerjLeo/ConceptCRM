import React from 'react';
import styles from './FileList.module.scss'

type FileListProps = {
  files: File[]
}

const FileList: React.FC<FileListProps> = ({files}) => {

  if (!files || !files.length) {
    return null
  }

  return (
    <div className={styles.fileList}>
      {files.map(file => <div className={styles.fileList__item}>
        {file.name}
      </div>)}
    </div>
  );
};

export default FileList;
