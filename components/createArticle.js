import { useAuth } from '../lib/auth';

import {createArticle} from '../lib/db'

const AddArticleModal = ({ children })=> {
  const auth = useAuth();
  const onCreateArticle = (values) => {
    createArticle({
      authorId: auth.user.uid,
      createAt: new Date().toISOString(),
      ...values
    })
  }
}

export default AddArticleModal;