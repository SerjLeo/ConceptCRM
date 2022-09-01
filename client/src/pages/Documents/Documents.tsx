import React, {useEffect} from 'react';
import useActions from '../../hooks/useActions';
import useTypedSelector from '../../hooks/useTypedSelector';
import AddDocumentForm from './components/AddDocumentForm';

const Documents = () => {
  const {documents} = useTypedSelector(state => state.documents)
  const {getDocuments} = useActions()

  useEffect(() => {
    getDocuments()
  }, [])

  return (
    <div>
      <div className="pageTitle">Документы</div>
      <AddDocumentForm/>
      {documents.map(document => <div>{document.name}</div>)}
    </div>
  );
};

export default Documents;
