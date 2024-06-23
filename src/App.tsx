import { Button } from "@/components/Button";
import { ProductNameHolder } from "./components/ProductNameHolder";
import { Input } from "./components/Input";
import { SelectDropDown } from "./components/SelectDropDown";
import { useState } from "react";

function App() {
  const [dropdown, setDropDown] = useState("");

  return (
    <section className="container max-w-[900px] p-12">
      <h1 className="text-xl">Add Products</h1>
      <Button> Add Products </Button>
      <Button variant="secondary" size="lg" className="ml-12">
        Add Products
      </Button>
      <div className="mt-2">
        <ProductNameHolder
          name="Product Name"
          showEditIcon
          onEditIconClick={() => {}}
        />
      </div>
      <div className="mt-2">
        <ProductNameHolder name="Product Name" variant="rounded" />
      </div>
      <div className="mt-2">
        <ProductNameHolder name="Product Name" />
      </div>
      <div className="mt-2">
        <ProductNameHolder name="Product Name" variant="rounded" />
      </div>
      <div className="mt-2">
        <Input />
      </div>
      <div className="mt-2">
        <Input variant="rounded" />
      </div>
      <div className="mt-2">
        <SelectDropDown
          value={dropdown}
          onValueChange={(id) => setDropDown(id)}
          optionList={[
            { id: "percentage", displayValue: "% off" },
            { id: "flat", displayValue: "Flat off" },
          ]}
        />
      </div>
      <div className="mt-2">
        <SelectDropDown
          value={dropdown}
          variants="rounded"
          onValueChange={(id) => setDropDown(id)}
          defaultValue="percentage"
          optionList={[
            { id: "percentage", displayValue: "% off" },
            { id: "flat", displayValue: "Flat off" },
          ]}
        />
      </div>
    </section>
  );
}

export default App;
