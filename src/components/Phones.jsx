import { Link, useLoaderData } from "react-router-dom";


const Phones = () => {
  const phones = useLoaderData();

  return (
    <div>
      <h2>All Phones: {phones.length}</h2>
      <div>
        {
          phones.map(phone => <li key={phone.id}>
            <Link to={`/phones/${phone.id}`}>{phone.name}</Link>
          </li>)
        }
      </div>
    </div>
  );
};

export default Phones;