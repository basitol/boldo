import { ValueCard } from "../reusables";
import { valueData } from "../../assets/data";

const Value = () => {
  return (
    <div className="value">
      {valueData.map((value, index) => {
        return (
          <ValueCard
            key={index}
            image={value.image}
            title={value.title}
            reverse={value.reverse}
            list={value.list}
            list2={value.list2}
          />
        );
      })}

      <ValueCard />
    </div>
  );
};

export default Value;
