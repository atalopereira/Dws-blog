import './styles.scss'

interface TagProps {
  tagTitle: string;
}

export function Tag({ tagTitle }: TagProps) {
  return (
    <div className="container-tag">
      {tagTitle}
    </div>
  )
}