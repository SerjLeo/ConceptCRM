import React, {useEffect} from 'react';
import useActions from '../../hooks/useActions';
import useTypedSelector from '../../hooks/useTypedSelector';

const Documents = () => {
  const {documents} = useTypedSelector(state => state.documents)
  const {getDocuments} = useActions()

  useEffect(() => {
    getDocuments()
  }, [])

  return (
    <div>
      {documents.map(document => <div>{document.name}</div>)}
    </div>
  );
};

export default Documents;
