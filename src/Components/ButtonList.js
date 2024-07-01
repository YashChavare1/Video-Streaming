import Button from "./Button";

const ButtonList = () => {
  const list = [
    'T20 Cricket',
    'Code Splitting',
    'React',
    'Javascript',
    'Redux',
    'Express.JS',
    'SQL',
    'CSS',
    'API',
    'Debouncing',
    'React',
  ];
  return (
    <div className="flex overflow-x-auto">
      {
        list.map(item => <Button key={item} text={item} />)
      }
    </div>
  )
}

export default ButtonList;