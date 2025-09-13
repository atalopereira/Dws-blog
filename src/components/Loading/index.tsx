import { LoaderCircle } from 'lucide-react';
import './styles.scss';

export function Loading() {
  return (
    <div className="container-loading">
      <LoaderCircle className='container-loading__image' />
    </div>
  )
}