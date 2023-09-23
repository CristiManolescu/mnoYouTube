import Button from "./Button";

const list = [
  "All",
  "Gaming",
  "Live",
  "Songs",
  "News",
  "Cooking",
  "Footbal",
  "Computers",
  "Computer Programming",
  "Comedy",
  "Recently Uploaded",
  "Recently Added",
  "New To You",
];

const ButtonList = () => {
  return (
    <div className="flex">
      {list.map((butonName) => (
        <Button name={butonName} />
      ))}
    </div>
  );
};

export default ButtonList;
