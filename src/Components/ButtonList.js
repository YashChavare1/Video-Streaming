import Button from "./Button";

const ButtonList = () => {
  const list = ["Flex", "All", "Gaming", "Wealth", "Prices", "News", "Songs", "Live", "Soccer", "Cricket", "Cooking", "Valentines"];

  return (
    <div className="flex">
      {
        list.map(item => <Button key={item} name={item} />)
      }
    </div>
  )
}

export default ButtonList;