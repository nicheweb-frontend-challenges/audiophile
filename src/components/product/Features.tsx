import Product from "../../models/product";

type FeaturesProps = {
  features: Product["features"];
};

const Features = ({ features }: FeaturesProps) => {
  return (
    <div>
      <h3>Features</h3>
      <p>{features}</p>
    </div>
  );
};

export default Features;
