/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const PostCategoryDropdown = ({ setValue }: { setValue: any }) => {
  console.log(setValue);
  const travelCategories = [
    "Adventure",
    "Business Travel",
    "Exploration",
    "Leisure",
    "Cultural",
    "Eco-Tourism",
    "Religious Pilgrimage",
    "Luxury Travel",
    "Backpacking",
    "Wellness Travel",
    "Road Trips",
    "Family Vacation",
    "Honeymoon",
    "Wildlife Safari",
    "Culinary Travel",
    "Cruise Travel",
    "Historical Tourism",
    "Volunteer Travel",
    "Sports Tourism",
    "Solo Travel",
  ];
  return (
    <Select onValueChange={(value) => setValue("category", value)}>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Select Category" />
      </SelectTrigger>
      <SelectContent>
        {travelCategories.map((category) => (
          <SelectItem key={category} value={category}>
            {category}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};

export default PostCategoryDropdown;
