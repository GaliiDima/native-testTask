import {Text} from 'react-native';

interface NoteProps {
  note: string;
}

const Note: React.FC<NoteProps> = ({note}) => {
  return (
    <Text className="text-xs text-black dark:text-white">Note: {note}</Text>
  );
};

export default Note;
